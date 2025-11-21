import { useId } from "react";
import css from "./DeliveryMethod.module.css";
import { UseFormRegister } from "react-hook-form";

import { useTranslation } from "react-i18next";
import { Inputs } from "../../../types/orders";

interface Props {
  register: UseFormRegister<Inputs>;
}

export const DeliveryMethod = ({ register }: Props) => {
  const fieldId = useId();
  const { t } = useTranslation("basket");

  return (
    <div className={css.container}>
      <h3>{t("basketDeliveryMethod.deliveryMethod")}</h3>
      <div className={css.textPosition}>
        <label className={css.labelContainer} htmlFor={`${fieldId}-delivery`}>
          <input
            type="radio"
            {...register("deliveryMethod")}
            id={`${fieldId}-delivery`}
            value="deliveryInTheCity"
            className={css.hiddenRadio}
          />
          <span className={css.customRadio}></span>
          <span className={css.hStyle}>
            {t("basketDeliveryMethod.deliveryCity")}
          </span>
        </label>

        <label className={css.labelContainer} htmlFor={`${fieldId}-self`}>
          <input
            type="radio"
            id={`${fieldId}-self`}
            {...register("deliveryMethod")}
            value="pickup"
            className={css.hiddenRadio}
          />
          <span className={css.customRadio}></span>
          <span className={css.hStyle}>
            {t("basketDeliveryMethod.pickup")}
            <span>{t("basketDeliveryMethod.street")}</span>
          </span>
        </label>
      </div>
    </div>
  );
};
