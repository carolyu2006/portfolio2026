// ===== Section Reveal for project detail pages =====
(function () {
    var content = document.querySelector('.content');
    if (!content) return;

    var sections = Array.from(content.querySelectorAll('section'));

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -20px 0px' });

    sections.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('reveal', 'in-view');
        } else {
            el.classList.add('reveal');
            observer.observe(el);
        }
    });
})();

// ===== Expandable media lightbox for project pages =====
(function () {
    if (window.__projectMediaLightbox) return;
    window.__projectMediaLightbox = true;

    var overlay = null;
    var mediaEl = null;
    var closeBtn = null;
    var sourceVideo = null;
    var previouslyFocused = null;

    function ensureLightbox() {
        if (overlay) return overlay;

        overlay = document.createElement('div');
        overlay.className = 'media-lightbox';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Expanded media');
        overlay.innerHTML =
            '<button type="button" class="media-lightbox-close" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '<div class="media-lightbox-stage"></div>';

        document.body.appendChild(overlay);
        closeBtn = overlay.querySelector('.media-lightbox-close');

        overlay.addEventListener('click', function (event) {
            if (event.target === overlay || event.target.classList.contains('media-lightbox-stage')) {
                closeLightbox();
            }
        });

        closeBtn.addEventListener('click', closeLightbox);

        return overlay;
    }

    function getVideoSrc(video) {
        if (!video) return '';
        return video.currentSrc || video.src || video.getAttribute('data-src') || '';
    }

    function findExpandableTarget(node) {
        if (!node || !node.closest) return null;
        if (!node.closest('.content')) return null;
        if (node.closest('a[href], button, .media-lightbox')) return null;

        var media = node.closest('img, video');
        if (!media || !media.closest('.content')) return null;
        if (media.classList.contains('hero-image')) return null;
        if (media.hasAttribute('data-no-expand')) return null;
        if (media.closest('[data-no-expand]')) return null;

        return media;
    }

    function markExpandableMedia() {
        document.querySelectorAll('.content img, .content video').forEach(function (media) {
            if (media.classList.contains('hero-image')) return;
            if (media.hasAttribute('data-no-expand')) return;
            if (media.closest('[data-no-expand], a[href], button')) return;
            media.classList.add('media-expandable');
        });
    }

    function openLightbox(media) {
        ensureLightbox();
        var stage = overlay.querySelector('.media-lightbox-stage');
        stage.innerHTML = '';
        sourceVideo = null;
        previouslyFocused = document.activeElement;

        var expandVideo = media.getAttribute('data-expand-video');
        var isVideo = media.tagName === 'VIDEO' || !!expandVideo;

        if (isVideo) {
            var src = expandVideo || getVideoSrc(media);
            if (!src) return;

            mediaEl = document.createElement('video');
            mediaEl.className = 'media-lightbox-media media-lightbox-video';
            mediaEl.controls = true;
            mediaEl.playsInline = true;
            mediaEl.setAttribute('playsinline', '');
            mediaEl.preload = 'metadata';

            if (media.tagName === 'VIDEO') {
                sourceVideo = media;
                mediaEl.poster = media.poster || '';
                mediaEl.currentTime = media.currentTime || 0;
                media.pause();
            } else if (media.getAttribute('data-expand-poster') || media.currentSrc || media.src) {
                mediaEl.poster = media.getAttribute('data-expand-poster') || media.currentSrc || media.src;
            }

            mediaEl.src = src;
            stage.appendChild(mediaEl);

            mediaEl.addEventListener('loadedmetadata', function () {
                overlay.classList.toggle('is-portrait', mediaEl.videoHeight > mediaEl.videoWidth);
            }, { once: true });

            var playPromise = mediaEl.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(function () {});
            }
        } else {
            mediaEl = document.createElement('img');
            mediaEl.className = 'media-lightbox-media media-lightbox-image';
            mediaEl.src = media.currentSrc || media.src;
            mediaEl.alt = media.alt || 'Expanded project image';
            stage.appendChild(mediaEl);

            mediaEl.addEventListener('load', function () {
                overlay.classList.toggle('is-portrait', mediaEl.naturalHeight > mediaEl.naturalWidth);
            }, { once: true });
        }

        overlay.classList.add('is-open');
        document.documentElement.classList.add('media-lightbox-open');
        closeBtn.focus();
    }

    function closeLightbox() {
        if (!overlay || !overlay.classList.contains('is-open')) return;

        var resumeTime = 0;
        if (mediaEl && mediaEl.tagName === 'VIDEO') {
            resumeTime = mediaEl.currentTime || 0;
            mediaEl.pause();
        }

        overlay.classList.remove('is-open', 'is-portrait');
        document.documentElement.classList.remove('media-lightbox-open');

        var stage = overlay.querySelector('.media-lightbox-stage');
        if (stage) stage.innerHTML = '';
        mediaEl = null;

        if (sourceVideo) {
            try {
                sourceVideo.currentTime = resumeTime;
            } catch (e) {}
            sourceVideo.play().catch(function () {});
            sourceVideo = null;
        }

        if (previouslyFocused && previouslyFocused.focus) {
            previouslyFocused.focus();
        }
        previouslyFocused = null;
    }

    document.addEventListener('click', function (event) {
        var media = findExpandableTarget(event.target);
        if (!media) return;
        event.preventDefault();
        openLightbox(media);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeLightbox();
    });

    var markTimer = null;
    function scheduleMarkExpandableMedia() {
        clearTimeout(markTimer);
        markTimer = setTimeout(markExpandableMedia, 80);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', markExpandableMedia);
    } else {
        markExpandableMedia();
    }

    // Re-mark after Nuxt client navigations / async content.
    var mo = new MutationObserver(scheduleMarkExpandableMedia);
    mo.observe(document.documentElement, { childList: true, subtree: true });
})();
