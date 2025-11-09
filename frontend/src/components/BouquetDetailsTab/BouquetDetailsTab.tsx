import { FlowersList } from "../../types/typesItem";
import { IoCardOutline } from "react-icons/io5";
import { SlPresent } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import css from "./BouquetDetailsTab.module.css";

import { FiBox } from "react-icons/fi";

interface Props {
  flowers: FlowersList[];
  setActiveTab: (active: "composition" | "delivery") => void;
  activeTab: string;
}

export const BouquetDetailsTab = ({
  flowers,
  activeTab,
  setActiveTab,
}: Props) => {
  return (
    <div className={css.container}>
      <div className={css.activeTab}>
        <button
          className={activeTab === "composition" ? css.active : ""}
          onClick={() => setActiveTab("composition")}
        >
          Склад букету
        </button>

        <button
          className={activeTab === "delivery" ? css.active : ""}
          onClick={() => setActiveTab("delivery")}
        >
          Доставка та оплата
        </button>
      </div>

      {activeTab === "composition" && (
        <ul className={css.flowersList}>
          {flowers.map((flower) => (
            <li key={flower.flower.id}>
              {flower.flower.name} - {flower.quantity} шт.
            </li>
          ))}
        </ul>
      )}

      {activeTab === "delivery" && (
        <div className={css.tabContent}>
          <ul className={css.deliveryList}>
            <li className={css.deliveryItem}>
              <FiBox /> Доставка по Україні: через Нову Пошту або Укрпошту.
            </li>
            <li className={css.deliveryItem}>
              <IoCardOutline /> Оплата: карткою онлайн, або післяплатою при
              отриманні.
            </li>
            <li className={css.deliveryItem}>
              <FaRegClock /> Час доставки: з 9:00 до 20:00
            </li>
            <li className={css.deliveryItem}>
              <SlPresent /> Подарункова упаковка: доступна за додаткову плату 50
              грн.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
