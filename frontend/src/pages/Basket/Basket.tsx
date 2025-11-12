import { Formik } from "formik";
import { BasketList } from "../../components/BasketComponents/BasketList/BasketList";
import { DeliveryMethod } from "../../components/BasketComponents/DeliveryMethod/DeliveryMethod";
// import { PayMethod } from "../../components/BasketComponents/PayMethod/PayMethod";
// import { Recipient } from "../../components/BasketComponents/Recipient/Recipient";
import { TimeDelivery } from "../../components/BasketComponents/TimeDelivery/TimeDelivery";
// import { YouContacts } from "../../components/BasketComponents/YouContacts/Contacts";
import css from "./Basket.module.css";
import { Form } from "formik";

export const Basket = () => {
  const initialValues = { deliveryMethod: "" };
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={(values) => console.log(values, "тут")}
    >
      {() => (
        <Form>
          <div className={css.container}>
            <div>
              <h2 className={css.title}>Оформлення замовлення</h2>
              <DeliveryMethod />
              <TimeDelivery />
              {/* <Recipient setFieldValue={setFieldValue} values={values} />
              <YouContacts setFieldValue={setFieldValue} values={values} />
              <PayMethod setFieldValue={setFieldValue} values={values} /> */}
            </div>
            <div>
              <h3 className={`${css.title} ${css.basketTitle}`}>Корзина</h3>

              <BasketList />
            </div>
          </div>
          <button type="submit">Сабмінт </button>
        </Form>
      )}
    </Formik>
  );
};
