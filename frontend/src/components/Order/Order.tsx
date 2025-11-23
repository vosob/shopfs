import css from "./Order.module.css";
import orderOne from "../../image/Order/orderOne.png";
import orderTwo from "../../image/Order/orderTwo.png";
import orderThree from "../../image/Order/orderThree.png";
import orderFour from "../../image/Order/orderFour.png";

import { useTranslation } from "react-i18next";

const orderSteps = [
  { key: "choiceBouquet", img: orderOne },
  { key: "choiceSize", img: orderTwo },
  { key: "enterShippingDetails", img: orderThree },
  { key: "BouquetReady", img: orderFour },
];

export const Order = () => {
  const { t } = useTranslation("orderSteps");

  return (
    <section className={`${css.orderContainer} ${"container"}`}>
      <div className={css.titleContainer}>
        <span>{t("orderTitle.firstWord")}</span>
        <span>{t("orderTitle.secondWord")}</span>
      </div>
      <ul className={css.steps}>
        {orderSteps.map(({ key, img }) => (
          <li className={css.stepItem} key={key}>
            <img src={img} alt={key} />

            <div className={css.stepText}>
              <h3>{t(`${key}.highlight`)}</h3>
              <p>{t(`${key}.text`)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
