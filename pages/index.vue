<template>
<AppHeader />
        <div class="main-content">

            <div id="hero" class="hero">
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
                    <p class="hero-side-description">I'm Carol, a <strong>Product Designer</strong> crafting engaging
                        experiences that resonate with users.</p>
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



            <div class="content">

                <section class="projects-section" id="project">
                    <div class="content-header">
                        <h1>Selected Projects</h1>
                        <button onclick="window.location.href='/projects'" class="project-item-button"
                            id="leaf-decoration-button">All Projects</button>
                        <img class="leaf-decoration" src="/assets/images/main/lotus-leaf.svg" alt="">
                    </div>
                    <div class="projects-container">

                        <!-- <div class="projects-item-container"> -->
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
                            <img src="/assets/images/covers/intertabs.webp" alt="projects-item-1">
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
                                poster="/assets/images/covers/wechat.webp" autoplay muted loop playsinline
                                preload="metadata"></video>
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
                                    <p>The next-generation companion for NYU's Albert course registration system with
                                        better
                                        user experience and features.
                                    </p>
                                </div>

                            </div>
                            <video class="projects-item-image" src="/assets/images/covers/albertplus.mov"
                                poster="/assets/images/covers/albertplus.webp" autoplay muted loop playsinline
                                preload="metadata">
                            </video>
                        </a>


                        <a class="projects-item" data-category="web-apps" href="/projects/paletteu">
                            <div class="projects-item-content">
                                <!-- <span class="coming-soon-badge">Coming Soon</span> -->
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
                                poster="/assets/images/covers/paletteu.webp" autoplay muted loop playsinline
                                preload="metadata">
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
                                    <p>An interactive Wechat Mini Program that helps users find their ideal MBTI
                                        partner.
                                    </p>
                                </div>
                            </div>
                            <video class="projects-item-image" src="/assets/images/covers/mbti.mp4"
                                poster="/assets/images/covers/mbti.webp" autoplay muted loop playsinline
                                preload="metadata">
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
                                    <p>Branding design to establish a visual identity for Orango -- a startup focused on
                                        web-based social games.</p>
                                </div>
                            </div>
                            <img class="projects-item-image" src="/assets/images/covers/orango_branding.webp"
                                alt="projects-item-1">
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
                                poster="/assets/images/covers/everstream.webp" autoplay muted loop playsinline
                                preload="metadata">
                            </video>
                        </a>
                        <!-- 
                        <a class="projects-item" data-category="web-apps" href="https://devpost.com/software/dreamail"
                            target="_blank" rel="noopener noreferrer">
                            <div class="projects-item-content">
                                <div class="project-meta">
                                    <div class="project-meta-tags">
                                        <span class="project-meta-tag">XR</span>
                                        <span class="project-meta-tag">AI</span>
                                        <span class="project-meta-tag">MIT Reality Hack 2026</span>
                                    </div>
                                </div>
                                <div>
                                    <h4>2026</h4>
                                    <h2 class="project-item-title">DREAMMAIL</h2>
                                    <h3>Designer & Developer</h3>
                                    <p>A spatial AR interface for everyday digital tools, powered by AI-driven
                                        interaction.
                                    </p>
                                </div>
                            </div>
                            <img class="projects-item-image" src="/assets/images/covers/dreamail.webp"
                                alt="projects-item-1">
                        </a> -->
                        <a class="projects-item" data-category="web-apps" target="_blank" rel="noopener noreferrer"
                            href="https://www.cosmasense.tech/">
                            <!-- <span class="coming-soon-badge">Coming Soon</span> -->

                            <div class="projects-item-content">
                                <div class="project-meta">
                                    <div class="project-meta-tags">
                                        <span class="project-meta-tag">AI Product</span>
                                        <span class="project-meta-tag">Branding</span>
                                        <span class="project-meta-tag">Shipped Product</span>
                                    </div>
                                </div>
                                <div>
                                    <h4>2026</h4>
                                    <h2 class="project-item-title">Cosma Sense</h2>
                                    <h3>Product Designer</h3>
                                    <p>An AI-powered search engine that indexes your files and lets you find
                                        information semantically.
                                    </p>
                                </div>
                            </div>
                            <img class="projects-item-image" src="/assets/images/covers/cosmasense.webp"
                                alt="projects-item-1">
                        </a>

                    </div>
                </section>

                <section class="also-do-section">
                    <h2 class="also-do-title">i also do...</h2>
                    <div class="also-do-tags">
                        <a class="also-do-btn" href="/play?tag=code" data-tag="code">code</a>
                        <a class="also-do-btn" href="/play?tag=design" data-tag="design">design</a>
                        <a class="also-do-btn" href="/play?tag=game" data-tag="game">game</a>
                        <a class="also-do-btn" href="/play?tag=xr" data-tag="xr">xr</a>
                        <a class="also-do-btn" href="/play?tag=art" data-tag="art">art</a>
                    </div>

                    <!-- Tag preview panels -->
                    <div class="also-do-preview">

                        <div class="also-do-panel" data-panel="code">
                            <video class="also-do-item" src="/assets/images/play/pixelme.mov" autoplay muted loop
                                playsinline preload="metadata"></video>
                            <video class="also-do-item" src="/assets/images/play/InHistory.mov" autoplay muted loop
                                playsinline preload="metadata"></video>
                            <video class="also-do-item" src="/assets/images/play/clock.mov" autoplay muted loop
                                playsinline preload="metadata"></video>
                            <video class="also-do-item" src="/assets/images/play/PetUrFriends.mov" autoplay muted loop
                                playsinline preload="metadata"></video>
                            <img class="also-do-item" src="/assets/images/play/DreamOrDime.webp" alt="DreamOrDime">
                        </div>

                        <div class="also-do-panel" data-panel="design">
                            <img class="also-do-item" src="/assets/images/play/app4.webp" alt="app">
                            <img class="also-do-item" src="/assets/images/play/springshowposter.webp" alt="postershow">
                            <img class="also-do-item" src="/assets/images/play/design1.webp" alt="design">
                            <img class="also-do-item" src="/assets/images/play/orango.webp" alt="orango">
                        </div>

                        <div class="also-do-panel" data-panel="game">
                            <video class="also-do-item" src="/assets/images/covers/everstream.mov" autoplay muted loop
                                playsinline preload="metadata"></video>
                            <video class="also-do-item" src="/assets/images/play/game_maze.mov" autoplay muted loop
                                playsinline preload="metadata"></video>
                            <video class="also-do-item" src="/assets/images/play/maricat.mp4" autoplay muted loop
                                playsinline preload="metadata"></video>
                            <video class="also-do-item" src="/assets/images/play/zelda.mp4" autoplay muted loop
                                playsinline preload="metadata"></video>
                        </div>

                        <div class="also-do-panel" data-panel="xr">
                            <img class="also-do-item" src="/assets/images/covers/dreamail.webp" alt="DREAMMAIL">
                            <video class="also-do-item" src="/assets/images/play/mr-coffeechat.mov" autoplay muted loop
                                playsinline preload="metadata"></video>
                        </div>

                        <div class="also-do-panel" data-panel="art">
                            <video class="also-do-item" src="/assets/images/play/TheFalseTurn.mov" autoplay muted loop
                                playsinline preload="metadata"></video>
                            <video class="also-do-item" src="/assets/images/play/EchoesOfOurStep.mov" autoplay muted
                                loop playsinline preload="metadata"></video>
                            <video class="also-do-item" src="/assets/images/play/cook-animation.mov" autoplay muted loop
                                playsinline preload="metadata"></video>
                            <img class="also-do-item" src="/assets/images/play/modelMe.webp" alt="art">
                            <img class="also-do-item" src="/assets/images/play/art2.webp" alt="art">
                        </div>

                    </div>
                </section>

                <section class="work-experience-section" id="experience">
                    <div class="content-header" style="margin-bottom: 10px;">
                        <h1>Work Experience</h1>
                        <button onclick="window.location.href='/about'" class="project-item-button"
                            id="leaf-decoration-button">More Work</button>
                        <img class="leaf-decoration" src="/assets/images/main/lotus-leaf.svg" alt="">
                    </div>
                    <div class="work-experience-grid">
                        <a href="https://www.paibox.com/" target="_blank" rel="noopener noreferrer"
                            class="work-card work-card--paibox">
                            <img class="work-card-img work-card-img--paibox-back"
                                src="/assets/images/experience/PaiBox-back.webp" alt="">
                            <img class="work-card-img work-card-img--paibox"
                                src="/assets/images/experience/PaiBox-front.webp" alt="PaiBox app">

                            <div class="work-card-header">
                                <h3>PaiBox</h3>
                                <span class="work-date">2026 - Present</span>
                            </div>
                            <p class="work-role">Product Design Intern</p>
                        </a>

                        <a href="https://apps.apple.com/cn/app/nook-%E4%B8%89%E5%B8%A7%E6%97%A5%E8%AE%B0/id6753132998?l=en-GB"
                            target="_blank" rel="noopener noreferrer" class="work-card work-card--nook"
                            style="margin-bottom: 30px;">
                            <img class="work-card-img work-card-img--nook-behind"
                                src="/assets/images/experience/nook-behind.webp" alt="Nook app screenshots">
                            <img class="work-card-img work-card-img--nook-front"
                                src="/assets/images/experience/nook-front.webp" alt="Nook mascot">
                            <div class="work-card-header">
                                <h3>Nook</h3>
                                <span class="work-date">2026 - Present</span>
                            </div>
                            <p class="work-role">Product Design Intern</p>
                        </a>

                        <a class="work-card work-card--superrent">
                            <img class="work-card-img work-card-img--superrent"
                                src="/assets/images/experience/superrent-behind1.webp" alt="SuperRent">
                            <img class="work-card-img work-card-img--superrent2"
                                src="/assets/images/experience/superrent-behind2.webp" alt="SuperRent map">
                            <img class="work-card-img work-card-img--superrent3"
                                src="/assets/images/experience/superrent-behind3.webp" alt="SuperRent chat">
                            <div class="work-card-header">
                                <h3>SuperRent</h3>
                                <span class="work-date">2025 - 2026</span>
                            </div>
                            <p class="work-role">UX Design Intern</p>
                        </a>

                        <a href="https://xacademy.cc/vision" target="_blank" rel="noopener noreferrer"
                            class="work-card work-card--xa">
                            <img class="work-card-img work-card-img--xa" src="/assets/images/experience/xa-behind1.webp"
                                alt="Tech X Academy">
                            <img class="work-card-img work-card-img--xa2"
                                src="/assets/images/experience/xa-behind2.webp" alt="Tech X Academy event">
                            <div class="work-card-header">
                                <h3>Tech X Academy</h3>
                                <span class="work-date">2025</span>
                            </div>
                            <p class="work-role">Academic Lead in HCI</p>
                        </a>

                        <a href="https://globaldeltasecurities.com/" target="_blank" rel="noopener noreferrer"
                            class="work-card work-card--gds">
                            <img class="work-card-img work-card-img--gds"
                                src="/assets/images/experience/gds-behind.webp" alt="Global Delta Securities">
                            <div class="work-card-header">
                                <h3>Global Delta Securities</h3>
                                <span class="work-date">2025</span>
                            </div>
                            <p class="work-role">Designer & Front-End Developer</p>
                        </a>

                        <a href="https://sweetdreams4all.org/" target="_blank" rel="noopener noreferrer"
                            class="work-card work-card--sweetdreams">
                            <img class="work-card-img work-card-img--sweetdreams"
                                src="/assets/images/experience/sweetdreams-behind.webp" alt="Sweet Dreams 4 All">
                            <div class="work-card-header">
                                <h3>Sweet Dream 4 All</h3>
                                <span class="work-date">2025</span>
                            </div>
                            <p class="work-role">Designer & Front-End Developer</p>
                        </a>
                    </div>
                </section>


                <section id="play" class="play-container">
                    <div class="content-header">
                        <h1>Playground</h1>
                        <button onclick="window.location.href='/play'" class="project-item-button">View More</button>
                        <img class="leaf-decoration" src="/assets/images/main/lotus-leaf.svg" alt="">
                    </div>
                    <div class="play-container">
                        <a class="play-item-wrapper" href="https://pixel-me-taupe.vercel.app/" target="_blank"
                            rel="noopener noreferrer">
                            <video class="play-item" src="/assets/images/play/pixelme.mov" alt="pixelMe" loop autoplay
                                muted playsinline></video>
                        </a>
                        <div class="play-item-wrapper">
                            <img class="play-item" src="/assets/images/play/app4.webp" alt="App">
                        </div>
                        <a class="play-item-wrapper" href="https://youtu.be/e9QJO8i3q8s" target="_blank"
                            rel="noopener noreferrer">
                            <video class="play-item" src="/assets/images/play/InHistory.mov" alt="InHistory" autoplay
                                muted loop playsinline preload="metadata"></video>
                        </a>
                        <a class="play-item-wrapper" href="https://youtu.be/Mgj6xAEFDHo" target="_blank"
                            rel="noopener noreferrer">
                            <video class="play-item" src="/assets/images/play/game_maze.mov" alt="Game Maze" autoplay
                                muted loop playsinline preload="metadata"></video>
                        </a>
                        <div class="play-item-wrapper">
                            <video class="play-item" src="/assets/images/play/xa.mov" alt="xa" autoplay muted loop
                                playsinline preload="metadata"></video>
                        </div>
                        <div class="play-item-wrapper mobile-hidden">
                            <video class="play-item" src="/assets/images/play/mr-coffeechat.mov" alt="music" autoplay
                                muted loop playsinline preload="metadata"></video>
                        </div>
                        <div class="play-item-wrapper mobile-hidden">
                            <video class="play-item" src="/assets/images/play/band-comp.mov" alt="music" autoplay muted
                                loop playsinline preload="metadata"></video>
                        </div>
                        <div class="play-item-wrapper mobile-hidden">
                            <video class="play-item" src="/assets/images/play/cook-animation.mov" alt="music" autoplay
                                muted loop playsinline preload="metadata"></video>
                        </div>
                        <a class="play-item-wrapper mobile-hidden" href="https://youtu.be/Bqjvh_u7IWU" target="_blank"
                            rel="noopener noreferrer">
                            <video class="play-item" src="/assets/images/play/musicLooper.mp4" alt="MusicLooper"
                                autoplay muted loop playsinline preload="metadata"></video>
                        </a>
                        <a class="play-item-wrapper mobile-hidden" href="https://youtu.be/2VhsPX2RgJA" target="_blank"
                            rel="noopener noreferrer">
                            <video class="play-item" src="/assets/images/play/zelda.mp4" alt="Zelda" autoplay muted loop
                                playsinline preload="metadata"></video>
                        </a>
                        <div class="play-item-wrapper mobile-hidden">
                            <img class="play-item" src="/assets/images/play/NeoAssistant.webp" alt="NeoAssistant">
                        </div>
                        <div class="play-item-wrapper mobile-hidden">
                            <video class="play-item" src="/assets/images/play/TheFalseTurn.mov" alt="TheFalseTurn" loop
                                autoplay muted playsinline></video>
                        </div>
                        <div class="play-item-wrapper mobile-hidden">
                            <video class="play-item" src="/assets/images/play/EchoesOfOurStep.mov" alt="EchoesOfOurStep"
                                autoplay muted loop playsinline preload="metadata"></video>
                        </div>
                        <a class="play-item-wrapper mobile-hidden" href="https://youtu.be/AuA6fwoRjjc" target="_blank"
                            rel="noopener noreferrer">
                            <video class="play-item" src="/assets/images/play/TheInvisibleLoop.mp4"
                                alt="TheInvisibleLoop" autoplay muted loop playsinline preload="metadata"></video>
                        </a>
                    </div>

                </section>

                <section id="about" class="about-container">
                    <h1 id="about-title1">About Me</h1>

                    <div class="about-section">
                        <img class="about-item-image" src="/assets/images/main/profile.webp" alt="project-item-1">


                        <div class="about-item-content">
                            <h1 id="about-title2">About Me</h1>

                            <h3>I'm Carol, a <strong>Product Designer</strong> crafting engaging experiences that
                                resonate with users.

                            </h3>

                            <p class="about-item-description">
                                For me, <strong>Product Design</strong> is an interdisciplinary artwork.
                                <strong>Technology</strong> forms the canvas that defines the
                                possibilities;
                                <strong>Art</strong> is the unique strokes; <strong>Business</strong>,
                                <strong>Philosophy</strong>, and <strong>Game Mechanics</strong> mix into
                                the palette that create experience and interactions that resonates.
                            </p>
                            <p class="about-item-description">
                                I pour love into every design, weaving together this colorful world.
                            </p>

                            <button onclick="window.location.href='/about'" class="about-item-button">More About
                                Me</button>
                        </div>
                    </div>
                </section>

            </div>


        </div>



        <AppFooter />

            <!-- <h1>Hello World</h1> -->
</template>

<script setup>
useHead({
  title: 'Carol Yu',
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' },
    { rel: 'stylesheet', href: '/css/index.css' },
    { rel: 'stylesheet', href: '/css/experience.css' }
  ],
  script: [
    { src: '/js/script.js', body: true },
    { src: '/js/index.js', body: true }
  ]
});
</script>
