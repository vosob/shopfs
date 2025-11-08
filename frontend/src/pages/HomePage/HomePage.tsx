import { useDeferredValue, useState } from "react";
import { Bonus } from "../../components/Bonus/Bonus";
import { BouquetList } from "../../components/BouquetList/BouquetList";

import { HeroHomePage } from "../../components/HeroHomePage/HeroHomePage";
import { SortBy } from "../../components/SortBy/SortBy";
import { fetchBouquet } from "../../services/items";

import css from "./HomePage.module.css";
import { useQuery } from "@tanstack/react-query";
import { sortProducts, SortType } from "../../components/Utils/SortList";
import { Filters } from "../../components/Filters/Filters";
import { Order } from "../../components/Order/Order";

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortList, setSortList] = useState<SortType>("default");
  const deferredSearch = useDeferredValue(searchQuery);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["bouquet", deferredSearch],
    queryFn: () => fetchBouquet(deferredSearch),
    keepPreviousData: true,
  });

  const sortedBouquet = sortProducts({
    bouquets: data || [],
    sortType: sortList,
  });

  return (
    <div>
      <HeroHomePage />
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occurred</p>}

      <Bonus />

      <div className={css.mainContent}>
        <div className={css.homeContainer}>
          <SortBy sort={setSortList} />
          {data && data.length > 0 ? (
            <BouquetList data={sortedBouquet} />
          ) : (
            <div className={css.noData}> No data </div>
          )}
        </div>

        <Filters onSearchChange={setSearchQuery} />
      </div>
      <Order />
    </div>
  );
};
