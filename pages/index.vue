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
      :class="{ 'is-active': isSection1Active, 'is-settled': isSection1Settled }">
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
            <img class="projects-item-image" src="/assets/images/covers/placeholder.png" alt="interTabs project cover">
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
            <img src="/assets/images/covers/placeholder.png" alt="WeChat Channels project cover">
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
          <span>AI Semantic<br>Search</span>
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
        <img class="incoming-scroll-cue-arrow" src="/assets/icons/scroll-arrow.png" alt="">
      </div>
    </section>
    <section id="section2" class="section2" :class="{ 'is-active': isSection2Active }"
      aria-label="Smart UI/UX for Real-World Problems">
      <div class="section2-projects">
        <div class="projects-container">
          <div class="section2-group-gap section2-group-gap--lead" aria-hidden="true"></div>
          <div class="section2-group">
            <div class="section2-heading">
              <h2>Smart UI/UX for Real-World Problems</h2>
              <p>Interfaces that turn practical product problems into clear, delightful user experiences.</p>
            </div>
            <div class="section2-flower-field" aria-hidden="true">
              <div class="section2-flower section2-flower--top-left">
                <svg class="section2-flower__stem" viewBox="0 0 120 720">
                  <path d="M62 718 C60 540 56 360 70 200 C74 130 82 70 96 12" />
                </svg>
                <img class="section2-flower__head" src="/assets/images/section2/flower-corner-a.png" alt="">
              </div>
              <div class="section2-flower section2-flower--top-right">
                <svg class="section2-flower__stem" viewBox="0 0 120 700">
                  <path d="M58 698 C62 520 66 340 55 190 C52 120 44 68 30 12" />
                </svg>
                <img class="section2-flower__head" src="/assets/images/section2/flower-corner-b.png" alt="">
              </div>
              <div class="section2-flower section2-flower--bottom-left">
                <svg class="section2-flower__stem" viewBox="0 0 160 740">
                  <path d="M82 738 C76 560 70 380 92 210 C102 140 118 76 138 12" />
                </svg>
                <img class="section2-flower__head" src="/assets/images/section2/flower-crown.png" alt="">
              </div>
              <div class="section2-flower section2-flower--bottom-right">
                <svg class="section2-flower__stem" viewBox="0 0 210 720">
                  <path d="M96 718 C108 540 112 360 96 200 C88 130 72 72 48 12" />
                </svg>
                <img class="section2-flower__head" src="/assets/images/section2/flower-leaf.png" alt="">
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
                <video class="projects-item-image" src="/assets/images/covers/albertplus.mov"
                  poster="/assets/images/covers/albertplus.webp" autoplay muted loop playsinline preload="metadata">
                </video>
              </a>
            </div>
          </div>

          <div class="section2-group-gap" aria-hidden="true"></div>

          <div class="section2-group">
            <div class="section2-heading">
              <h2>Beyond Static Interfaces</h2>
              <p>Playful, immersive experiences that push interfaces beyond traditional screens.</p>
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
const isSection1Settled = ref(false);
// scroll cue appears once section1 is settled, inviting the user to keep scrolling
const showScrollCue = ref(false);
const showBottomAnnotations = ref(false);
// section2 plays its own entrance once it reaches the viewport threshold
const isSection2Active = ref(false);

let scrollTimeline = null;
let pageScrollTrigger = null;
let heroExitUnlockTimer = null;
let progressTween = null;
let section2HorizontalWheelHandler = null;
let section2TransitionUnlockTimer = null;

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const hero = document.querySelector('#hero');
  const section1 = document.querySelector('#section1');
  const section1Inner = document.querySelector('.section1-inner');
  const incomingLeaves = document.querySelector('.incoming-leaves');
  const section2 = document.querySelector('#section2');
  const projects = document.querySelector('.incoming-projects .projects-container');
  const section2Projects = document.querySelector('.section2-projects');
  const section2ProjectsTrack = document.querySelector('.section2-projects .projects-container');
  const section1BottomSpace = 300;
  const SECTION1_INTRO_LOCK_DURATION = 1400;
  const EXIT_ANIMATION_DURATION = 0.75;
  const SECTION_EXIT_DURATION = 0.8;
  const SECTION_ENTER_DURATION = 0.8;
  const SECTION2_TRANSITION_ANIM_DURATION = Math.max(SECTION_EXIT_DURATION, SECTION_ENTER_DURATION);
  const SECTION2_POST_TRANSITION_SCROLL_LOCK = 100;
  const SCROLL_TRIGGER_THRESHOLD = 0.01;
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

  const getPinnedScrollDistance = () => {
    return Math.round((window.innerHeight * 3) + (getSection2HorizontalScroll() * SECTION2_SCROLL_SLOWDOWN));
  };

  // Starting positions for the pinned hero/section1 moment.
  gsap.set(hero, { xPercent: 0 });
  gsap.set(section1, { xPercent: 0, autoAlpha: 1 });
  gsap.set(section1Inner, { y: 0 });
  gsap.set(incomingLeaves, { y: 0 });
  gsap.set(section2ProjectsTrack, { x: 0 });
  gsap.set(section2, { xPercent: 100, autoAlpha: 0 });

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
  const SECTION2_HORIZONTAL_SCROLL = 6;
  const PARALLEL_EXIT_ENTER = SECTION2_TRANSITION_ANIM_DURATION;
  const total = HERO_OUT + REVEAL + CUE_HOLD + PARALLEL_EXIT_ENTER + SECTION2_HORIZONTAL_SCROLL;
  const pHeroOut = HERO_OUT / total;
  const pRevealDone = (HERO_OUT + REVEAL) / total;
  const pSection2Start = (HERO_OUT + REVEAL + CUE_HOLD) / total;
  const pSection2EnterStart = pSection2Start;
  const pSection2Ready = (HERO_OUT + REVEAL + CUE_HOLD + PARALLEL_EXIT_ENTER) / total;
  const pBottomAnnotations = pHeroOut + ((pRevealDone - pHeroOut) * 0.55);
  const pScrollCueShow = pRevealDone;
  const pScrollCueHide = pHeroOut + ((pRevealDone - pHeroOut) * 0.88);
  let hasEnteredSection1Start = false;
  let hasEnteredSection2 = false;
  let hasBottomAnnotationsAppeared = false;
  let isLockingHeroExit = false;
  let isAnimatingHeroReturn = false;
  let isAnimatingSection2Transition = false;
  let section2TransitionLockProgress = 0;
  const preserveSection1Reveal = () => {
    gsap.set(section1Inner, { y: -getReveal() });
    gsap.set(incomingLeaves, { y: getIncomingLeafParallax() });
  };

  const setScrollToProgress = (self, progress) => {
    const scrollPosition = self.start + (self.end - self.start) * progress;
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
    scrollTimeline?.progress(progress);
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

  const startSection2EnterTransition = (self) => {
    isAnimatingSection2Transition = true;
    isSection1Settled.value = false;
    section2TransitionLockProgress = pSection2Start;
    clearSection2TransitionUnlockTimer();
    setScrollToProgress(self, pSection2Start);
    setTimelineProgress(pSection2Start);
    hasScrollCueBeenDismissed = true;
    progressTween?.kill();

    animateTimelineToProgress(
      pSection2Ready,
      SECTION2_TRANSITION_ANIM_DURATION,
      () => {
        section2TransitionLockProgress = pSection2Ready;
        setScrollToProgress(self, pSection2Ready);
        setTimelineProgress(pSection2Ready);
        isSection2Active.value = true;
        isSection1Active.value = false;
        hideScrollCue();

        section2TransitionUnlockTimer = window.setTimeout(() => {
          hasEnteredSection2 = true;
          isAnimatingSection2Transition = false;
          section2TransitionUnlockTimer = null;
        }, SECTION2_POST_TRANSITION_SCROLL_LOCK);
      },
      (progress) => {
        if (progress >= pRevealDone) {
          preserveSection1Reveal();
        }
        isSection2Active.value = progress >= pSection2EnterStart;
      }
    );
  };

  const returnToSection1Bottom = (self) => {
    hasEnteredSection2 = false;
    isAnimatingSection2Transition = false;
    clearSection2TransitionUnlockTimer();
    progressTween?.kill();
    progressTween = null;

    setScrollToProgress(self, pSection2Start);
    setTimelineProgress(pSection2Start);
    preserveSection1Reveal();
    hasBottomAnnotationsAppeared = true;
    showBottomAnnotations.value = true;
    hasScrollCueBeenDismissed = true;
    hideScrollCue();
    isSection1Active.value = true;
    isSection1Settled.value = true;
    isSection2Active.value = false;
  };

  scrollTimeline = gsap.timeline({ paused: true });

  scrollTimeline
    .to(hero, { xPercent: -120, ease: 'power3.in', duration: HERO_OUT }, 0)
    .to(section1Inner, { y: () => -getReveal(), ease: 'none', duration: REVEAL })
    .to(incomingLeaves, { y: () => getIncomingLeafParallax(), ease: 'none', duration: REVEAL }, '<')
    .to(section1Inner, { y: () => -getReveal(), ease: 'none', duration: CUE_HOLD })
    .to(incomingLeaves, { y: () => getIncomingLeafParallax(), ease: 'none', duration: CUE_HOLD }, '<')
    .to(section1, { xPercent: -100, autoAlpha: 0.2, ease: 'power2.inOut', duration: SECTION_EXIT_DURATION })
    .to(section2, { xPercent: 0, autoAlpha: 1, ease: 'power2.inOut', duration: SECTION_ENTER_DURATION }, '<')
    .to(section2ProjectsTrack, { x: () => -getSection2HorizontalScroll(), ease: 'none', duration: SECTION2_HORIZONTAL_SCROLL });

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
    snap: {
      snapTo: (value) => {
        if (value > pHeroOut && value < pSection2Start) return value;
        if (value >= pSection2Start) return value;
        return gsap.utils.snap([0, pHeroOut, pRevealDone, pSection2Start, pSection2Ready], value);
      },
      duration: { min: 0.18, max: 0.5 },
      // delay: 0.03,
    },
    onRefresh: () => scrollTimeline?.invalidate(),
    onUpdate: (self) => {
      const p = self.progress;

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
        isSection2Active.value = scrollTimeline.progress() >= pSection2EnterStart;
        return;
      }

      if (isAnimatingHeroReturn) {
        setScrollToProgress(self, pHeroOut);
        isSection1Active.value = true;
        isSection2Active.value = false;
        hideScrollCue();
        showBottomAnnotations.value = false;
        hasBottomAnnotationsAppeared = false;
        return;
      }

      if (self.direction < 0 && hasEnteredSection1Start && p < pHeroOut) {
        isAnimatingHeroReturn = true;
        setScrollToProgress(self, pHeroOut);
        setTimelineProgress(pHeroOut);
        isSection1Active.value = true;
        isSection2Active.value = false;
        hideScrollCue();
        showBottomAnnotations.value = false;
        progressTween?.kill();
        clearTimeout(heroExitUnlockTimer);
        heroExitUnlockTimer = null;

        gsap.set(hero, { xPercent: -120, zIndex: 12 });
        gsap.set(section1, { xPercent: 0, autoAlpha: 1, zIndex: 11 });
        gsap.set(section1Inner, { y: 0 });
        gsap.set(incomingLeaves, { y: 0 });
        gsap.set(section2, { xPercent: 100, autoAlpha: 0 });

        progressTween = gsap.timeline({
          onComplete: () => {
            hasEnteredSection1Start = false;
            hasEnteredSection2 = false;
            hasScrollCueBeenDismissed = false;
            isAnimatingHeroReturn = false;
            isSection1Active.value = false;
            isSection1Settled.value = false;
            isSection2Active.value = false;
            hideScrollCue();
            showBottomAnnotations.value = false;
            hasBottomAnnotationsAppeared = false;
            gsap.set(hero, { xPercent: 0, clearProps: 'zIndex' });
            gsap.set(section1, { xPercent: 0, autoAlpha: 1, clearProps: 'zIndex' });
            setTimelineProgress(0);
            setScrollToProgress(self, 0);
            progressTween = null;
          }
        })
          .to(section1, { xPercent: 100, autoAlpha: 0, ease: 'power3.in', duration: SECTION_EXIT_DURATION }, 0)
          .to(hero, { xPercent: 0, ease: 'power2.out', duration: SECTION_ENTER_DURATION }, SECTION_EXIT_DURATION);
        return;
      }

      if (p < 0.02) {
        hasEnteredSection1Start = false;
        hasEnteredSection2 = false;
        hasScrollCueBeenDismissed = false;
        isLockingHeroExit = false;
        isAnimatingHeroReturn = false;
        isAnimatingSection2Transition = false;
        isSection1Settled.value = false;
        clearSection2TransitionUnlockTimer();
        isSection2Active.value = false;
        hideScrollCue();
        showBottomAnnotations.value = false;
        hasBottomAnnotationsAppeared = false;
        progressTween?.kill();
        progressTween = null;
        clearTimeout(heroExitUnlockTimer);
        heroExitUnlockTimer = null;
      }

      if (self.direction > 0 && !hasEnteredSection1Start && p > SCROLL_TRIGGER_THRESHOLD) {
        isLockingHeroExit = true;
        setScrollToProgress(self, pHeroOut);
        isSection1Active.value = true;
        isSection1Settled.value = false;
        isSection2Active.value = false;
        hideScrollCue();
        showBottomAnnotations.value = false;
        hasBottomAnnotationsAppeared = false;
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

      if (self.direction > 0 && hasEnteredSection1Start && !hasEnteredSection2 && !isAnimatingSection2Transition && p >= pSection2Start - 0.002) {
        startSection2EnterTransition(self);
        return;
      }

      if (self.direction < 0 && hasEnteredSection2 && !isAnimatingSection2Transition && p <= pSection2Ready + 0.002) {
        returnToSection1Bottom(self);
        return;
      }

      let effectiveProgress = p;

      if (!hasEnteredSection2 && p > pSection2Start) {
        setScrollToProgress(self, pSection2Start);
        effectiveProgress = pSection2Start;
      }

      if (p < pSection2Start && self.direction < 0) {
        hasEnteredSection2 = false;
      }

      setTimelineProgress(effectiveProgress);

      if (effectiveProgress >= pRevealDone) {
        preserveSection1Reveal();
      }

      isSection1Active.value = effectiveProgress >= pHeroOut * 0.4 && effectiveProgress < pSection2Ready;
      updateScrollCueVisibility(effectiveProgress);
      if (hasEnteredSection1Start && effectiveProgress >= pBottomAnnotations) {
        hasBottomAnnotationsAppeared = true;
      }
      showBottomAnnotations.value = hasBottomAnnotationsAppeared && effectiveProgress >= pHeroOut;
      isSection2Active.value = effectiveProgress >= pSection2EnterStart && hasEnteredSection2;
    }
  });

  section2HorizontalWheelHandler = (event) => {
    if (!pageScrollTrigger || !scrollTimeline) return;

    if (isAnimatingSection2Transition) {
      event.preventDefault();
      return;
    }

    const { x, y } = getWheelDelta(event);
    if (Math.abs(x) <= Math.abs(y) || Math.abs(x) < 1) return;

    const progress = pageScrollTrigger.progress;
    const isInHorizontalRange = progress >= pSection2Ready && progress <= 1;
    if (!isInHorizontalRange) return;

    const horizontalScrollScale = 0.55;
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
});

onBeforeUnmount(() => {
  clearTimeout(heroExitUnlockTimer);
  clearTimeout(section2TransitionUnlockTimer);
  progressTween?.kill();
  if (section2HorizontalWheelHandler) {
    window.removeEventListener('wheel', section2HorizontalWheelHandler);
  }
  pageScrollTrigger?.kill();
  scrollTimeline?.kill();
  progressTween = null;
  section2HorizontalWheelHandler = null;
  pageScrollTrigger = null;
  scrollTimeline = null;
});

useHead({
  title: 'Carol Yu',
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' },
    { rel: 'stylesheet', href: '/css/index.css' }
  ],
  script: [
    { src: '/js/script.js', body: true },
    { src: '/js/index.js', body: true }
  ]
});
</script>
