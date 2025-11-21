import { UseFormRegister } from "react-hook-form";
import css from "./Recipient.module.css";

import { useId } from "react";
import { useTranslation } from "react-i18next";
import { Inputs } from "../../../types/orders";

interface Props {
  register: UseFormRegister<Inputs>;
}

export const Recipient = ({ register }: Props) => {
  const { t } = useTranslation("basket");
  const fieldId = useId();
  return (
    <div className={css.container}>
      <h3>{t("recipients.recipient")}</h3>

      <div className={css.textPosition}>
        {/* Я отримувач */}
        <label className="labelContainer" htmlFor={`${fieldId}-iRecipient`}>
          <input
            type="radio"
            value="iRecipient"
            {...register("Recipient")}
            id={`${fieldId}-iRecipient`}
            className={css.hiddenRadio}
          />
          <span className="customRadio"></span>
          <span className={css.recipientOrder}>{t("recipients.im")}</span>
        </label>

        {/* Отримувач інша людина */}
        <label className="labelContainer" htmlFor={`${fieldId}-call`}>
          <input
            type="radio"
            value="OtherRecipient"
            {...register("Recipient")}
            id={`${fieldId}-call`}
            className={css.hiddenRadio}
          />
          <span className="customRadio"></span>
          <span className={css.recipientOrder}>{t("recipients.other")}</span>
        </label>
      </div>

      <div className={css.nameAndMobile}>
        {/* Ім'я та фамілія отримувача */}
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor={`${fieldId}-recipientName`}>
            {t("recipients.name")}
            <input
              type="text"
              {...register("recipientName")}
              className={css.inputStyle}
              placeholder={t("recipients.inputName")}
              id={`${fieldId}-recipientName`}
              autoComplete="one-time-code"
            />
          </label>
        </div>

        {/* Моб.телефон отримувача */}
        <div className={css.labelPosition}>
          <label
            className={css.labelName}
            htmlFor={`${fieldId}-recipientMobile`}
          >
            {t("recipients.phone")}
            <input
              type="tel"
              {...register("recipientMobile")}
              className={css.inputStyle}
              placeholder="+_(___) ___-__-__"
              id={`${fieldId}-recipientMobile`}
              autoComplete="one-time-code"
            />
          </label>
        </div>
      </div>

      <div className={css.cityContainer}>
        {/* Місто отримувача */}
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor={`${fieldId}-recipientCity`}>
            {t("recipients.city")}
            <input
              className={css.inputStyle}
              type="text"
              {...register("recipientCity")}
              placeholder={t("recipients.inputCity")}
              id={`${fieldId}-recipientCity`}
              autoComplete="one-time-code"
            />
          </label>
        </div>
        {/* Адрес отримувача */}
        <div className={css.labelPosition}>
          <label
            className={css.labelName}
            htmlFor={`${fieldId}-recipientAddress`}
          >
            {t("recipients.street")}
            <input
              type="text"
              className={css.inputStyle}
              {...register("recipientAddress")}
              placeholder={t("recipients.inputStreet")}
              id={`${fieldId}-recipientAddress`}
              autoComplete="one-time-code"
            />
          </label>
        </div>
      </div>
      <div>
        {/* Примітка отримувача */}
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor={`${fieldId}-recipientNote`}>
            {t("recipients.note")}
            <textarea
              {...register("recipientNote")}
              placeholder={t("recipients.inputNote")}
              className={css.noteStyle}
              id={`${fieldId}-recipientNote`}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
