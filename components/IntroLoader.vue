<template>
  <div
    v-if="!isGone"
    class="intro-loader"
    :class="{ 'is-revealing': isRevealing, 'is-content-exit': isContentExit }"
    aria-live="polite"
    :aria-busy="!isRevealing"
  >
    <svg ref="mark" class="intro-loader__mark" width="35" height="42" viewBox="0 0 35 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10.4213 14.079C4.66578 17.8913 3.09046 25.6474 6.90273 31.4029C10.4233 36.7181 17.3068 38.467 22.8726 35.7013L21.4656 30.753L25.4738 33.9783C30.1911 29.9324 31.2656 22.9124 27.7452 17.5975C23.933 11.842 16.1768 10.2667 10.4213 14.079Z" fill="#A5C796"/>
      <rect width="25" height="25" transform="matrix(-1 0 0 1 29.824 0)" fill="#FFB3B9"/>
    </svg>
    <!-- The back face of the mark: a stand-in for the hero image that flips in
         where the mark was, then grows onto the real image's exact box. -->
    <img ref="flip" class="intro-loader__flip" alt="" aria-hidden="true">
  </div>
</template>

<script setup>
const props = defineProps({
  // 'flip' turns the mark into the hero image and plays the page's intro.
  // Any other value is a reload below the hero: no mark, the overlay just
  // fades so the parked page content comes through.
  exit: { type: String, default: 'flip' }
});
const emit = defineEmits(['prepare', 'leave', 'done']);

// Slow or stuck assets can't hold the page back past this.
const MAX_WAIT = 6000;
// The mark turns away edge-on, the image turns in from edge-on, and the image
// grows into place — the last two as one continuous move.
const FLIP_OUT_DURATION = 450;
const FLIP_IN_DURATION = 520;
// Keep in step with the hero image's hold in index.css (html.intro .hero-image).
const GROW_DURATION = 900;
// How far the image has already started growing by the time it faces front, so
// the turn flows into the growth instead of stopping between them.
const GROW_HEAD_START = 0.1;
// Matches the overlay's background-color transition (700ms + 120ms delay).
const OVERLAY_FADE_DURATION = 820;
const MARK_HIDE_STYLE_ID = 'intro-content-exit-style';

const mark = ref(null);
const flip = ref(null);
const isRevealing = ref(false);
const isGone = ref(false);
// Starts false so SSR and hydration match (no class). Set after mount once
// the page has told us this is a restore below the hero.
const isContentExit = ref(false);

let maxWaitTimer = null;
let unlockScroll = null;
let hasLeft = false;
let hasStartedIntro = false;
const running = [];

const startIntro = () => {
  if (hasStartedIntro) return;
  hasStartedIntro = true;
  emit('leave');
};

const lockScroll = () => {
  const block = (event) => event.preventDefault();
  const blockKeys = (event) => {
    if ([' ', 'PageDown', 'PageUp', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
    }
  };
  window.addEventListener('wheel', block, { passive: false, capture: true });
  window.addEventListener('touchmove', block, { passive: false, capture: true });
  window.addEventListener('keydown', blockKeys, { capture: true });
  return () => {
    window.removeEventListener('wheel', block, { capture: true });
    window.removeEventListener('touchmove', block, { capture: true });
    window.removeEventListener('keydown', blockKeys, { capture: true });
  };
};

const hideMark = () => {
  if (document.getElementById(MARK_HIDE_STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = MARK_HIDE_STYLE_ID;
  style.textContent = '.intro-loader__mark,.intro-loader__flip{visibility:hidden!important;opacity:0!important}';
  document.head.appendChild(style);
};

const clearMarkHide = () => {
  document.getElementById(MARK_HIDE_STYLE_ID)?.remove();
};

onMounted(() => {
  unlockScroll = lockScroll();

  // The page sets `exit` in its own mounted hook (after this child). Wait one
  // tick so a restore below the hero does not start the mark by mistake.
  nextTick(() => {
    isContentExit.value = props.exit !== 'flip';
    if (isContentExit.value) hideMark();

    // Hero intro waits on the hero and header. A restore below the hero does not
    // need those images — only the header, so the overlay can lift sooner.
    const imageSelector = isContentExit.value ? '.main-header img' : '.hero img, .main-header img';
    const images = Array.from(document.querySelectorAll(imageSelector));
    const tasks = images.map((img) => (
      img.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
        })
    ));
    if (document.fonts?.ready) tasks.push(document.fonts.ready.catch(() => {}));

    Promise.all(tasks).then(leave);
    maxWaitTimer = setTimeout(leave, MAX_WAIT);
  });
});

// Animations only advance when the page renders frames, and a backgrounded tab
// stops rendering — so each step also has a timer that jumps it to its end
// state rather than leaving the overlay stuck over the page.
const play = (el, keyframes, options) => {
  const animation = el.animate(keyframes, { fill: 'forwards', ...options });
  running.push(animation);
  return Promise.race([
    animation.finished,
    new Promise((resolve) => {
      setTimeout(() => {
        if (animation.playState !== 'finished') animation.finish();
        resolve();
      }, options.duration + 200);
    })
  ]);
};

const finish = () => {
  isGone.value = true;
  clearMarkHide();
  unlockScroll?.();
  unlockScroll = null;
  emit('done');
};

const leave = async () => {
  if (hasLeft) return;
  hasLeft = true;
  clearTimeout(maxWaitTimer);
  // Park the page's intro pieces at their starting points before any of the
  // page shows through.
  emit('prepare');

  if (props.exit !== 'flip') {
    isContentExit.value = true;
    await revealContent();
    return;
  }

  const heroImage = document.querySelector('.hero-image');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!heroImage || !mark.value || !flip.value || reduceMotion || !mark.value.animate) {
    isRevealing.value = true;
    startIntro();
    setTimeout(finish, GROW_DURATION);
    return;
  }

  try {
    const markBox = mark.value.getBoundingClientRect();
    const imageBox = heroImage.getBoundingClientRect();

    // The stand-in sits exactly on the real image, then is pulled back onto the
    // mark: same centre, same height. Growing it is just undoing that offset.
    // Perspective sits after the scale so the turn has real depth at full size
    // rather than flattening out on a thumbnail.
    const scale = markBox.height / imageBox.height;
    const dx = (markBox.left + markBox.width / 2) - (imageBox.left + imageBox.width / 2);
    const dy = (markBox.top + markBox.height / 2) - (imageBox.top + imageBox.height / 2);
    const at = (progress, turn) => {
      const size = scale + (1 - scale) * progress;
      const travel = 1 - progress;
      return `translate(${dx * travel}px, ${dy * travel}px) scale(${size}) perspective(1000px) rotateY(${turn}deg)`;
    };

    Object.assign(flip.value.style, {
      left: `${imageBox.left}px`,
      top: `${imageBox.top}px`,
      width: `${imageBox.width}px`,
      height: `${imageBox.height}px`,
      backgroundColor: getComputedStyle(heroImage).backgroundColor,
      transform: at(0, -90)
    });
    flip.value.src = heroImage.currentSrc || heroImage.src;

    // The white fades out slowly across the whole turn, so the page comes up
    // behind the mark rather than being uncovered in one step.
    isRevealing.value = true;

    await play(mark.value, [
      { transform: 'perspective(240px) rotateY(0deg) scale(1)' },
      { transform: 'perspective(240px) rotateY(90deg) scale(1.08)' }
    ], { duration: FLIP_OUT_DURATION, easing: 'cubic-bezier(0.45, 0, 0.8, 0.4)' });

    mark.value.style.visibility = 'hidden';
    flip.value.style.visibility = 'visible';

    // The page's own intro starts as the image finishes turning, so the titles
    // and notes slide out from under it while it grows.
    const leaveTimer = setTimeout(startIntro, FLIP_IN_DURATION);
    try {
      await play(flip.value, [
        { transform: at(0, -90), easing: 'cubic-bezier(0.2, 0.6, 0.4, 1)' },
        { transform: at(GROW_HEAD_START, 0), offset: FLIP_IN_DURATION / (FLIP_IN_DURATION + GROW_DURATION), easing: 'cubic-bezier(0.3, 0.25, 0.15, 1)' },
        { transform: at(1, 0) }
      ], { duration: FLIP_IN_DURATION + GROW_DURATION });
    } finally {
      clearTimeout(leaveTimer);
    }
  } catch {
    // Interrupted (unmounted mid-flight) — fall through and clear the overlay.
  }

  startIntro();
  finish();
};

// The page underneath is already parked where the reader left it, so the
// overlay just fades and the content is what the reader sees arriving.
const revealContent = async () => {
  hideMark();
  isRevealing.value = true;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  await new Promise((resolve) => {
    setTimeout(resolve, reduceMotion ? 200 : OVERLAY_FADE_DURATION);
  });
  finish();
};

onBeforeUnmount(() => {
  clearTimeout(maxWaitTimer);
  running.forEach((animation) => animation.cancel());
  clearMarkHide();
  unlockScroll?.();
});
</script>

<style scoped>
.intro-loader {
  position: fixed;
  inset: 0;
  z-index: 5000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background, #fff);
  transition: background-color 700ms cubic-bezier(0.4, 0, 0.2, 1) 120ms;
}

/* Once the image has taken the mark's place the overlay turns see-through, so
   the page is already there behind it while the image grows into position. */
.intro-loader.is-revealing {
  background-color: transparent;
  pointer-events: none;
}

.intro-loader.is-content-exit .intro-loader__mark,
.intro-loader.is-content-exit .intro-loader__flip {
  visibility: hidden;
  opacity: 0;
}

.intro-loader__mark {
  width: 64px;
  height: auto;
  overflow: visible;
  backface-visibility: hidden;
}

.intro-loader__flip {
  position: fixed;
  margin: 0;
  object-fit: cover;
  visibility: hidden;
  transform-origin: center;
  backface-visibility: hidden;
  will-change: transform;
}
</style>
