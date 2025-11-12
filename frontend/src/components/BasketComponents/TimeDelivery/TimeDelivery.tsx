import { useState } from "react";
import css from "./TimeDelivery.module.css";
import { formatted, formattedTime } from "../../../Utils/TodayDate";

export const TimeDelivery = () => {
  const [method, setMethod] = useState("time");

  return (
    <div className={css.container}>
      <h3>Дата і час</h3>
      <div className={css.dateContainer}>
        <label>Дата</label>
        <input
          type="date"
          className={css.calendar}
          defaultValue={String(formatted)}
        />
      </div>

      <div className={css.textPosition}>
        <label
          className={method === "time" ? css.activeRadio : css.radioOption}
        >
          <input
            type="radio"
            id="time"
            name="timeMethod"
            value="time"
            checked={method === "time"}
            onChange={(e) => setMethod(e.target.value)}
            className={css.hiddenRadio}
          />
          <span className={css.customRadio}></span>
          <span>Вкажіть проміжок часу для отримання замовлення</span>
          <input
            type="time"
            className={css.timeDisplay}
            defaultValue={formattedTime}
          />
        </label>
        <label
          className={method === "call" ? css.activeRadio : css.radioOption}
        >
          <input
            type="radio"
            id="call"
            name="timeMethod"
            value="call"
            checked={method === "call"}
            onChange={(e) => setMethod(e.target.value)}
            className={css.hiddenRadio}
          />
          <span className={css.customRadio}></span>

          <span className={css.labelContent}>
            Подзвонити отримувачу для уточнення часу і адреси.
          </span>
        </label>

        <div className={css.checkboxOption}>
          <input
            type="checkbox"
            id="noFlowers"
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
