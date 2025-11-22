import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import css from "./HeroHomePage.module.css";

import banner1 from "../../image/HeroSlider/Баннер1.png";
import banner2 from "../../image/HeroSlider/Баннер2.png";
import banner3 from "../../image/HeroSlider/Баннер3.png";
import banner4 from "../../image/HeroSlider/Баннер4.png";
import banner5 from "../../image/HeroSlider/Баннер5.png";

import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const data = [
  { id: 1, source: banner1 },
  { id: 2, source: banner2 },
  { id: 3, source: banner3 },
  { id: 4, source: banner4 },
  { id: 5, source: banner5 },
];

export const HeroHomePage = () => {
  const { t } = useTranslation("hero");

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000, stopOnInteraction: false }),
  ]);

  return (
    <div className={css.embla} ref={emblaRef}>
      <ul className={css.embla__container}>
        {data.map((item) => (
          <li key={item.id} className={css.embla__slide}>
            <div
              style={{ backgroundImage: `url(${item.source})` }}
              className={css.container}
            >
              <h1 className={css.mainTitle}>
                <Trans
                  i18nKey="title"
                  ns="hero"
                  components={[<span className={css.span} />]}
                />
              </h1>

              <p className={css.subtitle}>{t("subtitle")}</p>

              <button className={css.button}>{t("button")}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
