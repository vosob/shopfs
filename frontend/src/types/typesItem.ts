export interface ImagesList {
  id: string;
  url: string;
  bouquetId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Flower {
  id: string;
  name_uk: string;
  name_en: string;
  color_uk: string;
  color_en: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface FlowersList {
  id: string;
  bouquetId: string;
  flowerId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  flower: Flower;
}

export interface Bouquet {
  id: string;
  name_uk: string;
  name_en: string;
  size: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  flowers: FlowersList[];
  images: ImagesList[];
}

export interface BouquetFormBasket {
  id: string;
  images: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  priceByOne: number;
}

export type Size = "small" | "medium" | "big";

export interface BasketItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  images: ImagesList[];
  size: Size;
  quantity: number;
}
