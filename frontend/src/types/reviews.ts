export type Numbers = 1 | 2 | 3 | 4 | 5;

export interface Reviews {
  text: string;
  rating: Numbers;
}

interface UserReviews {
  city: string;
  name: string;
}

export interface ReviewsData {
  user: UserReviews;
  createdAt: string;
  id: string;
  rating: number;
  text: string;
  updatedAt: string;
  userId: string;
}
