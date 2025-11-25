import { useDeferredValue, useState } from "react";
import { Bonus } from "../../components/Bonus/Bonus";
import { BouquetList } from "../../components/BouquetList/BouquetList";

import { HeroHomePage } from "../../components/HeroHomePage/HeroHomePage";
import { SortByMobile } from "../../components/SortBy/SortBySortByMobile";
import { fetchBouquet } from "../../services/items";

import css from "./HomePage.module.css";
import { useQuery } from "@tanstack/react-query";
import { sortProducts, SortType } from "../../Utils/SortList";
import { Filters } from "../../components/Filters/Filters";
import { Order } from "../../components/Order/Order";
import { DeliveryInfo } from "../../components/DeliveryInfo/DeliveryInfo";
import { useWindowSize } from "usehooks-ts";
import { SortByDesktop } from "../../components/SortBy/SortByDesktop";

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortList, setSortList] = useState<SortType>("default");
  const deferredSearch = useDeferredValue(searchQuery);
  const [selectedPrise, setSelectedPrise] = useState<string>("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["bouquet", deferredSearch, selectedPrise],
    queryFn: () => fetchBouquet(deferredSearch, selectedPrise),
  });

  const sortedBouquet = sortProducts({
    bouquets: data || [],
    sortType: sortList,
  });

  const { width } = useWindowSize();
  const isDesktop = width >= 1130;

  return (
    <>
      <HeroHomePage />
      {isError && <p>An error occurred</p>}
      <Bonus />
      <div className={`${css.mainContent} ${"container"}`} id="bouquet">
        <div className={css.homeContainer}>
          {!isDesktop ? (
            <div className={css.sortContainerMobile}>
              <SortByMobile sort={setSortList} />
            </div>
          ) : (
            <SortByDesktop sort={setSortList} />
          )}

          <BouquetList isLoading={isLoading} data={sortedBouquet || []} />
        </div>

        {isDesktop && (
          <Filters
            onSearchChange={setSearchQuery}
            onSelectedPrise={setSelectedPrise}
            selectedPrise={selectedPrise}
          />
        )}
      </div>
      <Order />
      <DeliveryInfo />
    </>
  );
};
