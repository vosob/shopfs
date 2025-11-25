import css from "./ReviewsLayout.module.css";

import { useTranslation } from "react-i18next";
import { TextReviews } from "../../components/Rewiews/TextReviews/TextReviews";

export const ReviewsLayout = () => {
  const { t } = useTranslation("reviews");
  return (
    <div className={`${css.profileLayoutContainer} ${"container"}`}>
      <h2 className={css.reviewsTitle}>{t("reviews.title")}</h2>
      <TextReviews />
    </div>
  );
};
