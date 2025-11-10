import {
  userLogin,
  userLoginData,
  userRegister,
  userRegisterData,
} from "../types/users";
import { instance } from "./axiosInstans";

export const registerUser = async (
  userRegisterData: userRegister
): Promise<userRegisterData> => {
  const res = await instance.post("auth/register", userRegisterData);
  return res.data;
};

export const loginUser = async (
  userLoginData: userLogin
): Promise<userLoginData> => {
  const resLog = await instance.post("auth/login", userLoginData);
  return resLog.data;
};

export const me = async () => {
  const res = await instance.get("auth/me");
  return res.data;
};
