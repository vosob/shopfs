import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`${css.footerContainer} ${"container"}`}>
        <div className={css.footerColumn}>
          <h3 className={css.footerTitle}>Контактна інформація</h3>
          <p>м. Рівне, вул. Кулика і Гудачека, 28</p>
          <p>+380 98 328 5882</p>
          <p>+380 63 721 0966</p>
          <p>Режим роботи: Пн–Сб з 8:00 до 22:00</p>
        </div>

        <div className={css.footerColumn}>
          <h3 className={css.footerTitle}>Для користувачів</h3>
          <ul className={css.footerLinks}>
            <li>Оформити замовлення</li>
            <li>Питання і відповіді</li>
            <li>Зміна або відміна замовлення</li>
            <li>Способи доставки і оплати</li>
          </ul>
        </div>

        <div className={css.footerColumn}>
          <h3 className={css.footerTitle}>Є питання? Зв’яжіться з нами</h3>
          <form className={css.footerForm}>
            <div className={css.footerInputs}>
              <input type="text" placeholder="Ваше ім’я" />
              <input type="text" placeholder="Мобільний номер" />
            </div>
            <textarea placeholder="Ваше повідомлення"></textarea>
            <button type="submit">Відправити</button>
          </form>
        </div>
      </div>

      <p className={css.footerCopy}>© 2025 Квіткова лавка</p>
    </footer>
  );
};
