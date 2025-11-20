import { useTranslation } from "react-i18next";
import css from "./DeliveryInfo.module.css";

export const DeliveryInfo = () => {
  const { t } = useTranslation("delivery");

  return (
    <section className={`${css.deliveryInfo} ${"container"}`}>
      <h2 className={css.deliveryTitle}>🌸 {t("deliveryTitle.title")} 🌸</h2>

      <p className={css.deliveryText}>{t("deliveryTitle.handcrafted")}</p>

      <p className={css.deliveryText}>{t("deliveryTitle.substitutions")}</p>

      <p className={css.deliveryText}>{t("deliveryTitle.deliveryTime")}</p>

      <p className={css.deliveryText}>💐 {t("deliveryTitle.recommendation")}</p>

      <p className={css.deliveryText}>{t("deliveryTitle.moreInfo")}</p>

      <div className={css.deliveryBlock}>
        <h3 className={css.deliverySubtitle}>🚚 {t("deliveryInfo.title")}</h3>
        <ul className={css.deliveryList}>
          <li>{t("deliveryInfo.inUk")}</li>
          <li>{t("deliveryInfo.inOther")}</li>
        </ul>
      </div>
    </section>
  );
};
