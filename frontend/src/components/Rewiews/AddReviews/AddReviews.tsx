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
      <form>
        <label>
          Ведіть ваший коментар
          <textarea>Ваше повідомлення</textarea>
        </label>
        <label>
          Оцініть нашу роботу
          <CreateStars />
        </label>
      </form>
    </div>
  );
};
