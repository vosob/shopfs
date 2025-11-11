import {
  ErrorMessage,
  Field,
  Formik,
  Form as FormikForm,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";

import css from "./RegisterForm.module.css";
import { useId } from "react";

export interface OrderFormValuesRegister {
  name: string;
  email: string;
  phone: string;
  city: string;
  password: string;
}

interface Props {
  handleSubmitRegister: (
    values: OrderFormValuesRegister,
    actions: FormikHelpers<OrderFormValuesRegister>
  ) => void | Promise<void>;
}

export const RegisterForm = ({ handleSubmitRegister }: Props) => {
  const fieldId = useId();

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

  return (
    <div>
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
            <ErrorMessage name="name" component="span" className={css.error} />
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
            <ErrorMessage name="email" component="span" className={css.error} />
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
            <ErrorMessage name="phone" component="span" className={css.error} />
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
            <ErrorMessage name="city" component="span" className={css.error} />
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
    </div>
  );
};
