import type { Bouquet } from "../types/typesItem";
import { instance } from "./axiosInstans";

export const fetchBouquet = async (search?: string, sortByPrise?: string) => {
  const res = await instance.get<Bouquet[]>("/bouquet", {
    params: {
      ...(search && { search }),
      ...(sortByPrise && { sortByPrise }),
    },
  });
  return res.data;
};

export const fetchBouquetById = async (id: string) => {
  const res = await instance.get<Bouquet>(`/bouquet/bouquetId/${id}`);
  return res.data;
};
