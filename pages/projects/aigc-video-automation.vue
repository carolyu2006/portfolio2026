<template>
  <AppHeader hero="dark" />
  <img class="hero-image" src="/assets/images/projects/aigc-video-automation/cover.png" alt="AIGC e-commerce advertisement video examples">

  <div class="content">
    <div class="project-header-container">
      <div class="project-header">
        <h4 class="tag" style="background-color:#FFBA70;">2026</h4>
        <h1>AIGC Video Automation</h1>
        <h3>Creating a reusable workflow for generating trend-led video ads.</h3>
      </div>
    </div>

    <div class="key-info">
      <div class="key-info-item"><h3>TIMELINE</h3><p>2026 Jun - 2026 Aug</p></div>
      <div class="key-info-item"><h3>TEAM</h3><p>2 Designers, 1 Product Manager, 1 Developer</p></div>
      <div class="key-info-item"><h3>ROLE</h3><p>AI Product Design Intern @TikTok</p></div>
      <div class="key-info-item"><h3>SKILLS</h3><p>AI Workflow, AIGC, Prompt Engineering, Video Strategy</p></div>
    </div>

    <section class="aigc-overview">
      <h2>OVERVIEW</h2>

      <h3 class="overview-intro">At my internship at TikTok, my team collaborated with the TikTok User Growth team to explore how AIGC can turn product and trend signals into better-performing e-commerce advertisement videos.</h3>
      <div class="overview-container">
        <div class="overview-card-container">
          <div class="overview-card" style="background-color:#FFF5E8;">
            <div class="overview-card-title"><h4>01</h4><h3>AI Workflow Building</h3></div>
            <p>Exploring how to create a workflow that generates high-quality videos with NO human intervention.</p>
          </div>
          <div class="overview-card" style="background-color:#FFF5E8;">
            <div class="overview-card-title"><h4>02</h4><h3>Prompt Engineering</h3></div>
            <p>Editing prompts for plot, script, character, and scene descriptions to support a reusable AIGC workflow with strong results.</p>
          </div>
          <div class="overview-card" style="background-color:#FFF5E8;">
            <div class="overview-card-title"><h4>03</h4><h3>Video Strategy</h3></div>
            <p>Exploring different video formats and styles, then evaluating how effectively they can be produced through the AIGC workflow.</p>
          </div>
        </div>

        <div ref="overviewVideoContainer" class="overview-image-container">
          <template v-if="showOverviewVideo">
            <video ref="overviewPreviewVideo" class="overview-video-preview" muted loop playsinline preload="metadata" poster="/assets/images/projects/aigc-video-automation/overview-demo-poster.jpg" aria-label="AIGC video automation overview demo">
              <source src="/assets/images/projects/aigc-video-automation/overview-demo.mp4" type="video/mp4">
            </video>
          </template>
          <img
            v-else
            class="overview-video-preview"
            src="/assets/images/projects/aigc-video-automation/overview-demo-poster.jpg"
            alt="AIGC video automation overview demo"
            loading="lazy"
            decoding="async"
            data-expand-video="/assets/images/projects/aigc-video-automation/overview-demo.mp4"
            data-expand-poster="/assets/images/projects/aigc-video-automation/overview-demo-poster.jpg"
          >
        </div>
      </div>
    </section>

    <div class="problem-statement-container">
      <div class="problem-statement" style="background-color:#FFBA70;">
        <h3><b style="margin-right:10px;">Goal:</b> Create advertisement videos that deliver strong performance results, and build a workflow that can later support automatic generation at scale.</h3>
      </div>
    </div>

    <section id="features">
      <h2>SOLUTION</h2>
      <div class="solution-mindmap-layout">
        <div class="solution-mindmap">
          <h3 class="solution-mindmap-intro">A creative automation workflow that turns one product brief into several ad-video directions.</h3>
          <img
            ref="mindmapImage"
            class="solution-mindmap-image"
            src="/assets/images/projects/aigc-video-automation/workflow-diagram.png"
            alt="Creative generation workflow: product extraction, plot and script generation, character and scene assets, video clips, and final output."
            loading="lazy"
            decoding="async"
          >
        </div>
        <aside ref="mindmapAside" class="solution-mindmap-aside" aria-label="Video demos">
          <div class="solution-mindmap-videos">
            <div
              class="solution-video-stage"
              @mouseenter="solutionControlsVisible = true"
              @mouseleave="solutionControlsVisible = solutionControlsPinned"
            >
              <video
                ref="solutionMainVideo"
                class="solution-mindmap-video solution-mindmap-video--main"
                data-autoplay-demo
                data-no-expand
                :src="activeSolutionVideo.src"
                :poster="activeSolutionVideo.poster"
                :aria-label="`${activeSolutionVideo.label} video demo`"
                :controls="solutionControlsVisible"
                muted
                loop
                playsinline
                preload="none"
              ></video>
              <button type="button" class="solution-video-nav solution-video-nav--prev" aria-label="Previous video" @click="stepSolutionVideo(-1)">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 5 8 12l7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <button type="button" class="solution-video-nav solution-video-nav--next" aria-label="Next video" @click="stepSolutionVideo(1)">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 5 7 7-7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
            </div>
            <div class="solution-mindmap-video-row" role="group" aria-label="Choose a video demo">
              <button
                v-for="(video, index) in solutionVideos"
                :key="video.src"
                type="button"
                class="solution-video-thumb"
                :class="{ 'is-active': index === activeSolutionIndex }"
                :aria-pressed="index === activeSolutionIndex"
                :aria-label="`Play ${video.label}`"
                @click="selectSolutionVideo(index)"
              >
                <img :src="video.poster" :alt="video.label" decoding="async">
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section>
      <h2>IMPACT</h2>
<!-- 
      <p class="goal-section-label">Success metrics</p>
      <div class="goal-metric-row">
        <article class="goal-metric-card">
          <div class="goal-metric-graphic" aria-hidden="true">
            <svg viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="12" width="104" height="64" rx="10" fill="#FFF5E8" stroke="#2C2C2C" stroke-width="2"/>
              <circle cx="36" cy="40" r="10" fill="#FFBA70" stroke="#2C2C2C" stroke-width="2"/>
              <path d="M23 64c2.2-7.5 7-11.5 13-11.5S47 56.5 49 64" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round"/>
              <circle cx="60" cy="40" r="10" fill="#FFD9A8" stroke="#2C2C2C" stroke-width="2"/>
              <path d="M47 64c2.2-7.5 7-11.5 13-11.5S71 56.5 73 64" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round"/>
              <circle cx="92" cy="34" r="14" fill="#FFBA70" stroke="#2C2C2C" stroke-width="2"/>
              <path d="M92 26v16M84 34h16" stroke="#2C2C2C" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="goal-metric-copy">
            <span class="goal-metric-kicker">Success metric 01</span>
            <h4>New additions per creative</h4>
            <p>How many new users a single video material can drive.</p>
          </div>
        </article>

        <article class="goal-metric-card">
          <div class="goal-metric-graphic" aria-hidden="true">
            <svg viewBox="0 0 120 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="12" width="104" height="64" rx="10" fill="#FFF5E8" stroke="#2C2C2C" stroke-width="2"/>
              <rect x="28" y="48" width="14" height="18" rx="3" fill="#FFE8C8" stroke="#2C2C2C" stroke-width="2"/>
              <rect x="50" y="36" width="14" height="30" rx="3" fill="#FFD9A8" stroke="#2C2C2C" stroke-width="2"/>
              <rect x="72" y="24" width="14" height="42" rx="3" fill="#FFBA70" stroke="#2C2C2C" stroke-width="2"/>
              <path d="M24 66h72" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="goal-metric-copy">
            <span class="goal-metric-kicker">Success metric 02</span>
            <h4>Spend per creative</h4>
            <p>How strongly a material performs in ad delivery, measured by spend per creative.</p>
          </div>
        </article>
      </div>
       -->
      <h3>Strong delivery results led to automation at scale — and a next system to keep templates current.</h3>
      <div class="impact-flow">
        <div class="impact-flow-step overview-card" style="background-color:#FFF5E8;">
          <div class="overview-card-title"><h4>01</h4><h3>Strong delivery results</h3></div>
          <p>Generated materials outperformed agency-made and other production-path baselines. On average, a single creative drove:</p>
          <div class="impact-stat-row">
            <div class="impact-stat">
              <span class="impact-stat-value">400<span class="impact-stat-affix">+</span></span>
              <span class="impact-stat-label">new additions</span>
            </div>
            <div class="impact-stat">
              <span class="impact-stat-value"><span class="impact-stat-affix">~</span>7k</span>
              <span class="impact-stat-label">in spend on TikTok</span>
            </div>
          </div>
        </div>
        <div class="impact-flow-step overview-card" style="background-color:#FFF5E8;">
          <div class="overview-card-title"><h4>02</h4><h3>Automating the workflow</h3></div>
          <p>TikTok is putting the workflow into automation to create similar videos at scale.</p>
        </div>
        <div class="impact-flow-step overview-card" style="background-color:#FFF5E8;">
          <div class="overview-card-title"><h4>03</h4><h3>Expanding the system</h3></div>
          <p>TikTok is developing a new system to capture hot topics and high-performing videos, turn them into video workflow templates.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>REFLECTION</h2>
      <h3>Through this intenrship experience, I got hands-on experiences with different Video and Image AIGC models and building AI workflow. With this understanding, I hope to explore more about how can AI workflow be used to create more efficient and effective in our life.</h3>
      <div class="reflection-grid">
        <div class="reflection-item">
          <h3>Explore formats before automating them</h3>
          <p>I tested short-drama insertion, rapid remix, AI short drama, animation, and IP-led routes to understand where each structure could create attention for a product.</p>
        </div>
        <div class="reflection-item">
          <h3>Let performance shape the next template</h3>
          <p>The most valuable output is not one video; it is a system that can learn from strong results and create the next automated template faster.</p>
        </div>
      </div>
    </section>
  </div>
  <AppFooter />
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const mediaBase = '/assets/images/projects/aigc-video-automation'

const solutionVideos = [
  { label: 'AI short drama 01', src: `${mediaBase}/ai-drama-01.mp4`, poster: `${mediaBase}/ai-drama-01-poster.jpg` },
  { label: '3D animation 01', src: `${mediaBase}/animation-01.mp4`, poster: `${mediaBase}/animation-01-poster.jpg` },
  { label: '3D animation 02', src: `${mediaBase}/animation-02.mp4`, poster: `${mediaBase}/animation-02-poster.jpg` },
  { label: 'AI short drama 02', src: `${mediaBase}/ai-drama-02.mp4`, poster: `${mediaBase}/ai-drama-02-poster.jpg` }
]

const activeSolutionIndex = ref(0)
const activeSolutionVideo = computed(() => solutionVideos[activeSolutionIndex.value])
const solutionMainVideo = ref(null)
const solutionVideoInView = ref(false)
// Controls ride on hover, except on touch devices where there is no hover to ride on.
const solutionControlsVisible = ref(false)
const solutionControlsPinned = ref(false)

const selectSolutionVideo = async (index) => {
  if (index === activeSolutionIndex.value) return
  activeSolutionIndex.value = index
  await nextTick()

  const video = solutionMainVideo.value
  if (!video) return
  video.load()
  if (solutionVideoInView.value) video.play().catch(() => {})
}

const stepSolutionVideo = (offset) => {
  const count = solutionVideos.length
  selectSolutionVideo((activeSolutionIndex.value + offset + count) % count)
}

const showDemoVideo = ref(false)
const demoVideo = ref(null)
const demoVideoContainer = ref(null)
const showOverviewVideo = ref(false)
const overviewPreviewVideo = ref(null)
const overviewVideoContainer = ref(null)
const mindmapImage = ref(null)
const mindmapAside = ref(null)
let demoVideoObserver
let galleryVideoObserver
let overviewVideoObserver
let mindmapResizeObserver

const syncMindmapAsideHeight = () => {
  const aside = mindmapAside.value
  const image = mindmapImage.value
  if (!aside || !image) return

  if (window.matchMedia('(max-width: 900px)').matches) {
    aside.style.minHeight = ''
    return
  }

  aside.style.minHeight = `${image.getBoundingClientRect().height}px`
}

onMounted(() => {
  if (window.matchMedia('(hover: none)').matches) {
    solutionControlsPinned.value = true
    solutionControlsVisible.value = true
  }

  demoVideoObserver = new IntersectionObserver(async ([entry]) => {
    if (entry.isIntersecting) {
      showDemoVideo.value = true
      await nextTick()
      demoVideo.value?.play().catch(() => {})
    } else {
      demoVideo.value?.pause()
    }
  }, { threshold: 0.2 })

  if (demoVideoContainer.value) demoVideoObserver.observe(demoVideoContainer.value)

  overviewVideoObserver = new IntersectionObserver(async ([entry]) => {
    if (entry.isIntersecting) {
      showOverviewVideo.value = true
      await nextTick()
      overviewPreviewVideo.value?.play().catch(() => {})
    } else {
      overviewPreviewVideo.value?.pause()
    }
  }, { threshold: 0.2 })

  if (overviewVideoContainer.value) overviewVideoObserver.observe(overviewVideoContainer.value)

  galleryVideoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target
      if (video === solutionMainVideo.value) solutionVideoInView.value = entry.isIntersecting

      if (entry.isIntersecting) {
        if (!video.src && video.dataset.src) {
          video.src = video.dataset.src
          video.load()
        }
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, { threshold: 0.2 })

  document.querySelectorAll('video[data-autoplay-demo]').forEach((video) => galleryVideoObserver.observe(video))

  syncMindmapAsideHeight()
  mindmapImage.value?.addEventListener('load', syncMindmapAsideHeight)
  window.addEventListener('resize', syncMindmapAsideHeight)

  if (mindmapImage.value?.complete) syncMindmapAsideHeight()

  mindmapResizeObserver = new ResizeObserver(syncMindmapAsideHeight)
  if (mindmapImage.value) mindmapResizeObserver.observe(mindmapImage.value)
})

onBeforeUnmount(() => {
  demoVideoObserver?.disconnect()
  overviewVideoObserver?.disconnect()
  galleryVideoObserver?.disconnect()
  mindmapResizeObserver?.disconnect()
  mindmapImage.value?.removeEventListener('load', syncMindmapAsideHeight)
  window.removeEventListener('resize', syncMindmapAsideHeight)
})

useHead({
  title: 'AIGC Video Automation',
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' },
    { rel: 'stylesheet', href: '/css/project.css' }
  ],
  script: [
    { src: '/js/script.js', body: true },
    { src: '/js/project.js', body: true }
  ]
})
</script>
