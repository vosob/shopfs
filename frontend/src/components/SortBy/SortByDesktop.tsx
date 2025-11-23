import { useTranslation } from "react-i18next";
import { SortType } from "../../Utils/SortList";
import css from "./SortByDesktop.module.css";

interface SortProps {
  sort: (el: SortType) => void;
}

export const SortByDesktop = ({ sort }: SortProps) => {
  const { t } = useTranslation("sortBouquetList");

  return (
    <div className={css.sortContainer}>
      <p className={css.sorting}>{t("sortText")}</p>
      <button onClick={() => sort("new")} className={css.sortBtn}>
        {t("sortByNew")}
      </button>
      <button onClick={() => sort("price-asc")} className={css.sortBtn}>
        {t("sortByIncrease")}
      </button>
      <button onClick={() => sort("price-desc")} className={css.sortBtn}>
        {t("sortByDecrease")}
      </button>
      <button onClick={() => sort("size")} className={css.sortBtn}>
        {t("sordBySize")}
      </button>
    </div>
  );
};
