<template>
<AppHeader />
        <img class="hero-image" src="/assets/images/projects/intertabs/cover2.webp" alt="interTabs">

        <div class="content">
            <div class="project-header-container">
                <div class="project-header">
                    <h4 class="tag" style="background-color: #FFB0A3;">2025</h4>

                    <h1>interTabs</h1>
                    <h3>An AI-powered Chrome Extension that manage tabs.</h3>
                    <h3 style="color: #ff6952;" font-weight="bold">1st Place & Best UI/UX at HOF Hack 2025</h3>
                    <p style="margin-top: 10px;">A smart Google Chrome extension built to organize your digital
                        workspace. By intelligently remember, organize, and suggest tabs for you, it transforms browser
                        chaos into a structured environment—perfect for power users who need instant access to
                        task-specific workflows.</p>
                </div>
                <div class="button-container">
                    <button class="button" onclick="window.location.href='https://www.intertabs.com/'"
                        target="_blank">View
                        Official Website</button>
                    <!-- <button class="button"
                        onclick="window.location.href='https://chromewebstore.google.com/detail/intertabs/ggofillocibganndbabgcplbefnhadao'"
                        target="_blank">Get Extension</button>
                    <button class="button" onclick="window.location.href='https://devpost.com/software/intertabs'"
                        target="_blank">Devpost</button> -->
                </div>
            </div>

            <div class="key-info">
                <div class="key-info-item">
                    <h3>TIMELINE</h3>
                    <p>MAY 2025 - AUG 2025</p>
                </div>
                <div class="key-info-item">
                    <h3>TEAM</h3>
                    <p>4 members</p>
                </div>
                <div class="key-info-item">
                    <h3>ROLE</h3>
                    <p>Lead Designer & Frontend Developer</p>

                </div>
                <div class="key-info-item">
                    <h3>SKILLS</h3>
                    <p>Figma, HTML, CSS, JavaScript, Adobe After Effects</p>
                </div>
            </div>
            <!-- Overview -->
            <section>
                <h2>OVERVIEW</h2>
                <h3>Developed at the HOF Hack 2025 as a team of 4, winning the 1st Place, Best UI/UX, and Best Beginner
                    Hack. Later published to chrome web store and launched by
                    <a href="https://interfinity.tech/" target="_blank"
                        style="color: #ff6952; font-size: 18px; font-family: 'GajrajOne', sans-serif;">interfinity
                        Limited</a>.
                </h3>
                <div class="overview-container">

                    <div class="overview-card-container">


                        <p>Several of my accomplishments included:</p>
                        <div class="overview-card" style="background-color: #fff2f0;">
                            <div class="overview-card-title">
                                <h4>01</h4>
                                <h3>Design & Prototype</h3>
                            </div>
                            <p>Designing the Visual and UIUX of the extension and website.
                            </p>
                        </div>
                        <div class="overview-card" style="background-color: #fff2f0;">
                            <div class="overview-card-title">
                                <h4>02</h4>
                                <h3> Frontend Dev</h3>
                            </div>
                            <p>Developing the front end of the landing page.
                            </p>
                        </div>
                        <div class="overview-card" style="background-color: #fff2f0;">
                            <div class="overview-card-title">
                                <h4>03</h4>
                                <h3>Marketing</h3>

                            </div>
                            <p>Participate in promotion and production of marketing materials, including product videos.
                            </p>
                        </div>
                        <div class="overview-card" style="background-color: #fff2f0;">
                            <div class="overview-card-title">
                                <h4>04</h4>
                                <h3>Design Research</h3>
                            </div>
                            <p>Conducted design research to understand the user needs and pain points, and conceptualize
                                solutions.
                            </p>
                        </div>
                    </div>
                    <div class="overview-image-container"
                        onclick="window.open('https://devpost.com/software/intertabs', '_blank')">
                        <img class="overview-image" src="/assets/images/projects/intertabs/hofHack.webp" alt="overview">
                    </div>
                </div>

            </section>
            <!-- Problem statement -->
            <div class="problem-statement-container">
                <div class="problem-statement" style="background-color: #FFB0A3;">
                    <h3>How can we help browser users to manage tabs more efficiently?</h3>
                    <p><b>Target Audience:</b> <span style="margin-left: 10px;">Students, teachers, office workers,
                            researhcers, any browser user.</span></p>
                </div>
            </div>

            <!-- Problem research -->
            <section>
                <h2>PROBLEMS</h2>
                <h3>I interviewed 20+ browser users from different fields and age groups. The problems are interrelated
                    and form a bad cycle:</h3>
                <div class="analysis-block"
                    style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start;">
                    <div class="analysis-items-grid">
                        <div class="analysis-item analysis-item-bad">
                            <h3>Can’t Find the Tab</h3>
                            <p>“The biggest problem is that there are too many tabs and I can’t find the one I need.”
                            </p>
                        </div>
                        <div class="analysis-item analysis-item-bad">
                            <h3>Afraid to Close Tabs</h3>
                            <p>“Tabs need to be reused for certain projects or classes, so we don’t want to close them.
                                But they just pile up.”</p>
                        </div>
                        <div class="analysis-item analysis-item-bad">
                            <h3>Slowing Everything Down</h3>
                            <p>“There are so many tabs open, slowing down both me and the computer.”</p>
                        </div>
                    </div>
                    <div class="analysis-images single" style="margin-bottom: 0;">
                        <img src="/assets/images/projects/intertabs/problem.webp" alt="Tab overload problem">
                    </div>
                </div>
            </section>
            <!-- Features -->
            <section id="features">
                <h2>SOLUTION</h2>
                <div class="features-container-wrapper">
                    <div class="features-container">
                        <div class="feature-item" id="feature2">
                            <img src="/assets/images/projects/intertabs/feature2.webp" alt="overview">
                        </div>
                        <div class="feature-description">
                            <h3>Save Tabs as Sessions </h3>
                            <p>Save your tabs as a Session you can reopen anytime. Create separate Sessions for
                                different tasks to keep your workflow organized. </p>
                            <ul class="feature-reasoning-list">
                                <li class="feature-reasoning"><span class="feature-reasoning-label">Added from
                                        research</span></li>
                                <li class="feature-reasoning">Users said they avoid closing tabs they still need later
                                </li>
                                <li class="feature-reasoning">Sessions reduce the fear of losing important pages</li>
                                <li class="feature-reasoning">Keeps project-based workflows easy to return to</li>
                            </ul>
                        </div>
                    </div>

                    <div class="features-container">
                        <div class="feature-item" id="feature4">
                            <img src="/assets/images/projects/intertabs/feature4.webp" alt="overview">
                        </div>
                        <div class="feature-description">
                            <h3>Smart Labeling </h3>
                            <p>Automatically label your Sessions based on their content. AI suggests names for tab
                                groups based on their content, and automatically label them—you can edit them anytime.
                            </p>
                            <ul class="feature-reasoning-list">
                                <li class="feature-reasoning"><span class="feature-reasoning-label">Added from
                                        research</span></li>
                                <li class="feature-reasoning">People struggled to find the right tab once too many were
                                    open</li>
                                <li class="feature-reasoning">AI-generated labels make saved groups easier to scan and
                                    recognize</li>
                                <li class="feature-reasoning">Makes reopening the right session faster</li>
                            </ul>
                        </div>
                    </div>
                    <div class="features-container">
                        <div class="feature-item" id="feature5">
                            <img src="/assets/images/projects/intertabs/feature5.webp" alt="overview">
                        </div>
                        <div class="feature-description">
                            <h3>Start New Sessions with AI </h3>
                            <p>If the user has a window that have large amount of tabs, interTabs will use AI to sort
                                the tabs into oganized sections for the user.</p>
                            <ul class="feature-reasoning-list">
                                <li class="feature-reasoning"><span class="feature-reasoning-label">Added from
                                        research</span></li>
                                <li class="feature-reasoning">Tab overload slows down both the user and their device
                                </li>
                                <li class="feature-reasoning">AI splits a crowded window into meaningful groups
                                    automatically</li>
                                <li class="feature-reasoning">Removes heavy manual work at the moment users feel most
                                    overwhelmed</li>
                            </ul>
                        </div>
                    </div>
                    <div class="features-container">
                        <div class="feature-item" id="feature6">
                            <img src="/assets/images/projects/intertabs/feature6.webp" alt="overview">
                        </div>
                        <div class="feature-description">
                            <h3>One-click Organize </h3>
                            <p>Have countless tabs open? Intelligently organize them into Sessions with one click.</p>
                            <ul class="feature-reasoning-list">
                                <li class="feature-reasoning"><span class="feature-reasoning-label">Added from
                                        research</span></li>
                                <li class="feature-reasoning">The solution needed to feel clear and simple</li>
                                <li class="feature-reasoning">Not like another complex tab manager</li>
                                <li class="feature-reasoning">One-click organizing gives an immediate way to recover
                                    from browser chaos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Impact -->
            <section>
                <h2>IMPACT</h2>
                <h3>interTabs was featured and recognized across launch platforms.</h3>
                <div class="impact-badges">
                    <a href="https://fazier.com/launches/intertabs" target="_blank" rel="noopener noreferrer"
                        class="impact-badge" aria-label="interTabs on Fazier – #1 Product of the Day">
                        <img src="/assets/images/projects/intertabs/embed_image.svg" alt="Fazier #1 Product of the Day">
                    </a>
                    <a href="https://www.producthunt.com/products/intertabs?utm_source=badge-featured&utm_medium=badge&utm_source=badge-intertabs"
                        target="_blank" rel="noopener noreferrer" class="impact-badge"
                        aria-label="interTabs on Product Hunt">
                        <img src="/assets/images/projects/intertabs/featured.svg" alt="Featured on Product Hunt">
                    </a>
                    <a href="https://startupfa.me/s/intertabs?utm_source=intertabs.com" target="_blank"
                        rel="noopener noreferrer" class="impact-badge" aria-label="interTabs on Startup Fame">
                        <img src="/assets/images/projects/intertabs/light.webp" alt="interTabs on Startup Fame">
                    </a>
                </div>
                <br>
                <div class="impact-feedback">
                    <div class="impact-feedback-item">
                        <img src="/assets/images/projects/intertabs/feedback1.webp" alt="User feedback – MCP Explorer">
                    </div>
                    <div class="impact-feedback-item">
                        <img src="/assets/images/projects/intertabs/feedback5.webp" alt="User feedback – Subhadip Saha">
                    </div>
                    <div class="impact-feedback-item">
                        <img src="/assets/images/projects/intertabs/feedback6.webp"
                            alt="User feedback – Iyobosa Rehoboth">
                    </div>
                    <div class="impact-feedback-item">
                        <img src="/assets/images/projects/intertabs/feedback8.webp"
                            alt="User feedback – contactnucandleco">
                    </div>
                    <div class="impact-feedback-item">
                        <img src="/assets/images/projects/intertabs/feedback2.webp" alt="User feedback – Yongjie Xie">
                    </div>
                    <div class="impact-feedback-item">
                        <img src="/assets/images/projects/intertabs/feedback3.webp" alt="User feedback – Victor Reztune">
                    </div>
                    <div class="impact-feedback-item">
                        <img src="/assets/images/projects/intertabs/feedback4 copy.webp"
                            alt="User feedback – Aerosend ai">
                    </div>
                    <div class="impact-feedback-item">
                        <img src="/assets/images/projects/intertabs/feedback4.webp" alt="User feedback – Aifindbag Team">
                    </div>
                </div>
            </section>


            <!-- Process -->
            <section class="process-section">
                <h2>PROCESS</h2>
                <br>

                <h3>MARKET RESEARCH</h3>
                <p>
                    I researched on the existing tab managing chrome extensions and found that none can sort tabs in a
                    convenient and smart way.
                </p>
                <img class="project-wide-image" src="/assets/images/projects/intertabs/research1.webp"
                    alt="design research" style="background-color: #f8f8f8;">
                <br>
                <br>

                <div class="problem-statement-container">
                    <div class="problem-statement" style="background-color: #FFB0A3;">
                        <h3><b style="margin-right: 10px;">Conclusion:</b> Create a clear and simple tool that helps
                            users
                            manage tabs by customizing to groups according to their needs.</h3>
                    </div>
                </div>
                <br>

                <br>
                <h3>Prototyping, testing, and iterating on the design.</h3>
                <p>
                    From early product thinking in Figma to prototype reviews and real-world testing, I iterated on the
                    information architecture, interaction flow, and visual system before finalizing the extension
                    experience.
                </p>

                <div class="process-layout">
                    <div class="process-figma">
                        <img src="/assets/images/projects/intertabs/process-fgma.webp"
                            alt="interTabs Figma exploration and design process">
                    </div>

                    <div class="process-supporting-images">
                        <img src="/assets/images/projects/intertabs/process.webp"
                            alt="interTabs extension testing on laptop">
                        <img src="/assets/images/projects/intertabs/process2.webp"
                            alt="interTabs interface review in Figma">
                    </div>
                </div>
                <br>

                <h3>VISUAL DESIGN</h3>
                <img class="content-wide" src="/assets/images/projects/intertabs/logodesign.webp" alt="visual design">

                <div class="visual-design-container">
                    <img src="/assets/images/projects/intertabs/color_l.webp" alt="visual design">
                    <img src="/assets/images/projects/intertabs/color_d.webp" alt="visual design">

                    <img src="/assets/images/projects/intertabs/intertabs_l.webp" alt="visual design">
                    <img src="/assets/images/projects/intertabs/intertabs_d.webp" alt="visual design">
                </div>

                <br>
                <h2>DESIGN DECISIONS</h2>
                <p>I rethought how tab management should work from the ground up, deciding on what features to include
                    and what to cut.</p>

                <p><b style="margin-right: 10px;">The core design focus were:</b></p>

                <div style="display: flex; flex-direction: row; gap: 24px; margin-top: 32px;">
                    <div
                        style="flex: 1; display: flex; flex-direction: column; gap: 12px; padding: 24px; background: #fff2f0;">
                        <span
                            style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #ff6952;">01</span>
                        <h3 style="margin: 0;">Information Architecture</h3>
                        <p style="color: var(--color-gray); line-height: 1.65; margin: 0; font-size: 14px;">Rather than
                            presenting tabs as a flat linear list, I introduced hierarchical grouping — tabs have
                            structure and logical relationships, not just order. This was the core shift that made
                            interTabs feel fundamentally different from native tab management.</p>
                    </div>
                    <div
                        style="flex: 1; display: flex; flex-direction: column; gap: 12px; padding: 24px; background: #fff2f0;">
                        <span
                            style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #ff6952;">02</span>
                        <h3 style="margin: 0;">Reducing Switching Cost</h3>
                        <p style="color: var(--color-gray); line-height: 1.65; margin: 0; font-size: 14px;">The design
                            prioritises fast location — getting users to the right tab immediately without hunting.
                            Visual distinction and structural grouping let users scan and identify targets at a glance,
                            cutting the time lost bouncing between tabs.</p>
                    </div>
                    <div
                        style="flex: 1; display: flex; flex-direction: column; gap: 12px; padding: 24px; background: #fff2f0;">
                        <span
                            style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #ff6952;">03</span>
                        <h3 style="margin: 0;">Lightweight &amp; Non-Intrusive</h3>
                        <p style="color: var(--color-gray); line-height: 1.65; margin: 0; font-size: 14px;">Because
                            interTabs is a high-frequency tool, I kept the interface intentionally restrained. No visual
                            noise, no unnecessary prompts — users stay focused on their actual work, not on managing the
                            manager.</p>
                    </div>
                </div>
                <br>

                <p><b style="margin-right: 10px;">What got cut:</b> Early concepts included deep customization for how
                    AI groups tabs, and push notifications reminding users to save open sessions before closing. Both
                    were dropped — they added friction to an experience that needed to feel effortless.</p>

            </section>
            <section>
                <h2>Video Demo</h2>
                <iframe src="https://www.youtube.com/embed/2bHR0zIa2yA" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </section>

            <!-- Reflection -->
            <section>
                <h2>REFLECTION</h2>
                <h3>Building interTabs clarified something I'll carry into every project: the real challenge in
                    productivity design isn't adding capability — it's reducing cognitive load.</h3>

                <div class="analysis-items-grid" style="margin-top: 32px;">
                    <div class="analysis-item" style="border-left: 4px solid #FFB0A3;">
                        <h3>The Core Tradeoff</h3>
                        <p>More features mean more control — but also a steeper learning curve. I chose to protect the
                            simplicity of the core experience first. A tool people actually use daily is worth more than
                            a fully-featured one that feels like a chore.</p>
                    </div>
                    <div class="analysis-item" style="border-left: 4px solid #FFB0A3;">
                        <h3>Design Value = Faster Decisions</h3>
                        <p>The value of design here wasn't making things look clean — it was helping users make faster
                            decisions. Every layout choice, every label, every grouping was evaluated by one question:
                            does this help the user decide <em>less</em>?</p>
                    </div>
                </div>
            </section>



            <section class="next-project-section">
                <h1 style="font-size: 24px;">More Projects</h1>
                <div class="next-projects-container">
                    <a class="next-project-card" href="/projects/everstream">
                        <div class="next-project-image">
                            <img src="/assets/images/covers/everstream.webp" alt="Everstream">
                        </div>
                        <div class="next-project-content">
                            <h2>Everstream</h2>
                            <p>A multiplayer card game built around real-time strategy and stream mechanics.</p>
                        </div>
                    </a>
                    <a class="next-project-card" href="/projects/albertplus">
                        <div class="next-project-image">
                            <img src="/assets/images/covers/albertplus.webp" alt="Albert Plus">
                        </div>
                        <div class="next-project-content">
                            <h2>Albert Plus</h2>
                            <p>A redesigned companion for NYU's Albert — improving search, comparison, and planning.</p>
                        </div>
                    </a>
                </div>
            </section>
        </div>

        <AppFooter />
</template>

<script setup>
useHead({
  title: 'interTabs',
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
