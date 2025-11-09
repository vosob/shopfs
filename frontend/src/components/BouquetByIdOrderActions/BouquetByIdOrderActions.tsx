import { useEffect, useState } from "react";
import css from "./BouquetByIdOrderActions.module.css";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { RiRedPacketLine } from "react-icons/ri";
import { Bouquet } from "../../types/typesItem";

interface Props {
  data: Bouquet;
  activePrice: string;
}

export const BouquetByIdOrderActions = ({ data, activePrice }: Props) => {
  const [counter, setCounter] = useState(1);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let basePrice = data.price;

    if (activePrice === "small") {
      basePrice = data.price - data.price * 0.15;
    } else if (activePrice === "medium") {
      basePrice = data.price;
    } else if (activePrice === "big") {
      basePrice = data.price + data.price * 0.15;
    }

    setValue(basePrice * counter);
  }, [activePrice, counter, data.price]);

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className={css.orderActionsContainer}>
      <div className={css.counter}>
        <button className={css.decrement} onClick={handleDecrement}>
          <FiMinus />
        </button>
        <span>
          <strong>{counter}</strong> шт.
        </span>
        <button className={css.increment} onClick={handleIncrement}>
          <FiPlus />
        </button>
      </div>

      <div className={css.total}>
        <p className={css.price}>Сума:</p>
        <p className={css.totalPrice}>{value.toFixed(2)} грн.</p>
      </div>

      <button className={css.orderBtn}>
        <RiRedPacketLine className={css.icon} />В корзину
      </button>
    </div>
  );
};
