import toast from "react-hot-toast";
import { BasketList } from "../../components/BasketComponents/BasketList/BasketList";
import { DeliveryMethod } from "../../components/BasketComponents/DeliveryMethod/DeliveryMethod";
import { PayMethod } from "../../components/BasketComponents/PayMethod/PayMethod";
import { Recipient } from "../../components/BasketComponents/Recipient/Recipient";
import { TimeDelivery } from "../../components/BasketComponents/TimeDelivery/TimeDelivery";
import { YouContacts } from "../../components/BasketComponents/YouContacts/YouContacts";
import { useBasket } from "../../context/contextBasket";
import { postOrder } from "../../services/order";
import css from "./Basket.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Inputs } from "../../types/orders";
import { useTranslation } from "react-i18next";

export const Basket = () => {
  const { register, handleSubmit, watch, reset } = useForm<Inputs>({
    defaultValues: {
      deliveryMethod: "deliveryInTheCity",
      deliveryDate: "",
      deliveryTimeOrDate: "timeFrameForReceivingAnOrder",
      deliveryExactTime: "",
      incognito: false,
      Recipient: "iRecipient",
      recipientMobile: "",
      recipientName: "",
      recipientCity: "",
      recipientAddress: "",
      recipientNote: "",
      senderName: "",
      senderMobile: "",
      senderCity: "",
      selfPickupCash: "Cash",
    },
  });

  const { t } = useTranslation("basket");
  const { items, clearBasket } = useBasket();
  const navigate = useNavigate();

  const onSubmit = async (data: Inputs) => {
    const requestBody = {
      ...data,
      ["orders"]: items,
    };

    console.log(requestBody);
    try {
      await postOrder(requestBody);
      clearBasket();
      navigate("/");
      toast.success("Ваше замовлення успішно оформлено!");
    } catch (error) {
      toast.error("Вибачте, щось пішло не так.");
      console.log(error);
    } finally {
      reset();
    }
  };

  const pickup = watch("deliveryMethod");
  const recipient = watch("Recipient");
  console.log(pickup);

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div className={`${css.basketContainer} ${"container"}`}>
        <div className={css.leftSide}>
          <h2 className={css.title}>{t("basketNote.order")}</h2>
          <DeliveryMethod register={register} />

          <div
            className={`${css.hiddenWrapper} ${
              pickup === "pickup" ? css.visible : css.hidden
            }`}
          >
            <TimeDelivery register={register} />
          </div>

          <Recipient register={register} />

          <div
            className={`${css.hiddenWrapper} ${
              recipient === "OtherRecipient" ? css.visible : css.hidden
            }`}
          >
            <YouContacts register={register} />
          </div>

          <PayMethod register={register} />
          <button className={css.btn} type="submit">
            {t("basketNote.btn")}
          </button>
        </div>
        <div className={css.rightSide}>
          <h3 className={`${css.title} ${css.basketTitle}`}>
            {t("basketNote.basket")}
          </h3>
          <BasketList />
        </div>
      </div>
    </form>
  );
};
