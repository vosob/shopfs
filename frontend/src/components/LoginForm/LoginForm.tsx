import {
  ErrorMessage,
  Field,
  Formik,
  Form as FormikForm,
  FormikHelpers,
} from "formik";

import * as Yup from "yup";
import css from "./LoginForm.module.css";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useId, useState } from "react";

export interface OrderFormValuesLogin {
  email: string;
  password: string;
}

interface Props {
  handleSubmitLogin: (
    values: OrderFormValuesLogin,
    actions: FormikHelpers<OrderFormValuesLogin>
  ) => void | Promise<void>;
}

export const LoginForm = ({ handleSubmitLogin }: Props) => {
  const fieldId = useId();
  const [showPassword, setShowPassword] = useState(false);

  const initialValuesLogin: OrderFormValuesLogin = {
    email: "",
    password: "",
  };

  const loginForm = Yup.object().shape({
    email: Yup.string()
      .email("Не вірний формат пошти")
      .required("Ведіть ваші данні"),
    password: Yup.string()
      .required("Ведіть ваші данні")
      .min(4, "Пароль повинен бути більше за 4 символи"),
  });
  return (
    <div>
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
            <ErrorMessage name="email" component="span" className={css.error} />
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
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
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
    </div>
  );
};
