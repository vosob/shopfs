import { AddReviews } from "../AddReviews/AddReviews";
import css from "./TextReviews.module.css";

export const TextReviews = () => {
  return (
    <div className={css.textReviewsContainer}>
      <AddReviews />
    </div>
  );
};
