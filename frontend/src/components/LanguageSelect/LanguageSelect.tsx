import i18n from "../../Utils/i18n";

import css from "./LanguageSelect.module.css";

export const LanguageSelect = () => {
  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div>
      <select
        className={css.select}
        onChange={(e) => handleChangeLanguage(e.target.value)}
      >
        <option className={css.option} selected value="ua">
          UA
        </option>

        <option className={css.option} value="en">
          EN
        </option>
      </select>
    </div>
  );
};
