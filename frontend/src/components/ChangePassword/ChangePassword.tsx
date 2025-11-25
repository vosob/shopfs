import { useTranslation } from "react-i18next";
import css from "./ChangePassword.module.css";

export const ChangePassword = () => {
  const { t } = useTranslation("profilePassword");
  return (
    <div className={css.changeContainer}>
      <h2 className={css.title}>{t("passwordTitle")}</h2>
      <div className={css.passwordContainer}>
        <label htmlFor="" className={css.labelForm}>
          <p className={css.passwordName}>{t("passwordCurrent")}</p>
          <input type="text" className={css.inputForm} />
        </label>
        <label htmlFor="" className={css.labelForm}>
          <p className={css.passwordName}>{t("passwordNew")}</p>
          <input type="password" className={css.inputForm} />
        </label>

        <label htmlFor="" className={css.labelForm}>
          <p className={css.passwordName}>{t("passwordAgainNew")}</p>
          <input type="password" className={css.inputForm} />
        </label>
        <div className={css.btnContainer}>
          <button type="submit" className={css.btnOne}>
            <p className={css.nameOneBtn}>{t("passwordBtn1")}</p>
          </button>
          <button type="submit" className={css.btnTwo}>
            <p className={css.nameTwoBtn}>{t("passwordBtn2")}</p>
          </button>
        </div>
      </div>
    </div>
  );
};
