import { Bouquet } from "../../types/typesItem";
import { BouquetItem } from "../BouquetItem/BouquetItem";
import css from "./BouquetList.module.css";
import { BouquetListSkeleton } from "./BouquetListSkeleton";

interface BouquetListProps {
  data: Bouquet[];
  isLoading: boolean;
}

export const BouquetList = ({ data, isLoading }: BouquetListProps) => {
  return (
    <>
      {isLoading ? (
        <BouquetListSkeleton />
      ) : (
        <ul className={css.listContainer}>
          {data.map((oneBouquet) => (
            <BouquetItem key={oneBouquet.id} data={oneBouquet} />
          ))}
        </ul>
      )}
    </>
  );
};
