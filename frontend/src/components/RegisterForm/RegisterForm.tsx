import css from "./RegisterForm.module.css";
import { useId } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { registerUser } from "../../services/users";
import { useNavigate } from "react-router";
import { ActivePathType } from "../../pages/Auth/Auth";

export interface OrderFormValuesRegister {
  email: string;
  name: string;
  phone: string;
  city: string;
  password: string;
}

interface Props {
  setActivePath: (str: ActivePathType) => void;
}

export const RegisterForm = ({ setActivePath }: Props) => {
  const { register, handleSubmit, reset } = useForm<OrderFormValuesRegister>();
  const fieldId = useId();
  const navigate = useNavigate();
  const onSubmit = async (data: OrderFormValuesRegister) => {
    try {
      await registerUser(data);

      toast.success("Successfully user register, now you need to login");
      setActivePath("login");
      navigate("/auth");
    } catch (error) {
      toast.error("Register usser error");
      console.log(error);
    } finally {
      reset();
    }
    console.log("Login data:", data);
  };
  // const registerForm = Yup.object().shape({
  //   name: Yup.string()
  //     .required("Поле обов'язкове")
  //     .min(2, "Ім'я повинен бути більше за 2 символи"),
  //   email: Yup.string()
  //     .required("Поле обов'язкове")
  //     .email("Не вірний формат пошти"),
  //   phone: Yup.string().required("Поле обов'язкове"),
  //   city: Yup.string().required("Поле обов'язкове"),
  //   password: Yup.string().required("Поле обов'язкове"),
  // });

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={`${fieldId}-name`}>
          Ім’я та прізвище:
          <input
            id={`${fieldId}-name`}
            type="text"
            {...register("name")}
            placeholder="Введіть ім’я та прізвище"
            className={css.input}
          />
        </label>

        <label htmlFor={`${fieldId}-email`}>
          Пошта:
          <input
            id={`${fieldId}-email`}
            type="email"
            {...register("email")}
            placeholder="Введіть пошту"
            className={css.input}
          />
        </label>

        <label htmlFor={`${fieldId}-phone`}>
          Телефон:
          <input
            id={`${fieldId}-phone`}
            type="tel"
            {...register("phone")}
            placeholder="+380 __ ___ __ __"
            className={css.input}
          />
        </label>

        <label htmlFor={`${fieldId}-city`}>
          Місто:
          <input
            id={`${fieldId}-city`}
            type="text"
            {...register("city")}
            placeholder="Введіть місто"
            className={css.input}
          />
        </label>

        <label htmlFor={`${fieldId}-password`}>
          Пароль:
          <input
            id={`${fieldId}-password`}
            type="password"
            {...register("password")}
            placeholder="Введіть пароль"
            className={css.input}
          />
        </label>

        <button type="submit" className={css.submitBtn}>
          Зареєструватися
        </button>
      </form>
    </div>
  );
};
