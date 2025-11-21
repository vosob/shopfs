import css from "./CreateStars.module.css";
import { FaStar } from "react-icons/fa";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { Numbers, Reviews } from "../../types/reviews";

interface CreateStarsProps {
  numberItem?: number;
  register: UseFormRegister<Reviews>;
  setValue: UseFormSetValue<Reviews>;
  watch: UseFormWatch<Reviews>;
}

export const CreateStars = ({
  numberItem = 5,
  register,
  setValue,
  watch,
}: CreateStarsProps) => {
  const rating = watch("rating") || 0;

  return (
    <>
      <input type="hidden" {...register("rating")} />

      <ul className={css.itemContainer}>
        {Array.from({ length: numberItem }).map((_, index) => {
          const isActive = index < rating;
          return (
            <li
              key={index}
              style={{ color: isActive ? "gold" : "gray", cursor: "pointer" }}
              onClick={() => setValue("rating", (index + 1) as Numbers)}
            >
              <FaStar />
            </li>
          );
        })}
      </ul>
    </>
  );
};
