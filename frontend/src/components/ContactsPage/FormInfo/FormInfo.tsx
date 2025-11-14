import css from "./FormInfo.module.css";

export const FormInfo = () => {
  return (
    <div className={css.inputFormContainer}>
      <div className={css.textContainer}>
        <h3 className={css.titleStyle}>Залишились питання? Звяжіться з нами</h3>
        <form className={css.formContainer}>
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <label className={css.labelSize}>
                <input
                  className={css.inputSize}
                  type="text"
                  placeholder="Ім'я та фамілія"
                  name="text"
                />
              </label>

              <label className={css.labelSize}>
                <input
                  className={css.inputSize}
                  type="email"
                  placeholder="Електрона пошта"
                  name="email"
                />
              </label>
              <label className={css.labelSize}>
                <span className={css.spanName}></span>
                <input
                  className={css.inputSize}
                  type="tel"
                  placeholder="Мобільний номер"
                  name="tel"
                />
              </label>
            </div>
            <label className={css.areaContainer}>
              <textarea
                className={css.areaStyle}
                placeholder="Ваше питання"
              ></textarea>
            </label>
          </div>
          <button className={css.buttonStyle} type="submit">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};
