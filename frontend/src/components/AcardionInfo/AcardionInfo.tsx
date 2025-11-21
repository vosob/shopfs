import { useTranslation } from "react-i18next";
import { Acardion } from "./Acardion";

export interface AcardionText {
  a: string;
  b: string;
}

export const AcardionInfo = () => {
  const { t } = useTranslation("acardionInfo");

  const acardionText = t("acardionItems", {
    returnObjects: true,
  }) as AcardionText[];

  return <Acardion acardionText={acardionText} />;
};
