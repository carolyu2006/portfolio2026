<template>
  <AppHeader />
  <div class="main-content">
    <div id="hero" class="hero" :style="heroStyle">
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
    <div class="incoming-leaves" :class="{ 'is-active': hasExited }" aria-hidden="true">
      <div class="leaf leaf-1 incoming-leaf incoming-leaf-1"></div>
      <div class="leaf leaf-2 incoming-leaf incoming-leaf-2"></div>
      <div class="leaf leaf-3 incoming-leaf incoming-leaf-3"></div>
      <div class="leaf leaf-4 incoming-leaf incoming-leaf-4"></div>
      <div class="leaf leaf-5 incoming-leaf incoming-leaf-5"></div>
      <div class="leaf leaf-6 incoming-leaf incoming-leaf-6"></div>
    </div>
    <h2 class="incoming-title" :class="{ 'is-active': hasExited }">
      <span
        v-for="(letter, index) in incomingTitleLetters"
        :key="`${letter}-${index}`"
        class="incoming-title-letter"
      >
        {{ letter === ' ' ? '\u00A0' : letter }}
      </span>
    </h2>
  </div>
  <!-- <AppFooter /> -->
</template>

<script setup>
const EXIT_THRESHOLD = 45;
const ENTER_THRESHOLD = -45;
const heroOffset = ref(0);
const wheelProgress = ref(0);
const hasExited = ref(false);
const incomingTitleLetters = [...'"Design is Dead"'];

const heroStyle = computed(() => ({
  transform: `translateX(${heroOffset.value}vw)`
}));

const handleWheel = (event) => {
  wheelProgress.value += event.deltaY;

  if (!hasExited.value && wheelProgress.value > EXIT_THRESHOLD) {
    hasExited.value = true;
    heroOffset.value = -120;
    wheelProgress.value = 0;
    return;
  }

  if (hasExited.value && wheelProgress.value < ENTER_THRESHOLD) {
    hasExited.value = false;
    heroOffset.value = 0;
    wheelProgress.value = 0;
  }
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
