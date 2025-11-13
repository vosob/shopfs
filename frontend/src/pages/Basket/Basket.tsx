import { BasketList } from "../../components/BasketComponents/BasketList/BasketList";
import { DeliveryMethod } from "../../components/BasketComponents/DeliveryMethod/DeliveryMethod";
import { PayMethod } from "../../components/BasketComponents/PayMethod/PayMethod";
import { Recipient } from "../../components/BasketComponents/Recipient/Recipient";
import { TimeDelivery } from "../../components/BasketComponents/TimeDelivery/TimeDelivery";
import { YouContacts } from "../../components/BasketComponents/YouContacts/YouContacts";
import css from "./Basket.module.css";
import { useForm } from "react-hook-form";

export type Inputs = {
  deliveryMethod: "deliveryInTheCity" | "pickup";

  deliveryDate: string; // значення з input: date
  deliveryTimeOrDate: "timeFrameForReceivingAnOrder" | "exactTime";
  deliveryExactTime: string; // значення з input: time типу 20:00
  incognito: boolean;

  Recipient: "iRecipient" | "OtherRecipient";
  recipientMobile: number;
  recipientName: string;
  recipientCity: string;
  recipientAddress: string;
  recipientNote: string;

  yourName: string;
  yourMobile: number;
  yourCity: string;

  selfPickupCash: "Cash" | "CashCourier" | "OnlinePayment";
};

export const Basket = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.container}>
        <div>
          <h2 className={css.title}>Оформлення замовлення</h2>
          <DeliveryMethod register={register} />
          <TimeDelivery register={register} />
          <Recipient register={register} />
          <YouContacts register={register} />
          <PayMethod register={register} />
          <button className={css.btn} type="submit">
            Оформить заказ
          </button>
        </div>
        <div>
          <h3 className={`${css.title} ${css.basketTitle}`}>Корзина</h3>
          <BasketList />
        </div>
      </div>
    </form>
  );
};
