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

    // ----- Pinch / wheel zoom for the expanded image -----
    var MIN_SCALE = 1;
    var MAX_SCALE = 5;
    var pz = { scale: 1, x: 0, y: 0 };
    // Baseline captured when a gesture starts. Every move is solved from that fixed
    // origin rather than accumulated frame to frame, so the image cannot drift.
    var gesture = null;
    var safariScale0 = 1;
    var lastTap = 0;
    var lastTapX = 0;
    var lastTapY = 0;

    // Only still images pan and zoom; a video keeps its native controls.
    function zoomable() {
        return mediaEl && mediaEl.classList.contains('media-lightbox-image') ? mediaEl : null;
    }

    function clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }

    // Pan only as far as the image's own edges, and only on an axis where it
    // actually overflows - otherwise it stays centred. Measured against the whole
    // overlay, not the stage, so a zoomed image can use the full screen.
    function clampPan() {
        var el = zoomable();
        if (!el) return;
        var limitX = Math.max(0, (el.offsetWidth * pz.scale - overlay.clientWidth) / 2);
        var limitY = Math.max(0, (el.offsetHeight * pz.scale - overlay.clientHeight) / 2);
        pz.x = clamp(pz.x, -limitX, limitX);
        pz.y = clamp(pz.y, -limitY, limitY);
    }

    function applyTransform(animate) {
        var el = zoomable();
        if (!el) return;
        clampPan();
        el.style.transition = animate ? 'transform 0.2s ease' : 'none';
        el.style.transform = 'translate(' + pz.x + 'px, ' + pz.y + 'px) scale(' + pz.scale + ')';
        el.classList.toggle('is-zoomed', pz.scale > 1.01);
    }

    function resetPanZoom() {
        pz.scale = 1;
        pz.x = 0;
        pz.y = 0;
        gesture = null;
        if (mediaEl) {
            mediaEl.style.transition = '';
            mediaEl.style.transform = '';
            mediaEl.classList.remove('is-zoomed');
        }
    }

    // The image's layout centre in viewport coords, backed out of the live rect.
    function originOf(el) {
        var rect = el.getBoundingClientRect();
        return {
            cx: rect.left + rect.width / 2 - pz.x,
            cy: rect.top + rect.height / 2 - pz.y
        };
    }

    // Scale about a focal point so the pixel under the fingers/pointer stays put.
    function zoomTo(scale, focalX, focalY, animate) {
        var el = zoomable();
        if (!el) return;
        var next = clamp(scale, MIN_SCALE, MAX_SCALE);
        var origin = originOf(el);
        var k = next / pz.scale;
        pz.x = (focalX - origin.cx) * (1 - k) + pz.x * k;
        pz.y = (focalY - origin.cy) * (1 - k) + pz.y * k;
        pz.scale = next;
        if (next === MIN_SCALE) {
            pz.x = 0;
            pz.y = 0;
        }
        applyTransform(animate);
    }

    function toggleZoom(x, y) {
        if (!zoomable()) return;
        if (pz.scale > 1.01) {
            pz.scale = MIN_SCALE;
            pz.x = 0;
            pz.y = 0;
            applyTransform(true);
        } else {
            zoomTo(2.5, x, y, true);
        }
    }

    function pinchInfo(touches) {
        var a = touches[0];
        var b = touches[1];
        var dx = b.clientX - a.clientX;
        var dy = b.clientY - a.clientY;
        return {
            dist: Math.sqrt(dx * dx + dy * dy) || 1,
            midX: (a.clientX + b.clientX) / 2,
            midY: (a.clientY + b.clientY) / 2
        };
    }

    function onTouchStart(event) {
        var el = zoomable();
        if (!el) return;

        if (event.touches.length >= 2) {
            var info = pinchInfo(event.touches);
            var origin = originOf(el);
            gesture = {
                mode: 'pinch',
                dist0: info.dist,
                mid0X: info.midX,
                mid0Y: info.midY,
                scale0: pz.scale,
                x0: pz.x,
                y0: pz.y,
                cx: origin.cx,
                cy: origin.cy
            };
            event.preventDefault();
        } else if (event.touches.length === 1 && pz.scale > 1.01 && event.target === el) {
            gesture = {
                mode: 'pan',
                startX: event.touches[0].clientX,
                startY: event.touches[0].clientY,
                x0: pz.x,
                y0: pz.y
            };
            event.preventDefault();
        }
    }

    function onTouchMove(event) {
        if (!gesture || !zoomable()) return;

        if (gesture.mode === 'pinch') {
            if (event.touches.length < 2) return;
            var info = pinchInfo(event.touches);
            var next = clamp(gesture.scale0 * (info.dist / gesture.dist0), MIN_SCALE, MAX_SCALE);
            var k = next / gesture.scale0;
            pz.scale = next;
            // Focal-point zoom from the baseline, plus however far the midpoint moved.
            pz.x = (gesture.mid0X - gesture.cx) * (1 - k) + gesture.x0 * k + (info.midX - gesture.mid0X);
            pz.y = (gesture.mid0Y - gesture.cy) * (1 - k) + gesture.y0 * k + (info.midY - gesture.mid0Y);
            applyTransform(false);
            event.preventDefault();
        } else if (event.touches.length === 1) {
            pz.x = gesture.x0 + (event.touches[0].clientX - gesture.startX);
            pz.y = gesture.y0 + (event.touches[0].clientY - gesture.startY);
            gesture.moved = true;
            applyTransform(false);
            event.preventDefault();
        }
    }

    function onTouchEnd(event) {
        if (gesture && gesture.mode === 'pinch' && event.touches.length === 1) {
            // A finger lifted mid-pinch: carry on as a one-finger pan.
            gesture = {
                mode: 'pan',
                startX: event.touches[0].clientX,
                startY: event.touches[0].clientY,
                x0: pz.x,
                y0: pz.y
            };
            return;
        }

        if (event.touches.length > 0) return;

        var wasGesturing = !!gesture && (gesture.mode === 'pinch' || gesture.moved);
        gesture = null;

        // Pinched back out past 1x: settle to a clean, centred fit.
        if (pz.scale <= MIN_SCALE + 0.01 && (pz.x !== 0 || pz.y !== 0 || pz.scale !== MIN_SCALE)) {
            pz.scale = MIN_SCALE;
            pz.x = 0;
            pz.y = 0;
            applyTransform(true);
        }

        if (wasGesturing) return;

        // Double-tap toggles zoom, mirroring the desktop double-click.
        var touch = event.changedTouches && event.changedTouches[0];
        if (!touch || !zoomable() || event.target !== mediaEl) return;
        var now = Date.now();
        if (now - lastTap < 320 &&
            Math.abs(touch.clientX - lastTapX) < 30 &&
            Math.abs(touch.clientY - lastTapY) < 30) {
            lastTap = 0;
            event.preventDefault();
            toggleZoom(touch.clientX, touch.clientY);
        } else {
            lastTap = now;
            lastTapX = touch.clientX;
            lastTapY = touch.clientY;
        }
    }

    function onWheel(event) {
        if (!zoomable()) return;
        if (event.ctrlKey || event.metaKey) {
            // A trackpad pinch reaches Chrome/Firefox as a ctrl-modified wheel event.
            event.preventDefault();
            zoomTo(pz.scale * Math.exp(-event.deltaY * 0.01), event.clientX, event.clientY, false);
        } else if (pz.scale > 1.01) {
            event.preventDefault();
            pz.x -= event.deltaX;
            pz.y -= event.deltaY;
            applyTransform(false);
        }
    }

    function bindPanZoom(target) {
        target.addEventListener('touchstart', onTouchStart, { passive: false });
        target.addEventListener('touchmove', onTouchMove, { passive: false });
        target.addEventListener('touchend', onTouchEnd, { passive: false });
        target.addEventListener('touchcancel', function () { gesture = null; });
        target.addEventListener('wheel', onWheel, { passive: false });

        target.addEventListener('dblclick', function (event) {
            if (!zoomable() || event.target !== mediaEl) return;
            event.preventDefault();
            toggleZoom(event.clientX, event.clientY);
        });

        // Safari reports trackpad pinch as gesture events instead of ctrl+wheel.
        target.addEventListener('gesturestart', function (event) {
            if (!zoomable()) return;
            event.preventDefault();
            safariScale0 = pz.scale;
        });
        target.addEventListener('gesturechange', function (event) {
            if (!zoomable()) return;
            event.preventDefault();
            zoomTo(safariScale0 * event.scale, event.clientX, event.clientY, false);
        });
        target.addEventListener('gestureend', function (event) {
            if (zoomable()) event.preventDefault();
        });

        window.addEventListener('resize', function () {
            if (zoomable() && pz.scale > 1.01) applyTransform(false);
        });
    }

    function ensureLightbox() {
        if (overlay) return overlay;

        overlay = document.createElement('div');
        // `cursor-hover` + `data-cursor-text` make the custom cursor expand into a
        // "close" affordance over the backdrop, which is the only click target
        // besides the close button once the media is expanded.
        overlay.className = 'media-lightbox cursor-hover';
        overlay.setAttribute('data-cursor-text', 'close');
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
            if (event.target !== overlay && !event.target.classList.contains('media-lightbox-stage')) return;
            // Zoomed in, the backdrop steps back to a full fit first, the way Escape
            // does - so a pan that ends out there never dismisses the image outright.
            if (zoomable() && pz.scale > 1.01) {
                pz.scale = MIN_SCALE;
                pz.x = 0;
                pz.y = 0;
                applyTransform(true);
                return;
            }
            closeLightbox();
        });

        closeBtn.addEventListener('click', closeLightbox);
        bindPanZoom(overlay);

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
            mediaEl.className = 'media-lightbox-media media-lightbox-video no-cursor-hover';
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
            mediaEl.className = 'media-lightbox-media media-lightbox-image no-cursor-hover';
            resetPanZoom();
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

        resetPanZoom();
        overlay.classList.remove('is-open', 'is-portrait');
        document.documentElement.classList.remove('media-lightbox-open');
        // The overlay stops hit-testing without the pointer moving, so no mouseout
        // fires - ask the custom cursor to re-read what is under it.
        document.dispatchEvent(new Event('cursor:refresh'));

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
        if (event.key !== 'Escape') return;
        if (zoomable() && pz.scale > 1.01) {
            pz.scale = MIN_SCALE;
            pz.x = 0;
            pz.y = 0;
            applyTransform(true);
            return;
        }
        closeLightbox();
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
