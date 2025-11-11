import { useState } from "react";
import css from "./Auth.module.css";
import toast from "react-hot-toast";
import { useAuth } from "../../context/contextAuth";
import { useNavigate } from "react-router";
import {
  LoginForm,
  OrderFormValuesLogin,
} from "../../components/LoginForm/LoginForm";
import { FormikHelpers } from "formik";
import { loginUser, registerUser } from "../../services/users";
import {
  OrderFormValuesRegister,
  RegisterForm,
} from "../../components/RegisterForm/RegisterForm";
import { AuthFormBtn } from "../../components/AuthFormBtn/AuthFormBtn";

export type ActivePathType = "login" | "register";

export const Auth = () => {
  const [activePath, setActivePath] = useState<ActivePathType>("login");
  const { createToken } = useAuth();
  const navigate = useNavigate();

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
        <AuthFormBtn activePath={activePath} setActivePath={setActivePath} />
        {activePath === "login" && (
          <LoginForm handleSubmitLogin={handleSubmitLogin} />
        )}
        {activePath === "register" && (
          <RegisterForm handleSubmitRegister={handleSubmitRegister} />
        )}
      </div>
    </div>
  );
};
