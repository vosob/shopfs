import { Link } from "react-router";
import { Bouquet } from "../../types/typesItem";
import css from "./BouquetItem.module.css";

interface BouquetItemProps {
  data: Bouquet;
}

export const BouquetItem = ({ data }: BouquetItemProps) => {
  const { name, price, images, size, id } = data;

  return (
    <Link to={`/bouquet/${id}`} className={css.itemContainer}>
      <img className={css.flowerPhoto} src={images[1].url} alt={name} />
      <h3 className={css.textBouquet}>{name}</h3>
      <p className={css.priceBouquet}>
        <span className={css.priceSpan}>Ціна від: &nbsp; </span>
        <span className={css.positionPrice}> {price} грн.</span>
      </p>
      <p className={css.size}>Розмір цього букету {size} см</p>
      <button className={css.bouquetBtn}>Переглянути</button>
    </Link>
  );
};
