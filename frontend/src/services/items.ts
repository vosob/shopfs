import axios from "axios";
import type { Bouquet } from "../types/typesItem";

const BASE_URL = "http://localhost:3000";

// export const fetchBouquet = async () => {
//   const res = await axios.get<Bouquet[]>(`${BASE_URL}/bouquet`);
//   return res.data;
// };

export const fetchBouquet = async (search?: string) => {
  const res = await axios.get<Bouquet[]>(`${BASE_URL}/bouquet`, {
    params: {
      ...(search && { search }), // додати search тільки якщо він є
    },
  });
  return res.data;
};
