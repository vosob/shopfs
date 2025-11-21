import { useForm } from "react-hook-form";
import { Reviews } from "../../../types/reviews";
import { CreateStars } from "../../../Utils/CreateStars/CreateStars";
import css from "./AddReviews.module.css";
import { postReview } from "../../../services/reviews";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const AddReviews = () => {
  const { register, handleSubmit, reset, setValue, watch } = useForm<Reviews>({
    defaultValues: {
      text: "",
      rating: 1,
    },
  });

  const queryClient = useQueryClient();

  const reviewMutation = useMutation({
    mutationFn: (reviewData: Reviews) => postReview(reviewData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });

  const onSubmit = handleSubmit((data) => {
    reviewMutation.mutate(data);
    reset();
  });
  return (
    <div className={css.reviewsContainer}>
      <form onSubmit={onSubmit} className={css.form}>
        <label className={css.label}>
          <span className={css.spanStyle}>Ведіть ваший коментар</span>
          <textarea
            {...register("text")}
            className={css.textarea}
            placeholder="Ваше повідомлення"
          />
        </label>

        <div className={css.rating}>
          <div className={css.ratingContainer}>
            <span className={css.spanStyle}>Оцініть нашу роботу</span>
            <CreateStars
              setValue={setValue}
              watch={watch}
              register={register}
            />
          </div>
          <button type="submit" className={css.btnStyle}>
            Відправити
          </button>
        </div>
      </form>
    </div>
  );
};
