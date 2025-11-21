import { UseFormRegister } from "react-hook-form";
import css from "./YouContacts.module.css";

import { useId } from "react";
import { useTranslation } from "react-i18next";
import { Inputs } from "../../../types/orders";

interface Props {
  register: UseFormRegister<Inputs>;
}

export const YouContacts = ({ register }: Props) => {
  const fieldId = useId();
  const { t } = useTranslation("basket");
  return (
    <div className={css.container}>
      <h3>{t("yourContacts.contact")}</h3>

      <div className={css.nameAndMobile}>
        {/* Ваші контакти (Ім'я та фамілія) */}
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor={`${fieldId}-yourName`}>
            {t("yourContacts.name")}
            <input
              type="text"
              {...register("senderName")}
              className={css.inputStyle}
              placeholder={t("yourContacts.inputName")}
              id={`${fieldId}-yourName`}
            />
          </label>
        </div>

        {/* Моб.телефон */}
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor={`${fieldId}-yourMobile`}>
            {t("yourContacts.phone")}
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
            {t("yourContacts.city")}
            <input
              className={css.inputStyle}
              type="text"
              {...register("senderCity")}
              placeholder={t("yourContacts.inputCity")}
              id={`${fieldId}-yourCity`}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
