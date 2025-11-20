import { instance } from "./axiosInstans";

export const getAllReviews = async () => {
  const res = await instance.get("comment/all");
  return res.data;
};
