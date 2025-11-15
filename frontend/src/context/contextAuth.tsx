import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
} from "react";
import { tokenUtils } from "./auth-utils";
import { instance } from "../services/axiosInstans";
import { AxiosRequestConfig } from "axios";
import { me } from "../services/users";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  isLoading: boolean;
  createToken: (token: string) => void;
  logout: () => void;
}

interface AxiosRequestConfigWithRetry extends AxiosRequestConfig {
  _retry?: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Початкова перевірка автентифікації
  useEffect(() => {
    const initAuth = async () => {
      // Спочатку перевіряємо чи є збережений токен
      const savedToken = tokenUtils.getToken();

      if (!savedToken) {
        // Якщо немає токена - одразу завершуємо
        setIsLoading(false);
        return;
      }

      // Якщо токен є - встановлюємо його і пробуємо викликати me()
      setToken(savedToken);

      try {
        const response = await me();
        // Якщо me() успішний - оновлюємо токен (може бути новий)
        setToken(response.accessToken);
        setIsAuthenticated(true);
      } catch (error) {
        // Якщо me() впав (навіть після спроби refresh) - чистимо все
        console.error("Auth initialization failed:", error);
        setToken(null);
        setIsAuthenticated(false);
        tokenUtils.removeToken();
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  // Request interceptor - додає Authorization header до кожного запиту
  useLayoutEffect(() => {
    const authInterceptor = instance.interceptors.request.use((config) => {
      if (token && !config.headers?.Authorization) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => {
      instance.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  // Response interceptor - обробляє 401 помилки та оновлює токен
  useLayoutEffect(() => {
    const refreshInterceptor = instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config as AxiosRequestConfigWithRetry;

        // Перевіряємо чи це 401 помилка і чи не робили ми вже retry
        if (
          error.response?.status === 401 &&
          error.response?.data?.message === "Unauthorized" &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;

          try {
            const response = await instance.post("/auth/refresh");
            const newToken = response.data.accessToken;

            // Оновлюємо токен в стейті та storage
            setToken(newToken);
            setIsAuthenticated(true);
            tokenUtils.setToken(newToken);

            // Оновлюємо Authorization header для повторного запиту
            if (!originalRequest.headers) {
              originalRequest.headers = {};
            }
            originalRequest.headers.Authorization = `Bearer ${newToken}`;

            // Повторюємо оригінальний запит з новим токеном
            return instance(originalRequest);
          } catch (refreshError) {
            // Якщо refresh не вдався - виходимо
            setToken(null);
            setIsAuthenticated(false);
            tokenUtils.removeToken();
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      instance.interceptors.response.eject(refreshInterceptor);
    };
  }, []);

  const createToken = (newToken: string) => {
    tokenUtils.setToken(newToken);
    setToken(newToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    tokenUtils.removeToken();
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, createToken, isLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
