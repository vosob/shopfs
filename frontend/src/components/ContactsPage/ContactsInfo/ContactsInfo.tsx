import { MapInfo } from "../MapInfo/MapInfo";
import css from "./ContactsInfo.module.css";

const datas = [
  {
    id: 1,
    title: "Моб.телефон",
    text1: "+ 380 98 3285 882",
    text2: "+380 63 7210 966",
  },
  {
    id: 2,
    title: "Моб.телефон",
    text1: "+ 380 98 3285 882",
    text2: "+380 63 7210 966",
  },
  {
    id: 3,
    title: "Електрона пошта",
    text1: "flawka_vl@gmail.com",
    text2: "vladosobski@gmail.com",
  },
  {
    id: 4,
    title: "Адрес",
    text1: "м. Рівне",
    text2: "вул.Кулика і Гудачека 28",
  },
  {
    id: 5,
    title: "Режим роботи",
    text1: "Пн-Сб з 8:00 до 22:00",
    text2: "Неділя — вихідний",
  },
];

export const ContactsInfo = () => {
  return (
    <div className={`${css.infoContainer} ${"container"}`}>
      <ul className={css.navContainer}>
        {datas.map((data) => (
          <li key={data.id}>
            <h3 className={css.titleStyle}>{data.title}</h3>
            <p className={css.textStyle}>{data.text1}</p>
            <p className={css.textStyle}>{data.text2}</p>
          </li>
        ))}
      </ul>
      <MapInfo />
    </div>
  );
};
