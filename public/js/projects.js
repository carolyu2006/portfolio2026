// Smooth scroll with 130px offset for sidebar anchor links
const sidebarLinks = document.querySelectorAll('.sidebar a[href^="#"]');

sidebarLinks.forEach(link => {
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

// Sidebar scroll with footer
const sidebar = document.querySelector('.sidebar');
const footer = document.querySelector('footer');

if (footer && sidebar) {
    window.addEventListener('scroll', () => {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const footerTop = footerRect.top;
        
        // When footer starts entering viewport, move sidebar up
        if (footerTop < viewportHeight) {
            // Calculate how much to move sidebar up based on footer position
            // As footer moves up, sidebar moves up by the same distance
            const moveAmount = viewportHeight - footerTop;
            sidebar.style.transform = `translateY(-${moveAmount}px)`;
        } else {
            // Footer not in view - keep sidebar at top
            sidebar.style.transform = 'translateY(0)';
        }
    });
}
