import css from "./PriceBullets.module.css";

interface Props {
  price: number;
}

export const PriceBullets = ({ price }: Props) => {
  return (
    <form className={css.form}>
      <input id="small" type="radio" name="size" value="small" hidden />
      <label htmlFor="small" className={css.label}>
        <div className={css.info}>
          <p className={css.infoText}>Малий</p>
          <p className={css.infoPrice}>{price - price * 0.15} грн.</p>
        </div>
        <span className={css.customRadio}></span>
      </label>

      <input id="medium" type="radio" name="size" value="medium" hidden />
      <label htmlFor="medium" className={css.label}>
        <div className={css.info}>
          <p className={css.infoText}>Середній</p>
          <p className={css.infoPrice}>{price} грн.</p>
        </div>
        <span className={css.customRadio}></span>
      </label>

      <input id="big" type="radio" name="size" value="big" hidden />
      <label htmlFor="big" className={css.label}>
        <div className={css.info}>
          <p className={css.infoText}>Великий</p>
          <p className={css.infoPrice}>{price + price * 0.15} грн.</p>
        </div>
        <span className={css.customRadio}></span>
      </label>
    </form>
  );
};
