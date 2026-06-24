// Outside Design — full-page horizontal scroll with smooth interpolation
document.addEventListener('DOMContentLoaded', function () {
    var wrapper = document.querySelector('.interests-page-wrapper');
    var panel = document.querySelector('.interests-panel');
    var container = document.querySelector('.interests-container');
    var scrollTrack = document.querySelector('.interest-item-scroll');
    if (!wrapper || !panel || !container || !scrollTrack) return;

    var currentX = 0;   // current translateX (smoothed)
    var targetX = 0;    // target translateX (from scroll position)
    var animating = false;
    var LERP_SPEED = 0.12; // how fast currentX catches up to targetX (0–1, lower = smoother)

    function getScrollableWidth() {
        return Math.max(0, scrollTrack.scrollWidth - container.clientWidth);
    }

    function init() {
        panel.style.position = '';
        panel.style.top = '';
        panel.style.left = '';

        var scrollableWidth = getScrollableWidth();
        wrapper.style.height = (window.innerHeight + scrollableWidth) + 'px';
    }

    // Ease function: smooth start and end of the horizontal scroll
    function easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function update() {
        var wrapperRect = wrapper.getBoundingClientRect();
        var scrollableWidth = getScrollableWidth();
        var maxScroll = wrapper.offsetHeight - window.innerHeight;

        if (maxScroll <= 0) {
            panel.style.position = '';
            panel.style.top = '';
            panel.style.left = '';
            scrollTrack.style.transform = 'translateX(0)';
            return;
        }

        var scrolled = -wrapperRect.top;

        if (scrolled <= -200) {
            // Before the section: panel sits at top of wrapper
            panel.style.position = 'relative';
            panel.style.top = '0';
            panel.style.left = '';
            targetX = 0;
        } else if (scrolled >= maxScroll) {
            // After the section: panel sits at bottom of wrapper
            panel.style.position = 'relative';
            panel.style.top = maxScroll + 'px';
            panel.style.left = '';
            targetX = -scrollableWidth;
        } else if (scrolled < 0) {
            // Lead-in zone (-200 to 0): fixed but top slides from 200 → 0
            panel.style.position = 'fixed';
            panel.style.top = (-scrolled) + 'px';
            panel.style.left = '0';
            var rawProgress = (scrolled + 200) / (maxScroll + 200);
            var easedProgress = easeInOutCubic(rawProgress);
            targetX = -easedProgress * scrollableWidth;
        } else {
            // Fully pinned zone (0 to maxScroll)
            panel.style.position = 'fixed';
            panel.style.top = '0';
            panel.style.left = '0';
            var rawProgress = (scrolled + 200) / (maxScroll + 200);
            var easedProgress = easeInOutCubic(rawProgress);
            targetX = -easedProgress * scrollableWidth;
        }

        // Start animation loop if not already running
        if (!animating) {
            animating = true;
            animate();
        }
    }

    function animate() {
        // Lerp currentX toward targetX
        var dx = targetX - currentX;

        if (Math.abs(dx) < 0.5) {
            // Close enough — snap and stop
            currentX = targetX;
            scrollTrack.style.transform = 'translateX(' + currentX + 'px)';
            animating = false;
            return;
        }

        currentX += dx * LERP_SPEED;
        scrollTrack.style.transform = 'translateX(' + currentX + 'px)';
        requestAnimationFrame(animate);
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', function () {
        init();
        update();
    });

    // While panel is fixed: capture all wheel input, funnel into vertical page scroll
    window.addEventListener('wheel', function (e) {
        var wrapperRect = wrapper.getBoundingClientRect();
        var maxScroll = wrapper.offsetHeight - window.innerHeight;
        var scrolled = -wrapperRect.top;

        if (scrolled <= -200 || scrolled >= maxScroll) return;

        e.preventDefault();
        window.scrollBy(0, e.deltaY + e.deltaX);
    }, { passive: false });

    // Wait for images to load so scrollWidth is accurate
    var images = scrollTrack.querySelectorAll('img');
    var loaded = 0;
    var total = images.length;

    function onImageReady() {
        loaded++;
        if (loaded >= total) {
            init();
            update();
        }
    }

    for (var i = 0; i < images.length; i++) {
        if (images[i].complete) {
            onImageReady();
        } else {
            images[i].addEventListener('load', onImageReady);
            images[i].addEventListener('error', onImageReady);
        }
    }

    init();
    update();
});

// Work card scroll animation on mobile — card closest to viewport center gets .active
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

// Community section — expand/collapse (whole row clickable)
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.community-item').forEach(function (item) {
        item.addEventListener('click', function (e) {
            if (e.target.closest('.community-detail')) return;
            var btn = this.querySelector('.community-expand');
            var isExpanded = this.classList.toggle('expanded');
            if (btn) btn.setAttribute('aria-expanded', isExpanded);
        });
    });
});
