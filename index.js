// JavaScript logic for interactive components (e.g., navigation menu, transitions)
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is active
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        });

        // Close menu when a link or button is clicked
        const menuItems = navMenu.querySelectorAll('.nav-link, .nav-btn');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ── Consultation form — client-side submit handler ──────────────────────
    const consultForm = document.querySelector('.consult-form');
    const consultSuccess = document.querySelector('.consult-success');

    if (consultForm && consultSuccess) {
        consultForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Hide form, reveal success message
            consultForm.style.display = 'none';
            consultSuccess.style.display = 'flex';

            // Auto-reset after 8 seconds
            setTimeout(() => {
                consultForm.reset();
                consultForm.style.display = 'flex';
                consultSuccess.style.display = 'none';
            }, 8000);
        });
    }
});

// ── Deferred Google Maps iframe — load after hero paints ─────────────────
(function () {
    function loadMap() {
        const iframe = document.querySelector('.map-container iframe[data-src]');
        if (!iframe) return;
        iframe.src = iframe.dataset.src;
        iframe.removeAttribute('data-src');
    }

    if ('requestIdleCallback' in window) {
        requestIdleCallback(loadMap, { timeout: 3000 });
    } else {
        setTimeout(loadMap, 2500);
    }
})();
