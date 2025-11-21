import { useId } from "react";
import css from "./PayMethod.module.css";
import { UseFormRegister } from "react-hook-form";

import { useTranslation } from "react-i18next";
import { Inputs } from "../../../types/orders";

interface Props {
  register: UseFormRegister<Inputs>;
}

export const PayMethod = ({ register }: Props) => {
  const { t } = useTranslation("basket");
  const fieldId = useId();
  return (
    <div className={css.container}>
      <h3>{t("payMethod.pay")}</h3>
      <div className={css.textPosition}>
        {/* Оплата готівкою */}
        <label className="labelContainer" htmlFor={`${fieldId}-selfPickupCash`}>
          <input
            type="radio"
            value="Cash"
            {...register("selfPickupCash")}
            id={`${fieldId}-selfPickupCash`}
            className={css.hiddenRadio}
          />
          <span className="customRadio"></span>
          <span className={css.sStyle}>{t("payMethod.payCash")}</span>
        </label>

        {/* Оплата готівкою кур'єру */}
        <label
          className="labelContainer"
          htmlFor={`${fieldId}-selfPickupCash2`}
        >
          <input
            type="radio"
            value="CashCourier"
            {...register("selfPickupCash")}
            id={`${fieldId}-selfPickupCash2`}
            className={css.hiddenRadio}
          />
          <span className="customRadio"></span>
          <span className={css.sStyle}>{t("payMethod.payCourier")}</span>
        </label>

        {/* Онлайн оплата — Монобанк */}
        <label
          className="labelContainer"
          htmlFor={`${fieldId}-selfPickupCash3`}
        >
          <input
            type="radio"
            value="OnlinePayment"
            {...register("selfPickupCash")}
            id={`${fieldId}-selfPickupCash3`}
            className={css.hiddenRadio}
          />
          <span className="customRadio"></span>
          <span className={css.sStyle}>{t("payMethod.payCard")}</span>
        </label>
      </div>
    </div>
  );
};
