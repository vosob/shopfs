import { Link } from "react-router";
import { Bouquet } from "../../types/typesItem";
import css from "./BouquetItem.module.css";
import { useTranslation } from "react-i18next";
import { getTranslatedField } from "../../Utils/getTranslatedField";

interface BouquetItemProps {
  data: Bouquet;
}

export const BouquetItem = ({ data }: BouquetItemProps) => {
  const { t } = useTranslation("bouquetItemPage");
  const { price, images, size, id } = data;
  const { i18n } = useTranslation("");
  const lang = i18n.language;

  const name = getTranslatedField(data, "name", lang);

  return (
    <Link to={`/bouquet/${id}`} className={css.itemContainer}>
      <img className={css.flowerPhoto} src={images[1].url} alt={name} />
      <h3 className={css.textBouquet}>{name}</h3>
      <p className={css.priceBouquet}>
        <span className={css.priceSpan}>
          {t("bouquetItemPage.priceFrom")} &nbsp;{" "}
        </span>
        <span className={css.positionPrice}>
          {" "}
          {price} {t("bouquetItemPage.price")}
        </span>
      </p>
      <p className={css.size}>
        {t("bouquetItemPage.bouquetSize")} {size}{" "}
        {t("bouquetItemPage.centimeters")}
      </p>
      <button className={css.bouquetBtn}>{t("bouquetItemPage.btn")}</button>
    </Link>
  );
};
