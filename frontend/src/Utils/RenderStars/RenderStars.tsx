import css from "./RenderStars.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";

export const RenderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <span key={i} className={css.yellow}>
          <FaStar />
        </span>
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <span key={i} className={css.yellow}>
          <FaRegStar />
        </span>
      );
    } else {
      stars.push(
        <span key={i} className={css.grey}>
          <FaStar />
        </span>
      );
    }
  }
  return stars;
};
