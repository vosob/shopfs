import { Bouquet } from "../../types/typesItem";
import css from "./BouquetItem.module.css";

interface BouquetItemProps {
  data: Bouquet;
}

export const BouquetItem = ({ data }: BouquetItemProps) => {
  const { name, price, images, size } = data;

  return (
    <li className={css.itemContainer}>
      <img className={css.flowerPhoto} src={images[1].url} alt={name} />
      <h3 className={css.textBouquet}>{name}</h3>
      <p className={css.priceBouquet}>
        <span className={css.priceSpan}>Ціна від: </span>
        <span className={css.positionPrice}> {price} грн.</span>
      </p>
      <p className={css.size}>Розмір цього букету {size} см</p>
      <button className={css.bouquetBtn}>В корзину</button>
    </li>
  );
};
