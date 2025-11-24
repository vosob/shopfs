import { useQuery } from "@tanstack/react-query";
import { fetchBouquet } from "../../services/items";
import { Bouquet } from "../../types/typesItem";
import { getTranslatedField } from "../../Utils/getTranslatedField";
import { useTranslation } from "react-i18next";
import css from "./Discount.module.css";
import { Link } from "react-router";

export const Discount = () => {
  const { t } = useTranslation("discount");
  const { i18n } = useTranslation("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["bouquet"],
    queryFn: () => fetchBouquet(),
  });
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error loading bouquets</p>;

  const bouquets = [...data].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  const lang = i18n.language;

  const oldest = bouquets.slice(0, 3); // 15%
  const newest = bouquets.slice(-3); // 5%
  const middle = bouquets.slice(3, bouquets.length - 6); // 10%

  const addDiscount = (items: Bouquet[], discount: number) =>
    items.map((item) => ({
      ...item,
      discount,
      finalPrice: +(item.price * (1 - discount / 100)).toFixed(2),
    }));

  const oldestWithDiscount = addDiscount(oldest, 15);
  const middleWithDiscount = addDiscount(middle, 10);
  const newestWithDiscount = addDiscount(newest, 5);

  return (
    <div>
      <h2 className={css.discountTitle}>{t("discount")} 15%</h2>

      <ul className={css.flowerContainer}>
        {oldestWithDiscount.map((b) => {
          const name = getTranslatedField(b, "name", lang);
          return (
            <Link to={`/bouquet/${b.id}`}>
              <li key={b.id} className={css.card}>
                <div className={css.imageWrapper}>
                  <span className={`${css.badge} ${css.fifteen}`}>
                    {t("discount")} 15%
                  </span>
                  <img
                    src={b.images[0].url}
                    alt={name}
                    className={css.flowerPhoto}
                  />
                </div>
                <p className={css.bouquetName}>{name}</p>
                <p className={css.bouquetPrice}>
                  {" "}
                  {t("priceDiscount")} {b.price} {t("uah")}
                </p>
                <button className={css.discountBtn} type="submit">
                  {t("btn")}
                </button>
              </li>
            </Link>
          );
        })}
      </ul>

      <h2 className={css.discountTitle}>{t("discount")} 10%</h2>
      <ul className={css.flowerContainer}>
        {middleWithDiscount.map((b) => {
          const name = getTranslatedField(b, "name", lang);
          return (
            <Link to={`/bouquet/${b.id}`}>
              <li key={b.id} className={css.card}>
                <div className={css.imageWrapper}>
                  <span className={`${css.badge} ${css.ten}`}>
                    {t("discount")} 10%
                  </span>
                  <img
                    src={b.images[0].url}
                    alt={name}
                    className={css.flowerPhoto}
                  />
                </div>
                <p className={css.bouquetName}>{name}</p>
                <p className={css.bouquetPrice}>
                  {t("priceDiscount")} {b.price} {t("uah")}
                </p>
                <button className={css.discountBtn} type="submit">
                  {t("btn")}
                </button>
              </li>
            </Link>
          );
        })}
      </ul>

      <h2 className={css.discountTitle}>{t("discount")} 5%</h2>
      <ul className={css.flowerContainer}>
        {newestWithDiscount.map((b) => {
          const name = getTranslatedField(b, "name", lang);
          return (
            <Link to={`/bouquet/${b.id}`}>
              <li key={b.id} className={css.card}>
                <div className={css.imageWrapper}>
                  <span className={`${css.badge} ${css.five}`}>
                    {t("discount")} 5%
                  </span>
                  <img
                    src={b.images[0].url}
                    alt={name}
                    className={css.flowerPhoto}
                  />
                </div>
                <p className={css.bouquetName}>{name}</p>
                <p className={css.bouquetPrice}>
                  {t("priceDiscount")} {b.price} {t("uah")}
                </p>
                <button className={css.discountBtn} type="submit">
                  {t("btn")}
                </button>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
