<template>
<AppHeader />
        <div class="main-content">
            <div class="play-header">
                <h1>Playground</h1>
                <div class="play-filter">
                <button class="filter-btn active" data-filter="all">all</button>
                <button class="filter-btn" data-filter="code">code</button>
                <button class="filter-btn" data-filter="design">design</button>
                <button class="filter-btn" data-filter="game">game</button>
                <button class="filter-btn" data-filter="xr">xr</button>
                <button class="filter-btn" data-filter="art">art</button>
                </div>
            </div>
            <!-- Featured Game Spotlight (visible when "game" filter active) -->
            <div class="play-featured hidden" id="play-featured">
                <div class="play-featured-left">
                    <div class="play-featured-main">
                        <button class="play-featured-arrow play-featured-arrow--left" id="featured-prev"></button>
                        <video id="featured-main-video" src="/assets/images/covers/everstream.mov" poster="/assets/images/covers/everstream.webp" autoplay muted loop playsinline preload="metadata"></video>
                        <img id="featured-main-img" src="" alt="Everstream" style="display:none;">
                        <button class="play-featured-arrow play-featured-arrow--right" id="featured-next"></button>
                    </div>
                    <div class="play-featured-thumbs" id="featured-thumbs">
                        <div class="play-featured-thumb active" data-type="video" data-src="/assets/images/covers/everstream.mov" data-poster="/assets/images/covers/everstream.webp">
                            <img src="/assets/images/covers/everstream.webp" alt="video">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/everstream/ui1.webp">
                            <img src="/assets/images/projects/everstream/ui1.webp" alt="ui1">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/everstream/ui2.webp">
                            <img src="/assets/images/projects/everstream/ui2.webp" alt="ui2">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/everstream/ui3.webp">
                            <img src="/assets/images/projects/everstream/ui3.webp" alt="ui3">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/everstream/ui4.webp">
                            <img src="/assets/images/projects/everstream/ui4.webp" alt="ui4">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/everstream/ui5.webp">
                            <img src="/assets/images/projects/everstream/ui5.webp" alt="ui5">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/everstream/ui6.webp">
                            <img src="/assets/images/projects/everstream/ui6.webp" alt="ui6">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/everstream/ui7.webp">
                            <img src="/assets/images/projects/everstream/ui7.webp" alt="ui7">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/everstream/ui8.webp">
                            <img src="/assets/images/projects/everstream/ui8.webp" alt="ui8">
                        </div>
                    </div>
                </div>
                <div class="play-featured-info">
                    <h4>2025</h4>
                    <h2>Everstream</h2>
                    <h3>Game Designer & Developer</h3>
                    <p>A 2D game depicting the journey of the four seasons along a stream. Everstream is a contemplative platformer where the player follows a leaf drifting along a stream through spring, summer, autumn, and winter — each season bringing new visuals, mechanics, and emotional textures.</p>
                    <a class="play-featured-btn" href="/projects/everstream">Read More</a>
                </div>
            </div>

            <!-- Featured Code Spotlight (visible when "code" filter active) -->
            <div class="play-featured hidden" id="play-featured-code">
                <div class="play-featured-left">
                    <div class="play-featured-main">
                        <button class="play-featured-arrow play-featured-arrow--left"></button>
                        <img class="featured-main-display" id="featured-code-img" src="/assets/images/experience/sweetdreams-behind.webp" alt="Freelance">
                        <button class="play-featured-arrow play-featured-arrow--right"></button>
                    </div>
                    <div class="play-featured-thumbs">
                        <div class="play-featured-thumb active" data-type="image" data-src="/assets/images/experience/sweetdreams-behind.webp">
                            <img src="/assets/images/experience/sweetdreams-behind.webp" alt="Sweet Dreams">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/experience/gds-behind.webp">
                            <img src="/assets/images/experience/gds-behind.webp" alt="GDS">
                        </div>
                    </div>
                </div>
                <div class="play-featured-info">
                    <h4>2025</h4>
                    <h2>Freelance Web Dev & Design</h2>
                    <h3>Designer & Front-End Developer</h3>
                    <p>Freelance web development and design work for clients including Sweet Dreams 4 All, a non-profit organization, and Global Delta Securities, a financial services firm. Responsible for the full design and front-end development of both websites.</p>
                    <div class="play-featured-info-links">
                        <a class="play-featured-btn" href="https://sweetdreams4all.org/" target="_blank" rel="noopener noreferrer">Sweet Dreams 4 All</a>
                        <a class="play-featured-btn" href="https://globaldeltasecurities.com/" target="_blank" rel="noopener noreferrer">Global Delta Securities</a>
                    </div>
                </div>
            </div>

            <!-- Featured XR Spotlight (visible when "xr" filter active) -->
            <div class="play-featured hidden" id="play-featured-xr">
                <div class="play-featured-left">
                    <div class="play-featured-main">
                        <button class="play-featured-arrow play-featured-arrow--left" data-gallery="xr-prev"></button>
                        <img class="featured-main-display" id="featured-xr-img" src="/assets/images/covers/dreamail.webp" alt="DREAMMAIL">
                        <button class="play-featured-arrow play-featured-arrow--right" data-gallery="xr-next"></button>
                    </div>
                    <div class="play-featured-thumbs" id="featured-xr-thumbs">
                        <div class="play-featured-thumb active" data-type="image" data-src="/assets/images/covers/dreamail.webp">
                            <img src="/assets/images/covers/dreamail.webp" alt="cover">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/dreammail/2.webp">
                            <img src="/assets/images/projects/dreammail/2.webp" alt="2">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/dreammail/3.webp">
                            <img src="/assets/images/projects/dreammail/3.webp" alt="3">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/dreammail/4.webp">
                            <img src="/assets/images/projects/dreammail/4.webp" alt="4">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/dreammail/5.webp">
                            <img src="/assets/images/projects/dreammail/5.webp" alt="5">
                        </div>
                        <div class="play-featured-thumb" data-type="image" data-src="/assets/images/projects/dreammail/6.webp">
                            <img src="/assets/images/projects/dreammail/6.webp" alt="6">
                        </div>
                    </div>
                </div>
                <div class="play-featured-info">
                    <h4>2026</h4>
                    <h2>DREAMMAIL</h2>
                    <h3>Designer & Developer</h3>
                    <p>A spatial AR interface for everyday digital tools, powered by AI-driven interaction.</p>
                    <a class="play-featured-btn" href="https://devpost.com/software/dreamail" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
            </div>

            <div class="play-container">
                <a class="play-item-wrapper swipe play-item-info-wrapper" data-tag="game" data-featured="everstream" href="/projects/everstream">
                    <div class="play-item-info">
                        <h4>2025</h4>
                        <h2>Everstream</h2>
                        <h3>Game Designer & Developer</h3>
                        <p>A 2D game depicting the journey of the four seasons along a stream.</p>
                    </div>
                    <video class="play-item" src="/assets/images/covers/everstream.mov" poster="/assets/images/covers/everstream.webp" autoplay muted loop playsinline preload="metadata"></video>
                </a>
                <a class="play-item-wrapper swipe play-item-info-wrapper" data-tag="xr" data-featured="dreammail" href="https://devpost.com/software/dreamail" target="_blank" rel="noopener noreferrer">
                    <div class="play-item-info">
                        <h4>2026</h4>
                        <h2>DREAMMAIL</h2>
                        <h3>Designer & Developer</h3>
                        <p>A spatial AR interface for everyday digital tools, powered by AI-driven interaction.</p>
                    </div>
                    <img class="play-item" src="/assets/images/covers/dreamail.webp" alt="Dreammail">
                </a>
                
                <div class="play-item-wrapper" data-tag="xr">
                    <video class="play-item" src="/assets/images/play/mr-coffeechat.mov" alt="music" autoplay muted loop
                        playsinline preload="metadata"></video>
                </div>
                <a class="play-item-wrapper" data-tag="code" href="https://pixel-me-taupe.vercel.app/" target="_blank"
                    rel="noopener noreferrer">

                    <video class="play-item" src="/assets/images/play/pixelme.mov" alt="pixelMe" autoplay muted loop
                        playsinline preload="metadata"></video>
                </a>
                <div class="play-item-wrapper" data-tag="design">
                    <img class="play-item" src="/assets/images/play/springshowposter.webp" alt="ITP Spring Show 2026">
                </div>
                <a class="play-item-wrapper" data-tag="code"
                    href="https://chromewebstore.google.com/detail/pet-ur-friend/onddalpajmjpenfeoppfpcincflmbghb"
                    target="_blank" rel="noopener noreferrer">

                    <video class="play-item" src="/assets/images/play/PetUrFriends.mov" alt="TheFalseTurn" loop autoplay
                        muted playsinline></video>
                </a>

                

                <div class="play-item-wrapper" data-tag="design">
                    <img class="play-item" src="/assets/images/play/space-shooter.webp" alt="Space Shooter">
                </div>


                <div class="play-item-wrapper" data-tag="design">
                    <img class="play-item" src="/assets/images/play/app4.webp" alt="App">
                </div>

                <div class="play-item-wrapper" data-tag="design">
                    <img class="play-item" src="/assets/images/play/design1.webp" alt="design1">
                </div>
                <div class="play-item-wrapper" data-tag="design">
                    <img class="play-item" src="/assets/images/play/super-maricat.webp" alt="Super Maricat">
                </div>
                <div class="play-item-wrapper" data-tag="code">
                    <video class="play-item" src="/assets/images/play/band-comp.mov" alt="music" autoplay muted loop
                        playsinline preload="metadata"></video>
                </div>
                <div class="play-item-wrapper" data-tag="art">
                    <video class="play-item" src="/assets/images/play/cook-animation.mov" alt="music" autoplay muted
                        loop playsinline preload="metadata"></video>
                </div>
                <a class="play-item-wrapper" data-tag="code" href="https://youtu.be/auyys1KmkXU" target="_blank"
                    rel="noopener noreferrer">
                    <img class="play-item" src="/assets/images/play/DreamOrDime.webp" alt="DreamOrDime">
                </a>
                <a class="play-item-wrapper" data-tag="code" href="https://youtu.be/e9QJO8i3q8s" target="_blank"
                    rel="noopener noreferrer">
                    <video class="play-item" src="/assets/images/play/InHistory.mov" alt="InHistory" autoplay muted loop
                        playsinline preload="metadata"></video>
                </a>
                <a class="play-item-wrapper" data-tag="game" href="https://youtu.be/Mgj6xAEFDHo" target="_blank"
                    rel="noopener noreferrer">
                    <video class="play-item" src="/assets/images/play/game_maze.mov" alt="Game Maze" autoplay muted loop
                        playsinline preload="metadata"></video>
                </a>
                <a class="play-item-wrapper" data-tag="code" href="https://animal-clock-git-main-carol-projects.vercel.app/"
                    target="_blank" rel="noopener noreferrer">
                    <video class="play-item" src="/assets/images/play/clock.mov" alt="Clock" autoplay muted loop
                        playsinline preload="metadata"></video>
                </a>

                <a class="play-item-wrapper" data-tag="game" href="https://youtu.be/O5TcwrCu_Dw" target="_blank"
                    rel="noopener noreferrer">
                    <video class="play-item" src="/assets/images/play/maricat.mp4" alt="Maricat" autoplay muted loop
                        playsinline preload="metadata"></video>
                </a>

                <div class="play-item-wrapper" data-tag="code">
                    <video class="play-item" src="/assets/images/play/xa.mov" alt="xa" autoplay muted loop playsinline
                        preload="metadata"></video>
                </div>
                <div class="play-item-wrapper" data-tag="design">
                    <img class="play-item" src="/assets/images/projects/everstream/ui7.webp" alt="Everstream UI">
                </div>
                
                <a class="play-item-wrapper" data-tag="code" href="https://youtu.be/Bqjvh_u7IWU" target="_blank"
                    rel="noopener noreferrer">
                    <video class="play-item" src="/assets/images/play/musicLooper.mp4" alt="MusicLooper" autoplay muted
                        loop playsinline preload="metadata"></video>
                </a>
                <a class="play-item-wrapper" data-tag="game" href="https://youtu.be/2VhsPX2RgJA" target="_blank"
                    rel="noopener noreferrer">
                    <video class="play-item" src="/assets/images/play/zelda.mp4" alt="Zelda" autoplay muted loop
                        playsinline preload="metadata"></video>
                </a>
                <div class="play-item-wrapper" data-tag="design">
                    <img class="play-item" src="/assets/images/play/orango.webp" alt="orango">
                </div>
                <div class="play-item-wrapper" data-tag="code">
                    <img class="play-item" src="/assets/images/play/NeoAssistant.webp" alt="NeoAssistant">
                </div>
                <a class="play-item-wrapper swipe play-item-info-wrapper" data-tag="code" data-featured="freelance" href="https://sweetdreams4all.org/" target="_blank" rel="noopener noreferrer">
                    <div class="play-item-info">
                        <h4>2025</h4>
                        <h2>Sweet Dream 4 All</h2>
                        <h3>Designer & Front-End Developer</h3>
                    </div>
                    <img class="play-item" src="/assets/images/experience/sweetdreams-behind.webp" alt="Sweet Dream 4 All">
                </a>
                <div class="play-item-wrapper" data-tag="art">
                    <video class="play-item" src="/assets/images/play/TheFalseTurn.mov" alt="TheFalseTurn" autoplay
                        muted loop playsinline preload="metadata"></video>
                </div>
                <div class="play-item-wrapper" data-tag="art">
                    <video class="play-item" src="/assets/images/play/EchoesOfOurStep.mov" alt="EchoesOfOurStep"
                        autoplay muted loop playsinline preload="metadata"></video>
                </div>
                <div class="play-item-wrapper" data-tag="design">
                    <img class="play-item" src="/assets/images/play/heartbreak-dodge.webp" alt="Heartbreak Dodge">
                </div>

                <a class="play-item-wrapper" data-tag="art" href="https://youtu.be/AuA6fwoRjjc" target="_blank"
                    rel="noopener noreferrer">
                    <video class="play-item" src="/assets/images/play/TheInvisibleLoop.mp4" alt="TheInvisibleLoop"
                        autoplay muted loop playsinline preload="metadata"></video>
                </a>

                <div class="play-item-wrapper" data-tag="art">
                    <img class="play-item" src="/assets/images/play/modelMe.webp" alt="EchoesOfOurStep">
                </div>
                <div class="play-item-wrapper" data-tag="art">
                    <img class="play-item" src="/assets/images/play/modelMe2.webp" alt="EchoesOfOurStep">
                </div>
                <div class="play-item-wrapper" data-tag="art">
                    <img class="play-item" src="/assets/images/play/art2.webp" alt="art2">
                </div>
                <div class="play-item-wrapper" data-tag="design">
                    <img class="play-item" src="/assets/images/play/fly-swatter-arena.webp" alt="Fly Swatter Arena">
                </div>
                <a class="play-item-wrapper swipe play-item-info-wrapper" data-tag="code" data-featured="freelance" href="https://globaldeltasecurities.com/" target="_blank" rel="noopener noreferrer">
                    <div class="play-item-info">
                        <h4>2025</h4>
                        <h2>Global Delta Securities</h2>
                        <h3>Designer & Front-End Developer</h3>
                    </div>
                    <img class="play-item" src="/assets/images/experience/gds-behind.webp" alt="Global Delta Securities">
                </a>
                <div class="play-item-wrapper" data-tag="design">
                    <img class="play-item" src="/assets/images/play/maze.webp" alt="Maze">
                </div>
                <!-- <div class="play-item-wrapper" data-tag="art">
                    <img class="play-item" src="/assets/images/play/selfportrait-blue.webp" alt="selfportrait-blue">
                </div> -->
            </div>
        </div>
        <AppFooter />
</template>

<script setup>
useHead({
  title: 'Playground',
  link: [
    { rel: 'icon', type: 'image/png', href: '/assets/images/main/logo.svg' },
    { rel: 'stylesheet', href: '/css/styles.css' },
    { rel: 'stylesheet', href: '/css/play.css' }
  ],
  script: [
    { src: '/js/script.js', body: true },
    { src: '/js/play.js', body: true }
  ]
});
</script>
