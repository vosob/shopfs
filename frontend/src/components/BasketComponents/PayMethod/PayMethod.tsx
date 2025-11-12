import css from "./PayMethod.module.css";
import { useState } from "react";

export const PayMethod = () => {
  const [method, setMethod] = useState("pay");
  return (
    <div className={css.container}>
      <h3>Спосіб доставки</h3>
      <div className={css.textPosition}>
        <label
          className={method === "paySelf" ? css.activeRadio : css.radioOption}
        >
          <div>
            <input
              type="radio"
              id="paySelf"
              name="payMethod"
              value="paySelf"
              checked={method === "paySelf"}
              onChange={(e) => setMethod(e.target.value)}
              className={css.hiddenRadio}
            />
            <span className={css.customRadio}></span>
            <span>Оплата готівкою під час отримання (самовиклик)</span>
          </div>
        </label>

        <label
          className={
            method === "payCourier" ? css.activeRadio : css.radioOption
          }
        >
          <div>
            <input
              type="radio"
              id="payCourier"
              name="payMethod"
              value="payCourier"
              checked={method === "payCourier"}
              onChange={(e) => setMethod(e.target.value)}
              className={css.hiddenRadio}
            />
            <span className={css.customRadio}></span>
            <span>Оплата готівкою кур'єру (тільки, якщо одержувач — Ви)</span>
          </div>
        </label>

        <label
          className={method === "payOnline" ? css.activeRadio : css.radioOption}
        >
          <div>
            <input
              type="radio"
              id="payOnline"
              name="payMethod"
              value="payOnline"
              checked={method === "payOnline"}
              onChange={(e) => setMethod(e.target.value)}
              className={css.hiddenRadio}
            />
            <span className={css.customRadio}></span>
            <span>Онлайн оплата — Монобанк</span>
          </div>
        </label>
      </div>
    </div>
  );
};
