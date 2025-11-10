import { useId, useState } from "react";
import css from "./Auth.module.css";
import { Field, Formik, Form as FormikForm, FormikHelpers } from "formik";
import { registerUser, loginUser } from "../../services/users";
import toast from "react-hot-toast";

type ActivePathType = "login" | "register";

interface OrderFormValuesRegister {
  name: string;
  email: string;
  phone: string;
  city: string;
  password: string;
}

interface OrderFormValuesLogin {
  email: string;
  password: string;
}

export const Auth = () => {
  const [activePath, setActivePath] = useState<ActivePathType>("login");
  const fieldId = useId();

  const initialValuesRegister: OrderFormValuesRegister = {
    name: "",
    email: "",
    phone: "",
    password: "",
    city: "",
  };

  const initialValuesLogin: OrderFormValuesLogin = {
    email: "",
    password: "",
  };

  const handleSubmitRegister = async (
    values: OrderFormValuesRegister,
    actions: FormikHelpers<OrderFormValuesRegister>
  ) => {
    console.log("Register data:", values);

    try {
      await registerUser(values);
      toast.success("Successfully user register!");
    } catch (error) {
      toast.error("Register usser error");
      console.log(error);
    } finally {
      actions.resetForm();
    }
  };

  const handleSubmitLogin = async (
    values: OrderFormValuesLogin,
    actions: FormikHelpers<OrderFormValuesLogin>
  ) => {
    console.log("Login data:", values);

    try {
      await loginUser(values);
      toast.success("Successfully user login!");
    } catch (error) {
      toast.error("Login usser error");
      console.log(error);
    } finally {
      actions.resetForm();
    }
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
              <label htmlFor={`${fieldId}-email`}>
                Пошта:
                <Field
                  id={`${fieldId}-email`}
                  type="email"
                  name="email"
                  placeholder="Ваша почта"
                  className={css.input}
                />
              </label>

              <label htmlFor={`${fieldId}-password`}>
                Пароль:
                <Field
                  id={`${fieldId}-password`}
                  type="password"
                  name="password"
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
              <label htmlFor={`${fieldId}-name`}>
                Ім’я та прізвище:
                <Field
                  id={`${fieldId}-name`}
                  type="text"
                  name="name"
                  placeholder="Введіть ім’я та прізвище"
                  className={css.input}
                />
              </label>

              <label htmlFor={`${fieldId}-email`}>
                Пошта:
                <Field
                  id={`${fieldId}-email`}
                  type="email"
                  name="email"
                  placeholder="Введіть пошту"
                  className={css.input}
                />
              </label>

              <label htmlFor={`${fieldId}-phone`}>
                Телефон:
                <Field
                  id={`${fieldId}-phone`}
                  type="tel"
                  name="phone"
                  placeholder="+380 __ ___ __ __"
                  className={css.input}
                />
              </label>

              <label htmlFor={`${fieldId}-city`}>
                Місто:
                <Field
                  id={`${fieldId}-city`}
                  type="text"
                  name="city"
                  placeholder="Введіть місто"
                  className={css.input}
                />
              </label>

              <label htmlFor={`${fieldId}-password`}>
                Пароль:
                <Field
                  id={`${fieldId}-password`}
                  type="password"
                  name="password"
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
