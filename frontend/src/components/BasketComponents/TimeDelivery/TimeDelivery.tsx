import css from "./TimeDelivery.module.css";
import { formatted } from "../../../Utils/TodayDate";
import { Field, useFormikContext } from "formik";
import { useId } from "react";

export const TimeDelivery = () => {
  const { values, setFieldValue } = useFormikContext<{
    timeMethod: string;
    deliveryDate: string;
    deliveryTime: string;
    incognito: boolean;
  }>();
  const fieldId = useId();

  return (
    <div className={css.container}>
      <h3>Дата і час</h3>
      <div className={css.dateContainer}>
        <label>Дата</label>
        <Field
          type="date"
          className={css.calendar}
          defaultValue={String(formatted)}
          checked={values.timeMethod === "time"}
        />
      </div>

      <div className={css.textPosition}>
        <label
          className={
            values.timeMethod === "time" ? css.activeRadio : css.radioOption
          }
          htmlFor={`${fieldId}-time`}
        >
          <Field
            type="radio"
            id={`${fieldId}-time`}
            name="timeMethod"
            value="time"
            checked={values.timeMethod === "time"}
            className={css.hiddenRadio}
          />
          <span className={css.customRadio}></span>
          <span>Вкажіть проміжок часу для отримання замовлення</span>
          <input
            type="time"
            className={css.timeDisplay}
            name="deliveryDate"
            value={values.deliveryDate}
            onChange={(e) => setFieldValue("deliveryDate", e.target.value)}
            min={String(formatted)}
          />
        </label>
        <label
          className={
            values.timeMethod === "call" ? css.activeRadio : css.radioOption
          }
          htmlFor={`${fieldId}-call`}
        >
          <Field
            type="radio"
            id={`${fieldId}-call`}
            name="timeMethod"
            value="call"
            checked={values.timeMethod === "call"}
            className={css.hiddenRadio}
          />
          <span className={css.customRadio}></span>

          <span className={css.labelContent}>
            Подзвонити отримувачу для уточнення часу і адреси.
          </span>
        </label>

        <div className={css.checkboxOption}>
          <Field
            type="checkbox"
            id="noFlowers"
            name="incognito"
            className={css.actualCheckbox}
          />
          <label htmlFor="noFlowers" className={css.checkboxLabel}>
            По телефону не говорити, що це квіти
          </label>
        </div>
      </div>
    </div>
  );
};
