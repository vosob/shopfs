import { useForm } from "react-hook-form";
import { Reviews } from "../../../types/reviews";
import { CreateStars } from "../../../Utils/CreateStars/CreateStars";
import css from "./AddReviews.module.css";

export const AddReviews = () => {
  const { register, handleSubmit, reset } = useForm<Reviews>({
    defaultValues: {
      reviewsComment: "",
      reviewsRating: 1,
    },
  });
  return (
    <div className={css.reviewsContainer}>
      <form className={css.form}>
        <label className={css.label}>
          <span className={css.spanStyle}>Ведіть ваший коментар</span>
          <textarea
            {...register("reviewsComment")}
            className={css.textarea}
            placeholder="Ваше повідомлення"
          />
        </label>

        <div className={css.rating}>
          <div className={css.ratingContainer}>
            <span className={css.spanStyle}>Оцініть нашу роботу</span>
            <CreateStars />
          </div>
          <button type="submit" className={css.btnStyle}>
            Відправити
          </button>
        </div>
      </form>
    </div>
  );
};
