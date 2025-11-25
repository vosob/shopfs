import { useState } from "react";
import { Link } from "react-router";
import css from "./NavBar.module.css";
import { useAuth } from "../../context/contextAuth";
import { FaRegUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useWindowSize } from "usehooks-ts";

export const NavBar = () => {
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation("navbar");

  const [menuOpen, setMenuOpen] = useState(false);

  const { width } = useWindowSize();
  const isDesktop = width >= 1130;

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = (
    <ul className={css.navbar}>
      {isDesktop ? (
        <Link to="/">
          <img className={css.logo} src="/images/icon.png" alt="logo" />
        </Link>
      ) : (
        <li>
          <Link to="/" onClick={closeMenu}>
            {t("home")}
          </Link>
        </li>
      )}

      <li>
        <Link to="/discount" onClick={closeMenu}>
          {t("discount")}
        </Link>
      </li>
      <li>
        <Link to="/reviews" onClick={closeMenu}>
          {t("reviews")}
        </Link>
      </li>
      <li>
        <Link to="/contacts" onClick={closeMenu}>
          {t("contacts")}
        </Link>
      </li>
      <li>
        <Link to="/info" onClick={closeMenu}>
          {t("info")}
        </Link>
      </li>
      <li>
        {isAuthenticated ? (
          <Link
            className={css.orderContainer}
            to="/personalPage/myOrder"
            onClick={closeMenu}
          >
            <FaRegUserCircle size={24} /> {t("navMyOrder")}
          </Link>
        ) : (
          <Link to="/auth" onClick={closeMenu}>
            {t("navLogin")}
          </Link>
        )}
      </li>
      <li>
        <Link to="/basket" onClick={closeMenu}>
          {t("basket")}
        </Link>
      </li>
    </ul>
  );

  return (
    <div className={`${css.navbarContainer} container`}>
      {isDesktop ? (
        navLinks
      ) : (
        <>
          <ul className={css.mobileMenu}>
            <li>
              <button onClick={toggleMenu} className={css.burgerButton}>
                <GiHamburgerMenu /> МЕНЮ
              </button>
            </li>
            <li>
              <Link to="/">
                <img
                  className={css.iconHome}
                  src="../../../public/images/icon.png"
                  alt="home"
                />
              </Link>
            </li>
            <li>
              <div className={css.language}>
                <LanguageSelect />
              </div>
            </li>
          </ul>

          <div className={`${css.fullscreenMenu} ${menuOpen ? css.open : ""}`}>
            <button className={css.closeButton} onClick={closeMenu}>
              <IoMdClose size={28} />
            </button>
            {navLinks}
          </div>

          {menuOpen && <div className={css.backdrop} onClick={closeMenu} />}
        </>
      )}
    </div>
  );
};
