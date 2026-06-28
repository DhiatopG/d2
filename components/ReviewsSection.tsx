'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { fetchReviews, getInitials, formatRelativeDate } from '@/lib/reviews';
import type { Review } from '@/types/review';

function GoogleIcon() {
  return (
    <svg className="google-icon review-google-logo" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const computePerPage = () => {
      if (window.innerWidth <= 600) return 1;
      if (window.innerWidth <= 992) return 2;
      return 3;
    };

    const handleResize = () => {
      setPerPage(computePerPage());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const widgetId = process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID;
    if (!widgetId) {
      setLoading(false);
      return;
    }
    fetchReviews(widgetId)
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const updateCarousel = useCallback(() => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll<HTMLElement>('.review-card');
    if (!cards.length) return;
    const maxPage = Math.max(0, Math.ceil(cards.length / perPage) - 1);
    const clamped = Math.min(Math.max(0, page), maxPage);
    if (clamped !== page) setPage(clamped);
    const firstIndex = clamped * perPage;
    const offsetCard = cards[firstIndex];
    if (offsetCard) {
      trackRef.current.style.transform = `translateX(-${offsetCard.offsetLeft}px)`;
    }
  }, [page, perPage]);

  useEffect(() => {
    updateCarousel();
  }, [updateCarousel]);

  const totalCards = reviews.length;
  const maxPage = Math.max(0, Math.ceil(totalCards / perPage) - 1);
  const singlePage = totalCards <= perPage;

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(maxPage, p + 1));

  const toggleExpand = (idx: number) => {
    setExpandedReviews((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <section id="reviews" className="reviews-section section-padding">
      <div className="container">
        <div className="reviews-header">
          <span className="reviews-eyebrow">TÉMOIGNAGES</span>
          <h2 className="reviews-heading">Ce que Disent Nos Patients</h2>
          <p className="reviews-subtext">Avis authentiques laissés sur notre profil Google Business.</p>
        </div>

        <div className={`reviews-carousel${singlePage ? ' reviews-carousel-single-page' : ''}`} aria-label="Avis Google">
          <button
            type="button"
            className="reviews-carousel-btn reviews-carousel-prev"
            aria-label="Avis précédents"
            disabled={page === 0}
            onClick={prev}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <div className="reviews-carousel-viewport">
            <div ref={trackRef} className="reviews-carousel-track">
              {loading
                ? Array.from({ length: 3 }).map((_, i) => <div key={i} className="review-skeleton" />)
                : reviews.map((review, idx) => {
                    const initials = getInitials(review.author.name);
                    const formattedDate = formatRelativeDate(review.publishedAt);
                    const ratingVal = review.rating?.value ?? 5;
                    const fullStars = ratingVal;
                    const emptyStars = 5 - fullStars;
                    const isExpanded = expandedReviews.has(idx);
                    const textEl = review.text;

                    return (
                      <article key={idx} className="review-card">
                        <div className="review-card-header">
                          <div className="reviewer-info">
                            {review.author.avatarUrl ? (
                              <img
                                src={review.author.avatarUrl}
                                alt={review.author.name}
                                className="reviewer-avatar"
                                referrerPolicy="no-referrer"
                                loading="lazy"
                              />
                            ) : (
                              <div className="reviewer-initials">{initials}</div>
                            )}
                            <div className="reviewer-meta">
                              <span className="reviewer-name">{review.author.name || 'Patient'}</span>
                              <span className="review-date">{formattedDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="review-text-wrapper">
                          <p className={`review-text${isExpanded ? ' expanded' : ''}`}>{textEl}</p>
                          <button
                            type="button"
                            className="review-toggle"
                            onClick={() => toggleExpand(idx)}
                          >
                            {isExpanded ? 'Réduire' : 'Lire la suite'}
                          </button>
                        </div>
                        <div className="review-card-footer">
                          <div className="review-rating" aria-label={`Note de ${ratingVal} sur 5 étoiles`}>
                            {Array.from({ length: fullStars }).map((_, i) => (
                              <span key={i} className="star-icon star-filled">★</span>
                            ))}
                            {Array.from({ length: emptyStars }).map((_, i) => (
                              <span key={i} className="star-icon star-empty">☆</span>
                            ))}
                          </div>
                          <div className="review-google-logo-wrap" aria-label="Avis publié sur Google">
                            <GoogleIcon />
                          </div>
                        </div>
                      </article>
                    );
                  })}
            </div>
          </div>

          <button
            type="button"
            className="reviews-carousel-btn reviews-carousel-next"
            aria-label="Avis suivants"
            disabled={page >= maxPage}
            onClick={next}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor" d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
