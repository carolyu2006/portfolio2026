<template>
  <AppHeader />
  <img class="hero-image" src="/assets/images/projects/aigc-video-automation/cover.png" alt="AIGC e-commerce advertisement video examples">

  <div class="content">
    <div class="project-header-container">
      <div class="project-header">
        <h4 class="tag" style="background-color:#FFBA70;">2026</h4>
        <h1>AIGC Video Automation</h1>
        <h3>Exploring how AIGC can turn product and trend signals into better-performing e-commerce advertisement videos. Creating a reusable workflow for generating trend-led video ads.</h3>
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
      

      <div class="aigc-overview-layout">
        <div>
          <h3>At my internship at TikTok, my team collaborated with the TikTok User Growth team to explore how AIGC can turn product and trend signals into better-performing e-commerce advertisement videos.</h3>
          <div class="aigc-overview-points">
            <div class="aigc-overview-point">
              <span class="aigc-overview-num">01</span>
              <div class="aigc-overview-copy">
                <h4>AI Workflow Building</h4>
                <p>Exploring how to create a workflow that generates high-quality videos with minimal human intervention.</p>
              </div>
            </div>
            <div class="aigc-overview-point">
              <span class="aigc-overview-num">02</span>
              <div class="aigc-overview-copy">
                <h4>Prompt Engineering</h4>
                <p>Editing prompts for plot, script, character, and scene descriptions to support a reusable AIGC workflow with strong results.</p>
              </div>
            </div>
            <div class="aigc-overview-point">
              <span class="aigc-overview-num">03</span>
              <div class="aigc-overview-copy">
                <h4>Video Strategy</h4>
                <p>Exploring different video formats and styles, then evaluating how effectively they can be produced through the AIGC workflow.</p>
              </div>
            </div>
          </div>
        </div>

        <div ref="overviewVideoContainer" class="aigc-overview-media">
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

    <section class="goal-metric-section">
      <h2 style="margin-bottom: 20px;">GOAL & SUCCESS METRIC</h2>
      
      <div class="problem-statement-container">
        <div class="problem-statement" style="background-color:#FFBA70;">
          <h3><b style="margin-right:10px;">Goal:</b> Create advertisement videos that deliver strong performance results, and build a workflow that can later support automatic generation at scale.</h3>
        </div>
      </div>
      
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
<!-- 
      <p class="goal-section-label">Difficulties in AIGC Video Automation</p>
      <ul class="goal-difficulty-list">
        <li>
          <span class="goal-difficulty-title">Inconsistent character and flow</span>
          <span class="goal-difficulty-text">Characters, scenes, and continuity drifted across clips.</span>
        </li>
        <li>
          <span class="goal-difficulty-title">Music swapped between clips</span>
          <span class="goal-difficulty-text">Background audio jumped when separately generated clips were stitched together.</span>
        </li>
        <li>
          <span class="goal-difficulty-title">Plots felt complicated and flat</span>
          <span class="goal-difficulty-text">Stories were overcomplicated yet still not interesting enough to watch through.</span>
        </li>
      </ul> -->
    </section>

    <section id="features">
      <div class="solution-layout">
        <div class="solution-copy">
          <h2>SOLUTION</h2>
          <h3>A creative automation workflow that turns one product brief into several ad-video directions.</h3>
        </div>
        <video
          class="solution-demo-video"
          data-autoplay-demo
          data-src="/assets/images/projects/aigc-video-automation/solution-demo.mp4"
          muted
          loop
          playsinline
          preload="none"
          aria-label="AIGC e-commerce advertisement video demo. Select to expand."
        ></video>
      </div>
      <div class="solution-mindmap" role="img" aria-label="Creative-generation mindmap: plot generation, script generation, scene and character image generation, then video generation.">
        <div class="solution-mindmap-heading">
          <span>CREATIVE GENERATION MINDMAP</span>
          <p>From an idea to a completed ad video</p>
        </div>
        <ol class="solution-mindmap-flow">
          <li class="solution-mindmap-stage">
            <span class="solution-mindmap-number">01</span>
            <h4>Plot Generation</h4>
            <div class="solution-mindmap-media-placeholder">Add supporting image</div>
          </li>
          <li class="solution-mindmap-stage">
            <span class="solution-mindmap-number">02</span>
            <h4>Script Generation</h4>
            <div class="solution-mindmap-media-placeholder">Add supporting image</div>
          </li>
          <li class="solution-mindmap-stage solution-mindmap-stage--visuals">
            <span class="solution-mindmap-number">03</span>
            <h4>Visual Generation</h4>
            <ul>
              <li>Scene Images</li>
              <li>Character Images</li>
            </ul>
            <div class="solution-mindmap-media-placeholder">Add supporting images</div>
          </li>
          <li class="solution-mindmap-stage">
            <span class="solution-mindmap-number">04</span>
            <h4>Video Generation</h4>
            <div class="solution-mindmap-media-placeholder">Add supporting image</div>
          </li>
        </ol>
      </div>
    </section>

    <section>
      <h2>IMPACT</h2>
      <h3>The 投放数据复盘 delivery review found that several generated materials performed better than the agency-made and other production-path baselines.</h3>
      <div class="overview-card-container">
        <div class="overview-card" style="background-color:#FFF5E8;"><div class="overview-card-title"><h4>2 CIDs</h4><h3>Agency benchmark exceeded</h3></div><p>On Douyin, a single material generated 400+ new additions and about 7k in spend — exceeding the agency-video baseline.</p></div>
        <div class="overview-card" style="background-color:#FFF5E8;"><div class="overview-card-title"><h4>3 CIDs</h4><h3>Clear production-path advantage</h3></div><p>A single material generated 100+ new additions and 1k+ in spend, performing clearly better than the other production paths in the review.</p></div>
        <div class="overview-card" style="background-color:#FFF5E8;"><div class="overview-card-title"><h4>NOW</h4><h3>Moving into automation</h3></div><p>TikTok is putting the workflow into automation to create similar videos at scale.</p></div>
        <div class="overview-card" style="background-color:#FFF5E8;"><div class="overview-card-title"><h4>NEXT</h4><h3>Expanding the system</h3></div><p>A new system is being developed to capture hot topics and high-performing videos, turn them into human-made templates, and unlock more automated video types.</p></div>
      </div>
    </section>

    <section>
      <h2>DETAIL</h2>
      <h3>Each step turns a clear input into a tangible output that can be reviewed before the next step begins.</h3>
      <div class="features-container-wrapper">
        <div class="features-container"><div class="feature-item"><img src="/assets/images/projects/aigc-video-automation/workflow-overview.png" alt="Workflow source diagram from the project brief" loading="lazy" decoding="async"></div><div class="feature-description"><h3>01 · Build the product brief</h3><p>The workflow starts by translating raw commerce data into an instruction the creative system can use.</p><ul class="feature-reasoning-list"><li class="feature-reasoning"><span class="feature-reasoning-label">Input</span></li><li class="feature-reasoning">Product link, title, product images, price, selling points, and target audience</li><li class="feature-reasoning"><span class="feature-reasoning-label">Output</span></li><li class="feature-reasoning">A structured product brief: key message, visual references, product assets, and the selected creative route</li></ul></div></div>
        <div class="features-container"><div class="feature-item"><img src="/assets/images/projects/aigc-video-automation/drama-demo-cover.jpg" alt="Short-drama concept generation example" loading="lazy" decoding="async"></div><div class="feature-description"><h3>02 · Generate the idea and script</h3><p>The product brief is paired with a proven trend or video structure — such as a drama twist or rapid remix — to create a story people will recognize in the feed.</p><ul class="feature-reasoning-list"><li class="feature-reasoning"><span class="feature-reasoning-label">Input</span></li><li class="feature-reasoning">Structured product brief, selected format, trend reference, and conversion goal</li><li class="feature-reasoning"><span class="feature-reasoning-label">Output</span></li><li class="feature-reasoning">A hook, plot beats, product-insertion moment, script, and shot-level content direction</li></ul></div></div>
        <div class="features-container"><div class="feature-item"><img src="/assets/images/projects/aigc-video-automation/ai-story-cover.jpg" alt="AI-created character and scene visual example" loading="lazy" decoding="async"></div><div class="feature-description"><h3>03 · Create the visual world</h3><p>The script becomes a coherent set of characters, scenes, and product placements that the video model can use as visual anchors.</p><ul class="feature-reasoning-list"><li class="feature-reasoning"><span class="feature-reasoning-label">Input</span></li><li class="feature-reasoning">Script, character descriptions, scene descriptions, product image, and unified visual direction</li><li class="feature-reasoning"><span class="feature-reasoning-label">Output</span></li><li class="feature-reasoning">Character reference images, scene images, and product-placement visuals ready for generation</li></ul></div></div>
        <div class="features-container"><div class="feature-item"><img src="/assets/images/projects/aigc-video-automation/fast-remix-source-cover.jpg" alt="Generated video segment example" loading="lazy" decoding="async"></div><div class="feature-description"><h3>04 · Generate video segments</h3><p>Instead of asking for one long, unreliable generation, the system produces the story as controllable video clips that can be checked independently.</p><ul class="feature-reasoning-list"><li class="feature-reasoning"><span class="feature-reasoning-label">Input</span></li><li class="feature-reasoning">Script beats, product visual, character and scene references, and individual video prompts</li><li class="feature-reasoning"><span class="feature-reasoning-label">Output</span></li><li class="feature-reasoning">Short vertical video segments that match the approved story and visual direction</li></ul></div></div>
        <div class="features-container"><div class="feature-item"><img src="/assets/images/projects/aigc-video-automation/fast-remix-poster.jpg" alt="Finished vertical advertisement video output" loading="lazy" decoding="async"></div><div class="feature-description"><h3>05 · Assemble, review, and publish</h3><p>The final stage turns the generated clips into a delivery-ready ad and creates a feedback loop for the next round of automation.</p><ul class="feature-reasoning-list"><li class="feature-reasoning"><span class="feature-reasoning-label">Input</span></li><li class="feature-reasoning">Approved video segments, captions, voiceover, fixed elements, end card, and campaign requirements</li><li class="feature-reasoning"><span class="feature-reasoning-label">Output</span></li><li class="feature-reasoning">A final 9:16 advertisement video, ready for AI and human review, platform delivery, and performance analysis</li></ul></div></div>
      </div>
    </section>

    <section>
      <h2>PROCESS & REFLECTION</h2>
      <h3>Turning an exploration into a reusable creative system.</h3>
      <div class="analysis-items-grid" style="margin-top:24px;">
        <div class="analysis-item" style="border-left:4px solid #FFBA70;padding-left:20px;"><h3>Explore formats before automating them</h3><p>I tested short-drama insertion, rapid remix, AI short drama, animation, and IP-led routes to understand where each structure could create attention for a product.</p></div>
        <div class="analysis-item" style="border-left:4px solid #FFBA70;padding-left:20px;"><h3>Make the creative choices reviewable</h3><p>Staging the process creates useful checkpoints: the hook, script, visual assets, edit, and delivery strategy can each be assessed and improved.</p></div>
        <div class="analysis-item" style="border-left:4px solid #FFBA70;padding-left:20px;"><h3>Let performance shape the next template</h3><p>The most valuable output is not one video; it is a system that can learn from strong results and create the next automated template faster.</p></div>
        <div class="analysis-item" style="border-left:4px solid #FFBA70;padding-left:20px;"><h3>Share the system, not only the result</h3><p>Sharing the exploration helped make the workflow actionable for the team and supported its transition into a broader automation effort.</p></div>
      </div>
    </section>

    <section>
      <h2>VIDEO DEMOS</h2>
      <h3>A selection of the completed vertical video outputs from the exploration.</h3>
      <div class="two-column-container">
        <video class="project-wide-image" data-autoplay-demo data-src="/assets/images/projects/aigc-video-automation/fast-remix-demo.mp4" poster="/assets/images/projects/aigc-video-automation/fast-remix-poster.jpg" muted loop playsinline preload="none" aria-label="Fast remix video demo"></video>
        <video class="project-wide-image" data-autoplay-demo data-src="/assets/images/projects/aigc-video-automation/ai-story-demo.mp4" poster="/assets/images/projects/aigc-video-automation/ai-story-demo-poster.jpg" muted loop playsinline preload="none" aria-label="AI story video demo"></video>
        <video class="project-wide-image" data-autoplay-demo data-src="/assets/images/projects/aigc-video-automation/douyin-select-demo.mp4" poster="/assets/images/projects/aigc-video-automation/douyin-select-demo-poster.jpg" muted loop playsinline preload="none" aria-label="Douyin Select video demo"></video>
        <video class="project-wide-image" data-autoplay-demo data-src="/assets/images/projects/aigc-video-automation/remix-demo-2.mp4" poster="/assets/images/projects/aigc-video-automation/remix-demo-2-poster.jpg" muted loop playsinline preload="none" aria-label="Additional remix video demo"></video>
      </div>
    </section>
  </div>
  <AppFooter />
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const showDemoVideo = ref(false)
const demoVideo = ref(null)
const demoVideoContainer = ref(null)
const showOverviewVideo = ref(false)
const overviewPreviewVideo = ref(null)
const overviewVideoContainer = ref(null)
let demoVideoObserver
let galleryVideoObserver
let overviewVideoObserver

onMounted(() => {
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
      if (entry.isIntersecting) {
        if (!video.src) {
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
})

onBeforeUnmount(() => {
  demoVideoObserver?.disconnect()
  overviewVideoObserver?.disconnect()
  galleryVideoObserver?.disconnect()
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
