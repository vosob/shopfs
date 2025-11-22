import { NavBar } from "../NavBar/NavBar";
import css from "./Header.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { useBasket } from "../../context/contextBasket";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";

export const Header = () => {
  const { getTotalPrice } = useBasket();
  const { t } = useTranslation("topHeader");
  return (
    <header>
      <div className={css.topHeader}>
        <div className={`${css.topHeaderContainer} ${"container"}`}>
          <div className={css.location}>
            <FaLocationDot size="19" fill="white" />
            <span className={css.city}>{t("city")}</span>
            <span>{t("street")}</span>
          </div>

          <div className={css.contacts}>
            <div>
              <span className={css.telegram}>
                <FaPhoneAlt className={css.icon} fill="green" /> Telegram
              </span>
              <p className={css.phone}>
                <span className="displayNone">+ 380 98 3285 882 /</span>
                <span>+380 63 7210 966</span>
              </p>
            </div>
          </div>

          <div className={css.basket}>
            <BsBasket2 fill="white" size="20px" />

            {getTotalPrice() === 0 ? (
              <span className={css.cash}>{t("emptyBasket")}</span>
            ) : (
              <span className={css.cash}>
                {getTotalPrice().toFixed(2)} грн.
              </span>
            )}

            <div className={css.language}>
              <LanguageSelect />
            </div>
          </div>
        </div>
      </div>
      <div className={`${css.header} ${"container"}`}>
        <NavBar />
      </div>
    </header>
  );
};
