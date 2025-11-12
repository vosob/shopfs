import { BasketList } from "../../components/BasketComponents/BasketList/BasketList";
import { DeliveryMethod } from "../../components/BasketComponents/DeliveryMethod/DeliveryMethod";
import { PayMethod } from "../../components/BasketComponents/PayMethod/PayMethod";
import { Recipient } from "../../components/BasketComponents/Recipient/Recipient";
import { TimeDelivery } from "../../components/BasketComponents/TimeDelivery/TimeDelivery";
import { YouContacts } from "../../components/BasketComponents/YouContacts/Contacts";
import css from "./Basket.module.css";

interface DeliveryMethod {
  deliveryMethod: "delivery" | "self";
  deliveryTimePeriod: number;
  incognito?: boolean;
}

interface recipientIsYou {
  name: string;
  phone: number;
  city: string;
  street: string;
  textarea?: string;
}

interface RecipientOtherPerson {
  name: string;
  phone: number;
  city: string;
  street: string;
  textarea?: string;
}

interface YouContacts {
  name: string;
  phone: number;
  city: string;
}

interface initialValues {
  deliveryMethod: string;
  deliveryTimePeriod: DeliveryMethod;
  recipient: recipientIsYou | RecipientOtherPerson;
  contacts: YouContacts;
  payMethod: string;
}

export const Basket = () => {
  return (
    <>
      <div className={css.container}>
        <div>
          <h2 className={css.title}>Оформлення замовлення</h2>
          <DeliveryMethod />
          <TimeDelivery />
          <Recipient />
          <YouContacts />
          <PayMethod />
        </div>
        <div>
          <h3 className={`${css.title} ${css.basketTitle}`}>Корзина</h3>
          <BasketList />
        </div>
      </div>
    </>
  );
};
