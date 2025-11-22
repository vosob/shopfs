import { BasketItem } from "../BasketItem/BasketItem";
import css from "./BasketList.module.css";
import { useBasket } from "../../../context/contextBasket";
import { useTranslation } from "react-i18next";

export const BasketList = () => {
  const { t } = useTranslation("basket");

  const { getTotalPrice } = useBasket();
  const { items } = useBasket();

  if (items.length === 0) {
    return (
      <div>
        <p className={css.emptyBasket}>{t("basketList.basketContains")}</p>
      </div>
    );
  }

  return (
    <div>
      <ul className={css.basketList}>
        {items.map((item, index) => (
          <BasketItem key={index} data={item} />
        ))}
      </ul>

      <div>
        <p>
          <span className={css.totalPriceText}>
            {t("basketItem.totalPrice")}
          </span>
          <span className={css.priceText}>
            {getTotalPrice().toFixed(2)} {t("basketItem.currency")}
          </span>
        </p>
      </div>
    </div>
  );
};
