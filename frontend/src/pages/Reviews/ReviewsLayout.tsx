import css from "./ReviewsLayout.module.css";
import { NavLink, Outlet } from "react-router-dom";

export const ReviewsLayout = () => {
  return (
    <div className={`${css.profileLayoutContainer} ${"container"}`}>
      <aside className={css.asideContainer}>
        <h2 className={css.profileLayoutTitle}>Відгуки</h2>
        <nav className={css.navContainer}>
          <NavLink className={css.linkItem} to="textReviews">
            Текстові відгуки
          </NavLink>
          <NavLink className={css.linkItem} to="photoReviews">
            Фотовідгуки
          </NavLink>
        </nav>
      </aside>

      <main style={{ flex: 1, width: "100%" }}>
        <Outlet />
      </main>
    </div>
  );
};
