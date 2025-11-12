import { useId } from "react";
import css from "./DeliveryMethod.module.css";
import { Field, useFormikContext } from "formik";

// interface DeliveryMethodOrder {
//   deliveryMethod: string;
// }

// const initialValues: DeliveryMethodOrder = {
//   deliveryMethod: "",
// };

export const DeliveryMethod = () => {
  const { values, setFieldValue } = useFormikContext<{
    deliveryMethod: string;
  }>();
  const fieldId = useId();

  return (
    <div className={css.container}>
      <h3>Спосіб доставки</h3>
      <div className={css.textPosition}>
        <label
          className={
            values.deliveryMethod === "delivery"
              ? css.activeRadio
              : css.radioOption
          }
          htmlFor={`${fieldId}-delivery`}
        >
          <div>
            <Field
              type="radio"
              id={`${fieldId}-delivery`}
              name="deliveryMethod"
              value="delivery"
              checked={values.deliveryMethod === "delivery"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFieldValue("deliveryMethod", e.target.value)
              }
              className={css.hiddenRadio}
            />
            <span className={css.customRadio}></span>
            <span>Доставка по місту</span>
          </div>
        </label>

        <label
          className={
            values.deliveryMethod === "self" ? css.activeRadio : css.radioOption
          }
          htmlFor={`${fieldId}-self`}
        >
          <div>
            <Field
              type="radio"
              id={`${fieldId}-self`}
              name="deliveryMethod"
              value="self"
              checked={values.deliveryMethod === "self"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFieldValue("deliveryMethod", e.target.value)
              }
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
