import axios from "axios";
import type { Bouquet } from "../types/typesItem";

const BASE_URL = "http://localhost:3000";

export const fetchBouquet = async () => {
  const res = await axios.get<Bouquet[]>(`${BASE_URL}/bouquet`);
  return res.data;
};
