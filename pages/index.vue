<template>
  <IntroLoader :exit="loaderExit" @prepare="prepareIntro" @leave="playIntro" @done="releaseRestoredScroll" />
  <AppHeader :play-hint="isAboutIn" />
  <div class="main-content" :class="{ 'is-reveal-armed': isPhoneRevealArmed }">
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
      <nav class="hero-side-right" aria-label="Jump to section">
        <a v-for="tag in heroTags" :key="tag.target" :href="`#${tag.target}`" @click.prevent="jumpToSection(tag.target)">
          <img class="hero-side-image" src="/assets/icons/icon-tag.webp" alt="">
          <p>{{ tag.label }}</p>
        </a>
      </nav>
    </div>

    <section id="section1" class="section1" :class="{
      'is-active': isSection1Active,
      'is-settled': isSection1Settled,
      'is-returning-from-section2': isReturningFromSection2,
      'is-statement-armed': isStatementArmed,
      'is-statement-in': isStatementIn
    }">
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
        <a
          class="incoming-question-mark"
          href="https://www.instagram.com/p/DZAeKjHPohF/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View related post on Instagram"
        >?</a>
        <p class="incoming-question-text">In this age of AI, what should designers know?</p>
      </div>
      <div class="incoming-projects" :class="{ 'show-bottom-annotations': showBottomAnnotations }">
        <div class="projects-container">
          <a class="projects-item" data-category="web-apps" href="/projects/ai-brand-kit">
            <div class="projects-item-content">
              <div class="project-meta">
                <div class="project-meta-tags">
                  <span class="project-meta-tag">Image & HTML H5 generating</span>
                  <span class="project-meta-tag">AI Agent Product</span>
                </div>
              </div>
              <div>
                <h4>2026</h4>
                <h2 class="project-item-title">AI Brand Kit</h2>
                <h3>AI Product Design Intern @ TikTok</h3>
                <p>Training AI for Brand Content Automation by creating skill and lora.</p>
              </div>
            </div>
            <img class="projects-item-image" src="/assets/images/covers/ai-brand-kit.webp" alt="AI Brand Kit project cover">
          </a>

          <a class="projects-item" data-category="web-apps" href="/projects/aigc-video-automation">
            <div class="projects-item-content">
              <div class="project-meta">
                <div class="project-meta-tags">
                  <span class="project-meta-tag">AIGC Video Generation</span>
                  <span class="project-meta-tag">Creative Automation</span>
                </div>
              </div>
              <div>
                <h4>2026</h4>
                <h2 class="project-item-title">AIGC Video Automation</h2>
                <h3>AI Product Design intern @ TikTok</h3>
                <p>Turning product information and cultural trends into scalable, platform-native e-commerce video ads.</p>
              </div>
            </div>
            <img src="/assets/images/covers/aigc-video-automation.webp" alt="WeChat Channels project cover">
          </a>

          <a class="projects-item" data-category="web-apps" href="https://cosmasense.tech/" target="_blank" rel="noopener noreferrer">
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
                <h3>Product Designer & Frontend Dev</h3>
                <p>A local-first, AI-powered search engine that indexes your files and lets you find information
                  semantically.</p>
              </div>
            </div>
            <img src="/assets/images/covers/cosmasense.webp" alt="Cosma Sense project cover">
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
            <video class="projects-item-image" src="/assets/images/covers/wechat.mp4"
              poster="/assets/images/covers/wechat.webp" autoplay muted loop playsinline preload="metadata"></video>
          </a>
        </div>
        <div class="project-annotation project-annotation--top project-annotation--training" aria-hidden="true">
          <span class="project-annotation__side-label project-annotation__side-label--top">LoRA</span>
          <span class="project-annotation__main-label">AI training</span>
          <span class="project-annotation__side-label project-annotation__side-label--bottom">SKILL.md</span>
          <svg class="project-annotation__mark project-annotation__mark--training" viewBox="0 0 240 82">
            <path class="project-annotation__training-line project-annotation__training-line--top" pathLength="1" d="M122 20 L82 18" />
            <ellipse class="project-annotation__training-circle" pathLength="1" cx="182" cy="20" rx="58" ry="20" />
            <path class="project-annotation__training-line project-annotation__training-line--bottom" pathLength="1" d="M126 28 L92 45" />
          </svg>
        </div>
        <div class="project-annotation project-annotation--top project-annotation--automation" aria-hidden="true">
          <span>AI video<br>automation</span>
          <svg class="project-annotation__mark project-annotation__mark--automation" viewBox="0 0 170 58">
            <path pathLength="1" d="M35 28 L140 28 L90 38 L172 40" />
          </svg>
        </div>
        <div class="project-annotation project-annotation--bottom project-annotation--semantic" aria-hidden="true">
          <svg class="project-annotation__mark project-annotation__mark--semantic" viewBox="0 0 70 76">
            <path class="project-annotation__semantic-line" pathLength="1" d="M62 5 C48 7 37 12 30 18 C22 26 18 39 28 58" />
            <path class="project-annotation__semantic-arrow" pathLength="1" d="M12 50 L28 58 L34 43" />
          </svg>
          <span>AI Native<br>APP</span>
        </div>
        <div class="project-annotation project-annotation--bottom project-annotation--integration" aria-hidden="true">
          <span>AI Integration</span>
          <svg class="project-annotation__mark project-annotation__mark--integration" viewBox="0 0 190 66">
            <path pathLength="1" d="M174 32 C174 45 139 55 96 55 C53 55 18 45 18 32 C18 19 53 9 96 9 C139 9 174 19 174 32 C174 45 139 55 96 55 C72 55 51 52 36 47" />
          </svg>
        </div>
      </div>
      </div>
      <div
        class="incoming-scroll-cue"
        :class="{ 'is-visible': showScrollCue }"
        aria-hidden="true"
      >
        <span>Scroll</span>
        <img class="incoming-scroll-cue-arrow" src="/assets/icons/scroll-arrow.webp" alt="">
      </div>
    </section>
    
    <section id="section2" class="section2" :class="{ 'is-active': isSection2Active }"
      aria-label="Smart UI/UX for Real-World Problems">
      <div class="section2-projects">
        <div class="projects-container">
          <div class="section2-group-gap section2-group-gap--lead" aria-hidden="true"></div>
          <div id="uiux" class="section2-group">
            <div class="section2-heading">
              <h2>Smart UI/UX for Real-World Problems</h2>
              <p>Interfaces that turn practical product problems into clear, delightful user experiences.</p>
            </div>
            <div class="section2-flower-field section2-flower-field--back" aria-hidden="true">
              <div class="section2-flower section2-flower--bottom-right">
                <img class="section2-flower__head" src="/assets/images/section2/flower-leaf.webp" alt="">
                <svg class="section2-flower__stem" viewBox="0 0 80 1000" preserveAspectRatio="none">
                  <path d="M40 1000 C41 740 42 480 38 260 C37 150 36 70 35 8" />
                </svg>
              </div>
            </div>
            <div class="section2-flower-field" aria-hidden="true">
              <div class="section2-flower section2-flower--top-left">
                <img class="section2-flower__head" src="/assets/images/section2/flower-corner-b.webp" alt="">
                <svg class="section2-flower__stem" viewBox="0 0 80 1000" preserveAspectRatio="none">
                  <path d="M40 1000 C42 720 66 300 40 0" />
                </svg>
              </div>
              <div class="section2-flower section2-flower--top-right">
                <img class="section2-flower__head" src="/assets/images/section2/flower-corner-a.webp" alt="">
                <svg class="section2-flower__stem" viewBox="0 0 80 1000" preserveAspectRatio="none">
                  <path d="M40 1000 C38 720 14 300 40 0" />
                </svg>
              </div>
              <div class="section2-flower section2-flower--bottom-left">
                <img class="section2-flower__head" src="/assets/images/section2/flower-crown.webp" alt="">
                <svg class="section2-flower__stem" viewBox="0 0 80 1000" preserveAspectRatio="none">
                  <path d="M40 1000 C39 740 38 480 42 260 C43 150 44 70 45 8" />
                </svg>
              </div>
            </div>
            <div class="section2-group-cards">
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
                <img class="projects-item-image" src="/assets/images/covers/intertabs.webp" alt="interTabs project cover">
              </a>
              <a class="projects-item" data-category="web-apps" href="/projects/albertplus">
                <div class="projects-item-content">
                  <div class="project-meta">
                    <div class="project-meta-tags">
                      <span class="project-meta-tag">Tech@NYU Dev Team 2025</span>
                      <span class="project-meta-tag">Case Study</span>
                      <span class="project-meta-tag">Shipped Product</span>
                    </div>
                  </div>
                  <div>
                    <h4>2025</h4>
                    <h2 class="project-item-title">Albert Plus</h2>
                    <h3>UIUX Designer & Developer</h3>
                    <p>The next-generation companion for NYU's Albert course registration system with better user experience and features.</p>
                  </div>
                </div>
                <video class="projects-item-image" src="/assets/images/covers/albertplus.mp4"
                  poster="/assets/images/covers/albertplus.webp" autoplay muted loop playsinline preload="metadata">
                </video>
              </a>
            </div>
          </div>

          <div class="section2-group-gap" aria-hidden="true"></div>

          <div id="interaction" class="section2-group section2-group--gamification">
            <div class="section2-heading">
              <h2>Beyond Static Interfaces</h2>
              <p>Playful, immersive experiences that push interfaces beyond traditional screens.</p>
            </div>
            <div class="section2-flower-field section2-flower-field--gamification" aria-hidden="true">
              <div class="section2-flower section2-flower--top-left">
                <img class="section2-flower__head" src="/assets/images/section2/flower-corner-b.webp" alt="">
                <svg class="section2-flower__stem" viewBox="0 0 80 1000" preserveAspectRatio="none">
                  <path d="M40 1000 C38 700 20 260 40 0" />
                </svg>
              </div>
              <div class="section2-flower section2-flower--top-right">
                <img class="section2-flower__head" src="/assets/images/section2/flower-leaf.webp" alt="">
                <svg class="section2-flower__stem" viewBox="0 0 80 1000" preserveAspectRatio="none">
                  <path d="M40 1000 C39 740 39 480 40 260 C40 150 40 70 40 8" />
                </svg>
              </div>
              <div class="section2-flower section2-flower--bottom-left">
                <img class="section2-flower__head" src="/assets/images/section2/flower-crown.webp" alt="">
                <svg class="section2-flower__stem" viewBox="0 0 80 1000" preserveAspectRatio="none">
                  <path d="M40 1000 C50 740 58 480 30 260 C24 150 34 70 40 8" />
                </svg>
              </div>
              <div class="section2-flower section2-flower--bottom-right">
                <img class="section2-flower__head" src="/assets/images/section2/flower-corner-a.webp" alt="">
                <svg class="section2-flower__stem" viewBox="0 0 80 1000" preserveAspectRatio="none">
                  <path d="M40 1000 C42 700 60 260 40 0" />
                </svg>
              </div>
            </div>
            <div class="section2-group-cards">
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
              
            </div>
          </div>

          <div class="section2-group-gap section2-group-gap--section3" aria-hidden="true"></div>

          <!-- The about car: the old portfolio's About, photo left and copy right,
               bottom-aligned. The row ends here. -->
          <section id="section3" class="section3 section3-about" aria-label="About Carol">
            <div class="section3-about-inner">
              <img class="section3-about-image" src="/assets/images/main/profile.webp" alt="Carol Yu">
              <div class="section3-about-content">
                <h1><span data-about-word="about">About</span> <span data-about-word="me">Me</span></h1>
                <h3>I'm Carol, a <strong>Product Designer</strong> crafting engaging experiences that resonate with users.</h3>
                <p>
                  For me, <strong>Product Design</strong> is an interdisciplinary artwork.
                  <strong>Technology</strong> forms the canvas that defines the possibilities;
                  <strong>Art</strong> is the unique strokes; <strong>Business</strong>,
                  <strong>Philosophy</strong>, and <strong>Game Mechanics</strong> mix into the palette
                  that create experience and interactions that resonates.
                </p>
                <p>I pour love into every design, weaving together this colorful world.</p>
                <a class="section3-button" href="/about">More About Me</a>
              </div>
            </div>
          </section>

          <!-- The road sign stands past the about car, part of the row itself. -->
          <RoadSign @jump="jumpToSection" />
        </div>
      </div>
    </section>
  </div>
  <button
    type="button"
    class="index-back-to-beginning"
    :class="{ 'is-visible': showBackToBeginning }"
    @click="handleBackToBeginning"
  >
    Back to beginning
  </button>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let removeMobileHeroTransitionListener = null;

// Hero entrance: held on its first frame behind the loader ('loading'), played
// as the loader lifts ('playing'), then the classes come off entirely so the
// intro animations can't pin opacity/translate over the scroll-driven styles.
const INTRO_DURATION = 4500;
const introState = ref('loading');
let introDoneTimer = null;

// Everything but the image starts stacked on the image's centre and slides out
// from under it. The offsets are measured rather than hand-written so the travel
// stays right at any viewport size; the measuring class suppresses the intro for
// the read, which happens inside one frame so nothing flashes.
const INTRO_EMERGE_SELECTOR = [
  '.hero-title-container',
  '.hero-fish-icon',
  '.hero-title-carol',
  '.hero-side'
].join(', ');

// The tags slide straight out to the right from behind the image, together,
// each at its own height.
const INTRO_SLIDE_SELECTOR = '.hero-side-right > a';

// The leaves are the exception: they drift in from off the right
// edge of the page like something carried downstream, so each one starts past
// the right edge with its own vertical offset and tilt rather than on the image.
const INTRO_DRIFT_SELECTOR = '.hero .leaf';
const DRIFT_RISE = [-46, 28, -30, 44, -18, 36, -24];
const DRIFT_TILT = [-32, 24, -18, 30, -26, 16, -12];

const measureIntroOffsets = () => {
  const image = document.querySelector('.hero-image');
  const emergeTargets = Array.from(document.querySelectorAll(INTRO_EMERGE_SELECTOR));
  const driftTargets = Array.from(document.querySelectorAll(INTRO_DRIFT_SELECTOR));
  const slideTargets = Array.from(document.querySelectorAll(INTRO_SLIDE_SELECTOR));
  if (!image || !emergeTargets.length) return;

  const root = document.documentElement;
  root.classList.add('intro-measuring');
  const imageBox = image.getBoundingClientRect();
  const centerX = imageBox.left + imageBox.width / 2;
  const centerY = imageBox.top + imageBox.height / 2;
  const emergeOffsets = emergeTargets.map((el) => {
    const box = el.getBoundingClientRect();
    return [el, centerX - (box.left + box.width / 2), centerY - (box.top + box.height / 2)];
  });
  // Far enough past the right edge that nothing is half-on screen at rest; the
  // page already clips horizontal overflow, so this adds no scrollbar.
  const driftOffsets = driftTargets.map((el, index) => {
    const box = el.getBoundingClientRect();
    return [el, window.innerWidth - box.left + 140, index];
  });
  // One shared offset so the block moves as a unit: the widest tag starts
  // centred on the image, and the rest (left-aligned with it) sit inside it too.
  const slideBoxes = slideTargets.map((el) => el.getBoundingClientRect());
  const slideLeft = Math.min(...slideBoxes.map((box) => box.left));
  const slideWidth = Math.max(...slideBoxes.map((box) => box.right)) - slideLeft;
  const slideDx = centerX - (slideLeft + slideWidth / 2);
  const slideOffsets = slideTargets.map((el) => [el, slideDx]);
  root.classList.remove('intro-measuring');

  slideOffsets.forEach(([el, dx]) => {
    el.style.setProperty('--intro-from-x', `${Math.round(dx)}px`);
  });

  emergeOffsets.forEach(([el, dx, dy]) => {
    el.style.setProperty('--intro-from-x', `${Math.round(dx)}px`);
    el.style.setProperty('--intro-from-y', `${Math.round(dy)}px`);
  });

  driftOffsets.forEach(([el, dx, index]) => {
    el.style.setProperty('--intro-from-x', `${Math.round(dx)}px`);
    el.style.setProperty('--intro-from-y', `${DRIFT_RISE[index % DRIFT_RISE.length]}px`);
    el.style.setProperty('--intro-from-tilt', `${DRIFT_TILT[index % DRIFT_TILT.length]}deg`);
  });
};

// The loader turns see-through while its mark flips, before the intro plays.
// Measuring here parks every piece at its starting point first — otherwise the
// leaves (which have no fade) show in their final spots for that moment and
// then jump off screen.
let hasMeasuredIntro = false;
const prepareIntro = () => {
  if (loaderExit.value !== 'flip') return;
  measureIntroOffsets();
  hasMeasuredIntro = true;
};

const playIntro = () => {
  if (loaderExit.value !== 'flip') return;
  if (!hasMeasuredIntro) measureIntroOffsets();
  introState.value = 'playing';
  clearTimeout(introDoneTimer);
  introDoneTimer = setTimeout(() => {
    introState.value = 'done';
  }, INTRO_DURATION);
};

// A reload (or back/forward) lands the reader back where they were instead of
// replaying the intro. Where they were is saved as the page is left; on the way
// back the page is parked there before the loader lifts. From the hero the
// loader still flips its mark into the image; anywhere further along it skips
// the mark and only fades the overlay onto the parked content.
const RESTORE_KEY = 'home-scroll-position';
const nuxtApp = useNuxtApp();
const isFirstPageLoad = nuxtApp.isHydrating;
const loaderExit = ref('flip');
let getScrollSnapshot = null;
let reapplyRestoredScroll = null;
let isHoldingRestoredScroll = false;
let restoreListenersCleanup = null;

const readSavedScroll = () => {
  if (!isFirstPageLoad) return null;
  try {
    const navigation = performance.getEntriesByType?.('navigation')?.[0];
    if (navigation && navigation.type !== 'reload' && navigation.type !== 'back_forward') return null;
    return JSON.parse(sessionStorage.getItem(RESTORE_KEY) || 'null');
  } catch {
    return null;
  }
};

const isSavedPastHero = (saved) => {
  if (!saved) return false;
  if (typeof saved.stage === 'string') return saved.stage !== 'hero';
  return Number(saved.y) > 40;
};

// Set before the loader mounts so it never starts the mark on a mid-page restore.
if (import.meta.client && isSavedPastHero(readSavedScroll())) {
  loaderExit.value = 'fade';
}

const saveScroll = () => {
  try {
    const snapshot = getScrollSnapshot?.();
    if (snapshot) sessionStorage.setItem(RESTORE_KEY, JSON.stringify(snapshot));
  } catch {
    // Storage blocked — a reload simply starts from the top.
  }
};

// Restoring below the hero: no intro. The head manager doesn't pick up a class
// change made this early in hydration, so the classes also come off directly.
const skipIntro = () => {
  introState.value = 'done';
  document.documentElement.classList.remove('intro', 'intro-paused');
};

// The loader has lifted: from here the reader drives the scroll.
const releaseRestoredScroll = () => {
  isHoldingRestoredScroll = false;
};

// section1 content entrance (leaves + statement) fires via this class
const isSection1Active = ref(false);
const isSection1Settled = ref(false);
// scroll cue appears once section1 is settled, inviting the user to keep scrolling
const showScrollCue = ref(false);
const showBottomAnnotations = ref(false);
// phone only: content below the hero holds until it is scrolled to, then plays
const isPhoneRevealArmed = ref(false);
const isStatementArmed = ref(false);
const isStatementIn = ref(false);
// section2 plays its own entrance once it reaches the viewport threshold
const isSection2Active = ref(false);
const showBackToBeginning = ref(false);
// Set while the about car is on screen, which shows the nav note pointing at PLAY.
const isAboutIn = ref(false);
// distinct reverse transition when scrolling back from section2 to section1 bottom
const isReturningFromSection2 = ref(false);

let scrollTimeline = null;
let pageScrollTrigger = null;
let heroExitUnlockTimer = null;
let progressTween = null;
let scrubTween = null;
let section2HorizontalWheelHandler = null;
let section2TransitionUnlockTimer = null;
let footerTransitionUnlockTimer = null;
// Set by the desktop timeline. Nothing calls it while the "back to beginning"
// button is out of the markup; kept so bringing the button back is one line.
let backToBeginningHandler = null;
let section3FooterObserver = null;

const handleBackToBeginning = () => {
  backToBeginningHandler?.();
};

// The hero tags jump to their section. Desktop sets the pinned scroll up
// directly (see jumpToSectionHandler); the tags are hidden on phones, where a
// plain scroll would do.
// (The road sign at the end of the row reuses this for its own four targets.)
const heroTags = [
  { label: 'AI Designer', target: 'section1' },
  { label: 'UIUX', target: 'uiux' },
  { label: 'Interaction & Animation', target: 'interaction' }
];
let jumpToSectionHandler = null;

const jumpToSection = (target) => {
  if (jumpToSectionHandler) {
    jumpToSectionHandler(target);
    return;
  }
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

onMounted(() => {
  // The page restores its own position; the browser's attempt would land
  // somewhere in the middle of the pinned scroll and trip its transitions.
  if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  const savedScroll = readSavedScroll();
  window.addEventListener('pagehide', saveScroll);

  if (window.matchMedia('(max-width: 720px)').matches) {
    const hero = document.querySelector('#hero');
    const firstSection = document.querySelector('#section1');
    if (!hero || !firstSection) return;

    // Phone: a plain scroll offset. Re-applied until the loader lifts, since
    // images above it can still shift the layout while it loads.
    getScrollSnapshot = () => ({ y: Math.round(window.scrollY) });
    const restoreY = Number(savedScroll?.y) || 0;
    const applyRestoreY = () => {
      if (isHoldingRestoredScroll) window.scrollTo(0, restoreY);
    };
    isHoldingRestoredScroll = true;
    window.scrollTo(0, restoreY);
    const holdOnLoad = () => applyRestoreY();
    window.addEventListener('load', holdOnLoad, { once: true });
    restoreListenersCleanup = () => window.removeEventListener('load', holdOnLoad);
    const isRestoredBelowHero = restoreY > 40;
    if (isRestoredBelowHero) {
      skipIntro();
      loaderExit.value = 'fade';
    }

    // The hero fades out as it scrolls away rather than snapping to 0 at a fixed
    // threshold — a hard toggle left a blank hole where the hero still sat in flow.
    const HERO_FADE_LIFT = 72;
    let frame = 0;
    let lastFade = -1;

    const updateHeroTransition = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const heroBottom = hero.getBoundingClientRect().bottom;
      // The fade only starts once the hero's bottom edge is on its way out (past
      // 45% of the viewport) and finishes exactly as it clears the top, so the
      // hero is never dimmed while it is still the main thing on screen, and
      // never invisible while it still occupies space.
      const fadeStart = viewportHeight * 0.45;
      const linear = Math.min(1, Math.max(0, heroBottom / fadeStart));
      const visibility = linear * linear * (3 - 2 * linear);

      if (Math.abs(visibility - lastFade) > 0.005 || visibility === 0 || visibility === 1) {
        lastFade = visibility;
        hero.style.setProperty('--hero-scroll-opacity', visibility.toFixed(3));
        hero.style.setProperty('--hero-scroll-lift', `${((1 - visibility) * -HERO_FADE_LIFT).toFixed(1)}px`);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateHeroTransition);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateHeroTransition();

    // The statement sits below the fold now, so it plays when scrolled to — once.
    // The bottom rootMargin plus the ratio check hold it back until the statement
    // is about two thirds up the screen, rather than the instant it peeks in.
    // (An observer always reports the crossing of 0 too, hence the explicit
    // ratio test rather than a bare isIntersecting.)
    const STATEMENT_REVEAL_RATIO = 0.4;
    const statement = document.querySelector('.incoming-statement');
    let statementObserver = null;
    // Already on (or above) the screen after a reload: it simply shows.
    const isStatementAlreadySeen = isRestoredBelowHero
      && statement && statement.getBoundingClientRect().top < window.innerHeight;
    if (statement && !isStatementAlreadySeen && 'IntersectionObserver' in window) {
      isStatementArmed.value = true;
      statementObserver = new IntersectionObserver((entries) => {
        const reached = entries.some(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= STATEMENT_REVEAL_RATIO
        );
        if (!reached) return;
        isStatementIn.value = true;
        statementObserver.disconnect();
        statementObserver = null;
      }, { rootMargin: '0px 0px -25% 0px', threshold: STATEMENT_REVEAL_RATIO });
      statementObserver.observe(statement);
    }

    // Everything under the statement rises in on arrival, in the same spirit.
    // The negative bottom rootMargin is what makes it fire as the item comes up
    // past roughly seven eighths of the screen, rather than at the very edge.
    const revealTargets = Array.from(document.querySelectorAll(
      '.incoming-projects .projects-item, .section2-heading, .section2-projects .projects-item'
    ));
    let revealObserver = null;
    if (revealTargets.length && 'IntersectionObserver' in window) {
      isPhoneRevealArmed.value = true;
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -12% 0px' });

      const revealLine = window.innerHeight * 0.88;
      revealTargets.forEach((target) => {
        // Already on screen (a reload part-way down the page): show it as-is
        // rather than fading in something the reader is already looking at.
        if (target.getBoundingClientRect().top >= revealLine) {
          target.classList.add('phone-reveal');
          revealObserver.observe(target);
        }
      });
    }

    // Four looping cover videos decoding at once is a real source of scroll
    // stutter on a phone. Let them autoplay as usual, but park the ones that are
    // far off screen. Layered on top of native autoplay on purpose: if the
    // observer never fires, playback behaves exactly as it did before.
    const videos = Array.from(document.querySelectorAll('.main-content video'));
    let videoObserver = null;
    if (videos.length && 'IntersectionObserver' in window) {
      videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            if (video.paused) video.play?.().catch(() => {});
          } else if (!video.paused) {
            video.pause();
          }
        });
      }, { rootMargin: '300px 0px' });
      videos.forEach((video) => videoObserver.observe(video));
    }

    removeMobileHeroTransitionListener = () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      videoObserver?.disconnect();
      statementObserver?.disconnect();
      revealObserver?.disconnect();
    };
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.clearScrollMemory('manual');
  window.scrollTo(0, 0);

  const hero = document.querySelector('#hero');
  const section1 = document.querySelector('#section1');
  const section1Inner = document.querySelector('.section1-inner');
  const incomingLeaves = document.querySelector('.incoming-leaves');
  const section2 = document.querySelector('#section2');
  const projects = document.querySelector('.incoming-projects .projects-container');
  const section2Projects = document.querySelector('.section2-projects');
  const section2ProjectsTrack = document.querySelector('.section2-projects .projects-container');
  const section3 = document.querySelector('#section3');
  const section3Footer = document.querySelector('.section3-footer-stage');
  // The PLAY note follows the "About Me" heading as the row slides. It comes on
  // once "About" has travelled well into the screen (not the instant it peeks
  // in) and goes off once "About" reaches the left edge. The same line works in
  // both directions, so scrolling back hides it at the same place.
  const aboutWord = section3?.querySelector('[data-about-word="about"]');
  const HINT_SHOW_AT = 0.55; // share of the viewport width, from the left
  // Held off while a jump is fading the page, so the note does not flash back.
  let isAboutHintSuppressed = false;
  const updateAboutHint = () => {
    if (isAboutHintSuppressed) {
      isAboutIn.value = false;
      return;
    }
    if (!aboutWord) return;
    const { left } = aboutWord.getBoundingClientRect();
    isAboutIn.value = left <= window.innerWidth * HINT_SHOW_AT && left > 0;
  };
  const section1BottomSpace = 300;
  const EXIT_ANIMATION_DURATION = 0.75;
  const SECTION_EXIT_DURATION = 0.8;
  const SECTION_ENTER_DURATION = 0.8;
  // Both panels of a handoff share one ease so they travel locked together, like
  // one strip of film. `out` rather than `inOut`: the move starts the instant the
  // scroll triggers it instead of idling through an ease-in the reader reads as lag.
  const SECTION_TRANSITION_EASE = 'power2.out';
  const SECTION2_TRANSITION_ANIM_DURATION = Math.max(SECTION_EXIT_DURATION, SECTION_ENTER_DURATION);
  const SCROLL_TRIGGER_THRESHOLD = 0.01;
  // Scrubbed motion eases toward the scroll position instead of jumping with
  // each wheel tick, so a notched mouse wheel glides like a trackpad.
  const SCRUB_SMOOTHING = 0.4;
  // A transition unlocks once the gesture that fired it has gone quiet, so
  // trackpad momentum cannot carry straight on into the next section. The cap
  // keeps a long inertial tail from holding the page hostage.
  const GESTURE_QUIET_MS = 140;
  const GESTURE_UNLOCK_MAX_MS = 900;
  // Section 1 -> 2 holds scroll for less time than the other handoffs: a faster
  // slide, and a shorter wait for the gesture to go quiet afterwards.
  const SECTION2_ENTER_SLIDE_DURATION = 0.5;
  const SECTION2_ENTER_QUIET_MS = 60;
  const SECTION2_ENTER_UNLOCK_MAX_MS = 250;
  const INCOMING_LEAF_SCROLL_FACTOR = 0.7;
  const SECTION2_SCROLL_SLOWDOWN = 2.5;

  // How far section1 content must move so project rows end with a 200px bottom gap.
  const getReveal = () => {
    if (!projects) return 0;
    const startOffset = window.innerHeight * 0.56;
    const overflowBelow = startOffset + projects.offsetHeight - window.innerHeight;
    return Math.max(0, overflowBelow + section1BottomSpace);
  };

  const getIncomingLeafParallax = () => {
    return getReveal() * (1 - INCOMING_LEAF_SCROLL_FACTOR);
  };

  const getSection2HorizontalScroll = () => {
    if (!section2Projects || !section2ProjectsTrack) return 0;
    return Math.max(0, section2ProjectsTrack.scrollWidth - section2Projects.clientWidth);
  };

  // The footer band and the pinned panel travel the same distance, so the
  // panel's bottom edge and the band's top edge stay welded for the whole tail.
  // Empty space between the hero's bottom edge and section1 while scrolling
  // back up to the hero.
  const getHeroReturnGap = () => window.innerHeight * 0.2;

  const getFooterBandHeight = () => section3Footer?.offsetHeight || 0;

  const getPinnedScrollDistance = () => {
    const base = (window.innerHeight * 5) + (getSection2HorizontalScroll() * SECTION2_SCROLL_SLOWDOWN);
    // The longer hero and cue stages add their own scroll room, so every other
    // stage keeps the same pixels-per-step it had.
    const extras = CUE_HOLD_EXTRA + HERO_OUT_EXTRA;
    return Math.round(base * (total / (total - extras)));
  };

  // Starting positions for the pinned hero/section1 moment.
  gsap.set(hero, { xPercent: 0 });
  gsap.set(section1, { xPercent: 0, yPercent: 0, autoAlpha: 1 });
  gsap.set(section1Inner, { y: 0 });
  gsap.set(incomingLeaves, { y: 0 });
  gsap.set(section2ProjectsTrack, { x: 0 });
  gsap.set(section2, { xPercent: 100, yPercent: 0, autoAlpha: 0 });
  if (section3Footer) {
    gsap.set(section3Footer, { xPercent: 0, yPercent: 100, y: 0 });
  }

  // Four rest states the pinned scroll snaps between (as timeline progress):
  //  HERO   (0)     -> hero fully in view
  //  REVEAL         -> hero has left, section1 is in
  //  CUE            -> section1 projects are revealed, cue appears
  //  SECTION2       -> section1 exits left, section2 enters
  //  SCROLL_DONE    -> the row finishes scrolling on the about car
  //  END    (1)     -> the footer band, plus tail room so the pin holds
  // Durations below drive these fractions; keep the snap array in sync.
  // The hero segment is also the scroll-up path back to the hero, so it gets
  // enough extra room to feel about one-to-one with the distance it covers.
  const HERO_OUT_EXTRA = 0.8;
  const HERO_OUT = EXIT_ANIMATION_DURATION + HERO_OUT_EXTRA;
  const REVEAL = 1.6;    // section1 project reveal
  // Cue threshold before release. The extra keeps the scroll cue on screen for
  // longer before the section2 handoff takes it away.
  const CUE_HOLD_EXTRA = 0.3;
  const CUE_HOLD = 0.6 + CUE_HOLD_EXTRA;
  const SECTION2_HORIZONTAL_SCROLL = 6;
  const PARALLEL_EXIT_ENTER = SECTION2_TRANSITION_ANIM_DURATION;
  // The footer is a snap like every other boundary, not a scrubbed drag: a
  // little travel to arm it, a placeholder for the animation the trigger plays,
  // and clamped room past it so the pin never releases behind the footer.
  const FOOTER_LEAD = 0.6;
  const FOOTER_TRANSITION = SECTION2_TRANSITION_ANIM_DURATION;
  const FOOTER_TAIL = 0.8;
  const SECTION2_STAGES = HERO_OUT + REVEAL + CUE_HOLD + PARALLEL_EXIT_ENTER + SECTION2_HORIZONTAL_SCROLL;
  const total = SECTION2_STAGES + FOOTER_LEAD + FOOTER_TRANSITION + FOOTER_TAIL;
  const pHeroOut = HERO_OUT / total;
  const pRevealDone = (HERO_OUT + REVEAL) / total;
  const pSection2Start = (HERO_OUT + REVEAL + CUE_HOLD) / total;
  const pSection2EnterStart = pSection2Start;
  const pSection2Ready = (HERO_OUT + REVEAL + CUE_HOLD + PARALLEL_EXIT_ENTER) / total;
  const pSection2ScrollDone = SECTION2_STAGES / total;
  const pFooterStart = pSection2ScrollDone + (FOOTER_LEAD / total);
  const pFooterReady = pFooterStart + (FOOTER_TRANSITION / total);
  // Coming back out of the footer lands inside the arming gap rather than
  // exactly at its edge, so the same gesture cannot carry straight on into the
  // footer again.
  const pFooterReturnLand = pSection2ScrollDone + ((FOOTER_LEAD / total) * 0.35);
  const pBottomAnnotations = pHeroOut + ((pRevealDone - pHeroOut) * 0.55);
  const pScrollCueShow = pRevealDone;
  const pScrollCueHide = pHeroOut + ((pRevealDone - pHeroOut) * 0.88);
  let hasEnteredSection1Start = false;
  let hasEnteredSection2 = false;
  let hasEnteredFooter = false;
  let hasBottomAnnotationsAppeared = false;
  let isLockingHeroExit = false;
  let isHeroScrollReturn = false;
  let isAnimatingSection2Transition = false;
  let section2TransitionLockProgress = 0;
  let isAnimatingFooterTransition = false;
  let footerTransitionLockProgress = 0;
  const preserveSection1Reveal = () => {
    gsap.set(section1Inner, { y: -getReveal() });
    gsap.set(incomingLeaves, { y: getIncomingLeafParallax() });
  };

  const setScrollToProgress = (self, progress) => {
    const scrollPosition = self.start + (self.end - self.start) * progress;
    // The transition locks hold position by calling this on every scroll event.
    // Writing a scroll offset that is already correct still costs a synchronous
    // scroll on each wheel tick, which is enough to stutter the tween running
    // alongside it — so only correct an actual drift.
    if (Math.abs(self.scroll() - scrollPosition) < 0.5) return;
    self.scroll(scrollPosition);
  };

  const getWheelDelta = (event) => {
    const modeMultiplier = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
    return {
      x: event.deltaX * modeMultiplier,
      y: event.deltaY * modeMultiplier
    };
  };

  let hasScrollCueBeenDismissed = false;

  const hideScrollCue = () => {
    showScrollCue.value = false;
  };

  const showScrollCueNow = () => {
    if (hasScrollCueBeenDismissed) return;
    showScrollCue.value = true;
  };

  const updateScrollCueVisibility = (progress) => {
    if (progress < pHeroOut) {
      hasScrollCueBeenDismissed = false;
      hideScrollCue();
      return;
    }

    if (progress < pScrollCueShow) {
      hasScrollCueBeenDismissed = false;
      hideScrollCue();
      return;
    }

    if (progress >= pSection2Start) {
      hasScrollCueBeenDismissed = true;
      hideScrollCue();
      return;
    }

    if (hasScrollCueBeenDismissed) {
      return;
    }

    showScrollCueNow();
  };

  const setTimelineProgress = (progress) => {
    scrubTween?.kill();
    scrubTween = null;
    scrollTimeline?.progress(progress);
  };

  const scrubTimelineTo = (progress) => {
    if (!scrollTimeline) return;
    scrubTween?.kill();
    const state = { progress: scrollTimeline.progress() };
    scrubTween = gsap.to(state, {
      progress,
      duration: SCRUB_SMOOTHING,
      ease: 'power3.out',
      onUpdate: () => {
        scrollTimeline.progress(state.progress);
        if (state.progress >= pRevealDone) preserveSection1Reveal();
      },
      onComplete: () => {
        scrubTween = null;
      }
    });
  };

  let lastScrollInputAt = 0;

  const afterGestureSettles = (onSettled, assignTimer, quietMs = GESTURE_QUIET_MS, maxMs = GESTURE_UNLOCK_MAX_MS) => {
    const startedAt = performance.now();
    const check = () => {
      const now = performance.now();
      if (now - lastScrollInputAt >= quietMs || now - startedAt >= maxMs) {
        assignTimer(null);
        onSettled();
        return;
      }
      assignTimer(window.setTimeout(check, 40));
    };
    check();
  };

  const animateTimelineToProgress = (targetProgress, duration, onComplete, onProgress) => {
    progressTween?.kill();

    const state = { progress: scrollTimeline.progress() };
    progressTween = gsap.to(state, {
      progress: targetProgress,
      duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        setTimelineProgress(state.progress);
        onProgress?.(state.progress);
      },
      onComplete: () => {
        setTimelineProgress(targetProgress);
        progressTween = null;
        onComplete?.();
      }
    });
  };

  const clearSection2TransitionUnlockTimer = () => {
    clearTimeout(section2TransitionUnlockTimer);
    section2TransitionUnlockTimer = null;
  };

  const clearFooterTransitionUnlockTimer = () => {
    clearTimeout(footerTransitionUnlockTimer);
    footerTransitionUnlockTimer = null;
  };

  // Hard-reset section shells so return (vertical) and enter (horizontal) never share leftover transforms.
  const setSectionShell = (el, { xPercent, yPercent, autoAlpha, zIndex }) => {
    gsap.set(el, { clearProps: 'transform,opacity,visibility,zIndex' });
    gsap.set(el, {
      xPercent,
      yPercent,
      autoAlpha,
      ...(zIndex == null ? {} : { zIndex })
    });
  };

  const startSection2EnterTransition = (self) => {
    isAnimatingSection2Transition = true;
    // Keep settled so entrance CSS animations do not restart mid-exit.
    isSection1Settled.value = true;
    isSection1Active.value = true;
    isReturningFromSection2.value = false;
    isSection2Active.value = false;
    section2TransitionLockProgress = pSection2Start;
    clearSection2TransitionUnlockTimer();
    progressTween?.kill();
    progressTween = null;
    hasScrollCueBeenDismissed = true;
    hideScrollCue();

    setScrollToProgress(self, pSection2Start);
    // Park timeline in the cue-hold range (same visual reveal as section2 trigger,
    // but before the empty handoff placeholder / horizontal scroll segment).
    setTimelineProgress(pRevealDone);
    preserveSection1Reveal();
    gsap.set(incomingLeaves, { y: getIncomingLeafParallax() });
    gsap.set(section2ProjectsTrack, { x: 0 });

    setSectionShell(section1, { xPercent: 0, yPercent: 0, autoAlpha: 1 });
    setSectionShell(section2, { xPercent: 100, yPercent: 0, autoAlpha: 0 });

    progressTween = gsap.timeline({
      onComplete: () => {
        setSectionShell(section1, { xPercent: -100, yPercent: 0, autoAlpha: 0.2 });
        setSectionShell(section2, { xPercent: 0, yPercent: 0, autoAlpha: 1 });
        section2TransitionLockProgress = pSection2Ready;
        setScrollToProgress(self, pSection2Ready);
        setTimelineProgress(pSection2Ready);
        gsap.set(section2ProjectsTrack, { x: 0 });
        isSection2Active.value = true;
        isSection1Active.value = false;
        isSection1Settled.value = false;
        hideScrollCue();

        afterGestureSettles(() => {
          hasEnteredSection2 = true;
          isAnimatingSection2Transition = false;
        }, (timer) => { section2TransitionUnlockTimer = timer; },
        SECTION2_ENTER_QUIET_MS, SECTION2_ENTER_UNLOCK_MAX_MS);
        progressTween = null;
      }
    })
      .to(section1, {
        xPercent: -100,
        yPercent: 0,
        autoAlpha: 0.2,
        duration: SECTION2_ENTER_SLIDE_DURATION,
        ease: SECTION_TRANSITION_EASE
      }, 0)
      .to(section2, {
        xPercent: 0,
        yPercent: 0,
        autoAlpha: 1,
        duration: SECTION2_ENTER_SLIDE_DURATION,
        ease: SECTION_TRANSITION_EASE
      }, 0);
  };

  const returnToSection1Bottom = (self) => {
    isAnimatingSection2Transition = true;
    section2TransitionLockProgress = pSection2Ready;
    clearSection2TransitionUnlockTimer();
    progressTween?.kill();
    progressTween = null;

    setScrollToProgress(self, pSection2Ready);
    hasScrollCueBeenDismissed = true;
    hideScrollCue();
    isReturningFromSection2.value = true;
    isSection1Active.value = true;
    // Settled off while returning so drop-in CSS isn't overridden by settled transforms.
    isSection1Settled.value = false;
    isSection2Active.value = true;
    showBottomAnnotations.value = false;

    // Land at reveal-done: above the section2 trigger, full reveal (no mid-reveal
    // jump when scrolling forward into section2 again).
    const pReturnLand = pRevealDone;
    const revealY = -getReveal();
    const leafY = getIncomingLeafParallax();

    // Both panels travel down by exactly one screen: section2 drops out of the
    // bottom while section1 arrives from the top, at the same speed, so it reads
    // as one surface sliding rather than two separate events.
    //
    // Driven in pixels, not yPercent: the global `section { margin: 10vh 0 }`
    // leaves section1's box a screen minus 180px tall, while section2 sets its
    // own `height: 100vh` — so a percentage would move the two different
    // distances and they would drift apart mid-slide.
    const pushDistance = window.innerHeight;

    setSectionShell(section1, { xPercent: 0, yPercent: 0, autoAlpha: 1, zIndex: 11 });
    setSectionShell(section2, { xPercent: 0, yPercent: 0, autoAlpha: 1, zIndex: 12 });
    gsap.set(section1, { y: -pushDistance });
    gsap.set(section1Inner, { y: revealY });
    gsap.set(incomingLeaves, { y: leafY });
    gsap.set(section2ProjectsTrack, { x: 0 });

    // Same duration as the forward handoff, so the two directions feel matched.
    const returnDuration = SECTION_EXIT_DURATION;

    progressTween = gsap.timeline({
      onComplete: () => {
        hasEnteredSection2 = false;
        isAnimatingSection2Transition = false;
        clearSection2TransitionUnlockTimer();

        setScrollToProgress(self, pReturnLand);
        setTimelineProgress(pReturnLand);
        setSectionShell(section1, { xPercent: 0, yPercent: 0, autoAlpha: 1 });
        setSectionShell(section2, { xPercent: 100, yPercent: 0, autoAlpha: 0 });
        gsap.set(section1Inner, { y: revealY });
        gsap.set(incomingLeaves, { y: leafY });
        gsap.set(section2ProjectsTrack, { x: 0 });

        hasBottomAnnotationsAppeared = true;
        showBottomAnnotations.value = true;
        isReturningFromSection2.value = false;
        isSection1Active.value = true;
        isSection1Settled.value = true;
        isSection2Active.value = false;
        progressTween = null;
      }
    })
      .to(section2, {
        y: pushDistance,
        duration: returnDuration,
        ease: SECTION_TRANSITION_EASE
      }, 0)
      .to(section1, {
        y: 0,
        duration: returnDuration,
        ease: SECTION_TRANSITION_EASE
      }, 0);
  };

  // The footer band rises from the bottom and pushes the pinned panel up by
  // exactly its own height, so the two edges stay welded. Triggered and locked
  // like every other boundary rather than scrubbed, so a small scroll plays the
  // whole move.
  const startFooterEnterTransition = (self) => {
    isAnimatingFooterTransition = true;
    footerTransitionLockProgress = pFooterStart;
    clearFooterTransitionUnlockTimer();
    progressTween?.kill();
    progressTween = null;

    setScrollToProgress(self, pFooterStart);
    setTimelineProgress(pFooterStart);

    const pushDistance = getFooterBandHeight();
    gsap.set(section2, { y: 0 });
    gsap.set(section3Footer, { xPercent: 0, yPercent: 100, y: 0 });

    progressTween = gsap.timeline({
      onComplete: () => {
        gsap.set(section2, { y: -pushDistance });
        gsap.set(section3Footer, { xPercent: 0, yPercent: 0, y: 0 });
        footerTransitionLockProgress = pFooterReady;
        setScrollToProgress(self, pFooterReady);
        setTimelineProgress(pFooterReady);
        showBackToBeginning.value = true;

        afterGestureSettles(() => {
          hasEnteredFooter = true;
          isAnimatingFooterTransition = false;
        }, (timer) => { footerTransitionUnlockTimer = timer; });
        progressTween = null;
      }
    })
      .to(section2, {
        y: -pushDistance,
        duration: SECTION_EXIT_DURATION,
        ease: SECTION_TRANSITION_EASE
      }, 0)
      .to(section3Footer, {
        yPercent: 0,
        duration: SECTION_ENTER_DURATION,
        ease: SECTION_TRANSITION_EASE
      }, 0);
  };

  const returnFromFooter = (self) => {
    isAnimatingFooterTransition = true;
    footerTransitionLockProgress = pFooterReady;
    clearFooterTransitionUnlockTimer();
    progressTween?.kill();
    progressTween = null;

    setScrollToProgress(self, pFooterReady);
    setTimelineProgress(pFooterReady);

    const pushDistance = getFooterBandHeight();
    gsap.set(section2, { y: -pushDistance });
    gsap.set(section3Footer, { xPercent: 0, yPercent: 0, y: 0 });
    showBackToBeginning.value = false;

    progressTween = gsap.timeline({
      onComplete: () => {
        hasEnteredFooter = false;
        isAnimatingFooterTransition = false;
        clearFooterTransitionUnlockTimer();

        gsap.set(section2, { y: 0 });
        gsap.set(section3Footer, { xPercent: 0, yPercent: 100, y: 0 });
        footerTransitionLockProgress = pFooterReturnLand;
        setScrollToProgress(self, pFooterReturnLand);
        setTimelineProgress(pFooterReturnLand);
        progressTween = null;
      }
    })
      .to(section2, {
        y: 0,
        duration: SECTION_ENTER_DURATION,
        ease: SECTION_TRANSITION_EASE
      }, 0)
      .to(section3Footer, {
        yPercent: 100,
        duration: SECTION_EXIT_DURATION,
        ease: SECTION_TRANSITION_EASE
      }, 0);
  };

  const startHeroExit = (self) => {
    isLockingHeroExit = true;
    setScrollToProgress(self, pHeroOut);
    isSection1Active.value = true;
    isSection1Settled.value = false;
    isSection2Active.value = false;
    hideScrollCue();
    showBottomAnnotations.value = false;
    hasBottomAnnotationsAppeared = false;
    clearTimeout(heroExitUnlockTimer);
    animateTimelineToProgress(pHeroOut, EXIT_ANIMATION_DURATION, () => {
      afterGestureSettles(() => {
        hasEnteredSection1Start = true;
        isLockingHeroExit = false;
        setScrollToProgress(self, pHeroOut);
        setTimelineProgress(pHeroOut);
      }, (timer) => { heroExitUnlockTimer = timer; });
    });
  };

  // "Back to beginning": the current panel drops away, then every scene is
  // hard-reset to the hero rather than replaying each transition in reverse.
  const resetToHero = () => {
    isAnimatingSection2Transition = false;
    isAnimatingFooterTransition = false;
    isHeroScrollReturn = false;
    isLockingHeroExit = false;
    hasEnteredSection1Start = false;
    hasEnteredSection2 = false;
    hasEnteredFooter = false;
    hasScrollCueBeenDismissed = false;
    hasBottomAnnotationsAppeared = false;
    clearSection2TransitionUnlockTimer();
    clearFooterTransitionUnlockTimer();
    clearTimeout(heroExitUnlockTimer);
    heroExitUnlockTimer = null;

    showBottomAnnotations.value = false;
    isSection1Active.value = false;
    isSection1Settled.value = false;
    isSection2Active.value = false;
    showBackToBeginning.value = false;
    isReturningFromSection2.value = false;
    hideScrollCue();

    gsap.set(hero, { xPercent: 0, yPercent: 0, y: 0, autoAlpha: 1, clearProps: 'zIndex' });
    setSectionShell(section1, { xPercent: 0, yPercent: 0, autoAlpha: 1 });
    setSectionShell(section2, { xPercent: 100, yPercent: 0, autoAlpha: 0 });
    gsap.set(section2, { y: 0 });
    if (section3Footer) gsap.set(section3Footer, { xPercent: 0, yPercent: 100, y: 0 });
    gsap.set(section1Inner, { y: 0 });
    gsap.set(incomingLeaves, { y: 0 });
    gsap.set(section2ProjectsTrack, { x: 0 });

    setTimelineProgress(0);
    pageScrollTrigger?.scroll(pageScrollTrigger.start);
    progressTween = null;
  };

  backToBeginningHandler = () => {
    if (!pageScrollTrigger || !scrollTimeline) return;
    progressTween?.kill();
    isAnimatingFooterTransition = true;
    footerTransitionLockProgress = pageScrollTrigger.progress;

    progressTween = gsap.to(section2, {
      yPercent: 100,
      autoAlpha: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: resetToHero
    });
  };

  scrollTimeline = gsap.timeline({ paused: true });

  scrollTimeline
    .to(hero, { xPercent: -120, ease: 'power3.in', duration: HERO_OUT }, 0)
    .to(section1Inner, { y: () => -getReveal(), ease: 'none', duration: REVEAL })
    .to(incomingLeaves, { y: () => getIncomingLeafParallax(), ease: 'none', duration: REVEAL }, '<')
    .to(section1Inner, { y: () => -getReveal(), ease: 'none', duration: CUE_HOLD })
    .to(incomingLeaves, { y: () => getIncomingLeafParallax(), ease: 'none', duration: CUE_HOLD }, '<')
    // Placeholder durations keep progress math (pSection2Start / pSection2Ready)
    // in sync. The visible handoff is played by startSection2EnterTransition.
    .to({}, { duration: SECTION_EXIT_DURATION })
    .to({}, { duration: 0 }, '<')
    // fromTo, not to: every refresh invalidates the timeline, and a plain `to`
    // would re-read its start from wherever the row sits at that moment — a
    // refresh at the end of the row froze it there for the whole way back.
    .fromTo(section2ProjectsTrack, { x: 0 }, { x: () => -getSection2HorizontalScroll(), ease: 'none', duration: SECTION2_HORIZONTAL_SCROLL })
    // Arming room, the footer handoff (played by startFooterEnterTransition) and
    // the clamped tail — placeholders that only keep the progress math right.
    .to({}, { duration: FOOTER_LEAD })
    .to({}, { duration: FOOTER_TRANSITION })
    .to({}, { duration: FOOTER_TAIL });

  // Scroll chooses the next state, while exits play as fixed-duration animations:
  //  1. small scroll -> hero snaps out to the left, section1 enters
  //  2. section1 cue appears at its threshold
  //  3. at section1 bottom, scroll triggers section1 exit + section2 enter (scroll locked)
  //  4. after a brief lock, horizontal project scroll begins
  pageScrollTrigger = ScrollTrigger.create({
    trigger: '.main-content',
    start: 'top top',
    end: () => `+=${getPinnedScrollDistance()}`,
    pin: true,
    pinSpacing: true,
    invalidateOnRefresh: true,
    // No snap: every boundary is already a triggered, locked transition, and a
    // snap tween landing after the gesture fought those locks.
    onRefresh: () => {
      scrollTimeline?.invalidate();
      updateAboutHint();
    },
    onUpdate: (self) => {
      const p = self.progress;

      // The loader is still up over a restored position: keep it parked.
      if (isHoldingRestoredScroll) {
        reapplyRestoredScroll?.();
        updateAboutHint();
        return;
      }

      if (isLockingHeroExit) {
        setScrollToProgress(self, pHeroOut);
        isSection1Active.value = true;
        isSection1Settled.value = false;
        isSection2Active.value = false;
        hideScrollCue();
        showBottomAnnotations.value = false;
        hasBottomAnnotationsAppeared = false;
        return;
      }

      if (isAnimatingSection2Transition) {
        setScrollToProgress(self, section2TransitionLockProgress);
        return;
      }

      if (isAnimatingFooterTransition) {
        setScrollToProgress(self, footerTransitionLockProgress);
        return;
      }

      // Scrolling up out of section1 is a plain scroll rather than a triggered
      // animation: the hero sits one screen (plus a gap) above section1 and
      // both follow the scroll position directly, in either direction.
      if (hasEnteredSection1Start && p < pHeroOut && (isHeroScrollReturn || self.direction < 0)) {
        if (!isHeroScrollReturn) {
          isHeroScrollReturn = true;
          progressTween?.kill();
          progressTween = null;
          clearTimeout(heroExitUnlockTimer);
          heroExitUnlockTimer = null;
          setTimelineProgress(pHeroOut);
          gsap.set(section1Inner, { y: 0 });
          gsap.set(incomingLeaves, { y: 0 });
          setSectionShell(section2, { xPercent: 100, yPercent: 0, autoAlpha: 0 });
          isSection2Active.value = false;
          hideScrollCue();
          showBottomAnnotations.value = false;
          hasBottomAnnotationsAppeared = false;
        }

        const travel = window.innerHeight + getHeroReturnGap();
        const offset = travel * (p / pHeroOut);
        gsap.set(hero, { xPercent: 0, y: -offset });
        gsap.set(section1, { xPercent: 0, autoAlpha: 1, y: travel - offset });

        if (p <= 0.001) {
          isHeroScrollReturn = false;
          hasEnteredSection1Start = false;
          hasEnteredSection2 = false;
          hasScrollCueBeenDismissed = false;
          isSection1Active.value = false;
          isSection1Settled.value = false;
          gsap.set(hero, { y: 0 });
          gsap.set(section1, { y: 0 });
          setTimelineProgress(0);
        }
        return;
      }

      if (isHeroScrollReturn) {
        // Scrolled back down into section1 before reaching the hero.
        isHeroScrollReturn = false;
        gsap.set(hero, { xPercent: -120, y: 0 });
        gsap.set(section1, { xPercent: 0, autoAlpha: 1, y: 0 });
      }

      if (p < 0.02) {
        hasEnteredSection1Start = false;
        hasEnteredSection2 = false;
        hasScrollCueBeenDismissed = false;
        isLockingHeroExit = false;
        isAnimatingSection2Transition = false;
        isAnimatingFooterTransition = false;
        hasEnteredFooter = false;
        clearFooterTransitionUnlockTimer();
        isSection1Settled.value = false;
        clearSection2TransitionUnlockTimer();
        isSection2Active.value = false;
        showBackToBeginning.value = false;
        gsap.set(section2, { y: 0 });
        if (section3Footer) gsap.set(section3Footer, { xPercent: 0, yPercent: 100, y: 0 });
        hideScrollCue();
        showBottomAnnotations.value = false;
        hasBottomAnnotationsAppeared = false;
        progressTween?.kill();
        progressTween = null;
        clearTimeout(heroExitUnlockTimer);
        heroExitUnlockTimer = null;
      }

      if (self.direction > 0 && !hasEnteredSection1Start && p > SCROLL_TRIGGER_THRESHOLD) {
        startHeroExit(self);
        return;
      }

      if (self.direction > 0 && hasEnteredSection1Start && !hasEnteredSection2 && !isAnimatingSection2Transition && p >= pSection2Start - 0.002) {
        startSection2EnterTransition(self);
        return;
      }

      if (self.direction < 0 && hasEnteredSection2 && !hasEnteredFooter && !isAnimatingSection2Transition && p <= pSection2Ready + 0.002) {
        returnToSection1Bottom(self);
        return;
      }

      if (section3Footer && self.direction > 0 && hasEnteredSection2 && !hasEnteredFooter && !isAnimatingFooterTransition && p >= pFooterStart - 0.002) {
        startFooterEnterTransition(self);
        return;
      }

      if (self.direction < 0 && hasEnteredFooter && !isAnimatingFooterTransition && p <= pFooterReady - 0.002) {
        returnFromFooter(self);
        return;
      }

      let effectiveProgress = p;

      if (!hasEnteredSection2 && p > pSection2Start) {
        setScrollToProgress(self, pSection2Start);
        effectiveProgress = pSection2Start;
      }

      if (!hasEnteredFooter && p > pFooterStart) {
        setScrollToProgress(self, pFooterStart);
        effectiveProgress = pFooterStart;
      }

      if (hasEnteredFooter && p > pFooterReady) {
        setScrollToProgress(self, pFooterReady);
        effectiveProgress = pFooterReady;
      }

      if (p < pSection2Start && self.direction < 0) {
        hasEnteredSection2 = false;
      }

      scrubTimelineTo(effectiveProgress);

      isSection1Active.value = effectiveProgress >= pHeroOut * 0.4 && effectiveProgress < pSection2Ready;
      updateScrollCueVisibility(effectiveProgress);
      if (hasEnteredSection1Start && effectiveProgress >= pBottomAnnotations) {
        hasBottomAnnotationsAppeared = true;
      }
      showBottomAnnotations.value = hasBottomAnnotationsAppeared && effectiveProgress >= pHeroOut;
      isSection2Active.value = effectiveProgress >= pSection2EnterStart && hasEnteredSection2;
      updateAboutHint();
    }
  });

  // Where the reader is, as a stage of the pinned scroll. The stages with a
  // scrubbed range (section1, the row) keep their exact progress; the triggered
  // ones are a single rest point.
  getScrollSnapshot = () => {
    const progress = pageScrollTrigger?.progress ?? 0;
    if (hasEnteredFooter) return { stage: 'footer' };
    if (hasEnteredSection2 || isSection2Active.value) return { stage: 'section2', progress };
    if (hasEnteredSection1Start || isLockingHeroExit) return { stage: 'section1', progress };
    return { stage: 'hero' };
  };

  // Rebuilds a stage's rest state directly — every flag, shell and panel a
  // forward scroll would have left behind — with no transitions played. Kept
  // clear of each boundary's trigger point so parking there fires nothing.
  const clampProgress = (value, min, max) => Math.min(max, Math.max(min, Number(value) || 0));
  const getRestoreProgress = ({ stage, progress }) => ({
    section1: () => clampProgress(progress, pHeroOut + 0.004, pSection2Start - 0.01),
    section2: () => clampProgress(progress, pSection2Ready + 0.01, pFooterStart - 0.01),
    // No longer saved, but an older save may still say so: land at the end of the row.
    playground: () => pSection2ScrollDone,
    columns: () => pSection2ScrollDone,
    footer: () => pFooterReady
  }[stage]?.() ?? 0);

  const applyRestoredStage = (saved) => {
    const stage = saved.stage;
    const target = getRestoreProgress(saved);
    const isPast = (name) => {
      const order = ['hero', 'section1', 'section2', 'playground', 'columns', 'footer'];
      return order.indexOf(stage) >= order.indexOf(name);
    };

    hasEnteredSection1Start = isPast('section1');
    hasEnteredSection2 = isPast('section2');
    hasEnteredFooter = isPast('footer');
    hasScrollCueBeenDismissed = isPast('section2');
    hasBottomAnnotationsAppeared = isPast('section1');

    setTimelineProgress(target);
    setScrollToProgress(pageScrollTrigger, target);

    if (isPast('section2')) {
      setSectionShell(section1, { xPercent: -100, yPercent: 0, autoAlpha: 0.2 });
      setSectionShell(section2, { xPercent: 0, yPercent: 0, autoAlpha: 1 });
    }
    if (section3Footer) {
      const footerHeight = getFooterBandHeight();
      gsap.set(section2, { y: isPast('footer') ? -footerHeight : 0 });
      gsap.set(section3Footer, { xPercent: 0, yPercent: isPast('footer') ? 0 : 100, y: 0 });
    }

    // Settled shows section1 in its end state, skipping the statement's entrance.
    isSection1Active.value = stage === 'section1';
    isSection1Settled.value = stage === 'section1';
    showBottomAnnotations.value = stage === 'section1';
    isSection2Active.value = isPast('section2');
    showBackToBeginning.value = isPast('footer');
    updateScrollCueVisibility(target);
  };

  // Where a group in the section2 row sits on the pinned scroll: the row shifted
  // so the group lands where the first one starts.
  const getSection2GroupProgress = (id) => {
    const group = document.getElementById(id);
    const first = document.getElementById('uiux');
    const distance = getSection2HorizontalScroll();
    if (!group || !first || !distance) return pSection2Ready;
    const shift = group.getBoundingClientRect().left - first.getBoundingClientRect().left;
    return pSection2Ready + (pSection2ScrollDone - pSection2Ready) * clampProgress(shift / distance, 0, 1);
  };

  const savedStage = typeof savedScroll?.stage === 'string' ? savedScroll : null;
  if (savedStage && savedStage.stage !== 'hero' && getRestoreProgress(savedStage) > 0) {
    skipIntro();
    loaderExit.value = 'fade';
    applyRestoredStage(savedStage);
    reapplyRestoredScroll = () => {
      setScrollToProgress(pageScrollTrigger, getRestoreProgress(savedStage));
    };
    // Images still loading behind the loader change the pinned distance, which
    // moves every stage; land on the same stage again after each re-measure,
    // until the reader takes over.
    const onRefresh = () => {
      if (hasReaderScrolled) return;
      applyRestoredStage(savedStage);
    };
    ScrollTrigger.addEventListener('refresh', onRefresh);
    restoreListenersCleanup = () => ScrollTrigger.removeEventListener('refresh', onRefresh);
  } else {
    reapplyRestoredScroll = () => setScrollToProgress(pageScrollTrigger, 0);
  }
  isHoldingRestoredScroll = true;
  let hasReaderScrolled = false;

  // Hero tags. From the hero, AI Designer plays the same exit a scroll would;
  // every other jump fades the page out, rebuilds the target stage's rest
  // state (as a reload restore does) and fades back in.
  const pinnedContent = document.querySelector('.main-content');
  jumpToSectionHandler = (target) => {
    if (!pageScrollTrigger || !scrollTimeline || isHoldingRestoredScroll) return;
    if (isAnimatingSection2Transition || isAnimatingFooterTransition || isLockingHeroExit) return;
    hasReaderScrolled = true;
    // The PLAY note goes the moment a jump starts, not when the page fades.
    isAboutIn.value = false;

    if (target === 'section1' && !hasEnteredSection1Start && !isHeroScrollReturn) {
      startHeroExit(pageScrollTrigger);
      return;
    }

    const saved = target === 'section1'
      ? { stage: 'section1', progress: pHeroOut }
      : target === 'hero'
        ? null
        : { stage: 'section2', progress: getSection2GroupProgress(target) };

    progressTween?.kill();
    isAboutHintSuppressed = true;
    // Fallback in case the fade is killed before its onComplete (0.3s + 0.45s).
    setTimeout(() => {
      isAboutHintSuppressed = false;
    }, 900);
    // Borrow the footer lock so scroll input is held for the whole fade.
    isAnimatingFooterTransition = true;
    footerTransitionLockProgress = pageScrollTrigger.progress;

    progressTween = gsap.timeline({
      onComplete: () => {
        gsap.set(pinnedContent, { clearProps: 'opacity,visibility' });
        isAnimatingFooterTransition = false;
        progressTween = null;
        isAboutHintSuppressed = false;
        updateAboutHint();
      }
    })
      .to(pinnedContent, {
        autoAlpha: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          // Back to the very start: the same reset the parked button uses.
          if (!saved) {
            resetToHero();
            return;
          }
          // AI Design starts over: every scene is reset, then the page parks
          // where the hero has just left, with section1 not yet active, so its
          // entrance (leaves + statement) plays again from the top as it fades in.
          if (target === 'section1') {
            resetToHero();
            setTimelineProgress(pHeroOut);
            setScrollToProgress(pageScrollTrigger, pHeroOut);
            footerTransitionLockProgress = pHeroOut;
            hasEnteredSection1Start = true;
            requestAnimationFrame(() => {
              isSection1Active.value = true;
            });
            return;
          }
          isHeroScrollReturn = false;
          isReturningFromSection2.value = false;
          clearTimeout(heroExitUnlockTimer);
          heroExitUnlockTimer = null;
          clearSection2TransitionUnlockTimer();
          clearFooterTransitionUnlockTimer();
          gsap.set(hero, { xPercent: -120, y: 0 });
          setSectionShell(section1, { xPercent: 0, yPercent: 0, autoAlpha: 1 });
          setSectionShell(section2, { xPercent: 100, yPercent: 0, autoAlpha: 0 });
          footerTransitionLockProgress = getRestoreProgress(saved);
          applyRestoredStage(saved);
        }
      })
      .to(pinnedContent, { autoAlpha: 1, duration: 0.45, ease: 'power2.out' });
  };

  section2HorizontalWheelHandler = (event) => {
    if (!pageScrollTrigger || !scrollTimeline) return;
    if (isHoldingRestoredScroll) {
      event.preventDefault();
      return;
    }
    hasReaderScrolled = true;
    lastScrollInputAt = performance.now();

    // Swallow input while a transition holds the page, rather than letting the
    // browser scroll and then yanking it back — that tug read as jitter.
    if (isAnimatingSection2Transition || isAnimatingFooterTransition || isLockingHeroExit) {
      event.preventDefault();
      return;
    }

    const { x, y } = getWheelDelta(event);
    if (Math.abs(x) <= Math.abs(y) || Math.abs(x) < 1) return;

    // A sideways swipe drives the page anywhere on the index, not just along
    // the project row: right moves forward, left moves back, exactly as a
    // vertical scroll would. Along the row it is geared down so the cards track
    // the fingers; elsewhere it maps one to one.
    const progress = pageScrollTrigger.progress;
    const isInHorizontalRange = progress >= pSection2Ready && progress <= pSection2ScrollDone;
    const horizontalScrollScale = isInHorizontalRange ? 0.55 : 1;
    const currentScroll = pageScrollTrigger.scroll();
    const nextScroll = currentScroll + (x * horizontalScrollScale);

    if (nextScroll > pageScrollTrigger.end || nextScroll < pageScrollTrigger.start) {
      event.preventDefault();
      progressTween?.kill();
      progressTween = null;
      window.scrollTo(0, nextScroll);
      return;
    }

    event.preventDefault();
    progressTween?.kill();
    progressTween = null;
    pageScrollTrigger.scroll(nextScroll);
  };

  window.addEventListener('wheel', section2HorizontalWheelHandler, { passive: false });

  updateAboutHint();

  if (window.matchMedia('(max-width: 720px)').matches && section3Footer) {
    const footerTarget = section3Footer.querySelector('footer') || section3Footer;
    section3FooterObserver = new IntersectionObserver(([entry]) => {
      showBackToBeginning.value = entry.isIntersecting;
    }, { threshold: 0.12 });
    section3FooterObserver.observe(footerTarget);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('pagehide', saveScroll);
  restoreListenersCleanup?.();
  restoreListenersCleanup = null;
  getScrollSnapshot = null;
  reapplyRestoredScroll = null;
  clearTimeout(introDoneTimer);
  removeMobileHeroTransitionListener?.();
  clearTimeout(heroExitUnlockTimer);
  clearTimeout(section2TransitionUnlockTimer);
  clearTimeout(footerTransitionUnlockTimer);
  progressTween?.kill();
  scrubTween?.kill();
  scrubTween = null;
  if (section2HorizontalWheelHandler) {
    window.removeEventListener('wheel', section2HorizontalWheelHandler);
  }
  pageScrollTrigger?.kill();
  scrollTimeline?.kill();
  progressTween = null;
  section2HorizontalWheelHandler = null;
  backToBeginningHandler = null;
  jumpToSectionHandler = null;
  section3FooterObserver?.disconnect();
  section3FooterObserver = null;
  pageScrollTrigger = null;
  scrollTimeline = null;
});

useHead({
  title: 'Carol Yu',
  htmlAttrs: {
    class: computed(() => ({
      loading: 'intro intro-paused',
      playing: 'intro',
      done: ''
    }[introState.value]))
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' },
    { rel: 'stylesheet', href: '/css/index.css' }
  ],
  script: [
    // Runs before first paint so a mid-page reload never flashes the loader mark.
    {
      key: 'home-restore-mark',
      tagPosition: 'head',
      innerHTML: `(function(){try{var n=performance.getEntriesByType&&performance.getEntriesByType('navigation')[0];if(!n||(n.type!=='reload'&&n.type!=='back_forward'))return;var s=JSON.parse(sessionStorage.getItem('home-scroll-position')||'null');if(!s)return;if((s.stage&&s.stage!=='hero')||(typeof s.y==='number'&&s.y>40)){var e=document.createElement('style');e.id='intro-content-exit-style';e.textContent='.intro-loader__mark,.intro-loader__flip{visibility:hidden!important;opacity:0!important}';document.head.appendChild(e);}}catch(t){}})();`
    },
    { src: '/js/script.js', body: true },
    { src: '/js/index.js', body: true }
  ]
});
</script>
