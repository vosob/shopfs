import { SortType } from "../../Utils/SortList";
import css from "./SortBy.module.css";

interface SortProps {
  sort: (el: SortType) => void;
}

export const SortBy = ({ sort }: SortProps) => {
  return (
    <div className={css.sortContainer}>
      <p className={css.sorting}>Сортувати по :</p>
      <button onClick={() => sort("new")} className={css.sortBtn}>
        Новинки
      </button>
      <button onClick={() => sort("price-asc")} className={css.sortBtn}>
        Ціна по збільшенню
      </button>
      <button onClick={() => sort("price-desc")} className={css.sortBtn}>
        Ціна по зменшенню
      </button>
      <button onClick={() => sort("size")} className={css.sortBtn}>
        Розмір
      </button>
    </div>
  );
};
