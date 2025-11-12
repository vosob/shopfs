import React, { createContext, useState, useContext, useEffect } from "react";
import { BasketItem, Size } from "../types/typesItem";

interface BasketContextType {
  items: BasketItem[];
  addToBasket: (product: BasketItem, size: Size) => void;
  removeFromBasket: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
  clearBasket: () => void;
  calculatePrice: (basePrice: number, size: Size) => number;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

const BASKET_STORAGE_KEY = "basket";

const calculatePriceBySize = (basePrice: number, size: Size): number => {
  if (size === "small") {
    return basePrice - basePrice * 0.15;
  } else if (size === "big") {
    return basePrice + basePrice * 0.15;
  }
  return basePrice;
};

export const BasketContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<BasketItem[]>(() => {
    try {
      const savedBasket = localStorage.getItem(BASKET_STORAGE_KEY);
      return savedBasket ? JSON.parse(savedBasket) : [];
    } catch (error) {
      console.error("Error loading basket from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(BASKET_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Error saving basket to localStorage:", error);
    }
  }, [items]);

  const calculatePrice = (basePrice: number, size: Size): number => {
    return calculatePriceBySize(basePrice, size);
  };

  const addToBasket = (product: BasketItem, size: Size) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.productId === product.productId && item.size === size
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + product.quantity,
        };
        return updatedItems;
      }

      const calculatedPrice = calculatePriceBySize(product.price, size);

      return [...prevItems, { ...product, price: calculatedPrice, size }];
    });
  };

  const removeFromBasket = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromBasket(id);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const clearBasket = () => {
    setItems([]);
  };

  return (
    <BasketContext.Provider
      value={{
        items,
        addToBasket,
        removeFromBasket,
        updateQuantity,
        getTotalPrice,
        getTotalItems,
        clearBasket,
        calculatePrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketContextProvider");
  }
  return context;
};
