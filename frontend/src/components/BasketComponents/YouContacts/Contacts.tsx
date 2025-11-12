import css from "./Contacts.module.css";

export const YouContacts = () => {
  return (
    <div className={css.container}>
      <h3>Ваші котакти</h3>

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
        <div className={css.labelPosition}>
          <label className={css.labelName} htmlFor="text">
            Місто
          </label>
          <input className={css.inputStyle} type="text" placeholder="Рівне" />
        </div>
      </div>
    </div>
  );
};
