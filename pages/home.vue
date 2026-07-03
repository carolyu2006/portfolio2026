<template>
  <AppHeader />
  <div class="main-content">
    <div id="hero" class="hero hero-section">
      <div class="hero-title-container">
        <h1 class="hero-title">YU</h1>
        <img class="hero-title-icon" src="/assets/icons/yu.svg" alt="yu">
        <h1 class="hero-title">HF</h1>
      </div>
      <img class="hero-image" src="/assets/images/main/hero-image.webp" alt="hero">

      <div class="parallax-leaves">
        <div class="leaf leaf-1"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
        <div class="leaf leaf-4"></div>
        <div class="leaf leaf-5"></div>
        <div class="leaf leaf-6"></div>
        <img class="hero-fish-icon" src="/assets/images/main/fish.svg" alt="fish">
      </div>

      <h1 class="hero-title hero-title-carol">CAROL</h1>

      <div class="hero-side">
        <p class="hero-side-title">Hello :)</p>
        <p class="hero-side-description">
          I'm Carol, a <strong>Product Designer</strong> crafting engaging experiences that resonate with users.
        </p>
      </div>
      <div class="hero-side-right">
        <div>
          <img class="hero-side-image" src="/assets/icons/icon-tag.webp" alt="hero">
          <p>AI Product</p>
        </div>
        <div>
          <img class="hero-side-image" src="/assets/icons/icon-tag.webp" alt="hero">
          <p>Design Thinking</p>
        </div>
        <div>
          <img class="hero-side-image" src="/assets/icons/icon-tag.webp" alt="hero">
          <p>Tech & Dev</p>
        </div>
        <div>
          <img class="hero-side-image" src="/assets/icons/icon-tag.webp" alt="hero">
          <p>Gamification</p>
        </div>
      </div>
    </div>

    <section id="section1" class="section1"
      :class="{ 'is-active': isSection1Active }">
      <div class="section1-inner">
      <div class="incoming-leaves" aria-hidden="true">
        <div class="leaf leaf-1 incoming-leaf incoming-leaf-1"></div>
        <div class="leaf leaf-2 incoming-leaf incoming-leaf-2"></div>
        <div class="leaf leaf-3 incoming-leaf incoming-leaf-3"></div>
        <div class="leaf leaf-4 incoming-leaf incoming-leaf-4"></div>
        <div class="leaf leaf-5 incoming-leaf incoming-leaf-5"></div>
        <div class="leaf leaf-6 incoming-leaf incoming-leaf-6"></div>
      </div>
      <div class="incoming-statement" aria-label="Design is dead. Designers evolve.">
        <div class="incoming-dead-line">
          <h2 class="incoming-dead-title">Design is Dead</h2>
          <span class="incoming-strike" aria-hidden="true"></span>
        </div>
        <p class="incoming-evolve-title">Designers Evolve</p>
        <span class="incoming-question-mark" aria-hidden="true">?</span>
        <p class="incoming-question-text">In this age of AI, what should designers know?</p>
      </div>
      <div class="incoming-projects">
        <div class="projects-container">
          <a class="projects-item" data-category="web-apps" href="/projects/intertabs">
            <div class="projects-item-content">
              <div class="project-meta">
                <div class="project-meta-tags">
                  <span class="project-meta-tag">HOF Hack 2025 1st Place & Best UI/UX</span>
                  <span class="project-meta-tag">Case Study</span>
                  <span class="project-meta-tag">Shipped Product</span>
                </div>
              </div>
              <div>
                <h4>2025</h4>
                <h2 class="project-item-title">interTabs</h2>
                <h3>Product designer & Frontend Developer</h3>
                <p>An AI-powered Chrome Extension that manage tabs.</p>
              </div>
            </div>
            <img src="/assets/images/covers/intertabs.webp" alt="interTabs project cover">
          </a>

          <a class="projects-item" data-category="web-apps" href="/projects/wechatchannels">
            <div class="projects-item-content">
              <div class="project-meta">
                <div class="project-meta-tags">
                  <span class="project-meta-tag">AI Product</span>
                  <span class="project-meta-tag">Case Study</span>
                  <span class="project-meta-tag">Tencent Design Challenge</span>
                </div>
              </div>
              <div>
                <h4>2026</h4>
                <h2 class="project-item-title">WeChat Channels × AI</h2>
                <h3>Product Designer</h3>
                <p>A Tencent Design Challenge that led to a Successful Offer.</p>
              </div>
            </div>
            <video class="projects-item-image" src="/assets/images/covers/wechat.mov"
              poster="/assets/images/covers/wechat.webp" autoplay muted loop playsinline preload="metadata"></video>
          </a>

          <a class="projects-item" data-category="web-apps">
            <div class="projects-item-content">
              <div class="project-meta">
                <div class="project-meta-tags">
                  <span class="project-meta-tag">AI</span>
                  <span class="project-meta-tag">Branding</span>
                  <span class="project-meta-tag">Product Design</span>
                  <span class="project-meta-tag">Figma</span>
                </div>
              </div>
              <div>
                <h4>2026</h4>
                <h2 class="project-item-title">Cosma Sense</h2>
                <h3>Product Designer</h3>
                <p>A local-first, AI-powered search engine that indexes your files and lets you find information
                  semantically.</p>
              </div>
            </div>
            <img src="/assets/images/covers/cosmasense.webp" alt="Cosma Sense project cover">
          </a>

          <a class="projects-item" data-category="web-apps">
            <div class="projects-item-content">
              <div class="project-meta">
                <div class="project-meta-tags">
                  <span class="project-meta-tag">AI</span>
                  <span class="project-meta-tag">Branding</span>
                  <span class="project-meta-tag">Product Design</span>
                  <span class="project-meta-tag">Figma</span>
                </div>
              </div>
              <div>
                <h4>2026</h4>
                <h2 class="project-item-title">Cosma Sense</h2>
                <h3>Product Designer</h3>
                <p>A local-first, AI-powered search engine that indexes your files and lets you find information
                  semantically.</p>
              </div>
            </div>
            <img src="/assets/images/covers/cosmasense.webp" alt="Cosma Sense project cover">
          </a>
        </div>
      </div>
      </div>
      <div class="incoming-scroll-cue" :class="{ 'is-visible': showScrollCue }" aria-hidden="true">
        <span>scroll</span>
      </div>
    </section>
    <section id="section2" class="section2" :class="{ 'is-active': isSection2Active }"
      aria-label="Smart UI/UX for Real-World Problems">
      <h2>Smart UI/UX for Real-World Problems</h2>
      <div class="section2-projects">
        <div class="projects-container">
          <a class="projects-item" data-category="web-apps" href="/projects/paletteu">
            <div class="projects-item-content">
              <div class="project-meta">
                <div class="project-meta-tags">
                  <span class="project-meta-tag">Case Study</span>
                  <span class="project-meta-tag">Shipped Personal Project</span>
                </div>
              </div>
              <div>
                <h4>2025</h4>
                <h2 class="project-item-title">Palette U</h2>
                <h3>Product designer & Full Stack Developer</h3>
                <p>A website to record your memories and store them in your 3D memory palace.</p>
              </div>
            </div>
            <video class="projects-item-image" src="/assets/images/covers/paletteu.mp4"
              poster="/assets/images/covers/paletteu.webp" autoplay muted loop playsinline preload="metadata">
            </video>
          </a>

          <a class="projects-item" data-category="web-apps" href="/projects/mbtiidealpartner">
            <div class="projects-item-content">
              <div class="project-meta">
                <div class="project-meta-tags">
                  <span class="project-meta-tag">Mini Program</span>
                  <span class="project-meta-tag">Shipped Product</span>
                </div>
              </div>
              <div>
                <h4>2025</h4>
                <h2 class="project-item-title">MBTI Ideal Partner</h2>
                <h3>Product designer & Full Stack Developer</h3>
                <p>An interactive Wechat Mini Program that helps users find their ideal MBTI partner.</p>
              </div>
            </div>
            <video class="projects-item-image" src="/assets/images/covers/mbti.mp4"
              poster="/assets/images/covers/mbti.webp" autoplay muted loop playsinline preload="metadata">
            </video>
          </a>

          <a class="projects-item" data-category="web-apps" href="/projects/orangobranding"
            rel="noopener noreferrer">
            <div class="projects-item-content">
              <div class="project-meta">
                <div class="project-meta-tags">
                  <span class="project-meta-tag">Branding</span>
                </div>
              </div>
              <div>
                <h4>2026</h4>
                <h2 class="project-item-title">ORANGO</h2>
                <h3>Designer</h3>
                <p>Branding design to establish a visual identity for Orango -- a startup focused on web-based social games.</p>
              </div>
            </div>
            <img class="projects-item-image" src="/assets/images/covers/orango_branding.webp" alt="ORANGO project cover">
          </a>

          <a class="projects-item" data-category="web-apps" href="/projects/everstream">
            <div class="projects-item-content">
              <div class="project-meta">
                <div class="project-meta-tags">
                  <span class="project-meta-tag">Game</span>
                </div>
              </div>
              <div>
                <h4>2025</h4>
                <h2 class="project-item-title">Everstream</h2>
                <h3>Game Designer & Developer</h3>
                <p>A 2D game depicting the journey of the four seasons along a stream.</p>
                <p>Original Music & Art by me</p>
              </div>
            </div>
            <video class="projects-item-image" src="/assets/images/covers/everstream.mov"
              poster="/assets/images/covers/everstream.webp" autoplay muted loop playsinline preload="metadata">
            </video>
          </a>
        </div>
      </div>
    </section>
  </div>
  <!-- <AppFooter /> -->
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// section1 content entrance (leaves + statement) fires via this class
const isSection1Active = ref(false);
// scroll cue appears once section1 is settled, inviting the user to keep scrolling
const showScrollCue = ref(false);
// section2 plays its own entrance once it reaches the viewport threshold
const isSection2Active = ref(false);

let scrollTimeline = null;
let pageScrollTrigger = null;
let heroExitUnlockTimer = null;
let progressTween = null;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const hero = document.querySelector('#hero');
  const section1 = document.querySelector('#section1');
  const section1Inner = document.querySelector('.section1-inner');
  const section2 = document.querySelector('#section2');
  const projects = document.querySelector('.incoming-projects .projects-container');
  const section2Projects = document.querySelector('.section2-projects');
  const section2ProjectsTrack = document.querySelector('.section2-projects .projects-container');
  const section1BottomSpace = 500;
  const SECTION1_INTRO_LOCK_DURATION = 1400;
  const EXIT_ANIMATION_DURATION = 0.55;
  const SCROLL_TRIGGER_THRESHOLD = 0.01;

  // How far section1 content must move so project rows end with a 200px bottom gap.
  const getReveal = () => {
    if (!projects) return 0;
    const startOffset = window.innerHeight * 0.46;
    const overflowBelow = startOffset + projects.offsetHeight - window.innerHeight;
    return Math.max(0, overflowBelow + section1BottomSpace);
  };

  const getSection2HorizontalScroll = () => {
    if (!section2Projects || !section2ProjectsTrack) return 0;
    return Math.max(0, section2ProjectsTrack.scrollWidth - section2Projects.clientWidth);
  };

  const getPinnedScrollDistance = () => {
    return Math.round((window.innerHeight * 3) + getSection2HorizontalScroll());
  };

  // Starting positions for the pinned hero/section1 moment.
  gsap.set(hero, { xPercent: 0 });
  gsap.set(section1, { xPercent: 0, autoAlpha: 1 });
  gsap.set(section1Inner, { y: 0 });
  gsap.set(section2ProjectsTrack, { x: 0 });
  gsap.set(section2, { clearProps: 'transform,opacity,visibility' });

  // Four rest states the pinned scroll snaps between (as timeline progress):
  //  HERO   (0)     -> hero fully in view
  //  REVEAL         -> hero has left, section1 is in
  //  CUE            -> section1 projects are revealed, cue appears
  //  SECTION2       -> section1 exits left, section2 enters
  //  END    (1)     -> section2 project row finishes horizontal scroll
  // Durations below drive these fractions; keep the snap array in sync.
  const HERO_OUT = EXIT_ANIMATION_DURATION;
  const REVEAL = 1.6;    // section1 project reveal
  const CUE_HOLD = 0.6;  // cue threshold before release
  const TO_SECTION2 = EXIT_ANIMATION_DURATION;
  const SECTION2_HORIZONTAL_SCROLL = 1.8;
  const total = HERO_OUT + REVEAL + CUE_HOLD + TO_SECTION2 + SECTION2_HORIZONTAL_SCROLL;
  const pHeroOut = HERO_OUT / total;
  const pRevealDone = (HERO_OUT + REVEAL) / total;
  const pSection2Start = (HERO_OUT + REVEAL + CUE_HOLD) / total;
  const pSection2Ready = (HERO_OUT + REVEAL + CUE_HOLD + TO_SECTION2) / total;
  let hasEnteredSection1Start = false;
  let hasEnteredSection2 = false;
  let isLockingHeroExit = false;
  let isAnimatingSection2Exit = false;

  const setScrollToProgress = (self, progress) => {
    const scrollPosition = self.start + (self.end - self.start) * progress;
    self.scroll(scrollPosition);
  };

  const setTimelineProgress = (progress) => {
    scrollTimeline?.progress(progress);
  };

  const animateTimelineToProgress = (targetProgress, duration, onComplete) => {
    progressTween?.kill();

    const state = { progress: scrollTimeline.progress() };
    progressTween = gsap.to(state, {
      progress: targetProgress,
      duration,
      ease: 'power2.inOut',
      onUpdate: () => setTimelineProgress(state.progress),
      onComplete: () => {
        setTimelineProgress(targetProgress);
        progressTween = null;
        onComplete?.();
      }
    });
  };

  scrollTimeline = gsap.timeline({ paused: true });

  scrollTimeline
    .to(hero, { xPercent: -120, ease: 'power3.in', duration: HERO_OUT }, 0)
    .to(section1Inner, { y: () => -getReveal(), ease: 'none', duration: REVEAL })
    .to(section1Inner, { y: () => -getReveal(), ease: 'none', duration: CUE_HOLD })
    .to(section1, { xPercent: -100, autoAlpha: 0.2, ease: 'power2.inOut', duration: TO_SECTION2 })
    .to(section2ProjectsTrack, { x: () => -getSection2HorizontalScroll(), ease: 'power2.inOut', duration: SECTION2_HORIZONTAL_SCROLL });

  // Scroll chooses the next state, while exits play as fixed-duration animations:
  //  1. small scroll -> hero snaps out to the left, section1 enters
  //  2. section1 cue appears at its threshold
  //  3. next scroll moves section1 left while section2 enters from the right
  pageScrollTrigger = ScrollTrigger.create({
    trigger: '.main-content',
    start: 'top top',
    end: () => `+=${getPinnedScrollDistance()}`,
    pin: true,
    pinSpacing: true,
    invalidateOnRefresh: true,
    snap: {
      snapTo: (value) => {
        if (value > pHeroOut && value < pSection2Start) return value;
        if (value >= pSection2Ready) return value;
        return gsap.utils.snap([0, pHeroOut, pRevealDone, pSection2Start, pSection2Ready], value);
      },
      duration: { min: 0.08, max: 0.22 },
      // delay: 0.03,
    },
    onRefresh: () => scrollTimeline?.invalidate(),
    onUpdate: (self) => {
      const p = self.progress;

      if (p < 0.02) {
        hasEnteredSection1Start = false;
        hasEnteredSection2 = false;
        isLockingHeroExit = false;
        isAnimatingSection2Exit = false;
        isSection2Active.value = false;
        progressTween?.kill();
        progressTween = null;
        clearTimeout(heroExitUnlockTimer);
        heroExitUnlockTimer = null;
      }

      if (isLockingHeroExit) {
        setScrollToProgress(self, pHeroOut);
        isSection1Active.value = true;
        isSection2Active.value = false;
        showScrollCue.value = false;
        return;
      }

      if (isAnimatingSection2Exit) {
        setScrollToProgress(self, pSection2Start);
        isSection1Active.value = true;
        isSection2Active.value = false;
        showScrollCue.value = false;
        return;
      }

      if (self.direction > 0 && !hasEnteredSection1Start && p > SCROLL_TRIGGER_THRESHOLD) {
        isLockingHeroExit = true;
        setScrollToProgress(self, pHeroOut);
        isSection1Active.value = true;
        isSection2Active.value = false;
        showScrollCue.value = false;
        animateTimelineToProgress(pHeroOut, EXIT_ANIMATION_DURATION);

        clearTimeout(heroExitUnlockTimer);
        heroExitUnlockTimer = window.setTimeout(() => {
          hasEnteredSection1Start = true;
          isLockingHeroExit = false;
          setScrollToProgress(self, pHeroOut);
          setTimelineProgress(pHeroOut);
          heroExitUnlockTimer = null;
        }, SECTION1_INTRO_LOCK_DURATION);
        return;
      }

      if (self.direction > 0 && hasEnteredSection1Start && !hasEnteredSection2 && p > pSection2Start) {
        isAnimatingSection2Exit = true;
        setScrollToProgress(self, pSection2Start);
        isSection1Active.value = true;
        isSection2Active.value = false;
        showScrollCue.value = false;
        animateTimelineToProgress(pSection2Ready, EXIT_ANIMATION_DURATION, () => {
          hasEnteredSection2 = true;
          isAnimatingSection2Exit = false;
          isSection2Active.value = true;
          setScrollToProgress(self, pSection2Ready);
        });
        return;
      }

      if (p < pSection2Ready) {
        hasEnteredSection2 = false;
      }

      setTimelineProgress(p);
      isSection1Active.value = p >= pHeroOut * 0.4;
      showScrollCue.value = hasEnteredSection1Start && p >= pRevealDone && p < pSection2Start;
      isSection2Active.value = p >= pSection2Ready;
    }
  });
});

onBeforeUnmount(() => {
  clearTimeout(heroExitUnlockTimer);
  progressTween?.kill();
  pageScrollTrigger?.kill();
  scrollTimeline?.kill();
  progressTween = null;
  pageScrollTrigger = null;
  scrollTimeline = null;
});

useHead({
  title: 'Carol Yu | Home',
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' },
    { rel: 'stylesheet', href: '/css/index.css' },
    { rel: 'stylesheet', href: '/css/home.css' }
  ],
  script: [
    { src: '/js/script.js', body: true },
    { src: '/js/index.js', body: true }
  ]
});
</script>
