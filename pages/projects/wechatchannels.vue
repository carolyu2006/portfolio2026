<template>
<AppHeader />

        <img class="hero-image" src="/assets/images/projects/wechat-videohao/cover.webp"
            alt="WeChat Channels AI case study cover">

        <div class="content">
            <div class="project-header-container">
                <div class="project-header">
                    <h4 class="tag" style="background-color: #FFE4C2;">2026</h4>

                    <h1>WeChat Channels × AI</h1>
                    <h3>An interview-stage design task for the Tencent WeChat Channels team — rethinking video
                        creation with AI, moving from clip assembly toward true co-creation. This proposal led to a
                        successful offer from Tencent.</h3>
                </div>
                <div class="button-container">
                    <button class="button"
                        onclick="window.open('/assets/pdfs/wechat-channels-en.pdf', '_blank')">View PDF (EN)</button>
                    <button class="button"
                        onclick="window.open('/assets/pdfs/wechat-channels-zh.pdf', '_blank')">View PDF (中文)</button>
                </div>
            </div>

            <div class="key-info">
                <div class="key-info-item">
                    <h3>TIMELINE</h3>
                    <p>Mar 2026</p>
                </div>
                <div class="key-info-item">
                    <h3>TEAM</h3>
                    <p>Solo</p>
                </div>
                <div class="key-info-item">
                    <h3>ROLE</h3>
                    <p>Product Designer</p>
                </div>
                <div class="key-info-item">
                    <h3>SKILLS</h3>
                    <p>Figma, AI Product Design</p>
                </div>
            </div>

            <div class="problem-statement-container">
                <div class="problem-statement" style="background-color: #FFE4C2;">
                    <h3>How can AI reshape the entire creation flow of WeChat Channels, rather than only optimizing
                        single-point tools?</h3>
                </div>
            </div>

            <section>
                <h2>FIGMA PROTOTYPE</h2>
                <iframe style="border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; height: 75vh; margin-top: 12px;"
                    src="https://embed.figma.com/proto/fvgooKpozMN5v0OeOpOQcc/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%91%E5%8F%B7?node-id=34-64&viewport=-524%2C382%2C0.12&scaling=scale-down&content-scaling=fixed&starting-point-node-id=34%3A64&page-id=34%3A63&embed-host=share"
                    loading="lazy" allowfullscreen></iframe>
            </section>

            <section>
                <div class="section-header-row">
                    <h2>DESIGN PROPOSAL</h2>
                    <div class="lang-toggle" role="tablist" aria-label="Slide language" data-active="en">
                        <button type="button" class="active" data-lang="en">EN</button>
                        <button type="button" data-lang="zh">中文</button>
                    </div>
                </div>
                <div class="slides-gallery">
                    <img
                        v-for="i in 13"
                        :key="i"
                        :data-slide="i"
                        :src="`/assets/images/projects/wechat-videohao/en/slide-${i}.webp`"
                        :alt="`WeChat Channels AI slide ${i}`"
                    >
                </div>
            </section>

            <section>
                <h2>REFLECTION</h2>
                <div class="reflection-grid">
                    <div class="reflection-card">
                        <h3>AI is Copilot, Not Autopilot</h3>
                        <p>Design must hold that the human is the creative subject. AI should focus on sparking
                            inspiration and reducing repetitive labor — not replacing human emotional expression.</p>
                    </div>
                    <div class="reflection-card">
                        <h3>Restrained Technical Intervention</h3>
                        <p>Embedding AI into Channels' stable user path must follow a "seamless-integration" principle —
                            avoid feature pile-up that weighs down interaction, and preserve WeChat's characteristic
                            simplicity and restraint.</p>
                    </div>
                    <div class="reflection-card">
                        <h3>Continuously Evolving Semantic Understanding</h3>
                        <p>The current solution relies on powerful multimodal large models. Future iterations should pay
                            closer attention to AI's aesthetic precision in vertical domains (e.g., specific intangible
                            cultural heritage and life skills).</p>
                    </div>
                </div>
            </section>

            <section class="next-project-section">
                <h1 style="font-size: 24px;">More Projects</h1>
                <div class="next-projects-container">
                    <a class="next-project-card" href="/projects/albertplus">
                        <div class="next-project-image">
                            <img src="/assets/images/covers/albertplus.webp" alt="Albert Plus">
                        </div>
                        <div class="next-project-content">
                            <h2>Albert Plus</h2>
                            <p>A redesigned companion for NYU's Albert course system.</p>
                        </div>
                    </a>
                    <a class="next-project-card" href="/projects/intertabs">
                        <div class="next-project-image">
                            <img src="/assets/images/covers/intertabs.webp" alt="interTabs">
                        </div>
                        <div class="next-project-content">
                            <h2>interTabs</h2>
                            <p>An AI-powered Chrome extension that syncs your research across tabs and sessions.</p>
                        </div>
                    </a>
                </div>
            </section>
        </div>

        <AppFooter />
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue';

useHead({
  title: 'WeChat Channels · AI',
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' },
    { rel: 'stylesheet', href: '/css/project.css' }
  ],
  script: [
    { src: '/js/script.js', body: true },
    { src: '/js/project.js', body: true }
  ]
});

let cleanup = () => {};

onMounted(() => {
  const toggle = document.querySelector('.lang-toggle');
  const buttons = [...document.querySelectorAll('.lang-toggle button')];
  const slides = [...document.querySelectorAll('.slides-gallery img[data-slide]')];

  const apply = (lang) => {
    if (!lang) return;
    if (toggle) toggle.dataset.active = lang;
    buttons.forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === lang);
    });
    slides.forEach((image) => {
      image.src = `/assets/images/projects/wechat-videohao/${lang}/slide-${image.dataset.slide}.webp`;
    });
  };

  const buttonHandlers = buttons.map((button) => {
    const handler = () => apply(button.dataset.lang);
    button.addEventListener('click', handler);
    return { button, handler };
  });

  const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        slideObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -20px 0px' });

  slides.forEach((image) => slideObserver.observe(image));

  cleanup = () => {
    buttonHandlers.forEach(({ button, handler }) => {
      button.removeEventListener('click', handler);
    });
    slideObserver.disconnect();
  };
});

onBeforeUnmount(() => {
  cleanup();
});
</script>
