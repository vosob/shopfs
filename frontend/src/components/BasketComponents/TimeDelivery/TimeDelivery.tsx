import css from "./TimeDelivery.module.css";
import { formatted } from "../../../Utils/TodayDate";
import { useId } from "react";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../../../types/orders";
import { useTranslation } from "react-i18next";

interface Props {
  register: UseFormRegister<Inputs>;
}

export const TimeDelivery = ({ register }: Props) => {
  const { t } = useTranslation("basket");
  const fieldId = useId();

  return (
    <div className={css.container}>
      <h3>{t("timeDelivery.dateAndTime")}</h3>
      <div>
        {/* Вкажіть дату input: calendar */}
        <label className={css.dateContainer}>
          {t("timeDelivery.date")}
          <input
            type="date"
            {...register("deliveryDate")}
            className={css.calendar}
            // defaultValue={String(formatted)}
          />
        </label>
      </div>

      <div className={css.textPosition}>
        <div className={css.timeContainer}>
          {/* Вкажіть проміжок часу input */}
          <label className="labelContainer" htmlFor={`${fieldId}-time`}>
            <input
              type="radio"
              id={`${fieldId}-time`}
              {...register("deliveryTimeOrDate")}
              value="timeFrameForReceivingAnOrder"
              className="customRadio"
            />
            <span className="customRadio"></span>
            <span className={css.labelContent}>
              {t("timeDelivery.timeDelivery")}
            </span>
          </label>

          {/* input: time picker */}
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

        {/* Подзвонити отримувачу для уточнення input */}
        <label className="labelContainer" htmlFor={`${fieldId}-call`}>
          <input
            type="radio"
            id={`${fieldId}-call`}
            {...register("deliveryTimeOrDate")}
            value="scheduleCall"
            className={css.hiddenRadio}
          />
          <span className="customRadio"></span>
          <span className={css.labelContent}>
            {t("timeDelivery.callOrder")}
          </span>
        </label>

        {/* incognito input */}
        <div className={css.checkboxOption}>
          <label htmlFor={`${fieldId}-incognito`} className={css.checkboxLabel}>
            <input
              type="checkbox"
              id={`${fieldId}-incognito`}
              {...register("incognito")}
              className={css.actualCheckbox}
            />
            <p>
              {t("timeDelivery.span1")}
              <strong>{t("timeDelivery.span2")}</strong>
              {t("timeDelivery.span3")}
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};
