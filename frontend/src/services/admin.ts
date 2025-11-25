import { BouquetPayload } from "../pages/AdminPage/AdminPage";
import { instance } from "./axiosInstans";

export const postBouquet = async (data: BouquetPayload) => {
  const res = await instance.post("bouquet/add", data);
  return res.data;
};
