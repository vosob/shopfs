import css from "./TimeDelivery.module.css";
import { formatted } from "../../../Utils/TodayDate";
import { useId } from "react";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../../../pages/Basket/Basket";
interface Props {
  register: UseFormRegister<Inputs>;
}

export const TimeDelivery = ({ register }: Props) => {
  const fieldId = useId();

  return (
    <div className={css.container}>
      <h3>Дата і час</h3>
      <div className={css.dateContainer}>
        <p>Дата</p>
        <input
          type="date"
          {...register("deliveryDate")}
          className={css.calendar}
          defaultValue={String(formatted)}
        />
      </div>

      <div className={css.textPosition}>
        <div className={css.timeContainer}>
          <label className="labelContainer" htmlFor={`${fieldId}-time`}>
            <input
              type="radio"
              id={`${fieldId}-time`}
              {...register("deliveryTimeOrDate")}
              className="customRadio"
            />
            <span className="customRadio"></span>
            <span>Вкажіть проміжок часу для отримання замовлення</span>
          </label>

          <label htmlFor={`${fieldId}-time-picker`}>
            <input
              type="time"
              id={`${fieldId}-time-picker`}
              {...register("deliveryExactTime")}
              className={css.timeDisplay}
              defaultValue={formatted}
            />
          </label>
        </div>

        <label className="labelContainer" htmlFor={`${fieldId}-call`}>
          <input
            type="radio"
            id={`${fieldId}-call`}
            {...register("deliveryTimeOrDate")}
            className={css.hiddenRadio}
          />
          <span className="customRadio"></span>
          <span className={css.labelContent}>
            Подзвонити отримувачу для уточнення часу і адреси.
          </span>
        </label>

        <div className={css.checkboxOption}>
          <label htmlFor={`${fieldId}-incognito`} className={css.checkboxLabel}>
            <input
              type="checkbox"
              id={`${fieldId}-incognito`}
              {...register("incognito")}
              className={css.actualCheckbox}
            />
            <p>
              По телефону <strong>не говорити</strong>, що це квіти
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};
