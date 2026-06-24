// Parallax scrolling for leaves
const leaves = document.querySelectorAll('.leaf');

// Rotation angles for each leaf (matching CSS)
const rotations = [110, 180, 160, -134, 165, 305];

// Initialize transforms with initial scroll position
leaves.forEach((leaf, index) => {
    const rotation = rotations[index];
    leaf.style.transform = `translateY(0px) rotate(${rotation}deg)`;
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    leaves.forEach((leaf, index) => {
        const speeds = [.2,.2,.3,.3,.4,.5];
        // const speeds = [.2,.3,.5,.8,.9,.99];
        const speed = speeds[index];
        const rotation = rotations[index];
        
        const yPos = +(scrolled * speed);
        const rotate = (scrolled * .2)+rotation;
        leaf.style.transform = `translateY(${yPos}px) rotate(${rotate}deg)`;
    });
});

// Sidebar animation - hide in hero section, show everywhere else
const heroSection = document.querySelector('#hero');
const sidebarProjectItems = document.querySelector('.sidebar-content-item:nth-child(1)');
const text = document.getElementById('text');

const sidebarObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px 0px 0px'
};

const sidebarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // When in hero section, hide sidebar
            sidebarProjectItems.classList.remove('visible');
        } else {
            // When outside hero section, show sidebar
            sidebarProjectItems.classList.add('visible');
        }
    });
}, sidebarObserverOptions);

if (heroSection && sidebarProjectItems) {
    sidebarObserver.observe(heroSection);
}


// Smooth scroll with 130px offset for anchor links
const headerLinks = document.querySelectorAll('.header-middle a[href^="#"]');

headerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 130;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Work card scroll animation on mobile — only the card closest to viewport center gets .active
if (window.matchMedia('(max-width: 768px)').matches) {
    const workCards = document.querySelectorAll('.work-card');

    function updateActiveWorkCard() {
        const viewportCenter = window.innerHeight / 2;
        let closestCard = null;
        let closestDist = Infinity;

        workCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const dist = Math.abs(cardCenter - viewportCenter);
            if (dist < closestDist) {
                closestDist = dist;
                closestCard = card;
            }
        });

        workCards.forEach(card => {
            if (card === closestCard) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveWorkCard, { passive: true });
    updateActiveWorkCard();
}

// Directional swipe effect for project items
document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.projects-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectsContainer = document.querySelector('.projects-container');

    // Initialize all projects to show state
    projectItems.forEach(item => {
        item.classList.add('show');
    });

    // Swipe effect for project items
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const rect = item.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const width = rect.width;
            const height = rect.height;
            
            // Determine entry direction
            const leftDistance = mouseX;
            const rightDistance = width - mouseX;
            const topDistance = mouseY;
            const bottomDistance = height - mouseY;
            
            // Find the closest edge
            const minDistance = Math.min(leftDistance, rightDistance, topDistance, bottomDistance);
            
            // Remove existing swipe classes
            item.classList.remove('swipe-left', 'swipe-right', 'swipe-up', 'swipe-down');
            
            // Apply appropriate swipe direction
            if (minDistance === leftDistance) {
                // Entered from left
                item.classList.add('swipe-left');
            } else if (minDistance === rightDistance) {
                // Entered from right
                item.classList.add('swipe-right');
            } else if (minDistance === topDistance) {
                // Entered from top
                item.classList.add('swipe-up');
            } else {
                item.classList.add('swipe-down');
            }

        });
    });

    // Video fallback: if a project video fails to load, show its poster image instead
    const projectVideos = document.querySelectorAll('.projects-item video');

    projectVideos.forEach(video => {
        const poster = video.getAttribute('poster');
        if (!poster) return;

        let replaced = false;

        const replaceWithImage = () => {
            if (replaced) return;
            replaced = true;

            const img = document.createElement('img');
            img.src = poster;
            img.alt = video.getAttribute('alt') || 'project preview';
            img.className = video.className;

            video.replaceWith(img);
        };

        // If the video errors (no source / unsupported), fall back to image
        video.addEventListener('error', replaceWithImage);

        // Safety timeout: if the video never loads, fall back after a short delay
        const timeoutId = setTimeout(() => {
            if (video.readyState === 0 || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
                replaceWithImage();
            }
        }, 3000);

        // If the video loads successfully, cancel the timeout
        video.addEventListener('loadeddata', () => {
            clearTimeout(timeoutId);
        });
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = '';
                    // Trigger reflow for animation
                    item.offsetHeight;
                    item.classList.add('show');
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                    item.classList.remove('show');
                    // Hide after animation
                    setTimeout(() => {
                        if (item.classList.contains('hide')) {
                            item.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    });
});



// Directional swipe effect for play items
document.addEventListener('DOMContentLoaded', () => {
    const playItemWrappers = document.querySelectorAll('.play-item-wrapper.swipe');

    // Swipe effect for play items with swipe class
    playItemWrappers.forEach(wrapper => {
        wrapper.addEventListener('mouseenter', (e) => {
            const rect = wrapper.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const width = rect.width;
            const height = rect.height;
            
            // Determine entry direction
            const leftDistance = mouseX;
            const rightDistance = width - mouseX;
            const topDistance = mouseY;
            const bottomDistance = height - mouseY;
            
            // Find the closest edge
            const minDistance = Math.min(leftDistance, rightDistance, topDistance, bottomDistance);
            
            // Remove existing swipe classes
            wrapper.classList.remove('swipe-left', 'swipe-right', 'swipe-up', 'swipe-down');
            
            // Apply appropriate swipe direction
            if (minDistance === leftDistance) {
                // Entered from left
                wrapper.classList.add('swipe-left');
            } else if (minDistance === rightDistance) {
                // Entered from right
                wrapper.classList.add('swipe-right');
            } else if (minDistance === topDistance) {
                // Entered from top
                wrapper.classList.add('swipe-up');
            } else {
                wrapper.classList.add('swipe-down');
            }
        });
    });
});

// "i also do..." tag hover previews + auto-cycle
document.addEventListener('DOMContentLoaded', () => {
    const btns = Array.from(document.querySelectorAll('.also-do-btn[data-tag]'));
    const preview = document.querySelector('.also-do-preview');
    const panels = document.querySelectorAll('.also-do-panel');
    if (!preview || !btns.length) return;

    const tags = btns.map(b => b.dataset.tag);
    let currentIndex = 0;
    let cycleInterval = null;
    let isHovering = false;

    function showTag(tag) {
        btns.forEach(b => b.classList.toggle('active', b.dataset.tag === tag));
        panels.forEach(p => p.classList.toggle('visible', p.dataset.panel === tag));
        preview.classList.add('open');
        currentIndex = tags.indexOf(tag);
    }

    function advance() {
        currentIndex = (currentIndex + 1) % tags.length;
        showTag(tags[currentIndex]);
    }

    function startCycle() {
        if (cycleInterval) return;
        cycleInterval = setInterval(advance, 3000);
    }

    function stopCycle() {
        clearInterval(cycleInterval);
        cycleInterval = null;
    }

    // Start immediately with first tag visible
    showTag(tags[0]);
    startCycle();

    btns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            isHovering = true;
            stopCycle();
            showTag(btn.dataset.tag);
        });
        btn.addEventListener('mouseleave', () => {
            isHovering = false;
            // small delay so moving into the preview doesn't restart yet
            setTimeout(() => { if (!isHovering) startCycle(); }, 200);
        });
    });

    preview.addEventListener('mouseenter', () => {
        isHovering = true;
        stopCycle();
    });
    preview.addEventListener('mouseleave', () => {
        isHovering = false;
        setTimeout(() => { if (!isHovering) startCycle(); }, 200);
    });

    // Wrap each also-do-item in a swipe wrapper and wire up hover + click
    document.querySelectorAll('.also-do-panel').forEach(panel => {
        const tag = panel.dataset.panel;
        panel.querySelectorAll('.also-do-item').forEach(item => {
            const wrapper = document.createElement('div');
            wrapper.className = 'also-do-item-wrapper';
            wrapper.style.height = item.style.height || '';
            item.parentNode.insertBefore(wrapper, item);
            wrapper.appendChild(item);

            wrapper.classList.add('cursor-hover');

            wrapper.addEventListener('click', () => {
                window.location.href = '/play?tag=' + tag;
            });
        });
    });
});
