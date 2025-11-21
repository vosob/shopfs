import css from "./Filters.module.css";
import { CiSearch } from "react-icons/ci";
import { useTranslation } from "react-i18next";

interface FiltersProps {
  onSearchChange: (value: string) => void;
  onSelectedPrise: (value: string) => void;
  selectedPrise: string;
}

const prices = [
  { id: 1, name: "till700", value: "700" },
  { id: 2, name: "price700", value: "700/800" },
  { id: 3, name: "price800", value: "800/900" },
  { id: 4, name: "price900", value: "900/1000" },
  { id: 5, name: "price1000", value: "1000/1200" },
  { id: 6, name: "price1200plus", value: "1200+" },
];

export const Filters = ({
  onSearchChange,
  onSelectedPrise,
  selectedPrise,
}: FiltersProps) => {
  const { t } = useTranslation("filters");
  return (
    <div className={css.filterContainer}>
      <div className={css.searchContainer}>
        <input
          className={css.search}
          type="text"
          placeholder={t("searchFilter")}
          // value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <CiSearch className={css.searchIcon} />
      </div>
      <div className={css.priceFilter}>
        <p className={css.labelBox}>{t("price")}</p>
        {prices.map((price) => (
          <div className={css.checkboxFlex} key={price.id}>
            <input
              type="radio"
              name="price" // всі радіо в групі мають однакове name
              value={price.value}
              checked={selectedPrise === price.value}
              onChange={() => onSelectedPrise(price.value)}
            />
            <span>{t(`prices.${price.name}`)}</span>
          </div>
        ))}
        <button className={css.clearBtn} onClick={() => onSelectedPrise("")}>
          {t("Btn")}
        </button>
      </div>
    </div>
  );
};
