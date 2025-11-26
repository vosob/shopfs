import { useTranslation } from "react-i18next";
import { AcardionInfo } from "../../components/AcardionInfo/AcardionInfo";
import { InputForm } from "../../components/AcardionInfo/InputForm";
import css from "./Info.module.css";

export const Info = () => {
  const { t } = useTranslation("acardionInputForm");
  return (
    <div className={`${css.infoContainer} ${"container"}`}>
      <h2 className={css.titleStyle}>{t("acardion")}</h2>
      <AcardionInfo />
      <InputForm />
    </div>
  );
};
