import { BasketItem as BasketItemType } from "../../../types/typesItem";
import { useBasket } from "../../../context/contextBasket";
import css from "./BasketItem.module.css";

interface Props {
  data: BasketItemType;
}

export const BasketItem = ({ data }: Props) => {
  const { updateQuantity, removeFromBasket, getTotalPrice } = useBasket();

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

  const totalPrice = data.price * data.quantity;

  return (
    <div className={css.itemContainer}>
      <div>
        <img
          className={css.flowerPhoto}
          src={data.images[0].url}
          alt={data.name}
        />
        <div className={css.textBouquet}>
          <h3 className={css.titleBouquet}>{data.name}</h3>
          <p className={css.priceBouquet}>Ціна: {data.price} грн.</p>
          <p className={css.sizeBouquet}>Розмір: {data.size}</p>
        </div>
      </div>
      <div className={css.divider}></div>

      <div className={css.itemInfo}>
        <div className={css.quantityContainer}>
          <button
            onClick={handleDecrement}
            className={css.quantityBtn}
            disabled={data.quantity <= 1}
          >
            -
          </button>
          <p>{data.quantity} шт.</p>
          <button onClick={handleIncrement} className={css.quantityBtn}>
            +
          </button>
        </div>
        <p className={css.totalPriceContainer}>
          <span className={css.totalPriceText}>Загальна ціна:</span>
          <span className={css.priceText}>{totalPrice.toFixed(2)} грн</span>
        </p>
        <button
          onClick={() => removeFromBasket(data.id)}
          className={css.removeBtn}
        >
          Видалити
        </button>
      </div>

      <div>
        <p>
          <span className={css.totalPriceText}>Загальна ціна:</span>
          <span className={css.priceText}>
            {getTotalPrice().toFixed(2)} грн
          </span>
        </p>
      </div>
    </div>
  );
};
