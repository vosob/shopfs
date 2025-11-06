import css from "./HeroHomePage.module.css";

export const HeroHomePage = () => {
  return (
    <div>
      <div className={css.container}>
        <h2 className={css.h2}>
          <span className={css.span}>Доставка </span>квітів у місті
        </h2>
        <h1 className={css.h1}>Рівному</h1>
        <button className={css.button}>Каталог</button>
      </div>
    </div>
  );
};
