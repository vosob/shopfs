import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import css from "./MyOrders.module.css";

export const MyOrders = () => {
  return (
    <>
      <Breadcrumbs />
      <div className={css.container}>
        <div className={css.orderContainer}>Мої Замовлення</div>
      </div>
    </>
  );
};
