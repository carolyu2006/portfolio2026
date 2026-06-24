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
