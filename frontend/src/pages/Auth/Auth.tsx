import { useState } from "react";
import css from "./Auth.module.css";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { AuthFormBtn } from "../../components/AuthFormBtn/AuthFormBtn";

export type ActivePathType = "login" | "register";

export const Auth = () => {
  const [activePath, setActivePath] = useState<ActivePathType>("login");

  return (
    <div className={css.container}>
      <div className={css.card}>
        <AuthFormBtn activePath={activePath} setActivePath={setActivePath} />
        {activePath === "login" && <LoginForm />}
        {activePath === "register" && (
          <RegisterForm setActivePath={setActivePath} />
        )}
      </div>
    </div>
  );
};
