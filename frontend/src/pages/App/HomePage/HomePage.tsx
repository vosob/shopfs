import { HeroHomePage } from "../../../components/HeroHomePage/HeroHomePage";
import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div>
      <HeroHomePage /> <div className={css.homeContainer}></div>
    </div>
  );
};
