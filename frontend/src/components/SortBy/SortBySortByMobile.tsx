import { useTranslation } from "react-i18next";
import { SortType } from "../../Utils/SortList";
import css from "./SortBy.module.css";

interface SortProps {
  sort: (el: SortType) => void;
}

export const SortByMobile = ({ sort }: SortProps) => {
  const { t } = useTranslation("sortBouquetList");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    sort(e.target.value as SortType);
  };

  return (
    <div className={css.sortContainer}>
      <select className={css.select} defaultValue="" onChange={handleChange}>
        <option value="" disabled>
          {t("sortText")}
        </option>
        <option value="new">{t("sortByNew")}</option>
        <option value="price-asc">{t("sortByIncrease")}</option>
        <option value="price-desc">{t("sortByDecrease")}</option>
        <option value="size">{t("sordBySize")}</option>
      </select>
    </div>
  );
};
