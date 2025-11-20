import css from "./ReviewsLayout.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ReviewsLayout = () => {
  const { t } = useTranslation("reviews");
  return (
    <div className={`${css.profileLayoutContainer} ${"container"}`}>
      <aside className={css.asideContainer}>
        <h2 className={css.profileLayoutTitle}>{t("reviews.title")}</h2>
        <nav className={css.navContainer}>
          <NavLink className={css.linkItem} to="textReviews">
            {t("reviews.textReviews")}
          </NavLink>
          <NavLink className={css.linkItem} to="photoReviews">
            {t("reviews.fotoReviews")}
          </NavLink>
        </nav>
      </aside>

      <main style={{ flex: 1, width: "100%" }}>
        <Outlet />
      </main>
    </div>
  );
};
