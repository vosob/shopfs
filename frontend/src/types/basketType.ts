export interface TimeDeliveryValue {
  deliveryTimePeriod: number;
  incognito?: boolean;
}

export interface DeliveryMethodOrder {
  deliveryMethod: "delivery" | "self";
}

export interface RecipientIsYou {
  name: string;
  phone: number;
  city: string;
  street: string;
  textarea?: string;
}

export interface RecipientOtherPerson {
  name: string;
  phone: number;
  city: string;
  street: string;
  textarea?: string;
}

export interface YouContacts {
  name: string;
  phone: number;
  city: string;
}

export interface initialValues {
  deliveryMethod: string;
  deliveryTimePeriod: TimeDeliveryValue;
  recipient: RecipientIsYou | RecipientOtherPerson;
  contacts: YouContacts;
  payMethod: string;
}
