import type { Review, RawReview } from '@/types/review';

export function getInitials(name: string): string {
  if (!name) return 'P';
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0].slice(0, 2).toUpperCase();
}

export function formatRelativeDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return 'Récemment';
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    const rtf = new Intl.RelativeTimeFormat('fr', { numeric: 'auto' });
    if (diffDays < 1) return rtf.format(0, 'day');
    if (diffDays < 30) return rtf.format(-diffDays, 'day');
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) return rtf.format(-diffMonths, 'month');
    return rtf.format(-Math.floor(diffDays / 365), 'year');
  } catch {
    return 'Récemment';
  }
}

export function normalizeReview(review: RawReview): Review {
  if (review.author) return review as Review;
  return {
    author: {
      name: review.reviewer?.displayName ?? '',
      avatarUrl: review.reviewer?.profilePhotoUrl,
    },
    text: review.comment || '',
    rating: { value: review.starRating ?? 5 },
    publishedAt: review.createTime ?? '',
  };
}

export function meetsQualityFilter(review: RawReview): boolean {
  const hasText = review.author
    ? (review.text && review.text.trim().length > 0)
    : (review.comment && review.comment.trim().length > 0);
  const hasHighRating = review.author
    ? (review.rating && typeof review.rating.value === 'number' && review.rating.value >= 4)
    : (typeof review.starRating === 'number' && review.starRating >= 4);
  return !!(hasText || hasHighRating);
}

export async function fetchReviews(widgetId: string): Promise<Review[]> {
  const res = await fetch(`https://featurable.com/api/v1/widgets/${widgetId}`);
  if (!res.ok) throw new Error('API error');
  const data = await res.json();
  if (data.success && Array.isArray(data.reviews) && data.reviews.length > 0) {
    return data.reviews.filter(meetsQualityFilter).map(normalizeReview);
  }
  return [];
}
