import { BasketItem } from "../BasketItem/BasketItem";
import css from "./BasketList.module.css";
import { useBasket } from "../../../context/contextBasket";

export const BasketList = () => {
  const { items } = useBasket();

  if (items.length === 0) {
    return (
      <div>
        <p className={css.emptyBasket}>Наразі ваша корзина порожня</p>
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
    </div>
  );
};
