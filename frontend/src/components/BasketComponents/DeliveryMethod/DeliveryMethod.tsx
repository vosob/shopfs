import { useState } from "react";
import css from "./DeliveryMethod.module.css";

export const DeliveryMethod = () => {
  const [method, setMethod] = useState("delivery");

  return (
    <div className={css.container}>
      <h3>Спосіб доставки</h3>
      <div className={css.textPosition}>
        <label
          className={method === "delivery" ? css.activeRadio : css.radioOption}
        >
          <div>
            <input
              type="radio"
              id="delivery"
              name="deliveryMethod"
              value="delivery"
              checked={method === "delivery"}
              onChange={(e) => setMethod(e.target.value)}
              className={css.hiddenRadio}
            />
            <span className={css.customRadio}></span>
            <span>Доставка по місту</span>
          </div>
        </label>

        <label
          className={method === "self" ? css.activeRadio : css.radioOption}
        >
          <div>
            <input
              type="radio"
              id="self"
              name="deliveryMethod"
              value="self"
              checked={method === "self"}
              onChange={(e) => setMethod(e.target.value)}
              className={css.hiddenRadio}
            />
            <span className={css.customRadio}></span>
            <span>
              Самовивіз
              <span>м. Рівне, вул. Кулика і Гудачека 28</span>
            </span>
          </div>
        </label>
      </div>
    </div>
  );
};
