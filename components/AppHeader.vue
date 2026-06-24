<template>
<header class="main-header">
    <div class="header-container">
        <div class="header-left">
            <a href="/" class="header-link">
                <img class="logo light" src="/assets/icons/yu.svg" alt="logo">
                <img class="logo dark" src="/assets/icons/yu-dark.svg" alt="logo">
                <h1 class="header-title">CAROL YU</h1>
            </a>
        </div>

        <div class="header-middle">
            <a href="/#project" class="nav-link nav-link--work">WORK</a>
            <!-- <a href="#games">GAMES</a> -->

            <a href="/play" class="nav-link">PLAY</a>
            <a href="/about" class="nav-link">ABOUT</a>
        </div>

        <div class="header-right">
            <button class="menu-button header-link" style="justify-content: flex-end;">
                <h1 class="header-title">CONTACT</h1>
                <img class="menu-button-icon light" src="/assets/icons/menu.svg" alt="menu">
                <img class="menu-button-icon dark" src="/assets/icons/menu-dark.svg" alt="menu">
            </button>
        </div>
    </div>

    <!-- Mobile header bar -->
    <div class="header-mobile-bar">
        <div class="header-mobile-right">
            <a href="/" class="header-mobile-logo">
                <img class="logo light" src="/assets/icons/yu.svg" alt="logo">
                <img class="logo dark" src="/assets/icons/yu-dark.svg" alt="logo">
            </a>
            <a href="/"><h1 class="header-title header-mobile-title">CAROL</h1></a>
        </div>
        <button class="menu-button-mobile" id="menu-button-mobile" aria-label="Menu">
            <img class="light" src="/assets/icons/menu.svg" alt="menu">
            <img class="dark" src="/assets/icons/menu-dark.svg" alt="menu">
        </button>
    </div>
    <!-- Mobile nav dropdown -->
    <div class="header-mobile-nav" id="header-mobile-nav">
        <a href="/#project" class="nav-link nav-link--work">WORK</a>
        <a href="/play" class="nav-link">PLAY</a>
        <a href="/about" class="nav-link">ABOUT</a>
        <img class="menu-bottom" src="/assets/images/main/menu-bottom.svg" alt="">
    </div>
    <div id="menu-dropdown" class="menu-dropdown">
        <div class="menu-dropdown-content">

            <div class="menu-dropdown-content-links-container">
                <a href="https://www.linkedin.com/in/carolyuhf/" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        style="vertical-align: middle; margin-right: 6px;">
                        <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                            fill="currentColor" />
                    </svg>
                    carolyuhf
                </a>
                <a href="https://www.instagram.com/carolyuhf/" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        style="vertical-align: middle; margin-right: 6px;">
                        <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                            fill="currentColor" />
                    </svg>
                    @carolyuhf
                </a>
                <a href="https://github.com/carolyu2006" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        style="vertical-align: middle; margin-right: 6px;">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            fill="currentColor" />
                    </svg>
                    carolyu2006
                </a>
                <a href="https://www.xiaohongshu.com/user/profile/5d1cd7fa00000000120188e0?xsec_token=YBCBoIDQv8J87E1oyjqCuMg_Nt6OsVnhy_21ROXc6LLaA=&xsec_source=app_share&xhsshare=CopyLink&shareRedId=N0ozQ0c8Sko2NzUyOTgwNjc1OTg8PUs5&apptime=1768556034&share_id=e22ed04444514283841f8ea95a601532"
                    target="_blank" rel="noopener noreferrer">
                    <img src="/assets/icons/rednote.webp" alt="RedNote" width="16" height="16"
                        style="vertical-align: middle; margin-right: 6px;">
                    yhf20060726
                </a>

                <div class="menu-dropdown-content-contact-container">

                    <a class="menu-dropdown-content-contact" href="mailto:CAROL.YU@NYU.EDU" style="font-family: 'GajrajOne', sans-serif; letter-spacing: 0.5px; font-size: 14px; margin-top: 10px;">CAROL.YU@NYU.EDU</a>

                </div>
            </div>
            <div>
                <img class="menu-bottom" src="/assets/images/main/menu-bottom.svg" alt="">
            </div>
        </div>
    </div>
</header>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue';

let cleanup = () => {};

onMounted(() => {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  document.querySelectorAll('.header-middle .nav-link, .header-mobile-nav .nav-link').forEach((link) => {
    const href = link.getAttribute('href')?.replace(/\/$/, '') || '/';
    if (href === path || (href === '/#project' && path === '/')) {
      link.classList.add('active');
    }
  });

  const header = document.querySelector('.main-header');
  const scrollRange = 200;
  const updateHeaderBg = () => {
    if (!header) return;
    const opacity = Math.min(1, window.pageYOffset / scrollRange);
    header.style.setProperty('--header-bg-opacity', opacity.toString());
  };

  const mobileBtn = document.getElementById('menu-button-mobile');
  const mobileNav = document.getElementById('header-mobile-nav');
  const closeMobileNav = () => {
    if (!mobileNav?.classList.contains('menu-open')) return;
    mobileNav.classList.add('menu-closing');
    mobileNav.classList.remove('menu-open');
    window.setTimeout(() => {
      mobileNav.classList.remove('menu-closing');
    }, 600);
  };
  const toggleMobileNav = () => {
    if (!mobileNav) return;
    if (mobileNav.classList.contains('menu-open')) {
      closeMobileNav();
    } else {
      mobileNav.classList.remove('menu-closing');
      mobileNav.classList.add('menu-open');
    }
  };
  const handleDocumentClick = (event) => {
    if (!mobileBtn || !mobileNav) return;
    const target = event.target;
    if (!mobileNav.contains(target) && target !== mobileBtn && !mobileBtn.contains(target)) {
      closeMobileNav();
    }
  };

  updateHeaderBg();
  window.addEventListener('scroll', updateHeaderBg, { passive: true });
  mobileBtn?.addEventListener('click', toggleMobileNav);
  document.addEventListener('click', handleDocumentClick);

  cleanup = () => {
    window.removeEventListener('scroll', updateHeaderBg);
    mobileBtn?.removeEventListener('click', toggleMobileNav);
    document.removeEventListener('click', handleDocumentClick);
  };
});

onBeforeUnmount(() => {
  cleanup();
});
</script>
