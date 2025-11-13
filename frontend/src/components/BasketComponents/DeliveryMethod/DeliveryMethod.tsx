import { useId } from "react";
import css from "./DeliveryMethod.module.css";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../../../pages/Basket/Basket";

interface Props {
  register: UseFormRegister<Inputs>;
}

export const DeliveryMethod = ({ register }: Props) => {
  const fieldId = useId();

  return (
    <div className={css.container}>
      <h3>Спосіб доставки</h3>
      <div className={css.textPosition}>
        <label className={css.labelContainer} htmlFor={`${fieldId}-delivery`}>
          <input
            type="radio"
            {...register("deliveryMethod")}
            id={`${fieldId}-delivery`}
            className={css.hiddenRadio}
          />
          <span className={css.customRadio}></span>
          <span className={css.hStyle}>Доставка по місту</span>
        </label>

        <label className={css.labelContainer} htmlFor={`${fieldId}-self`}>
          <input
            type="radio"
            id={`${fieldId}-self`}
            {...register("deliveryMethod")}
            className={css.hiddenRadio}
          />
          <span className={css.customRadio}></span>
          <span className={css.hStyle}>
            Самовивіз
            <span> м. Рівне, вул. Кулика і Гудачека 28</span>
          </span>
        </label>
      </div>
    </div>
  );
};
