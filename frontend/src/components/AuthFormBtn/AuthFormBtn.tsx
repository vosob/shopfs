import { ActivePathType } from "../../pages/Auth/Auth";
import css from "./AuthFormBtn.module.css";

interface Props {
  activePath: string;
  setActivePath: (pass: ActivePathType) => void;
}

export const AuthFormBtn = ({ activePath, setActivePath }: Props) => {
  return (
    <div>
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
    </div>
  );
};
