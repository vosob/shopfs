import { Reviews } from "../types/reviews";
import { instance } from "./axiosInstans";

export const getAllReviews = async () => {
  const res = await instance.get("comment/all");
  return res.data;
};

export const postReview = async (reviewData: Reviews) => {
  const res = await instance.post("comment/create", reviewData);
  return res.data;
};
