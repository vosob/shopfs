import { Link } from "react-router";
import css from "./NavBar.module.css";
import { useAuth } from "../../context/contextAuth";
import { FaRegUserCircle } from "react-icons/fa";

export const NavBar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className={`${css.navbarContainer} ${"container"}`}>
      <ul className={css.navbar}>
        <Link to="/category">Каталог</Link>
        <Link to="/reviews">Відгуки</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/">
          <img className={css.iconHome} src="../../../public/images/icon.png" />
        </Link>
        <Link to="/info">Інформація для клієнтів</Link>

        {isAuthenticated ? (
          <Link className={css.orderContainer} to="/personalPage/myOrder">
            <FaRegUserCircle size={24} />
            МоЇ замовлення
          </Link>
        ) : (
          <Link to="/auth">Вхід</Link>
        )}

        <Link to="/basket">Корзина</Link>
      </ul>
    </div>
  );
};
