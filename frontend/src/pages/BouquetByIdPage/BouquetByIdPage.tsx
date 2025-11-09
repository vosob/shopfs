import { useQuery } from "@tanstack/react-query";
import css from "./BouquetByIdPage.module.css";
import { useParams } from "react-router";
import { fetchBouquetById } from "../../services/items";
import { PriceBullets } from "../../components/PriceBullets/PriceBullets";
import { BouquetDetailsTab } from "../../components/BouquetDetailsTab/BouquetDetailsTab";
import { useState } from "react";

export const BouquetByIdPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<"composition" | "delivery">(
    "composition"
  );
  const { data, error, isLoading } = useQuery({
    queryKey: ["bouquetById", id],
    queryFn: () => fetchBouquetById(id as string),
    enabled: !!id,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {(error as Error).message}</div>;
  }

  if (!data) return <div>No data found</div>;

  const { name, flowers, images, price } = data;
  return (
    <div className={css.container}>
      <div>
        <img className={css.mainImg} src={images[0]?.url || ""} alt={name} />
      </div>
      <div>
        <h2 className={css.title}>{name}</h2>
        <p className={css.sizeText}>Розмір:</p>
        <PriceBullets price={price} />
        <BouquetDetailsTab
          activeTab={activeTab}
          flowers={flowers}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};
