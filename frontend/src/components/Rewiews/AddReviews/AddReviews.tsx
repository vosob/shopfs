import { useForm } from "react-hook-form";
import { Reviews } from "../../../types/reviews";
import { CreateStars } from "../../../Utils/CreateStars/CreateStars";
import css from "./AddReviews.module.css";
import { postReview } from "../../../services/reviews";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export const AddReviews = () => {
  const { t } = useTranslation("reviews");
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
          <span className={css.spanStyle}>{t("reviews.comment")}</span>
          <textarea
            {...register("text")}
            className={css.textarea}
            placeholder={t("reviews.message")}
          />
        </label>

        <div className={css.rating}>
          <div className={css.ratingContainer}>
            <span className={css.spanStyle}>{t("reviews.star")}</span>
            <CreateStars
              setValue={setValue}
              watch={watch}
              register={register}
            />
          </div>
          <button type="submit" className={css.btnStyle}>
            {t("reviews.btn")}
          </button>
        </div>
      </form>
    </div>
  );
};
