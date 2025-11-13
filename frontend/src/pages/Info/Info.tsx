import { AcardionInfo } from "../../components/AcardionInfo/AcardionInfo";
import { InputForm } from "../../components/AcardionInfo/InputForm";
import css from "./info.module.css";

export const Info = () => {
  return (
    <div className={css.infoContainer}>
      <h2 className={css.titleStyle}>Відповіді на популярні питання </h2>
      <AcardionInfo />
      <InputForm />
    </div>
  );
};
