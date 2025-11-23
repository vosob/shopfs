import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

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

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 15000 }}
        slidesPerView={1}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
