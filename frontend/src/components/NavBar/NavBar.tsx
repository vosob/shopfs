import { Link } from "react-router";
import css from "./NavBar.module.css";
import { useAuth } from "../../context/contextAuth";
import { FaRegUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation("navbar");

  return (
    <div className={`${css.navbarContainer} ${"container"}`}>
      <ul className={css.navbar}>
        <li>
          <Link to="/">
            <img
              className={css.iconHome}
              src="../../../public/images/icon.png"
            />
          </Link>
        </li>
        <li>
          <Link to="/category">{t("category")}</Link>
        </li>
        <li>
          <Link to="/reviews">{t("reviews")}</Link>
        </li>
        <li>
          <Link to="/contacts">{t("contacts")}</Link>
        </li>

        <li>
          <Link to="/info">{t("info")}</Link>
        </li>

        <li>
          {isAuthenticated ? (
            <Link className={css.orderContainer} to="/personalPage/myOrder">
              <FaRegUserCircle size={24} />
              {t("navMyOrder")}
            </Link>
          ) : (
            <Link to="/auth">{t("navLogin")}</Link>
          )}
        </li>

        <li>
          <Link to="/basket">{t("basket")}</Link>
        </li>
      </ul>
    </div>
  );
};
