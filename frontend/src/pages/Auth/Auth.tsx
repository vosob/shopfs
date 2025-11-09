import { useId, useState } from "react";
import css from "./Auth.module.css";
import { Field, Formik, Form as FormikForm, FormikHelpers } from "formik";

type ActivePathType = "login" | "register";

interface OrderFormValuesRegister {
  regName: string;
  regMail: string;
  regTel: string;
  regPass: string;
}

interface OrderFormValuesLogin {
  logPhone: string;
  logPass: string;
}

export const Auth = () => {
  const [activePath, setActivePath] = useState<ActivePathType>("login");
  const fieldId = useId();

  const initialValuesRegister: OrderFormValuesRegister = {
    regName: "",
    regMail: "",
    regTel: "",
    regPass: "",
  };

  const initialValuesLogin: OrderFormValuesLogin = {
    logPhone: "",
    logPass: "",
  };

  const handleSubmitRegister = (
    values: OrderFormValuesRegister,
    actions: FormikHelpers<OrderFormValuesRegister>
  ) => {
    console.log("Register data:", values);
    actions.resetForm();
  };

  const handleSubmitLogin = (
    values: OrderFormValuesLogin,
    actions: FormikHelpers<OrderFormValuesLogin>
  ) => {
    console.log("Login data:", values);
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <div className={css.card}>
        <div className={css.tabs}>
          <button
            className={`${css.tab} ${activePath === "login" ? css.active : ""}`}
            onClick={() => setActivePath("login")}
            type="button"
          >
            Вхід
          </button>
          <button
            className={`${css.tab} ${
              activePath === "register" ? css.active : ""
            }`}
            onClick={() => setActivePath("register")}
            type="button"
          >
            Реєстрація
          </button>
        </div>

        {activePath === "login" && (
          <Formik
            initialValues={initialValuesLogin}
            onSubmit={handleSubmitLogin}
          >
            <FormikForm className={css.form}>
              <label htmlFor={`${fieldId}-logPhone`}>
                Телефон:
                <Field
                  id={`${fieldId}-logPhone`}
                  type="tel"
                  name="logPhone"
                  placeholder="+380 __ ___ __ __"
                  className={css.input}
                />
              </label>

              <label htmlFor={`${fieldId}-logPass`}>
                Пароль:
                <Field
                  id={`${fieldId}-logPass`}
                  type="password"
                  name="logPass"
                  placeholder="Введіть пароль"
                  className={css.input}
                />
              </label>

              <button type="submit" className={css.submitBtn}>
                Увійти
              </button>
            </FormikForm>
          </Formik>
        )}

        {activePath === "register" && (
          <Formik
            initialValues={initialValuesRegister}
            onSubmit={handleSubmitRegister}
          >
            <FormikForm className={css.form}>
              <label htmlFor={`${fieldId}-regName`}>
                Ім’я та прізвище:
                <Field
                  id={`${fieldId}-regName`}
                  type="text"
                  name="regName"
                  placeholder="Введіть ім’я та прізвище"
                  className={css.input}
                />
              </label>

              <label htmlFor={`${fieldId}-regMail`}>
                Пошта:
                <Field
                  id={`${fieldId}-regMail`}
                  type="email"
                  name="regMail"
                  placeholder="Введіть пошту"
                  className={css.input}
                />
              </label>

              <label htmlFor={`${fieldId}-regTel`}>
                Телефон:
                <Field
                  id={`${fieldId}-regTel`}
                  type="tel"
                  name="regTel"
                  placeholder="+380 __ ___ __ __"
                  className={css.input}
                />
              </label>

              <label htmlFor={`${fieldId}-regPass`}>
                Пароль:
                <Field
                  id={`${fieldId}-regPass`}
                  type="password"
                  name="regPass"
                  placeholder="Введіть пароль"
                  className={css.input}
                />
              </label>

              <button type="submit" className={css.submitBtn}>
                Зареєструватися
              </button>
            </FormikForm>
          </Formik>
        )}
      </div>
    </div>
  );
};
