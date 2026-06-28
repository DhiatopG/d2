export interface ReviewAuthor {
  name: string;
  avatarUrl?: string;
}

export interface ReviewRating {
  value: number;
}

export interface Review {
  author: ReviewAuthor;
  text: string;
  rating: ReviewRating;
  publishedAt: string;
}

export interface RawReview {
  reviewer?: {
    displayName?: string;
    profilePhotoUrl?: string;
  };
  comment?: string;
  starRating?: number;
  createTime?: string;
  author?: ReviewAuthor;
  text?: string;
  rating?: ReviewRating;
  publishedAt?: string;
}
