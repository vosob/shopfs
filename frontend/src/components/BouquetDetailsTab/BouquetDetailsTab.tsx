import { FlowersList } from "../../types/typesItem";
import { IoCardOutline } from "react-icons/io5";
import { SlPresent } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import css from "./BouquetDetailsTab.module.css";

import { FiBox } from "react-icons/fi";
import { getTranslatedField } from "../../Utils/getTranslatedField";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { t } = useTranslation("bouquetById");

  return (
    <div className={css.container}>
      <div className={css.activeTab}>
        <button
          className={activeTab === "composition" ? css.active : ""}
          onClick={() => setActiveTab("composition")}
        >
          {t("bouquetDetail.composition")}
        </button>

        <button
          className={activeTab === "delivery" ? css.active : ""}
          onClick={() => setActiveTab("delivery")}
        >
          {t("bouquetDetail.delivery")}
        </button>
      </div>

      {activeTab === "composition" && (
        <ul className={css.flowersList}>
          {flowers.map((flower) => {
            const name = getTranslatedField(flower.flower, "name", lang);

            return (
              <li key={flower.flower.id}>
                {name} - {flower.quantity} {t("bouquetDetail.number")}
              </li>
            );
          })}
        </ul>
      )}

      {activeTab === "delivery" && (
        <div className={css.tabContent}>
          <ul className={css.deliveryList}>
            <li className={css.deliveryItem}>
              <FiBox /> {t("bouquetDetail.deliveryUk")}
            </li>
            <li className={css.deliveryItem}>
              <IoCardOutline /> {t("bouquetDetail.pay")}
            </li>
            <li className={css.deliveryItem}>
              <FaRegClock /> {t("bouquetDetail.time")}
            </li>
            <li className={css.deliveryItem}>
              <SlPresent /> {t("bouquetDetail.present")}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
