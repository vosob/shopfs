import { BasketItem as BasketItemType } from "../../../types/typesItem";
import { useBasket } from "../../../context/contextBasket";
import css from "./BasketItem.module.css";
import { useTranslation } from "react-i18next";
import { getTranslatedField } from "../../../Utils/getTranslatedField";

interface Props {
  data: BasketItemType;
}

export const BasketItem = ({ data }: Props) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const name = getTranslatedField(data, "name", lang);
  console.log(data);

  const { updateQuantity, removeFromBasket } = useBasket();

  const handleIncrement = () => {
    updateQuantity(data.id, data.quantity + 1);
  };

  const handleDecrement = () => {
    if (data.quantity > 1) {
      updateQuantity(data.id, data.quantity - 1);
    } else {
      removeFromBasket(data.id);
    }
  };
  const { t } = useTranslation("basket");

  const totalPrice = data.price * data.quantity;

  return (
    <div className={css.itemContainer}>
      <div className={css.bouquetCardContainer}>
        <img className={css.flowerPhoto} src={data.images[0].url} alt={name} />
        <div className={css.textBouquet}>
          <h3 className={css.titleBouquet}>{name}</h3>
          <p className={css.priceBouquet}>
            {t("basketItem.price")} {data.price} {t("basketItem.currency")}
          </p>
          <p className={css.sizeBouquet}>
            {t("basketItem.size")} {data.size}
          </p>
        </div>
      </div>
      {/* <div className={css.divider}></div> */}

      <div className={css.itemInfo}>
        <div className={css.quantityContainer}>
          <button
            onClick={handleDecrement}
            className={css.quantityBtn}
            disabled={data.quantity <= 1}
          >
            -
          </button>
          <p>
            {data.quantity} {t("basketItem.quantity")}
          </p>
          <button onClick={handleIncrement} className={css.quantityBtn}>
            +
          </button>
        </div>
        <p className={css.totalPriceContainer}>
          <span className={css.totalPriceText}>
            {t("basketItem.totalPrice")}
          </span>
          <span className={css.priceText}>
            {totalPrice.toFixed(2)} {t("basketItem.currency")}
          </span>
        </p>
      </div>
      <button
        onClick={() => removeFromBasket(data.id)}
        className={css.removeBtn}
      >
        {t("basketItem.btn")}
      </button>
    </div>
  );
};
