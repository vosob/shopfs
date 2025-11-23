import freeDeliveryImg from "./bonus/freeDelivery.png";
import giftCardImg from "./bonus/giftCard.png";
import allDayDeliveryImg from "./bonus/allDayDelivery.png";
import discountSystemImg from "./bonus/discountSystem.png";

import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import css from "./Bonus.module.css";

export const Bonus = () => {
  const { t } = useTranslation("bonus");

  const bonuses = [
    { key: "freeDelivery", img: freeDeliveryImg },
    { key: "giftCard", img: giftCardImg },
    { key: "allDayDelivery", img: allDayDeliveryImg },
    { key: "discountSystem", img: discountSystemImg },
  ];

  return (
    <div className={`${css.bonusContainer} ${"container"}`}>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 15000 }}
      >
        {bonuses.map(({ key, img }) => (
          <SwiperSlide className={css.slide} key={key}>
            <img className={css.img} src={img} alt={key} />
            <div className={css.text}>
              <span className={css.spanColor}>{t(`${key}.highlight`)}</span>
              <span>{t(`${key}.text`)}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
