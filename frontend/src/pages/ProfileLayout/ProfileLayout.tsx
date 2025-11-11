import { NavLink, Outlet } from "react-router-dom";
import css from "./ProfileLayout.module.css";

export const ProfileLayout = () => {
  return (
    <div className={css.container}>
      <aside className={css.asideContainer}>
        <h2 className={css.profileLayoutTitle}>Особистий кабінет</h2>
        <nav className={css.navContainer}>
          <NavLink className={css.linkItem} to="myOrder" end>
            Мої замовлення
          </NavLink>
          <NavLink className={css.linkItem} to="profile">
            Профіль
          </NavLink>
          <NavLink className={css.linkItem} to="password">
            Зміна пароля
          </NavLink>
        </nav>
      </aside>

      <main>
        {/* тут рендеряться вкладені маршрути */}
        <Outlet />
      </main>
    </div>
  );
};
