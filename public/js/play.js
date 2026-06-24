// Tag filter
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.play-item-wrapper');
    const featuredGame = document.getElementById('play-featured');
    const featuredXr = document.getElementById('play-featured-xr');
    const featuredCode = document.getElementById('play-featured-code');

    var featuredMap = {
        game: { el: featuredGame, key: 'everstream' },
        xr: { el: featuredXr, key: 'dreammail' },
        code: { el: featuredCode, key: 'freelance' }
    };

    function applyFilter(filter) {
        filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === filter));

        // Show/hide featured spotlights
        Object.keys(featuredMap).forEach(tag => {
            var f = featuredMap[tag];
            if (f.el) {
                if (filter === tag) {
                    f.el.classList.remove('hidden');
                } else {
                    f.el.classList.add('hidden');
                }
            }
        });

        items.forEach(item => {
            var entry = featuredMap[filter];
            if (entry && item.dataset.featured === entry.key) {
                item.classList.add('hidden');
                return;
            }
            if (filter === 'all' || item.dataset.tag === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
    });

    // Apply tag from URL param (e.g. /play?tag=game)
    const urlTag = new URLSearchParams(window.location.search).get('tag');
    if (urlTag) applyFilter(urlTag);
});

// Reusable gallery initializer (supports video + image)
function initGallery(container) {
    if (!container) return;
    var mainEl = container.querySelector('.play-featured-main');
    var mainVideo = mainEl.querySelector('video');
    var mainImg = mainEl.querySelector('img.featured-main-display, img[id]');
    var thumbs = container.querySelectorAll('.play-featured-thumb');
    var prevBtn = mainEl.querySelector('.play-featured-arrow--left');
    var nextBtn = mainEl.querySelector('.play-featured-arrow--right');
    if (!thumbs.length) return;

    var currentIndex = 0;
    var hasVideo = !!mainVideo;

    function setActive(index) {
        currentIndex = index;
        var thumb = thumbs[index];
        thumbs.forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
        thumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

        if (hasVideo && thumb.dataset.type === 'video') {
            if (mainImg) mainImg.style.display = 'none';
            mainVideo.style.display = 'block';
            mainVideo.src = thumb.dataset.src;
            mainVideo.poster = thumb.dataset.poster || '';
            mainVideo.play();
        } else {
            if (hasVideo) {
                mainVideo.style.display = 'none';
                mainVideo.pause();
            }
            if (mainImg) {
                mainImg.style.display = 'block';
                mainImg.src = thumb.dataset.src;
            }
        }
    }

    thumbs.forEach(function (thumb, i) {
        thumb.addEventListener('click', function () { setActive(i); });
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            setActive((currentIndex - 1 + thumbs.length) % thumbs.length);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            setActive((currentIndex + 1) % thumbs.length);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initGallery(document.getElementById('play-featured'));
    initGallery(document.getElementById('play-featured-xr'));
    initGallery(document.getElementById('play-featured-code'));
});

// Directional swipe effect for play items
document.addEventListener('DOMContentLoaded', () => {
    const playItemWrappers = document.querySelectorAll('.play-item-wrapper.swipe');

    playItemWrappers.forEach(wrapper => {
        wrapper.addEventListener('mouseenter', (e) => {
            const rect = wrapper.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const width = rect.width;
            const height = rect.height;

            const leftDistance = mouseX;
            const rightDistance = width - mouseX;
            const topDistance = mouseY;
            const bottomDistance = height - mouseY;

            const minDistance = Math.min(leftDistance, rightDistance, topDistance, bottomDistance);

            wrapper.classList.remove('swipe-left', 'swipe-right', 'swipe-up', 'swipe-down');

            if (minDistance === leftDistance) {
                wrapper.classList.add('swipe-left');
            } else if (minDistance === rightDistance) {
                wrapper.classList.add('swipe-right');
            } else if (minDistance === topDistance) {
                wrapper.classList.add('swipe-up');
            } else {
                wrapper.classList.add('swipe-down');
            }
        });
    });
});
