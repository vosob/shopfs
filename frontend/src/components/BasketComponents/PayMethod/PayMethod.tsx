import { useId } from "react";
import css from "./PayMethod.module.css";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../../../pages/Basket/Basket";

interface Props {
  register: UseFormRegister<Inputs>;
}

export const PayMethod = ({ register }: Props) => {
  const fieldId = useId();
  return (
    <div className={css.container}>
      <h3>Спосіб оплати</h3>
      <div className={css.textPosition}>
        {/* Оплата готівкою */}
        <label className="labelContainer" htmlFor={`${fieldId}-selfPickupCash`}>
          <input
            type="radio"
            {...register("selfPickupCash")}
            id={`${fieldId}-selfPickupCash`}
            className={css.hiddenRadio}
          />
          <span className="customRadio"></span>
          <span className={css.sStyle}>
            Оплата готівкою під час отримання (самовиклик)
          </span>
        </label>

        {/* Оплата готівкою кур'єру */}
        <label
          className="labelContainer"
          htmlFor={`${fieldId}-selfPickupCash2`}
        >
          <input
            type="radio"
            {...register("selfPickupCash")}
            id={`${fieldId}-selfPickupCash2`}
            className={css.hiddenRadio}
          />
          <span className="customRadio"></span>
          <span className={css.sStyle}>
            Оплата готівкою кур'єру (тільки, якщо одержувач — Ви)
          </span>
        </label>

        {/* Онлайн оплата — Монобанк */}
        <label
          className="labelContainer"
          htmlFor={`${fieldId}-selfPickupCash3`}
        >
          <input
            type="radio"
            {...register("selfPickupCash")}
            id={`${fieldId}-selfPickupCash3`}
            className={css.hiddenRadio}
          />
          <span className="customRadio"></span>
          <span className={css.sStyle}>Онлайн оплата — Монобанк</span>
        </label>
      </div>
    </div>
  );
};
