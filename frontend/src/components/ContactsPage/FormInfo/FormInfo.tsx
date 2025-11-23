import { useTranslation } from "react-i18next";
import css from "./FormInfo.module.css";

export const FormInfo = () => {
  const { t } = useTranslation("formInfoQuestion");
  return (
    <div className={`${css.inputFormContainer} ${"container"}`}>
      <div className={css.textContainer}>
        <h3 className={`${css.titleStyle} ${"container"}`}>
          {t("formInfoQuestion.title")}
        </h3>
        <form className={css.formContainer}>
          <div className={css.containerInput} style={{ display: "flex", gap: "20px" }}>
            <div>
              <label className={css.labelSize}>
                <input
                  className={css.inputSize}
                  type="text"
                  placeholder={t("formInfoQuestion.name")}
                  name="text"
                />
              </label>

              <label className={css.labelSize}>
                <input
                  className={css.inputSize}
                  type="email"
                  placeholder={t("formInfoQuestion.mail")}
                  name="email"
                />
              </label>
              <label className={css.labelSize}>
                <span className={css.spanName}></span>
                <input
                  className={css.inputSize}
                  type="tel"
                  placeholder={t("formInfoQuestion.phone")}
                  name="tel"
                />
              </label>
            </div>
            <label className={css.areaContainer}>
              <textarea
                className={css.areaStyle}
                placeholder={t("formInfoQuestion.message")}
              ></textarea>
            </label>
          </div>
          <button className={css.buttonStyle} type="submit">
            {t("formInfoQuestion.button")}
          </button>
        </form>
      </div>
    </div>
  );
};
