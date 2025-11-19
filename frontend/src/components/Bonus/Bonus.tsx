import freeDeliveryImg from "./bonus/freeDelivery.png";
import giftCardImg from "./bonus/giftCard.png";
import allDayDeliveryImg from "./bonus/allDayDelivery.png";
import discountSystemImg from "./bonus/discountSystem.png";

import { useTranslation } from "react-i18next";

import css from "./Bonus.module.css";

export const Bonus = () => {
  const { t } = useTranslation("bonus");

  const bonuses = [
    { key: "freeDelivery", img: freeDeliveryImg },
    { key: "giftCard", img: giftCardImg },
    { key: "allDayDelivery", img: allDayDeliveryImg },
    { key: "discountSystem", img: discountSystemImg },
  ];

  return (
    <div>
      <div className={css.BonusContainer}>
        <ul className={`${css.bonusList} ${"container"}`}>
          {bonuses.map(({ key, img }) => (
            <li key={key}>
              <img className={css.bonusImg} src={img} alt={key} />
              <span className={css.spanColor}>{t(`${key}.highlight`)}</span>
              <span>{t(`${key}.text`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
