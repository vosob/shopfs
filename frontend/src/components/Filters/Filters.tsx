import css from "./Filters.module.css";
import { CiSearch } from "react-icons/ci";

interface FiltersProps {
  onSearchChange: (value: string) => void;
}

export const Filters = ({ onSearchChange }: FiltersProps) => {
  return (
    <div className={css.filterContainer}>
      <div className={css.searchContainer}>
        <input
          className={css.search}
          type="text"
          placeholder="Пошук букетів..."
          // value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <CiSearch className={css.searchIcon} />
      </div>
      <div className={css.priceFilter}>
        <p className={css.labelBox}>Ціна:</p>
        <div className={css.checkboxFlex}>
          <input type="checkbox" />
          <span> до 700 грн</span>
        </div>
        <div className={css.checkboxFlex}>
          <input type="checkbox" />
          <span>від 700 до 800 грн </span>
        </div>
        <div className={css.checkboxFlex}>
          <input type="checkbox" />
          <span> від 800 до 900 грн </span>
        </div>
        <div className={css.checkboxFlex}>
          <input type="checkbox" />
          <span> від 900 до 1000 грн </span>
        </div>
        <div className={css.checkboxFlex}>
          <input type="checkbox" />
          <span> від 1000 до 1200 грн </span>
        </div>
        <div className={css.checkboxFlex}>
          <input type="checkbox" />
          <span> 1200 грн і більше </span>
        </div>
      </div>
    </div>
  );
};
