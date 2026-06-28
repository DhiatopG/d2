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

    // ── Google Reviews API Integration ────────────────────────────────────────
    const reviewsContainer = document.getElementById('reviews-container');
    const reviewsCarousel = document.querySelector('.reviews-carousel');
    const reviewsPrevBtn = document.querySelector('.reviews-carousel-prev');
    const reviewsNextBtn = document.querySelector('.reviews-carousel-next');
    const widgetId = import.meta.env.VITE_FEATURABLE_WIDGET_ID;
    let reviewsCarouselPage = 0;
    let reviewsCarouselReady = false;

    function getInitials(name) {
        if (!name) return 'P';
        const parts = name.trim().split(/\s+/);
        if (parts.length >= 2) {
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return parts[0].slice(0, 2).toUpperCase();
    }

    function formatRelativeDate(dateStr) {
        try {
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) return 'Récemment';

            const now = new Date();
            const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
            const rtf = new Intl.RelativeTimeFormat('fr', { numeric: 'auto' });

            if (diffDays < 1) return rtf.format(0, 'day');
            if (diffDays < 30) return rtf.format(-diffDays, 'day');
            const diffMonths = Math.floor(diffDays / 30);
            if (diffMonths < 12) return rtf.format(-diffMonths, 'month');
            return rtf.format(-Math.floor(diffDays / 365), 'year');
        } catch (e) {
            return 'Récemment';
        }
    }

    function normalizeReview(review) {
        if (review.author) return review;
        return {
            author: {
                name: review.reviewer?.displayName,
                avatarUrl: review.reviewer?.profilePhotoUrl,
            },
            text: review.comment || '',
            rating: { value: review.starRating ?? 5 },
            publishedAt: review.createTime,
        };
    }

    function clearReviewSkeletons() {
        if (!reviewsContainer) return;
        reviewsContainer.innerHTML = '';
    }

    const googleIconSvg = `<svg class="google-icon review-google-logo" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
    </svg>`;

    function reviewsCardsPerPage() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    function updateReviewsCarousel() {
        if (!reviewsContainer || !reviewsPrevBtn || !reviewsNextBtn) return;

        const cards = reviewsContainer.querySelectorAll('.review-card');
        const totalCards = cards.length;
        if (!totalCards) return;

        const perPage = reviewsCardsPerPage();
        const maxPage = Math.max(0, Math.ceil(totalCards / perPage) - 1);
        reviewsCarouselPage = Math.min(Math.max(0, reviewsCarouselPage), maxPage);

        const firstIndex = reviewsCarouselPage * perPage;
        const offsetCard = cards[firstIndex];
        const offset = offsetCard ? offsetCard.offsetLeft : 0;
        reviewsContainer.style.transform = `translateX(-${offset}px)`;

        reviewsPrevBtn.disabled = reviewsCarouselPage === 0;
        reviewsNextBtn.disabled = reviewsCarouselPage >= maxPage;

        if (reviewsCarousel) {
            reviewsCarousel.classList.toggle('reviews-carousel-single-page', maxPage === 0);
        }
    }

    function initReviewsCarousel() {
        if (!reviewsPrevBtn || !reviewsNextBtn) return;

        if (!reviewsCarouselReady) {
            reviewsPrevBtn.addEventListener('click', () => {
                reviewsCarouselPage -= 1;
                updateReviewsCarousel();
            });

            reviewsNextBtn.addEventListener('click', () => {
                reviewsCarouselPage += 1;
                updateReviewsCarousel();
            });

            window.addEventListener('resize', () => {
                updateReviewsCarousel();
            });

            reviewsCarouselReady = true;
        }

        updateReviewsCarousel();
    }

    const expandedReviews = new WeakSet();

    function renderReviews(reviews) {
        if (!reviewsContainer) return;
        reviewsContainer.innerHTML = '';

        if (!reviews || reviews.length === 0) {
            return;
        }

        reviews.forEach((rawReview) => {
            const review = normalizeReview(rawReview);
            const reviewText = review.text || '';
            const initials = getInitials(review.author.name);
            const formattedDate = formatRelativeDate(review.publishedAt);
            const ratingVal = (review.rating && typeof review.rating.value === 'number') ? review.rating.value : 5;
            const fullStars = ratingVal;
            const emptyStars = 5 - fullStars;

            const card = document.createElement('article');
            card.className = 'review-card';
            card.innerHTML = `
                <div class="review-card-header">
                    <div class="reviewer-info">
                        ${review.author.avatarUrl ?
                            `<img src="${review.author.avatarUrl}" alt="${review.author.name}" class="reviewer-avatar" referrerpolicy="no-referrer" loading="lazy">` :
                            `<div class="reviewer-initials">${initials}</div>`
                        }
                        <div class="reviewer-meta">
                            <span class="reviewer-name">${review.author.name || 'Patient'}</span>
                            <span class="review-date">${formattedDate}</span>
                        </div>
                    </div>
                </div>
                <div class="review-text-wrapper">
                    <p class="review-text">${reviewText}</p>
                    <button type="button" class="review-toggle" hidden>Lire la suite</button>
                </div>
                <div class="review-card-footer">
                    <div class="review-rating" aria-label="Note de ${ratingVal} sur 5 étoiles">
                        ${'★'.repeat(fullStars).split('').map(s => `<span class="star-icon star-filled">${s}</span>`).join('')}
                        ${'☆'.repeat(emptyStars).split('').map(s => `<span class="star-icon star-empty">${s}</span>`).join('')}
                    </div>
                    <div class="review-google-logo-wrap" aria-label="Avis publié sur Google">
                        ${googleIconSvg}
                    </div>
                </div>
            `;

            const textEl = card.querySelector('.review-text');
            const toggleBtn = card.querySelector('.review-toggle');

            if (expandedReviews.has(card)) {
                textEl.classList.add('expanded');
            }

            requestAnimationFrame(() => {
                if (textEl.scrollHeight > textEl.clientHeight) {
                    toggleBtn.hidden = false;
                    toggleBtn.addEventListener('click', () => {
                        const isExpanded = textEl.classList.toggle('expanded');
                        toggleBtn.textContent = isExpanded ? 'Réduire' : 'Lire la suite';
                        if (isExpanded) {
                            expandedReviews.add(card);
                        } else {
                            expandedReviews.delete(card);
                        }
                    });
                }
            });

            reviewsContainer.appendChild(card);
        });

        reviewsCarouselPage = 0;
        initReviewsCarousel();
    }

    function meetsQualityFilter(review) {
        const hasText = review.author
            ? (review.text && review.text.trim().length > 0)
            : (review.comment && review.comment.trim().length > 0);
        const hasHighRating = review.author
            ? (review.rating && typeof review.rating.value === 'number' && review.rating.value >= 4)
            : (typeof review.starRating === 'number' && review.starRating >= 4);
        return hasText || hasHighRating;
    }

    function loadReviews() {
        if (!widgetId) {
            clearReviewSkeletons();
            if (import.meta.env.DEV) {
                console.warn('Reviews: VITE_FEATURABLE_WIDGET_ID is not set');
            }
            return;
        }

        fetch(`https://featurable.com/api/v1/widgets/${widgetId}`)
            .then(res => {
                if (!res.ok) throw new Error('API error');
                return res.json();
            })
            .then(data => {
                if (data.success && Array.isArray(data.reviews) && data.reviews.length > 0) {
                    const filtered = data.reviews.filter(meetsQualityFilter);
                    renderReviews(filtered);
                } else {
                    clearReviewSkeletons();
                    if (import.meta.env.DEV) {
                        console.warn('Reviews: no reviews returned from Featurable API');
                    }
                }
            })
            .catch((err) => {
                clearReviewSkeletons();
                if (import.meta.env.DEV) {
                    console.warn('Reviews: failed to load from Featurable API', err);
                }
            });
    }

    loadReviews();
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
