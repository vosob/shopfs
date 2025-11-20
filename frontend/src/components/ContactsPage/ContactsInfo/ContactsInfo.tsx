import { useTranslation } from "react-i18next";
import { MapInfo } from "../MapInfo/MapInfo";
import css from "./ContactsInfo.module.css";

export const ContactsInfo = () => {
  const { t } = useTranslation("contact");

  const datas = [
    {
      id: 1,
      title: "contact.phone.title",
      text1: "+ 380 98 3285 882",
      text2: "+380 63 7210 966",
    },
    {
      id: 2,
      title: "contact.social.title",
      text1: "telegram ",
      text2: "instagram",
    },
    {
      id: 3,
      title: "contact.mail.title",
      text1: "flawka_vl@gmail.com",
      text2: "vladosobski@gmail.com",
    },
    {
      id: 4,
      title: "contact.adress.title",
      text1: "contact.adress.city",
      text2: "contact.adress.street",
    },
    {
      id: 5,
      title: "contact.workTime.title",
      text1: "contact.workTime.workData",
      text2: "contact.workTime.offDuty",
    },
  ];

  return (
    <div className={`${css.infoContainer} container`}>
      <ul className={css.navContainer}>
        {datas.map((data) => (
          <li key={data.id}>
            <h3 className={css.titleStyle}>{t(data.title)}</h3>
            <p className={css.textStyle}>{t(data.text1)}</p>
            <p className={css.textStyle}>{t(data.text2)}</p>
          </li>
        ))}
      </ul>
      <MapInfo />
    </div>
  );
};
