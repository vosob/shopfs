import css from "./Bonus.module.css";

export const Bonus = () => {
  return (
    <div>
      <div className={css.container}>
        <ul className={css.bonusList}>
          <li>
            <img src="../../../public/images/bonus/01.png" alt="bonus1" />
            <span className={css.spanColor}>Безкоштовна</span> доставка по місту
          </li>
          <li>
            <img src="../../../public/images/bonus/02.png" alt="bonus1" />
            Відкритка <span className={css.spanColor}>у подарунок</span>
          </li>
          <li>
            <img src="../../../public/images/bonus/03.png" alt="bonus1" />
            <span className={css.spanColor}>Цілодобава</span> доставка
          </li>
          <li>
            <img src="../../../public/images/bonus/04.png" alt="bonus1" />
            Накопичувальна система <span className={css.spanColor}>знижок</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
