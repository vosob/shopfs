import { Link } from "react-router";
import css from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div>
      <ul className={css.navbar}>
        <Link to="/category">Каталог</Link>
        <Link to="/reviews">Відгуки</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/">
          <img className={css.iconHome} src="../../../public/images/icon.png" />
        </Link>
        <Link to="/info">Інформація для клієнтів</Link>
        <Link to="/login">Log in</Link>
        <Link to="/basket">Basket</Link>
      </ul>
    </div>
  );
};
