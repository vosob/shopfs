import css from "./Order.module.css";
import order from "../../image/Order/order.png";

export const Order = () => {
  return (
    <section className={`${css.orderContainer} ${"container"}`}>
      <h2 className={css.orderTitle}>
        <span>ЗАМОВИТИ</span> У 4 КРОКИ
      </h2>

      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.stepImage}>
            <img src={order} alt="1" />
            <span className={css.stepNumber}>1</span>
          </div>
          <div className={css.stepText}>
            <h3>Виберіть букет;</h3>
            <p>У каталозі виберіть букет який сподобався;</p>
          </div>
        </div>

        <div className={css.step}>
          <div className={css.stepImage}>
            <img src={order} alt="2" />
            <span className={css.stepNumber}>2</span>
          </div>
          <div className={css.stepText}>
            <h3>Виберіть розмір і доповнення;</h3>
            <p>
              На сторінці з описом букета виберіть відповідний розмір. За
              бажанням додайте до букету м'яку іграшку, солодкість або будь-який
              інший подарунок;
            </p>
          </div>
        </div>

        <div className={css.step}>
          <div className={css.stepImage}>
            <img src={order} alt="3" />
            <span className={css.stepNumber}>3</span>
          </div>
          <div className={css.stepText}>
            <h3>Вкажіть дані для доставки;</h3>
            <p>
              Заповніть форму доставки та оплатіть замовлення зручним для вас
              способом;
            </p>
          </div>
        </div>

        <div className={css.step}>
          <div className={css.stepImage}>
            <img src={order} alt="4" />
            <span className={css.stepNumber}>4</span>
          </div>
          <div className={css.stepText}>
            <h3>Букет готовий!</h3>
            <p>
              Букет буде зібраний із найсвіжіших квітів і доставлений отримувачу
              у вказаний час;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
