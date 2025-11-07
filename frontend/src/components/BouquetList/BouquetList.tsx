import { Bouquet } from "../../types/typesItem";
import { BouquetItem } from "../BouquetItem/BouquetItem";
import css from "./BouquetList.module.css";

interface BouquetListProps {
  data: Bouquet[];
}

export const BouquetList = ({ data }: BouquetListProps) => {
  return (
    <ul className={css.listContainer}>
      {data.map((oneBouquet) => (
        <BouquetItem key={oneBouquet.id} data={oneBouquet} />
      ))}
    </ul>
  );
};
