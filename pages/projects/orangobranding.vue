<template>
<AppHeader />
        <img class="hero-image" src="/assets/images/projects/orango-branding/cover.webp" alt="Orango Branding">

        <div class="content">
            <div class="project-header-container">
                <div class="project-header">
                    <h4 class="tag" style="background-color: #FF8519;">2026</h4>

                    <h1>Orango Branding</h1>
                    <h3>Brand identity for a playful web-based social gaming platform.</h3>
                    <h3>Defining the visual language, typography, and assets that shape Orango’s joyful, social-first experience.</h3>
                </div>
            </div>

            <!-- Overview -->
            <section class="full-width-images">
                <img src="/assets/images/projects/orango-branding/0.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/1-1.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/1-2.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/1-3.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/1-4.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/1-5.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/1-6.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/1-7.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/2-1.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/2-2.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/2-3.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/3-1.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/3-3.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/3-4.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/3-5.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/4-1.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/4-2.webp" alt="Orango Branding">
                <!-- <img src="/assets/images/projects/orango-branding/4-3.webp" alt="Orango Branding"> -->
                <img src="/assets/images/projects/orango-branding/4-4.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/4-5.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/5-1.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/5-2.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/5-3.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/5-4.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/5-5.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/5-6.webp" alt="Orango Branding">
                <img src="/assets/images/projects/orango-branding/5-7.webp" alt="Orango Branding">
            </section>
      

            <section class="next-project-section">
                <h1 style="font-size: 24px;">More Projects</h1>
                <div class="next-projects-container">
                    <a class="next-project-card" href="/projects/mbtiidealpartner">
                        <div class="next-project-image">
                            <img src="/assets/images/covers/mbti.webp" alt="MBTI Ideal Partner">
                        </div>
                        <div class="next-project-content">
                            <h2>MBTI Ideal Partner</h2>
                            <p>Discover your ideal partner based on MBTI personality types.</p>
                        </div>
                    </a>
                    <a class="next-project-card" href="/projects/everstream">
                        <div class="next-project-image">
                            <img src="/assets/images/covers/everstream.webp" alt="Everstream">
                        </div>
                        <div class="next-project-content">
                            <h2>Everstream</h2>
                            <p>A multiplayer card game built around real-time strategy and stream mechanics.</p>
                        </div>
                    </a>
                </div>
            </section>
        </div>

        <AppFooter />
</template>

<script setup>
useHead({
  title: 'Orango Branding',
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
</script>
