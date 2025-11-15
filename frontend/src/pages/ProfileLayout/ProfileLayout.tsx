import { NavLink, Outlet } from "react-router-dom";
import css from "./ProfileLayout.module.css";
import { useAuth } from "../../context/contextAuth";
import { useBasket } from "../../context/contextBasket";

export const ProfileLayout = () => {
  const { logout } = useAuth();
  const { clearBasket } = useBasket();

  const handleLogout = () => {
    clearBasket();
    logout();
  };

  return (
    <div className={`${css.profileLayoutContainer} ${"container"}`}>
      <aside className={css.asideContainer}>
        <h2 className={css.profileLayoutTitle}>Особистий кабінет</h2>
        <nav className={css.navContainer}>
          <NavLink className={css.linkItem} to="profile">
            Профіль
          </NavLink>
          <NavLink className={css.linkItem} to="myOrder" end>
            Мої замовлення
          </NavLink>
          <NavLink className={css.linkItem} to="password">
            Зміна пароля
          </NavLink>
          <button
            className={`${css.linkItem} ${css.logoutButton}`}
            onClick={handleLogout}
          >
            Вихід
          </button>
        </nav>
      </aside>

      <main>
        {/* тут рендеряться вкладені маршрути */}
        <Outlet />
      </main>
    </div>
  );
};
