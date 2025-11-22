import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

import css from "./Footer.module.css";

export const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <footer className={css.footer}>
      <div className={`${"container"}`}>
        <div className={css.footerContacts}>
          <div className={css.infoContainer}>
            <div className={css.contactInfo}>
              <h3 className={css.footerTitle}>{t("contactInfo.title")}</h3>

              <ul className={css.footerItems}>
                <li className={css.footerItemContainer}>
                  <FaLocationDot />
                  <p>{t("contactInfo.street")}</p>
                </li>

                <li className={css.footerItemContainer}>
                  <FaPhone />
                  <p>+38 (098) 123-45-67</p>
                </li>

                <li className={css.footerItemContainer}>
                  <FaPhone />
                  <p>+38 (093) 321-45-67</p>
                </li>

                <li className={css.footerItemContainer}>
                  <FaClock />
                  <p>{t("contactInfo.workTime")}</p>
                </li>
              </ul>
            </div>

            <div className={css.footerForUsers}>
              <h3 className={css.footerTitle}>{t("forUsers.title")}</h3>
              <ul className={css.footerItems}>
                <li>{t("forUsers.orders")}</li>
                <li>{t("forUsers.question")}</li>
                <li>{t("forUsers.changeOrder")}</li>
                <li>{t("forUsers.payOrder")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className={css.footerTitle}>{t("questionCall.title")}</h3>
          <form className={css.footerForm}>
            <input type="text" placeholder={t("questionCall.name")} />
            <input type="text" placeholder={t("questionCall.number")} />

            <textarea placeholder={t("questionCall.message")}></textarea>
            <button type="submit">{t("questionCall.btn")}</button>
          </form>
        </div>
      </div>

      <p className={css.footerCopy}>{t("questionCall.endPoint")}</p>
    </footer>
  );
};
