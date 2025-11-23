import { useTranslation } from "react-i18next";
import css from "./InputForm.module.css";

export const InputForm = () => {
  const { t } = useTranslation("acardionInputForm");
  return (
    <div className={css.inputFormContainer}>
      <form className={css.formContainer}>
        <div
          className={css.inputContainer}
          style={{ display: "flex", gap: "20px" }}
        >
          <div className={css.labelContainer}>
            <label className={css.labelSize}>
              <span className={css.spanName}>
                {t("acardionInputForm.name")}
              </span>
              <input
                className={css.inputSize}
                type="text"
                placeholder={t("acardionInputForm.inputName")}
                name="text"
              />
            </label>

            <label className={css.labelSize}>
              <span className={css.spanName}>
                {t("acardionInputForm.mail")}
              </span>
              <input
                className={css.inputSize}
                type="email"
                placeholder="example@mail.com"
                name="email"
              />
            </label>
          </div>
          <label className={css.areaContainer}>
            <textarea
              className={css.areaStyle}
              placeholder={t("acardionInputForm.comment")}
            ></textarea>
          </label>
        </div>
        <button className={css.buttonStyle} type="submit">
          {t("acardionInputForm.button")}
        </button>
      </form>
    </div>
  );
};
