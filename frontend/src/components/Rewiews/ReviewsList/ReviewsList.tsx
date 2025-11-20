import { format } from "date-fns";
import { ReviewsData } from "../../../types/reviews";
import css from "./ReviewsList.module.css";
import { RenderStars } from "../../../Utils/RenderStars/RenderStars";

interface Props {
  data: ReviewsData[];
}

export const ReviewsList = ({ data }: Props) => {
  console.log(data);
  return (
    <ul>
      {data.map((review) => (
        <li key={review.id} className={css.reviewItem}>
          <div className={css.ratingAndName}>
            <h2 className={css.reviewsName}>{review.user.name}</h2>
            <p>{RenderStars(review.rating)}</p>
          </div>
          <div className={css.timeAndCity}>
            <span className={css.reviewCreated}>
              {format(new Date(review.createdAt), "dd.MM.yyyy")}
            </span>
            <p className={css.reviewCreated}>{review.user.city}</p>
          </div>
          <p className={css.reviewText}>{review.text}</p>
        </li>
      ))}
    </ul>
  );
};
