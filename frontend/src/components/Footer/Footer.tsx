import { useTranslation } from "react-i18next";
import css from "./Footer.module.css";

export const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className={css.footer}>
      <div className={`${css.footerContainer} ${"container"}`}>
        <div className={css.footerColumn}>
          <h3 className={css.footerTitle}>{t("contactInfo.title")}</h3>
          <p>{t("contactInfo.street")}</p>
          <p>+380 98 328 5882</p>
          <p>+380 63 721 0966</p>
          <p>{t("contactInfo.workTime")}</p>
        </div>

        <div className={css.footerColumn}>
          <h3 className={css.footerTitle}>{t("forUsers.title")}</h3>
          <ul className={css.footerLinks}>
            <li>{t("forUsers.orders")}</li>
            <li>{t("forUsers.question")}</li>
            <li>{t("forUsers.changeOrder")}</li>
            <li>{t("forUsers.payOrder")}</li>
          </ul>
        </div>

        <div className={css.footerColumn}>
          <h3 className={css.footerTitle}>{t("questionCall.title")}</h3>
          <form className={css.footerForm}>
            <div className={css.footerInputs}>
              <input type="text" placeholder={t("questionCall.name")} />
              <input type="text" placeholder={t("questionCall.number")} />
            </div>
            <textarea placeholder={t("questionCall.message")}></textarea>
            <button type="submit">{t("questionCall.btn")}</button>
          </form>
        </div>
      </div>

      <p className={css.footerCopy}>{t("questionCall.endPoint")}</p>
    </footer>
  );
};
