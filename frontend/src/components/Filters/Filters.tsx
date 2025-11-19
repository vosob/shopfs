import css from "./Filters.module.css";
import { CiSearch } from "react-icons/ci";

interface FiltersProps {
  onSearchChange: (value: string) => void;
  onSelectedPrise: (value: string) => void;
  selectedPrise: string;
}

const prices = [
  { id: 1, name: "до 700 грн", value: "700" },
  { id: 2, name: "від 700 до 800 грн", value: "700/800" },
  { id: 3, name: "від 800 до 900 грн", value: "800/900" },
  { id: 4, name: " від 900 до 1000 грн", value: "900/1000" },
  { id: 5, name: "від 1000 до 1200 грн", value: "1000/1200" },
  { id: 6, name: "1200 грн і більше", value: "1200+" },
];

export const Filters = ({
  onSearchChange,
  onSelectedPrise,
  selectedPrise,
}: FiltersProps) => {
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
        {prices.map((price) => (
          <div className={css.checkboxFlex} key={price.id}>
            <input
              type="radio"
              name="price" // всі радіо в групі мають однакове name
              value={price.value}
              checked={selectedPrise === price.value}
              onChange={() => onSelectedPrise(price.value)}
            />
            <span>{price.name}</span>
          </div>
        ))}
        <button className={css.clearBtn} onClick={() => onSelectedPrise("")}>
          Скинути фільтри
        </button>
      </div>
    </div>
  );
};
