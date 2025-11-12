import { useState } from "react";
import css from "./Recipient.module.css";

export const Recipient = () => {
  const [method, setMethod] = useState("recipient");
  return (
    <div className={css.container}>
      <h3>Отримувач</h3>

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
          <span className={css.recipientOrder}>Я отримувач</span>
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
          <span className={css.labelContent}>Отримувач інша людина</span>
        </label>
      </div>
      <div className={css.nameAndMobile}>
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor="text">
            Ім'я та фамілія
          </label>
          <input
            className={css.inputStyle}
            type="text"
            placeholder="Введіть ваше ім'я"
          />
        </div>
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor="">
            Моб.телефон
          </label>
          <input
            className={css.inputStyle}
            type="tel"
            placeholder="+_(___) ___-__-__"
          />
        </div>
      </div>
      <div className={css.cityContainer}>
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor="text">
            Місто
          </label>
          <input className={css.inputStyle} type="text" placeholder="Рівне" />
        </div>
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor="">
            Адрес
          </label>
          <input
            className={css.inputStyle}
            type="text"
            placeholder="м.Рівне, вул. Макарова 28"
          />
        </div>
      </div>
      <div>
        <div className={css.labelPosition}>
          <label className={css.labelName}>Примітка</label>
          <textarea className={css.noteStyle} />
        </div>
      </div>
    </div>
  );
};
