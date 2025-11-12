import { UseFormRegister } from "react-hook-form";
import css from "./Recipient.module.css";
import { Inputs } from "../../../pages/Basket/Basket";
import { useId } from "react";

interface Props {
  register: UseFormRegister<Inputs>;
}

export const Recipient = ({ register }: Props) => {
  const fieldId = useId();
  return (
    <div className={css.container}>
      <h3>Отримувач</h3>

      <div className={css.textPosition}>
        {/* Я отримувач */}
        <label className="labelContainer" htmlFor={`${fieldId}-iRecipient`}>
          <input
            type="radio"
            {...register("iRecipient")}
            id={`${fieldId}-iRecipient`}
            className={css.hiddenRadio}
          />
          <span className="customRadio"></span>
          <span className={css.recipientOrder}>Я отримувач</span>
        </label>

        {/* Отримувач інша людина */}
        <label className="labelContainer" htmlFor={`${fieldId}-call`}>
          <input
            type="radio"
            {...register("iRecipient")}
            id={`${fieldId}-call`}
            className={css.hiddenRadio}
          />
          <span className="customRadio"></span>
          <span className={css.labelContent}>Отримувач інша людина</span>
        </label>
      </div>

      <div className={css.nameAndMobile}>
        {/* Ім'я та фамілія отримувача */}
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor={`${fieldId}-recipientName`}>
            Ім'я та фамілія
            <input
              type="text"
              {...register("recipientName")}
              className={css.inputStyle}
              placeholder="Введіть ваше ім'я"
              id={`${fieldId}-recipientName`}
            />
          </label>
        </div>

        {/* Моб.телефон отримувача */}
        <div className={css.labelPosition}>
          <label
            className={css.labelName}
            htmlFor={`${fieldId}-recipientMobile`}
          >
            Моб.телефон
            <input
              type="tel"
              {...register("recipientMobile")}
              className={css.inputStyle}
              placeholder="+_(___) ___-__-__"
              id={`${fieldId}-recipientMobile`}
            />
          </label>
        </div>
      </div>

      <div className={css.cityContainer}>
        {/* Місто отримувача */}
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor={`${fieldId}-recipientCity`}>
            Місто
            <input
              className={css.inputStyle}
              type="text"
              {...register("recipientCity")}
              placeholder="Рівне"
              id={`${fieldId}-recipientCity`}
            />
          </label>
        </div>
        {/* Адрес отримувача */}
        <div className={css.labelPosition}>
          <label
            className={css.labelName}
            htmlFor={`${fieldId}-recipientAddress`}
          >
            Адрес
            <input
              type="text"
              className={css.inputStyle}
              {...register("recipientAddress")}
              placeholder="м.Рівне, вул. Макарова 28"
              id={`${fieldId}-recipientAddress`}
            />
          </label>
        </div>
      </div>
      <div>
        {/* Примітка отримувача */}
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor={`${fieldId}-recipientNote`}>
            Примітка
            <textarea
              {...register("recipientNote")}
              placeholder="Введіть вашу примітку"
              className={css.noteStyle}
              id={`${fieldId}-recipientNote`}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
