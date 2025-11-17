import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import css from "./BouquetListSkeleton.module.css";

export const BouquetListSkeleton = () => {
  return (
    <div className={css.listContainer}>
      {[...Array(12)].map((_, i) => (
        <div key={i} className={css.card}>
          <Skeleton className={css.photo} />
          <Skeleton height={22} width="80%" className={css.title} />
          <Skeleton height={19} width="60%" className={css.price} />
          <Skeleton height={17} width="50%" className={css.size} />
          <Skeleton className={css.button} />
        </div>
      ))}
    </div>
  );
};
