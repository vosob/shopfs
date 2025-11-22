import { useState, useEffect } from "react";
import { Link } from "react-router";
import css from "./NavBar.module.css";
import { useAuth } from "../../context/contextAuth";
import { FaRegUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const NavBar = () => {
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation("navbar");

  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = (
    <ul className={css.navbar}>
      <li>
        <Link to="/" onClick={closeMenu}>
          {t("home")}
        </Link>
      </li>
      <li>
        <Link to="/catalog" onClick={closeMenu}>
          {t("catalog")}
        </Link>
      </li>
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
        // Десктоп — показуємо весь список
        navLinks
      ) : (
        // Мобільний/планшет — бургер меню
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

          {/* Fullscreen меню з бекдропом */}
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
