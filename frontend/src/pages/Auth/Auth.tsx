import { useId, useState } from "react";
import css from "./Auth.module.css";
import {
  ErrorMessage,
  Field,
  Formik,
  Form as FormikForm,
  FormikHelpers,
} from "formik";
import { registerUser, loginUser } from "../../services/users";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAuth } from "../../context/contextAuth";
import { useNavigate } from "react-router";

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
  const { createToken } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const loginForm = Yup.object().shape({
    email: Yup.string()
      .email("Не вірний формат пошти")
      .required("Ведіть ваші данні"),
    password: Yup.string()
      .required("Ведіть ваші данні")
      .min(4, "Пароль повинен бути більше за 4 символи"),
  });

  const registerForm = Yup.object().shape({
    name: Yup.string()
      .required("Поле обов'язкове")
      .min(2, "Ім'я повинен бути більше за 2 символи"),
    email: Yup.string()
      .required("Поле обов'язкове")
      .email("Не вірний формат пошти"),
    phone: Yup.string().required("Поле обов'язкове"),
    city: Yup.string().required("Поле обов'язкове"),
    password: Yup.string().required("Поле обов'язкове"),
  });

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
      const response = await loginUser(values);
      createToken(response.accessToken);
      navigate("/");
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
            validationSchema={loginForm}
            initialValues={initialValuesLogin}
            onSubmit={handleSubmitLogin}
          >
            <FormikForm className={css.form}>
              <label className={css.labelForm} htmlFor={`${fieldId}-email`}>
                Пошта:
                <Field
                  id={`${fieldId}-email`}
                  type="email"
                  name="email"
                  placeholder="Ваша почта"
                  className={css.input}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </label>

              <label htmlFor={`${fieldId}-password`}>
                Пароль:
                <div className={css.passwordWrapper}>
                  <Field
                    id={`${fieldId}-password`}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Введіть пароль"
                    className={css.input}
                  />
                  <button
                    type="button"
                    className={css.eyeBtn}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.error}
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
            validationSchema={registerForm}
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
                <ErrorMessage
                  name="name"
                  component="span"
                  className={css.error}
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
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
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
                <ErrorMessage
                  name="phone"
                  component="span"
                  className={css.error}
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
                <ErrorMessage
                  name="city"
                  component="span"
                  className={css.error}
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
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.error}
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
