<template>
  <AppHeader />
  <div class="main-content">
    <div id="hero" class="hero hero-section" :style="heroStyle">
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

    <section id="section1" class="section1" :class="{ 'is-active': isSection1Active, 'is-leaving-left': isSection2Active }">
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
        </div>
      </div>
      <div class="incoming-scroll-cue" aria-hidden="true">
        <span>scroll</span>
      </div>
    </section>

    <section id="section2" class="section2" :class="{ 'is-active': isSection2Active }"
      aria-label="Smart UI/UX for Real-World Problems">
      <h2>Smart UI/UX for Real-World Problems</h2>
    </section>
  </div>
  <!-- <AppFooter /> -->
</template>

<script setup>
const SCROLL_THRESHOLD = 45;
const SCROLL_COOLDOWN_MS = 850;
const HERO_SECTION = 0;
const SECTION1 = 1;
const SECTION2 = 2;
const currentSection = ref(HERO_SECTION);
const wheelProgress = ref(0);
const scrollCooldownUntil = ref(0);

const isSection1Active = computed(() => currentSection.value >= SECTION1);
const isSection2Active = computed(() => currentSection.value === SECTION2);

const heroStyle = computed(() => ({
  transform: `translateX(${isSection2Active.value ? -220 : isSection1Active.value ? -120 : 0}vw)`
}));

const handleWheel = (event) => {
  const now = window.performance.now();

  if (now < scrollCooldownUntil.value) {
    return;
  }

  wheelProgress.value += event.deltaY;

  if (Math.abs(wheelProgress.value) < SCROLL_THRESHOLD) {
    return;
  }

  const direction = wheelProgress.value > 0 ? 1 : -1;
  const nextSection = Math.max(HERO_SECTION, Math.min(SECTION2, currentSection.value + direction));

  if (nextSection !== currentSection.value) {
    currentSection.value = nextSection;
    scrollCooldownUntil.value = now + SCROLL_COOLDOWN_MS;
  }

  wheelProgress.value = 0;
};

onMounted(() => {
  window.addEventListener('wheel', handleWheel, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('wheel', handleWheel);
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
