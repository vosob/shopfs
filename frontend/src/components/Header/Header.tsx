import { NavBar } from "../NavBar/NavBar";
import css from "./Header.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { useBasket } from "../../context/contextBasket";

export const Header = () => {
  const { getTotalPrice } = useBasket();
  return (
    <div>
      <div className={css.topHeader}>
        <div className={`${css.topHeaderContainer} ${"container"}`}>
          <div className={css.location}>
            <FaLocationDot size="19" fill="white" />
            <span className={css.city}>м.Рівне,</span>
            вул. Кулика і Гудачека 28
          </div>
          <div className={css.contacts}>
            <FaPhoneAlt size="14px" fill="green" />
            <div>
              <span className={css.telegram}> Telegram </span>
              <span className={css.phone}>
                + 380 98 3285 882 / +380 63 7210 966
              </span>
            </div>
          </div>
          <div className={css.basket}>
            <BsBasket2 fill="white" size="20px" />

            {getTotalPrice() === 0 ? (
              <span className={css.cash}>Корзина порожня</span>
            ) : (
              <span className={css.cash}>
                {getTotalPrice().toFixed(2)} грн.
              </span>
            )}
          </div>
        </div>
      </div>
      <div className={css.header}>
        <NavBar />
      </div>
    </div>
  );
};
