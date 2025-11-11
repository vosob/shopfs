import React, { createContext, useState, useEffect, useContext } from "react";
import { tokenUtils } from "./auth-utils";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  isLoading: boolean;
  createToken: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedToken = tokenUtils.getToken();
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
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
