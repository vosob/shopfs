import { Inputs } from "../types/orders";
import { instance } from "./axiosInstans";

export const postOrder = async (orderData: Inputs) => {
  const res = await instance.post("order", orderData);
  return res.data;
};

export const getUserOrders = async () => {
  const res = await instance.get("order/my");
  return res.data;
};
