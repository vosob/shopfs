import { DeliveryMethod } from "../../components/BasketComponents/DeliveryMethod/DeliveryMethod";
import { PayMethod } from "../../components/BasketComponents/PayMethod/PayMethod";
import { Recipient } from "../../components/BasketComponents/Recipient/Recipient";
import { TimeDelivery } from "../../components/BasketComponents/TimeDelivery/TimeDelivery";
import { YouContacts } from "../../components/BasketComponents/YouContacts/Contacts";
import css from "./Basket.module.css";

export const Basket = () => {
  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}>Оформлення замовлення</h2>
        <div>
          <DeliveryMethod />
          <TimeDelivery />
          <Recipient />
          <YouContacts />
          <PayMethod />
          {/* Компонент замовлення заказу, який буде складатися з 5 окремих компонентів спосіб доставки,дата та час, отримувач, ваші контактні дані і спосіб оплати*/}
        </div>
        <div>
          {/* Корзина в яка буде складатися з 2 компонентів(корзина і загальна ціна) */}
        </div>
        <button className={css.btn}>Оформити замовлення</button>
      </div>
    </>
  );
};
