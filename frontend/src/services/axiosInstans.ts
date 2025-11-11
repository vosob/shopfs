import axios from "axios";
import { tokenUtils } from "../context/auth-utils";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

// ✅ Перехоплення запитів
instance.interceptors.request.use(
  (config) => {
    try {
      const token = tokenUtils.getToken();

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Помилка при отриманні токена:", error);
    }

    return config;
  },
  (error) => {
    // якщо сталася помилка до відправлення запиту
    return Promise.reject(error);
  }
);

// ✅ (опційно) перехоплення відповідей — зручно для оновлення токена або логування
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized — токен недійсний або відсутній");
      // тут можна, наприклад, викликати logout або refresh
    }
    return Promise.reject(error);
  }
);

export default instance;
