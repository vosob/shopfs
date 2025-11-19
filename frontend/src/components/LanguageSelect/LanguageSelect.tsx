import i18n from "../../Utils/i18n";

import css from "./LanguageSelect.module.css";

export const LanguageSelect = () => {
  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className={css.LanguageSelectContainer}>
      <button
        className={`${css.btn} ${i18n.language === "uk" ? css.active : ""}`}
        onClick={() => handleChangeLanguage("uk")}
      >
        UA
      </button>
      <button
        className={`${css.btn} ${i18n.language === "en" ? css.active : ""}`}
        onClick={() => handleChangeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
};
