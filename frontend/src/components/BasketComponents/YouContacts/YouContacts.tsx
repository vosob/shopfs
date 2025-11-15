import { UseFormRegister } from "react-hook-form";
import css from "./YouContacts.module.css";
import { Inputs } from "../../../pages/Basket/Basket";
import { useId } from "react";

interface Props {
  register: UseFormRegister<Inputs>;
}

export const YouContacts = ({ register }: Props) => {
  const fieldId = useId();
  return (
    <div className={css.container}>
      <h3>Ваші котакти</h3>

      <div className={css.nameAndMobile}>
        {/* Ваші контакти (Ім'я та фамілія) */}
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor={`${fieldId}-yourName`}>
            Ім'я та фамілія
            <input
              type="text"
              {...register("senderName")}
              className={css.inputStyle}
              placeholder="Введіть ваше ім'я"
              id={`${fieldId}-yourName`}
            />
          </label>
        </div>

        {/* Моб.телефон */}
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor={`${fieldId}-yourMobile`}>
            Моб.телефон
            <input
              type="tel"
              className={css.inputStyle}
              {...register("senderMobile")}
              placeholder="+_(___) ___-__-__"
              id={`${fieldId}-yourMobile`}
            />
          </label>
        </div>

        {/* Місто */}
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor={`${fieldId}-yourCity`}>
            Місто
            <input
              className={css.inputStyle}
              type="text"
              {...register("senderCity")}
              placeholder="Рівне"
              id={`${fieldId}-yourCity`}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
