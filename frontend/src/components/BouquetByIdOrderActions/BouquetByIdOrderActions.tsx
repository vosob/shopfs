import { useState } from "react";
import css from "./BouquetByIdOrderActions.module.css";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiRedPacketLine } from "react-icons/ri";
import { BasketItem, Bouquet } from "../../types/typesItem";
import { v4 as uuidv4 } from "uuid";
import { useBasket } from "../../context/contextBasket";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

interface Props {
  data: Bouquet;
  activePrice: "small" | "medium" | "big";
}

export const BouquetByIdOrderActions = ({ data, activePrice }: Props) => {
  const { t } = useTranslation("bouquetById");
  const [quantity, setQuantity] = useState(1);
  const { addToBasket, calculatePrice } = useBasket();

  const currentPrice = calculatePrice(data.price, activePrice);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToBasket = () => {
    const item: BasketItem = {
      id: uuidv4(),
      productId: data.id,
      name_uk: data.name_uk,
      name_en: data.name_en,
      price: data.price,
      images: data.images,
      size: activePrice,
      quantity: quantity,
    };

    addToBasket(item, activePrice);

    setQuantity(1);

    toast.success("Додано в корзину!");
  };

  const totalPrice = currentPrice * quantity;

  return (
    <div className={css.orderActionsContainer}>
      <div className={css.counter}>
        <button
          onClick={handleDecrement}
          className={css.decrement}
          disabled={quantity <= 1}
        >
          <FiMinus />
        </button>
        <span>
          <strong>{quantity}</strong> {t("bouquetByOrder.number")}
        </span>
        <button onClick={handleIncrement} className={css.increment}>
          <FiPlus />
        </button>
      </div>

      <div className={css.priceAndBtnContainer}>
        <div className={css.total}>
          <p className={css.price}>{t("bouquetByOrder.total")}</p>
          <p className={css.totalPrice}>
            {totalPrice.toFixed(2)}
            {t("bouquetByOrder.currency")}
          </p>
        </div>

        <button onClick={handleAddToBasket} className={css.orderBtn}>
          <RiRedPacketLine className={css.icon} />
          {t("bouquetByOrder.basket")}
        </button>
      </div>
    </div>
  );
};
