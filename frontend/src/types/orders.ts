import { Bouquet } from "./typesItem";

export type Inputs = {
  deliveryMethod: "deliveryInTheCity" | "pickup";

  deliveryDate: string; // значення з input: date
  deliveryTimeOrDate: "timeFrameForReceivingAnOrder" | "exactTime";
  deliveryExactTime: string; // значення з input: time типу 20:00
  incognito: boolean;

  Recipient: "iRecipient" | "OtherRecipient";
  recipientMobile: string;
  recipientName: string;
  recipientCity: string;
  recipientAddress: string;
  recipientNote?: string;

  senderName: string;
  senderMobile: string;
  senderCity: string;

  selfPickupCash: "Cash" | "CashCourier" | "OnlinePayment";
};

export interface OrderItem {
  id: string;
  orderId: string;
  bouquetId: string;
  bouquet: Bouquet;
  price: number;
  quantity: number;
  size: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  createdAt: string;
  updatedAt: string;
  deliveryDate: string;
  deliveryExactTime: string;
  deliveryMethod: Inputs["deliveryMethod"];
  deliveryTimePreference: Inputs["deliveryTimeOrDate"];
  incognito: boolean;
  isRecipientSender: Inputs["Recipient"];
  items: OrderItem[];
  paymentMethod: Inputs["selfPickupCash"];
  recipientAddress: string;
  recipientCity: string;
  recipientMobile: string;
  recipientName: string;
  recipientNote?: string;
  senderCity: string;
  senderMobile: string;
  senderName: string;
  status: string;
  userId: string;
}
