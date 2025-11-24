import { useQuery } from "@tanstack/react-query";
import css from "./BouquetByIdPage.module.css";
import { useParams } from "react-router";
import { fetchBouquetById } from "../../services/items";
import { PriceBullets } from "../../components/PriceBullets/PriceBullets";
import { BouquetDetailsTab } from "../../components/BouquetDetailsTab/BouquetDetailsTab";
import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { BouquetByIdOrderActions } from "../../components/BouquetByIdOrderActions/BouquetByIdOrderActions";
import { Size } from "../../types/typesItem";
import { useTranslation } from "react-i18next";
import { getTranslatedField } from "../../Utils/getTranslatedField";

export const BouquetByIdPage = () => {
  const { t } = useTranslation("bouquetById");
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<"composition" | "delivery">(
    "composition"
  );
  const [activePrice, setActivePrice] = useState<Size>("medium");
  const [allImages, setAllImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState<string>(allImages[0] || "");

  const { data, error, isLoading } = useQuery({
    queryKey: ["bouquetById", id],
    queryFn: () => fetchBouquetById(id as string),
    enabled: !!id,
  });

  useEffect(() => {
    if (data) {
      const images = data.images.map((image) => image.url);
      setAllImages(images);
      setCurrentImage(images[0]);
    }
  }, [data]);

  console.log(allImages);

  const { i18n } = useTranslation();
  const lang = i18n.language;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {(error as Error).message}</div>;
  }

  if (!data) return <div>No data found</div>;

  const { flowers, price } = data;

  const name = getTranslatedField(data, "name", lang);

  return (
    <>
      <div className="container">
        <Breadcrumbs />
      </div>
      <div className={`${css.byIdContainer} ${"container"}`}>
        <div className={css.mainImgContainer}>
          <img className={css.mainImg} src={currentImage} alt={name} />
          <ul className={css.minImgContainer}>
            {allImages.map((img) => (
              <li key={img}>
                <button
                  className={css.clearBtn}
                  onClick={() => setCurrentImage(img)}
                >
                  <img className={css.minImg} src={img} alt={name} />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={css.title}>{name}</h2>
          <p className={css.sizeText}>{t("bouquetPage.size")}</p>
          <PriceBullets
            price={price}
            setActivePrice={setActivePrice}
            activePrice={activePrice}
          />
          <BouquetDetailsTab
            activeTab={activeTab}
            flowers={flowers}
            setActiveTab={setActiveTab}
          />
          <BouquetByIdOrderActions activePrice={activePrice} data={data} />
        </div>
      </div>
    </>
  );
};
