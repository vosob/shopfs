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
          <span>Ведіть ваший коментар</span>
          <textarea className={css.textarea} placeholder="Ваше повідомлення" />
        </label>
        <label>
          Оцініть нашу роботу
          <CreateStars />
        </label>
      </form>
    </div>
  );
};
