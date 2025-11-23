// import { Discount } from "../../components/Discount/Discount";
import { useTranslation } from "react-i18next";
import { Discount } from "../../components/Discount/Discount";
import css from "./DiscountPage.module.css";

interface Discount {
  a: string;
}

export const DiscountPage = () => {
  const { t } = useTranslation("discount");
  const discountText = t("discountItems", {
    returnObjects: true,
  }) as Discount[];
  console.log(discountText);
  return (
    <div>
      <h2 className={css.discoutTitle}>{t("title")}</h2>
      <p className={css.textNote}>{t("note")}</p>
      <ul className={css.discountList}>
        {discountText.map((discount) => (
          <li>{discount.a}</li>
        ))}
      </ul>
      <Discount />
    </div>
  );
};
