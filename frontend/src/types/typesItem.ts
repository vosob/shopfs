export interface ImagesList {
  id: string;
  url: string;
  bouquetId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Flower {
  id: string;
  name: string;
  color: string;
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
  name: string;
  size: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  flowers: FlowersList[];
  images: ImagesList[];
}
