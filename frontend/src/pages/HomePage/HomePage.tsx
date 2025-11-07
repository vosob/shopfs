import { useState } from "react";
import { Bonus } from "../../components/Bonus/Bonus";
import { BouquetList } from "../../components/BouquetList/BouquetList";

import { HeroHomePage } from "../../components/HeroHomePage/HeroHomePage";
import { SortBy } from "../../components/SortBy/SortBy";
import { fetchBouquet } from "../../services/items";

import css from "./HomePage.module.css";
import { useQuery } from "@tanstack/react-query";
import { sortProducts, SortType } from "../../components/Utils/SortList";

export const HomePage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["bouquet"],
    queryFn: fetchBouquet,
  });

  const [sortList, setSortList] = useState<SortType>("default");
  console.log(sortList);

  const sortedBouquet = sortProducts({
    bouquets: data || [],
    sortType: sortList,
  });

  return (
    <div>
      <HeroHomePage />
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occurred</p>}

      <div className={css.homeContainer}>
        <Bonus />
        <SortBy sort={setSortList} />
        {data && <BouquetList data={sortedBouquet} />}
      </div>
    </div>
  );
};
