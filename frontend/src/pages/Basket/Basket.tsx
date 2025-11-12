import { BasketList } from "../../components/BasketComponents/BasketList/BasketList";
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
        <div>
          <h2 className={css.title}>Оформлення замовлення</h2>
          <DeliveryMethod />
          <TimeDelivery />
          <Recipient />
          <YouContacts />
          <PayMethod />
          {/* Компонент замовлення заказу, який буде складатися з 5 окремих компонентів спосіб доставки,дата та час, отримувач, ваші контактні дані і спосіб оплати*/}
        </div>
        <div>
          <h3 className={`${css.title} ${css.basketTitle}`}>Корзина</h3>
          <BasketList />
        </div>
      </div>
    </>
  );
};
