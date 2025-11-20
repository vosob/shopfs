import { useState } from "react";
import css from "./CreateStars.module.css";
import { FaStar } from "react-icons/fa";

interface numberItemProps {
  numberItem?: number;
}

export const CreateStars = ({ numberItem = 5 }: numberItemProps) => {
  const [activeItem, setActiveItem] = useState<number>(-1);

  return (
    <ul className={css.itemContainer}>
      {Array.from({ length: numberItem }).map((_, index) => {
        const activeStyle = index <= activeItem ? { color: "gold" } : {};

        return (
          <li
            key={index}
            style={activeStyle}
            onClick={() => setActiveItem(index)}
          >
            <FaStar />
          </li>
        );
      })}
    </ul>
  );
};
