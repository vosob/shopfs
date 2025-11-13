import css from "./InputForm.module.css";

export const InputForm = () => {
  return (
    <div className={css.inputFormContainer}>
      <form className={css.formContainer}>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <label className={css.labelSize}>
              <span className={css.spanName}>Ім'я та фамілія</span>
              <input
                className={css.inputSize}
                type="text"
                placeholder="Владислав Особський"
                name="text"
              />
            </label>

            <label className={css.labelSize}>
              <span className={css.spanName}>Електрона пошта</span>
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
              placeholder="Ваш коментар"
            ></textarea>
          </label>
        </div>
        <button className={css.buttonStyle} type="submit">
          Відправити
        </button>
      </form>
    </div>
  );
};
