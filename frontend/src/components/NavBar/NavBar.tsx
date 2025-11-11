import { Link } from "react-router";
import css from "./NavBar.module.css";
import { useAuth } from "../../context/contextAuth";

export const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className={css.navbarContainer}>
      <ul className={css.navbar}>
        <Link to="/category">Каталог</Link>
        <Link to="/reviews">Відгуки</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/">
          <img className={css.iconHome} src="../../../public/images/icon.png" />
        </Link>
        <Link to="/info">Інформація для клієнтів</Link>

        {isAuthenticated ? (
          <button onClick={logout}>Вихід</button>
        ) : (
          <Link to="/auth">Вхід</Link>
        )}

        <Link to="/basket">Basket</Link>
      </ul>
    </div>
  );
};
