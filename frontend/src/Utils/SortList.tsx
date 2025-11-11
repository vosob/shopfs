import { Bouquet } from "../types/typesItem";

export type SortType = "default" | "price-asc" | "price-desc" | "size" | "new";

interface SortProductsProps {
  bouquets: Bouquet[];
  sortType: SortType;
}

export const sortProducts = ({ bouquets, sortType }: SortProductsProps) => {
  const sorted = [...bouquets];
  console.log(sorted);

  switch (sortType) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "new":
      return sorted.sort((a, b) => Number(a.createdAt) - Number(b.createdAt));
    case "size":
      return sorted.sort((a, b) => Number(a.size) - Number(b.size));
    default:
      return sorted;
  }
};
