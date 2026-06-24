// Main script file

function openMenu() {
    const dropdown = document.getElementById('menu-dropdown');
    if (!dropdown) return;
    if (_menuCloseTimeout) {
        clearTimeout(_menuCloseTimeout);
        _menuCloseTimeout = null;
    }
    dropdown.classList.remove('menu-closing');
    dropdown.classList.add('menu-open');
}

function closeMenu() {
    const dropdown = document.getElementById('menu-dropdown');
    if (!dropdown) return;
    if (dropdown.classList.contains('menu-open')) {
        dropdown.classList.add('menu-closing');
        dropdown.classList.remove('menu-open');
        setTimeout(() => {
            dropdown.classList.remove('menu-closing');
        }, 600);
    }
}

let _menuCloseTimeout = null;

function scheduleCloseMenu() {
    _menuCloseTimeout = setTimeout(() => {
        closeMenu();
        _menuCloseTimeout = null;
    }, 120);
}

// Hover-based open/close
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const dropdown = document.getElementById('menu-dropdown');

    if (menuButton && dropdown) {
        menuButton.addEventListener('mouseenter', openMenu);
        menuButton.addEventListener('mouseleave', scheduleCloseMenu);
        dropdown.addEventListener('mouseenter', openMenu);
        dropdown.addEventListener('mouseleave', scheduleCloseMenu);
    }
});

// Custom Cursor
document.addEventListener('DOMContentLoaded', () => {
    // Create cursor element
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const cursorText = document.createElement('span');
    cursorText.className = 'custom-cursor-text';
    cursorText.textContent = 'view';
    cursor.appendChild(cursorText);
    document.body.appendChild(cursor);

    // Track mouse movement
    // Initialize to center of viewport
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let hoverTimeout = null;

    // Set initial cursor position
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor follow with better responsiveness (more direct follow)
    function animateCursor() {
        const ease = 0.4;
        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Function to check if element is within excluded areas (header, footer, sidebar, certain blocks)
    function isInExcludedArea(element) {
        if (!element) return false;
        
        let current = element;
        while (current && current !== document.body && current !== document.documentElement) {
            // Check if it's a button
            if (current.tagName === 'BUTTON') {
                return true;
            }
            // Check if it's a social icon
            if (current.classList && current.classList.contains('social-icon')) {
                return true;
            }
            // Check if it's a footer email
            if (current.classList && current.classList.contains('footer-email')) {
                return true;
            }
            // Check if it's a head email (about page)
            if (current.classList && current.classList.contains('head-email')) {
                return true;
            }
            // Exclude About page social links block
            if (current.classList && current.classList.contains('head-social-links')) {
                return true;
            }
            // Check if it's in header
            if (current.tagName === 'HEADER' || 
                (current.classList && current.classList.contains('main-header')) ||
                (current.id && current.id === 'menu-dropdown')) {
                return true;
            }
            // Check if it's in footer
            if (current.tagName === 'FOOTER') {
                return true;
            }
            // Check if it's in sidebar
            if (current.classList && current.classList.contains('sidebar')) {
                return true;
            }
            // Check if it's in project sidenav
            if (current.classList && current.classList.contains('project-sidenav')) {
                return true;
            }
            
            current = current.parentElement;
        }
        
        return false;
    }

    // Function to check if element or any parent is clickable
    function isClickable(element) {
        if (!element || element === document.body || element === document.documentElement) return false;
        
        // Exclude buttons and elements in header, footer, sidebar
        if (isInExcludedArea(element)) {
            return false;
        }
        
        let current = element;
        // Check element and all parents up to body
        while (current && current !== document.body && current !== document.documentElement) {
            // Check if it's a link with href (not just #)
            if (current.tagName === 'A') {
                const href = current.getAttribute('href');
                if (href && href !== '#' && href.trim() !== '') {
                    return true;
                }
            }
            // Check if it has onclick attribute
            if (current.hasAttribute('onclick')) {
                return true;
            }
            // Allow manual cursor-hover class for custom elements
            if (current.classList && current.classList.contains('cursor-hover')) {
                return true;
            }
            
            current = current.parentElement;
        }
        
        return false;
    }

    // Handle hover state
    function setHoverState(isHovering) {
        // Clear any pending timeout
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            hoverTimeout = null;
        }
        
        if (isHovering) {
            cursor.classList.add('hover');
        } else {
            // Small delay to handle moving between nested elements
            hoverTimeout = setTimeout(() => {
                cursor.classList.remove('hover');
            }, 50);
        }
    }

    // Check on mouseover
    document.addEventListener('mouseover', (e) => {
        if (isClickable(e.target)) {
            setHoverState(true);
        }
    });

    // Check on mouseout
    document.addEventListener('mouseout', (e) => {
        // If moving to a related target, check if it's also clickable
        if (e.relatedTarget && isClickable(e.relatedTarget)) {
            // Stay in hover state
            return;
        }
        setHoverState(false);
    });
});

// Social icon typewriter effect and icon shifting
document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    // Create label spans and set up typewriter effect
    socialIcons.forEach((icon) => {
        const label = icon.getAttribute('aria-label');
        if (label) {
            const labelSpan = document.createElement('span');
            labelSpan.className = 'social-icon-label';
            labelSpan.setAttribute('data-full-text', label);
            icon.appendChild(labelSpan);
            
            let typewriterTimeout = null;
            let currentText = '';
            
            icon.addEventListener('mouseenter', () => {
                // Clear any existing timeout
                if (typewriterTimeout) {
                    clearTimeout(typewriterTimeout);
                }
                
                // Reset text
                currentText = '';
                labelSpan.textContent = '';
                labelSpan.style.opacity = '1';
                
                // Shift icons to the right
                const container = icon.closest('.footer-social-icons') || icon.closest('.head-social-icons');
                if (container) {
                    const icons = Array.from(container.querySelectorAll('.social-icon'));
                    const currentIndex = icons.indexOf(icon);
                    
                    // Calculate the width needed for the label
                    // Temporarily set full text to measure
                    labelSpan.textContent = label;
                    labelSpan.style.opacity = '1';
                    const labelWidth = labelSpan.offsetWidth;
                    labelSpan.textContent = '';
                    
                    // Shift subsequent icons
                    icons.forEach((otherIcon, otherIndex) => {
                        if (otherIndex > currentIndex) {
                            otherIcon.style.transition = 'transform 0.3s ease';
                            otherIcon.style.transform = `translateX(${labelWidth + 10}px)`;
                        }
                    });
                }
                
                // Typewriter effect
                const fullText = label;
                let charIndex = 0;
                
                const typeChar = () => {
                    if (charIndex < fullText.length) {
                        currentText += fullText[charIndex];
                        labelSpan.textContent = currentText;
                        charIndex++;
                        typewriterTimeout = setTimeout(typeChar, 50); // 50ms per character
                    }
                };
                
                typeChar();
            });
            
            icon.addEventListener('mouseleave', () => {
                // Clear typewriter
                if (typewriterTimeout) {
                    clearTimeout(typewriterTimeout);
                }
                
                // Reset label
                labelSpan.textContent = '';
                labelSpan.style.opacity = '0';
                
                // Reset icon positions
                const container = icon.closest('.footer-social-icons') || icon.closest('.head-social-icons');
                if (container) {
                    const icons = container.querySelectorAll('.social-icon');
                    icons.forEach(otherIcon => {
                        otherIcon.style.transition = 'transform 0.3s ease';
                        otherIcon.style.transform = 'translateX(0)';
                    });
                }
            });
        }
    });
});

// Project side navigation — only on individual project pages
document.addEventListener('DOMContentLoaded', () => {
    const isProjectPage = document.querySelector('link[href="/css/project.css"]');
    if (!isProjectPage) return;

    const content = document.querySelector('.content');
    if (!content) return;

    const sections = Array.from(content.querySelectorAll('section')).filter(s => s.querySelector('h2') && !s.classList.contains('next-project-section'));
    if (sections.length < 2) return;

    // Give each section a stable ID if it doesn't have one
    sections.forEach(section => {
        if (!section.id) {
            const text = section.querySelector('h2').textContent.trim();
            section.id = 'sec-' + text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        }
    });

    // Build nav element
    const nav = document.createElement('nav');
    nav.className = 'project-sidenav';
    nav.setAttribute('aria-label', 'Page sections');

    const track = document.createElement('div');
    track.className = 'project-sidenav-track';
    const progress = document.createElement('div');
    progress.className = 'project-sidenav-progress';
    track.appendChild(progress);
    nav.appendChild(track);

    sections.forEach(section => {
        const label = section.querySelector('h2').textContent.trim();
        const item = document.createElement('a');
        item.className = 'project-sidenav-item';
        item.href = '#' + section.id;

        const dot = document.createElement('span');
        dot.className = 'project-sidenav-dot';

        const labelEl = document.createElement('span');
        labelEl.className = 'project-sidenav-label';
        labelEl.textContent = label;

        item.appendChild(dot);
        item.appendChild(labelEl);
        nav.appendChild(item);

        item.addEventListener('click', e => {
            e.preventDefault();
            const top = section.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // Position absolutely to start, aligned with the h1
    nav.style.position = 'absolute';
    nav.style.top = '0';
    nav.style.left = '28px';
    nav.style.transform = 'none';
    nav.style.transition = 'opacity 0.3s ease';

    document.body.appendChild(nav);

    const navItems = Array.from(nav.querySelectorAll('.project-sidenav-item'));

    function setActive(index) {
        navItems.forEach(i => i.classList.remove('active'));
        navItems[index]?.classList.add('active');
        const pct = sections.length > 1 ? (index / (sections.length - 1)) * 100 : 0;
        progress.style.height = pct + '%';
    }

    setActive(0);

    // Pick the current section by finding the last one whose top has scrolled
    // past a line 25% down the viewport. This handles sections taller than the
    // viewport (e.g., DESIGN PROPOSAL) where IntersectionObserver thresholds fail.
    function updateActiveSection() {
        const line = window.innerHeight * 0.25;
        let idx = 0;
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].getBoundingClientRect().top - line <= 0) idx = i;
            else break;
        }
        setActive(idx);
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();

    const h1 = document.querySelector('.content h1');
    const footer = document.querySelector('.next-project-section') || document.querySelector('footer');
    const footerMargin = 24;

    // Get the h1's top position relative to the document (stable after layout)
    function getH1DocTop() {
        if (!h1) return 0;
        return h1.getBoundingClientRect().top + window.scrollY;
    }

    function updateSidenavPosition() {
        const navHeight = nav.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const h1DocTop = getH1DocTop();

        // The scroll position at which the nav reaches viewport center
        const stickyThreshold = h1DocTop - viewportHeight / 2 + navHeight / 2;

        if (scrollY < stickyThreshold) {
            // Scroll with the page — keep nav at h1 level
            nav.style.position = 'absolute';
            nav.style.top = h1DocTop + 'px';
            nav.style.transform = 'none';
        } else {
            // Fixed and centered
            nav.style.position = 'fixed';
            nav.style.top = '50%';
            nav.style.transform = 'translateY(-50%)';

            // Align nav bottom with footer bottom as it scrolls up
            if (footer) {
                const footerBottom = footer.getBoundingClientRect().bottom;
                const centeredNavBottom = viewportHeight / 2 + navHeight / 2;
                if (footerBottom < centeredNavBottom) {
                    nav.style.top = (footerBottom - navHeight) + 'px';
                    nav.style.transform = 'none';
                }
            }
        }
    }

    window.addEventListener('scroll', updateSidenavPosition, { passive: true });
    window.addEventListener('resize', updateSidenavPosition, { passive: true });
    updateSidenavPosition();
});

// Feature selection for project pages
document.addEventListener('DOMContentLoaded', () => {
    const featureNames = document.querySelectorAll('.feature-name');
    const featureContentItems = document.querySelectorAll('.feature-content-item');
    
    if (featureNames.length > 0 && featureContentItems.length > 0) {
        featureNames.forEach(featureName => {
            featureName.addEventListener('click', () => {
                const featureId = featureName.getAttribute('data-feature');
                
                // Remove active class from all feature names
                featureNames.forEach(name => name.classList.remove('active'));
                
                // Add active class to clicked feature name
                featureName.classList.add('active');
                
                // Hide all feature content items
                featureContentItems.forEach(item => item.classList.remove('active'));
                
                // Show selected feature content
                const targetContent = document.getElementById(featureId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
});


// ===== Scroll Reveal =====
(function () {
    var SELECTORS = [
        // Shared
        '.content-header',
        // Index
        '.projects-item',
        '.about-section',
        '.also-do-section',
        // About
        '.head-section',
        '.community-item',
        '.skill-category',
        // Projects listing
        '.project-item',
        // Play
        '.play-item-wrapper',
        '.play-header',
        '.play-featured',
        // Project detail pages
        '.project-header-container',
        '.key-info',
        '.overview-card',
        '.feature-item',
        '.problem-statement-container',
        '.analysis-item',
        '.analysis-block',
        '.features-container',
    ].join(', ');

    var outsideDesign = document.querySelector('#outside-design');

    var elements = Array.from(document.querySelectorAll(SELECTORS)).filter(function (el) {
        return !outsideDesign || !outsideDesign.contains(el);
    });

    // Stagger siblings that share the same parent
    var parentMap = new Map();
    elements.forEach(function (el) {
        var p = el.parentElement;
        if (!parentMap.has(p)) parentMap.set(p, []);
        parentMap.get(p).push(el);
    });
    parentMap.forEach(function (children) {
        if (children.length > 1) {
            children.forEach(function (child, i) {
                child.style.transitionDelay = Math.min(i * 0.06, 0.24) + 's';
            });
        }
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px 60px 0px' });

    elements.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            // Already visible on load — reveal immediately without animation
            el.classList.add('reveal', 'in-view');
        } else {
            el.classList.add('reveal');
            observer.observe(el);
        }
    });

    // Work cards — earlier trigger so they animate in before fully entering view
    var workCards = Array.from(document.querySelectorAll('.work-card'));
    var workParentMap = new Map();
    workCards.forEach(function (el) {
        var p = el.parentElement;
        if (!workParentMap.has(p)) workParentMap.set(p, []);
        workParentMap.get(p).push(el);
    });
    workParentMap.forEach(function (children) {
        if (children.length > 1) {
            children.forEach(function (child, i) {
                child.style.transitionDelay = Math.min(i * 0.06, 0.24) + 's';
            });
        }
    });

    var workObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                workObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px 100px 0px' });

    workCards.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('reveal', 'in-view');
        } else {
            el.classList.add('reveal');
            workObserver.observe(el);
        }
    });
})();
