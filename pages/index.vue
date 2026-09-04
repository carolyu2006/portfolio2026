<template>
  <AppHeader />
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

    <section id="section1" class="section1" :class="{
      'is-active': isSection1Active,
      'is-settled': isSection1Settled,
      'is-returning-from-section2': isReturningFromSection2,
      'is-statement-armed': isPhoneRevealArmed,
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
          <div class="section2-group">
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

          <div class="section2-group section2-group--gamification">
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
        </div>
      </div>
    </section>

    <section id="section3" class="section3" :class="{ 'is-active': isSection3Active }"
      aria-label="About Carol and playground">
      <div class="section3-inner">
        <aside class="section3-profile">
          <div class="section3-profile-card">
            <img class="section3-profile-image" src="/assets/images/about/profile.webp" alt="Carol Yu">
            <h1>Carol Yu</h1>
            <h3>Product Designer + Creative Technologist</h3>
            <a href="mailto:CAROL.YU@NYU.EDU" class="section3-profile-email">
              <h1>CAROL.YU@NYU.EDU</h1>
            </a>
            <div class="section3-profile-socials">
              <a href="https://www.linkedin.com/in/carolyuhf/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.instagram.com/carolyuhf/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://github.com/carolyu2006" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.xiaohongshu.com/user/profile/5d1cd7fa00000000120188e0?xsec_token=YBCBoIDQv8J87E1oyjqCuMg_Nt6OsVnhy_21ROXc6LLaA=&amp;xsec_source=app_share&amp;xhsshare=CopyLink&amp;shareRedId=N0ozQ0c8Sko2NzUyOTgwNjc1OTg8PUs5&amp;apptime=1768556034&amp;share_id=e22ed04444514283841f8ea95a601532" target="_blank" rel="noopener noreferrer" aria-label="RedNote">
                <img src="/assets/icons/rednote.webp" alt="">
              </a>
            </div>
            <a class="section3-more section3-more--about" href="/about">MORE</a>
          </div>
        </aside>

        <div class="section3-play">
          <a class="section3-more section3-more--play" href="/play">MORE</a>
          <div class="section3-play-columns">
            <div
              v-for="column in playColumns"
              :key="column.direction"
              class="section3-play-column"
              :class="`section3-play-column--${column.direction}`"
            >
              <div class="section3-play-track">
                <!-- The track holds the same group twice and travels exactly one
                     group's height, so the loop has no seam. -->
                <div
                  v-for="copy in 2"
                  :key="copy"
                  class="section3-play-group"
                  :aria-hidden="copy === 2 ? 'true' : null"
                >
                  <a
                    v-for="item in column.items"
                    :key="`${copy}-${item.src}`"
                    class="section3-play-item-wrapper"
                    :class="{ 'section3-play-item-info-wrapper': item.info }"
                    :href="item.href || null"
                    :target="item.external ? '_blank' : null"
                    :rel="item.external ? 'noopener noreferrer' : null"
                    :tabindex="copy === 2 ? -1 : null"
                  >
                    <div v-if="item.info" class="section3-play-item-info">
                      <h4>{{ item.info.year }}</h4>
                      <h2>{{ item.info.title }}</h2>
                      <h3>{{ item.info.role }}</h3>
                    </div>
                    <video
                      v-if="item.type === 'video'"
                      class="section3-play-item"
                      :src="item.src"
                      :poster="item.poster || null"
                      autoplay
                      muted
                      loop
                      playsinline
                      preload="metadata"
                    ></video>
                    <img v-else class="section3-play-item" :src="item.src" :alt="item.alt || ''">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div ref="section3Footer" class="section3-footer-stage">
      <AppFooter />
    </div>
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

// section1 content entrance (leaves + statement) fires via this class
const isSection1Active = ref(false);
const isSection1Settled = ref(false);
// scroll cue appears once section1 is settled, inviting the user to keep scrolling
const showScrollCue = ref(false);
const showBottomAnnotations = ref(false);
// phone only: content below the hero holds until it is scrolled to, then plays
const isPhoneRevealArmed = ref(false);
const isStatementIn = ref(false);
// section2 plays its own entrance once it reaches the viewport threshold
const isSection2Active = ref(false);
// section3 (profile + playground) slides up from below once section2 is done
const isSection3Active = ref(false);
const showBackToBeginning = ref(false);

// The playground is two marquee columns drifting in opposite directions, each
// rendered twice so the loop is seamless. Order is the reading order of the
// first copy.
const playColumns = [
  {
    direction: 'up',
    items: [
      {
        type: 'video',
        src: '/assets/images/covers/everstream.mp4',
        poster: '/assets/images/covers/everstream.webp',
        href: '/projects/everstream',
        info: { year: '2025', title: 'Everstream', role: 'Game Designer & Developer' }
      },
      {
        type: 'video',
        src: '/assets/images/play/pixelme.mp4',
        href: 'https://pixel-me-taupe.vercel.app/',
        external: true
      },
      { type: 'image', src: '/assets/images/play/springshowposter.webp', alt: 'ITP Spring Show 2026' },
      { type: 'video', src: '/assets/images/play/mr-coffeechat.mp4' },
      { type: 'image', src: '/assets/images/play/super-maricat.webp', alt: 'Super Maricat' },
      {
        type: 'video',
        src: '/assets/images/play/clock.mp4',
        href: 'https://animal-clock-git-main-carol-projects.vercel.app/',
        external: true
      },
      { type: 'image', src: '/assets/images/play/modelMe.webp', alt: 'Model Me' }
    ]
  },
  {
    direction: 'down',
    items: [
      {
        type: 'image',
        src: '/assets/images/covers/dreamail.webp',
        alt: 'Dreammail',
        href: 'https://devpost.com/software/dreamail',
        external: true,
        info: { year: '2026', title: 'DREAMMAIL', role: 'Designer & Developer' }
      },
      {
        type: 'video',
        src: '/assets/images/play/PetUrFriends.mp4',
        href: 'https://chromewebstore.google.com/detail/pet-ur-friend/onddalpajmjpenfeoppfpcincflmbghb',
        external: true
      },
      { type: 'video', src: '/assets/images/play/cook-animation.mp4' },
      { type: 'image', src: '/assets/images/play/orango.webp', alt: 'Orango' },
      {
        type: 'video',
        src: '/assets/images/play/TheInvisibleLoop.mp4',
        href: 'https://youtu.be/AuA6fwoRjjc',
        external: true
      },
      {
        type: 'video',
        src: '/assets/images/play/maricat.mp4',
        href: 'https://youtu.be/O5TcwrCu_Dw',
        external: true
      },
      { type: 'image', src: '/assets/images/play/space-shooter.webp', alt: 'Space Shooter' }
    ]
  }
];
// distinct reverse transition when scrolling back from section2 to section1 bottom
const isReturningFromSection2 = ref(false);

let scrollTimeline = null;
let pageScrollTrigger = null;
let heroExitUnlockTimer = null;
let progressTween = null;
let section2HorizontalWheelHandler = null;
let section2TransitionUnlockTimer = null;
let section3TransitionUnlockTimer = null;
let footerTransitionUnlockTimer = null;
// Set by the desktop timeline. Nothing calls it while the "back to beginning"
// button is out of the markup; kept so bringing the button back is one line.
let backToBeginningHandler = null;
let section3FooterObserver = null;

const handleBackToBeginning = () => {
  backToBeginningHandler?.();
};

onMounted(() => {
  if (window.matchMedia('(max-width: 720px)').matches) {
    const hero = document.querySelector('#hero');
    const firstSection = document.querySelector('#section1');
    if (!hero || !firstSection) return;

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
    if (statement && 'IntersectionObserver' in window) {
      isPhoneRevealArmed.value = true;
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
  // Pieces the section2 -> section3 handoff stages in behind the panel move.
  const section3Profile = document.querySelector('.section3-profile');
  const section3PlayColumns = Array.from(document.querySelectorAll('.section3-play-column'));
  const section3StagedPieces = [section3Profile, ...section3PlayColumns].filter(Boolean);
  // The marquee renders every clip twice, so section3 alone holds 16 looping
  // videos. They stay parked until the scene is actually on screen — it is
  // hidden behind section1/section2 for most of the page.
  const section3Videos = section3 ? Array.from(section3.querySelectorAll('video')) : [];
  section3Videos.forEach((video) => video.pause());
  watch(isSection3Active, (active) => {
    section3Videos.forEach((video) => {
      if (active) video.play?.().catch(() => {});
      else video.pause();
    });
  });
  const section1BottomSpace = 300;
  const SECTION1_INTRO_LOCK_DURATION = 1400;
  const EXIT_ANIMATION_DURATION = 0.75;
  const SECTION_EXIT_DURATION = 0.8;
  const SECTION_ENTER_DURATION = 0.8;
  // Both panels of a handoff share one ease so they travel locked together, like
  // one strip of film. `out` rather than `inOut`: the move starts the instant the
  // scroll triggers it instead of idling through an ease-in the reader reads as lag.
  const SECTION_TRANSITION_EASE = 'power2.out';
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

  // The footer band and section3 travel the same distance, so section3's bottom
  // edge and the band's top edge stay welded together for the whole tail.
  const getFooterBandHeight = () => section3Footer?.offsetHeight || 0;

  const getPinnedScrollDistance = () => {
    return Math.round((window.innerHeight * 5) + (getSection2HorizontalScroll() * SECTION2_SCROLL_SLOWDOWN));
  };

  // Starting positions for the pinned hero/section1 moment.
  gsap.set(hero, { xPercent: 0 });
  gsap.set(section1, { xPercent: 0, yPercent: 0, autoAlpha: 1 });
  gsap.set(section1Inner, { y: 0 });
  gsap.set(incomingLeaves, { y: 0 });
  gsap.set(section2ProjectsTrack, { x: 0 });
  gsap.set(section2, { xPercent: 100, yPercent: 0, autoAlpha: 0 });
  gsap.set(section3, { xPercent: 0, yPercent: 100, autoAlpha: 0 });
  if (section3Footer) {
    gsap.set(section3Footer, { xPercent: 0, yPercent: 100, y: 0 });
  }

  // Four rest states the pinned scroll snaps between (as timeline progress):
  //  HERO   (0)     -> hero fully in view
  //  REVEAL         -> hero has left, section1 is in
  //  CUE            -> section1 projects are revealed, cue appears
  //  SECTION2       -> section1 exits left, section2 enters
  //  SCROLL_DONE    -> section2 project row finishes horizontal scroll
  //  SECTION3       -> section2 exits upward, section3 slides up from below
  //  END    (1)     -> tail room so the pin never releases behind section3
  // Durations below drive these fractions; keep the snap array in sync.
  const HERO_OUT = EXIT_ANIMATION_DURATION;
  const REVEAL = 1.6;    // section1 project reveal
  const CUE_HOLD = 0.6;  // cue threshold before release
  const SECTION2_HORIZONTAL_SCROLL = 6;
  const PARALLEL_EXIT_ENTER = SECTION2_TRANSITION_ANIM_DURATION;
  // Breathing room after the horizontal row ends, so scrolling back out of
  // section3 does not land straight back on the section3 trigger.
  const SECTION3_LEAD = 0.6;
  const SECTION3_TRANSITION = SECTION2_TRANSITION_ANIM_DURATION;
  // The footer is a snap like every other boundary, not a scrubbed drag: a
  // little travel to arm it, a placeholder for the animation the trigger plays,
  // and clamped room past it so the pin never releases behind the footer.
  const FOOTER_LEAD = 0.6;
  const FOOTER_TRANSITION = SECTION2_TRANSITION_ANIM_DURATION;
  const FOOTER_TAIL = 0.8;
  const SECTION3_TAIL = FOOTER_LEAD + FOOTER_TRANSITION + FOOTER_TAIL;
  const SECTION2_STAGES = HERO_OUT + REVEAL + CUE_HOLD + PARALLEL_EXIT_ENTER + SECTION2_HORIZONTAL_SCROLL;
  const total = SECTION2_STAGES + SECTION3_LEAD + SECTION3_TRANSITION + SECTION3_TAIL;
  const pHeroOut = HERO_OUT / total;
  const pRevealDone = (HERO_OUT + REVEAL) / total;
  const pSection2Start = (HERO_OUT + REVEAL + CUE_HOLD) / total;
  const pSection2EnterStart = pSection2Start;
  const pSection2Ready = (HERO_OUT + REVEAL + CUE_HOLD + PARALLEL_EXIT_ENTER) / total;
  const pSection2ScrollDone = SECTION2_STAGES / total;
  const pSection3Start = (SECTION2_STAGES + SECTION3_LEAD) / total;
  const pSection3Ready = (SECTION2_STAGES + SECTION3_LEAD + SECTION3_TRANSITION) / total;
  const pFooterStart = pSection3Ready + (FOOTER_LEAD / total);
  const pFooterReady = pFooterStart + (FOOTER_TRANSITION / total);
  // Coming back out of the footer lands inside the arming gap rather than exactly
  // on the section3 rest point, so the same gesture cannot carry straight on into
  // the handoff back to section2.
  const pFooterReturnLand = pSection3Ready + ((FOOTER_LEAD / total) * 0.35);
  const pBottomAnnotations = pHeroOut + ((pRevealDone - pHeroOut) * 0.55);
  const pScrollCueShow = pRevealDone;
  const pScrollCueHide = pHeroOut + ((pRevealDone - pHeroOut) * 0.88);
  let hasEnteredSection1Start = false;
  let hasEnteredSection2 = false;
  let hasEnteredSection3 = false;
  let hasEnteredFooter = false;
  let hasBottomAnnotationsAppeared = false;
  let isLockingHeroExit = false;
  let isAnimatingHeroReturn = false;
  let isAnimatingSection2Transition = false;
  let section2TransitionLockProgress = 0;
  let isAnimatingSection3Transition = false;
  let section3TransitionLockProgress = 0;
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

  const clearSection3TransitionUnlockTimer = () => {
    clearTimeout(section3TransitionUnlockTimer);
    section3TransitionUnlockTimer = null;
  };

  const clearFooterTransitionUnlockTimer = () => {
    clearTimeout(footerTransitionUnlockTimer);
    footerTransitionUnlockTimer = null;
  };

  const setSection3VideosPlaying = (playing) => {
    section3Videos.forEach((video) => {
      if (playing) video.play?.().catch(() => {});
      else video.pause();
    });
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

        section2TransitionUnlockTimer = window.setTimeout(() => {
          hasEnteredSection2 = true;
          isAnimatingSection2Transition = false;
          section2TransitionUnlockTimer = null;
        }, SECTION2_POST_TRANSITION_SCROLL_LOCK);
        progressTween = null;
      }
    })
      .to(section1, {
        xPercent: -100,
        yPercent: 0,
        autoAlpha: 0.2,
        duration: SECTION_EXIT_DURATION,
        ease: SECTION_TRANSITION_EASE
      }, 0)
      .to(section2, {
        xPercent: 0,
        yPercent: 0,
        autoAlpha: 1,
        duration: SECTION_ENTER_DURATION,
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

  // section2 rides up and out while section3 slides in from below it.
  const startSection3EnterTransition = (self) => {
    isAnimatingSection3Transition = true;
    section3TransitionLockProgress = pSection3Start;
    clearSection3TransitionUnlockTimer();
    progressTween?.kill();
    progressTween = null;
    hasScrollCueBeenDismissed = true;
    hideScrollCue();

    setScrollToProgress(self, pSection3Start);
    setTimelineProgress(pSection3Start);
    gsap.set(section2ProjectsTrack, { x: -getSection2HorizontalScroll() });

    isSection2Active.value = true;
    isSection3Active.value = true;
    hasEnteredFooter = false;
    showBackToBeginning.value = false;
    if (section3Footer) gsap.set(section3Footer, { xPercent: 0, yPercent: 100, y: 0 });
    setSectionShell(section2, { xPercent: 0, yPercent: 0, autoAlpha: 1, zIndex: 8 });
    setSectionShell(section3, { xPercent: 0, yPercent: 100, autoAlpha: 1, zIndex: 13 });

    // Both panels are a viewport tall, so yPercent keeps their edges welded for
    // the whole slide — that carries the move. The character comes from what
    // happens inside: section2's project row runs on ahead of its own panel,
    // and section3's three columns arrive a beat apart with a little overshoot,
    // so the scene assembles instead of just arriving. Section2's row leaves
    // sideways-scrolled and section3's columns drop in vertically, which trades
    // one reading axis for the other.
    progressTween = gsap.timeline({
      onComplete: () => {
        setSectionShell(section2, { xPercent: 0, yPercent: -100, autoAlpha: 0, zIndex: 8 });
        setSectionShell(section3, { xPercent: 0, yPercent: 0, autoAlpha: 1, zIndex: 13 });
        gsap.set(section2Projects, { clearProps: 'transform' });
        gsap.set(section3StagedPieces, { clearProps: 'transform,opacity,visibility' });
        section3TransitionLockProgress = pSection3Ready;
        setScrollToProgress(self, pSection3Ready);
        setTimelineProgress(pSection3Ready);
        isSection2Active.value = false;

        section3TransitionUnlockTimer = window.setTimeout(() => {
          hasEnteredSection3 = true;
          isAnimatingSection3Transition = false;
          section3TransitionUnlockTimer = null;
        }, SECTION2_POST_TRANSITION_SCROLL_LOCK);
        progressTween = null;
      }
    })
      .to(section2, {
        yPercent: -100,
        autoAlpha: 0,
        duration: SECTION_EXIT_DURATION,
        ease: SECTION_TRANSITION_EASE
      }, 0)
      .to(section3, {
        yPercent: 0,
        autoAlpha: 1,
        duration: SECTION_ENTER_DURATION,
        ease: SECTION_TRANSITION_EASE
      }, 0)
      // The row lifts a little faster than the panel carrying it — cheap
      // parallax that reads as section2 receding rather than sliding flat.
      .fromTo(section2Projects, { y: 0 }, {
        y: -80,
        duration: SECTION_EXIT_DURATION,
        ease: 'power2.in'
      }, 0)
      .fromTo(section3Profile, { y: 110, autoAlpha: 0 }, {
        y: 0,
        autoAlpha: 1,
        duration: 0.58,
        ease: 'back.out(1.5)'
      }, 0.22)
      .fromTo(section3PlayColumns, { y: 170 }, {
        y: 0,
        duration: 0.62,
        ease: 'back.out(1.3)',
        stagger: 0.08
      }, 0.28);
  };

  const returnToSection2FromSection3 = (self) => {
    isAnimatingSection3Transition = true;
    section3TransitionLockProgress = pSection3Ready;
    clearSection3TransitionUnlockTimer();
    progressTween?.kill();
    progressTween = null;

    setScrollToProgress(self, pSection3Ready);
    setTimelineProgress(pSection3Ready);

    hasEnteredFooter = false;
    showBackToBeginning.value = false;
    if (section3Footer) gsap.set(section3Footer, { xPercent: 0, yPercent: 100, y: 0 });

    isSection2Active.value = true;
    setSectionShell(section1, { xPercent: -100, yPercent: 0, autoAlpha: 0.2 });
    setSectionShell(section2, { xPercent: 0, yPercent: -100, autoAlpha: 1, zIndex: 8 });
    setSectionShell(section3, { xPercent: 0, yPercent: 0, autoAlpha: 1, zIndex: 13 });
    gsap.set(section2ProjectsTrack, { x: -getSection2HorizontalScroll() });

    progressTween = gsap.timeline({
      onComplete: () => {
        hasEnteredSection3 = false;
        isSection3Active.value = false;
        isAnimatingSection3Transition = false;
        clearSection3TransitionUnlockTimer();

        setSectionShell(section2, { xPercent: 0, yPercent: 0, autoAlpha: 1, zIndex: 8 });
        setSectionShell(section3, { xPercent: 0, yPercent: 100, autoAlpha: 0, zIndex: 13 });
        if (section3Footer) gsap.set(section3Footer, { xPercent: 0, yPercent: 100, y: 0 });
        hasEnteredFooter = false;
        showBackToBeginning.value = false;
        // Land at the end of the horizontal row, one SECTION3_LEAD short of the
        // section3 trigger, so section3 is not re-entered on the same gesture.
        section3TransitionLockProgress = pSection2ScrollDone;
        setScrollToProgress(self, pSection2ScrollDone);
        setTimelineProgress(pSection2ScrollDone);
        gsap.set(section2ProjectsTrack, { x: -getSection2HorizontalScroll() });
        gsap.set(section2Projects, { clearProps: 'transform' });
        gsap.set(section3StagedPieces, { clearProps: 'transform,opacity,visibility' });
        progressTween = null;
      }
    })
      .to(section3, {
        yPercent: 100,
        autoAlpha: 0,
        duration: SECTION_EXIT_DURATION,
        ease: SECTION_TRANSITION_EASE
      }, 0)
      .to(section2, {
        yPercent: 0,
        autoAlpha: 1,
        duration: SECTION_ENTER_DURATION,
        ease: SECTION_TRANSITION_EASE
      }, 0)
      // Going back, the same pieces lag instead of overshooting: the columns
      // sink a little as their panel drops and the row settles back into place,
      // so the reverse reads as the same mechanism unwinding.
      .fromTo(section3PlayColumns, { y: 0 }, {
        y: 90,
        duration: SECTION_EXIT_DURATION * 0.7,
        ease: 'power2.in',
        stagger: 0.05
      }, 0)
      .fromTo(section3Profile, { y: 0 }, {
        y: 60,
        duration: SECTION_EXIT_DURATION * 0.7,
        ease: 'power2.in'
      }, 0.05)
      .fromTo(section2Projects, { y: -80 }, {
        y: 0,
        duration: SECTION_ENTER_DURATION,
        ease: 'power2.out'
      }, 0);
  };

  // The footer band rises from the bottom and pushes section3 up by exactly its
  // own height, so the two edges stay welded. Triggered and locked like every
  // other boundary rather than scrubbed, so a small scroll plays the whole move.
  const startFooterEnterTransition = (self) => {
    isAnimatingFooterTransition = true;
    footerTransitionLockProgress = pFooterStart;
    clearFooterTransitionUnlockTimer();
    progressTween?.kill();
    progressTween = null;

    setScrollToProgress(self, pFooterStart);
    setTimelineProgress(pFooterStart);

    const pushDistance = getFooterBandHeight();
    gsap.set(section3, { y: 0 });
    gsap.set(section3Footer, { xPercent: 0, yPercent: 100, y: 0 });

    progressTween = gsap.timeline({
      onComplete: () => {
        gsap.set(section3, { y: -pushDistance });
        gsap.set(section3Footer, { xPercent: 0, yPercent: 0, y: 0 });
        footerTransitionLockProgress = pFooterReady;
        setScrollToProgress(self, pFooterReady);
        setTimelineProgress(pFooterReady);
        // The playground is off screen behind the footer now.
        setSection3VideosPlaying(false);
        showBackToBeginning.value = true;

        footerTransitionUnlockTimer = window.setTimeout(() => {
          hasEnteredFooter = true;
          isAnimatingFooterTransition = false;
          footerTransitionUnlockTimer = null;
        }, SECTION2_POST_TRANSITION_SCROLL_LOCK);
        progressTween = null;
      }
    })
      .to(section3, {
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

  const returnToSection3FromFooter = (self) => {
    isAnimatingFooterTransition = true;
    footerTransitionLockProgress = pFooterReady;
    clearFooterTransitionUnlockTimer();
    progressTween?.kill();
    progressTween = null;

    setScrollToProgress(self, pFooterReady);
    setTimelineProgress(pFooterReady);

    const pushDistance = getFooterBandHeight();
    gsap.set(section3, { y: -pushDistance });
    gsap.set(section3Footer, { xPercent: 0, yPercent: 0, y: 0 });
    setSection3VideosPlaying(true);
    showBackToBeginning.value = false;

    progressTween = gsap.timeline({
      onComplete: () => {
        hasEnteredFooter = false;
        isAnimatingFooterTransition = false;
        clearFooterTransitionUnlockTimer();

        gsap.set(section3, { y: 0 });
        gsap.set(section3Footer, { xPercent: 0, yPercent: 100, y: 0 });
        footerTransitionLockProgress = pFooterReturnLand;
        setScrollToProgress(self, pFooterReturnLand);
        setTimelineProgress(pFooterReturnLand);
        progressTween = null;
      }
    })
      .to(section3, {
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

  // "Back to beginning": section3 drops away, then every scene is hard-reset to
  // the hero rather than replaying each transition in reverse on the way up.
  const resetToHero = () => {
    isAnimatingSection3Transition = false;
    isAnimatingSection2Transition = false;
    isAnimatingHeroReturn = false;
    isLockingHeroExit = false;
    hasEnteredSection1Start = false;
    hasEnteredSection2 = false;
    hasEnteredSection3 = false;
    hasEnteredFooter = false;
    hasScrollCueBeenDismissed = false;
    hasBottomAnnotationsAppeared = false;
    clearSection2TransitionUnlockTimer();
    clearSection3TransitionUnlockTimer();
    clearFooterTransitionUnlockTimer();
    clearTimeout(heroExitUnlockTimer);
    heroExitUnlockTimer = null;

    showBottomAnnotations.value = false;
    isSection1Active.value = false;
    isSection1Settled.value = false;
    isSection2Active.value = false;
    isSection3Active.value = false;
    showBackToBeginning.value = false;
    isReturningFromSection2.value = false;
    hideScrollCue();

    gsap.set(hero, { xPercent: 0, yPercent: 0, autoAlpha: 1, clearProps: 'zIndex' });
    setSectionShell(section1, { xPercent: 0, yPercent: 0, autoAlpha: 1 });
    setSectionShell(section2, { xPercent: 100, yPercent: 0, autoAlpha: 0 });
    setSectionShell(section3, { xPercent: 0, yPercent: 100, autoAlpha: 0 });
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
    isAnimatingSection3Transition = true;
    section3TransitionLockProgress = pageScrollTrigger.progress;

    progressTween = gsap.to(section3, {
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
    .to(section2ProjectsTrack, { x: () => -getSection2HorizontalScroll(), ease: 'none', duration: SECTION2_HORIZONTAL_SCROLL })
    // Lead-in gap, the section3 handoff (played by startSection3EnterTransition)
    // and the clamped tail — placeholders that only keep the progress math right.
    .to({}, { duration: SECTION3_LEAD })
    .to({}, { duration: SECTION3_TRANSITION })
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
        return;
      }

      if (isAnimatingSection3Transition) {
        setScrollToProgress(self, section3TransitionLockProgress);
        return;
      }

      if (isAnimatingFooterTransition) {
        setScrollToProgress(self, footerTransitionLockProgress);
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
        isAnimatingSection3Transition = false;
        isAnimatingFooterTransition = false;
        hasEnteredSection3 = false;
        hasEnteredFooter = false;
        clearFooterTransitionUnlockTimer();
        isSection1Settled.value = false;
        clearSection2TransitionUnlockTimer();
        clearSection3TransitionUnlockTimer();
        isSection2Active.value = false;
        isSection3Active.value = false;
        showBackToBeginning.value = false;
        setSectionShell(section3, { xPercent: 0, yPercent: 100, autoAlpha: 0 });
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

      if (self.direction < 0 && hasEnteredSection2 && !hasEnteredSection3 && !isAnimatingSection2Transition && p <= pSection2Ready + 0.002) {
        returnToSection1Bottom(self);
        return;
      }

      if (self.direction > 0 && hasEnteredSection2 && !hasEnteredSection3 && !isAnimatingSection3Transition && p >= pSection3Start - 0.002) {
        startSection3EnterTransition(self);
        return;
      }

      if (self.direction < 0 && hasEnteredSection3 && !hasEnteredFooter && !isAnimatingFooterTransition && !isAnimatingSection3Transition && p <= pSection3Ready - 0.002) {
        returnToSection2FromSection3(self);
        return;
      }

      if (self.direction > 0 && hasEnteredSection3 && !hasEnteredFooter && !isAnimatingFooterTransition && p >= pFooterStart - 0.002) {
        startFooterEnterTransition(self);
        return;
      }

      if (self.direction < 0 && hasEnteredFooter && !isAnimatingFooterTransition && p <= pFooterReady - 0.002) {
        returnToSection3FromFooter(self);
        return;
      }

      let effectiveProgress = p;

      if (!hasEnteredSection2 && p > pSection2Start) {
        setScrollToProgress(self, pSection2Start);
        effectiveProgress = pSection2Start;
      }

      if (!hasEnteredSection3 && p > pSection3Start) {
        setScrollToProgress(self, pSection3Start);
        effectiveProgress = pSection3Start;
      }

      if (hasEnteredSection3 && !hasEnteredFooter && p > pFooterStart) {
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
      isSection2Active.value = effectiveProgress >= pSection2EnterStart && hasEnteredSection2 && !hasEnteredSection3;
    }
  });

  section2HorizontalWheelHandler = (event) => {
    if (!pageScrollTrigger || !scrollTimeline) return;

    if (isAnimatingSection2Transition || isAnimatingSection3Transition) {
      event.preventDefault();
      return;
    }

    const { x, y } = getWheelDelta(event);
    if (Math.abs(x) <= Math.abs(y) || Math.abs(x) < 1) return;

    const progress = pageScrollTrigger.progress;
    const isInHorizontalRange = progress >= pSection2Ready && progress <= pSection2ScrollDone;
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

  if (window.matchMedia('(max-width: 720px)').matches && section3Footer) {
    const footerTarget = section3Footer.querySelector('footer') || section3Footer;
    section3FooterObserver = new IntersectionObserver(([entry]) => {
      showBackToBeginning.value = entry.isIntersecting;
    }, { threshold: 0.12 });
    section3FooterObserver.observe(footerTarget);
  }
});

onBeforeUnmount(() => {
  removeMobileHeroTransitionListener?.();
  clearTimeout(heroExitUnlockTimer);
  clearTimeout(section2TransitionUnlockTimer);
  clearTimeout(section3TransitionUnlockTimer);
  clearTimeout(footerTransitionUnlockTimer);
  progressTween?.kill();
  if (section2HorizontalWheelHandler) {
    window.removeEventListener('wheel', section2HorizontalWheelHandler);
  }
  pageScrollTrigger?.kill();
  scrollTimeline?.kill();
  progressTween = null;
  section2HorizontalWheelHandler = null;
  backToBeginningHandler = null;
  section3FooterObserver?.disconnect();
  section3FooterObserver = null;
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
