import { useQuery } from "@tanstack/react-query";
import { AddReviews } from "../AddReviews/AddReviews";
import css from "./TextReviews.module.css";
import { getAllReviews } from "../../../services/reviews";
import { ReviewsList } from "../ReviewsList/ReviewsList";
import { ReviewsData } from "../../../types/reviews";

export const TextReviews = () => {
  const { data, isLoading, isError } = useQuery<ReviewsData[]>({
    queryKey: ["reviews"],
    queryFn: getAllReviews,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className={css.textReviewsContainer}>
      {data && <ReviewsList data={data} />}
      <AddReviews />
    </div>
  );
};
