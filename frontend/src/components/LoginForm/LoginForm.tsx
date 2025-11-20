import css from "./LoginForm.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../services/users";
import { useAuth } from "../../context/contextAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export interface OrderFormValuesLogin {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<OrderFormValuesLogin>();
  const fieldId = useId();
  const { createToken } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation("login");
  const onSubmit = async (data: OrderFormValuesLogin) => {
    try {
      const response = await loginUser(data);
      createToken(response.accessToken);
      navigate("/");
      toast.success("Successfully user login!");
    } catch (error) {
      toast.error("Login usser error");
      console.log(error);
    } finally {
      console.log("qwe");
    }
    console.log("Login data:", data);
  };

  // const loginForm = Yup.object().shape({
  //   email: Yup.string()
  //     .email("Не вірний формат пошти")
  //     .required("Ведіть ваші данні"),
  //   password: Yup.string()
  //     .required("Ведіть ваші данні")
  //     .min(4, "Пароль повинен бути більше за 4 символи"),
  // });
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <label className={css.labelForm} htmlFor={`${fieldId}-email`}>
          {t("login.mailName")}
          <input
            id={`${fieldId}-email`}
            type="email"
            {...register("email")}
            placeholder={t("login.mailInput")}
            className={css.input}
          />
        </label>

        <label htmlFor={`${fieldId}-password`}>
          {t("login.password")}
          <div className={css.passwordWrapper}>
            <input
              id={`${fieldId}-password`}
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder={t("login.passwordInput")}
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
        </label>

        <button type="submit" className={css.submitBtn}>
          {t("login.btn")}
        </button>
      </form>
    </div>
  );
};
