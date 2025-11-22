import freeDeliveryImg from "./bonus/freeDelivery.png";
import giftCardImg from "./bonus/giftCard.png";
import allDayDeliveryImg from "./bonus/allDayDelivery.png";
import discountSystemImg from "./bonus/discountSystem.png";

import { useTranslation } from "react-i18next";

import css from "./Bonus.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export const Bonus = () => {
  const { t } = useTranslation("bonus");

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000, stopOnInteraction: false }),
  ]);

  const bonuses = [
    { key: "freeDelivery", img: freeDeliveryImg },
    { key: "giftCard", img: giftCardImg },
    { key: "allDayDelivery", img: allDayDeliveryImg },
    { key: "discountSystem", img: discountSystemImg },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className={`${css.bonusContainer} ${"container"}`}>
      <div className={css.embla} ref={emblaRef}>
        <ul className={css.embla__container}>
          {bonuses.map(({ key, img }) => (
            <li className={`${css.embla__slide} ${css.bonusItem}`} key={key}>
              <img className={css.img} src={img} alt={key} />
              <div>
                <span className={css.spanColor}>{t(`${key}.highlight`)}</span>
                <span>{t(`${key}.text`)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* BULLETS */}
      <div className={css.dots}>
        {bonuses.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`${css.dot} ${
              index === selectedIndex ? css.dotActive : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};
