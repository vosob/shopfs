import { NavLink, Outlet } from "react-router-dom";
import css from "./ProfileLayout.module.css";
import { useAuth } from "../../context/contextAuth";
import { useBasket } from "../../context/contextBasket";
import { useTranslation } from "react-i18next";

export const ProfileLayout = () => {
  const { t } = useTranslation("profile");
  const { logout } = useAuth();
  const { clearBasket } = useBasket();

  const handleLogout = () => {
    clearBasket();
    logout();
  };

  return (
    <div className={`${css.profileLayoutContainer} ${"container"}`}>
      <aside className={css.asideContainer}>
        <h2 className={css.profileLayoutTitle}>{t("personalOffice")}</h2>
        <nav className={css.navContainer}>
          <NavLink className={css.linkItem} to="profile">
            {t("profile")}
          </NavLink>
          <NavLink className={css.linkItem} to="myOrder" end>
            {t("myOrder")}
          </NavLink>
          <NavLink className={css.linkItem} to="password">
            {t("password")}
          </NavLink>
          <button
            className={`${css.linkItem} ${css.logoutButton}`}
            onClick={handleLogout}
          >
            {t("exit")}
          </button>
        </nav>
      </aside>

      <main style={{ flex: 1, width: "100%" }}>
        {/* тут рендеряться вкладені маршрути */}
        <Outlet />
      </main>
    </div>
  );
};
