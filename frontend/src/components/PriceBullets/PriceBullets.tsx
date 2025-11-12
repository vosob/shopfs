import css from "./PriceBullets.module.css";

interface Props {
  price: number;
  activePrice: string;
  setActivePrice: (active: "small" | "medium" | "big") => void;
}

export const PriceBullets = ({ price, activePrice, setActivePrice }: Props) => {
  return (
    <form className={css.form}>
      <input
        checked={activePrice === "small"}
        id="small"
        type="radio"
        name="size"
        value="small"
        onChange={() => setActivePrice("small")}
        hidden
      />
      <label htmlFor="small" className={css.label}>
        <div className={css.info}>
          <p className={css.infoText}>Малий</p>
          <p className={css.infoPrice}>
            {(price - price * 0.15).toFixed(0)} грн.
          </p>
        </div>
        <span className={css.customRadio}></span>
      </label>

      <input
        checked={activePrice === "medium"}
        id="medium"
        type="radio"
        name="size"
        value="medium"
        onChange={() => setActivePrice("medium")}
        hidden
      />
      <label htmlFor="medium" className={css.label}>
        <div className={css.info}>
          <p className={css.infoText}>Середній</p>
          <p className={css.infoPrice}>{price.toFixed(0)} грн.</p>
        </div>
        <span className={css.customRadio}></span>
      </label>

      <input
        checked={activePrice === "big"}
        id="big"
        type="radio"
        name="size"
        value="big"
        onChange={() => setActivePrice("big")}
        hidden
      />
      <label htmlFor="big" className={css.label}>
        <div className={css.info}>
          <p className={css.infoText}>Великий</p>
          <p className={css.infoPrice}>
            {(price + price * 0.15).toFixed(0)} грн.
          </p>
        </div>
        <span className={css.customRadio}></span>
      </label>
    </form>
  );
};
