import { Inputs } from "../pages/Basket/Basket";
import instance from "./axiosInstans";

export const postOrder = async (orderData: Inputs) => {
  const res = await instance.post("order", orderData);
  return res.data;
};
