import { FaRegEdit } from "react-icons/fa";
import css from "./Profile.module.css";
import { useQuery } from "@tanstack/react-query";
import { me } from "../../services/users";

export const Profile = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: me,
  });
  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error loading bouquets</p>;
  return (
    <div className={css.profileContainer}>
      <div className={css.infoContainer}>
        <h2 className={css.profileTitle}>Інформація про мене</h2>

        <button className={css.profileBtn}>
          <span className={css.btnName}>Редагувати</span>
          <FaRegEdit />
        </button>
      </div>
      <div className={css.inputContainer}>
        <label htmlFor="">
          <p className={css.labelForm}>Ім'я та Фамілія</p>
          <input className={css.inputForm} type="text" value={data.name} />
        </label>

        <label htmlFor="">
          <p className={css.labelForm}>Місто</p>
          <input type="text" className={css.inputForm} value={data.city} />
        </label>

        <label htmlFor="">
          <p className={css.labelForm}>Моб.телефон</p>
          <input type="phone" className={css.inputForm} value={data.phone} />
        </label>

        <label htmlFor="">
          <p className={css.labelForm}>Адрес</p>
          <input type="email" className={css.inputForm} value={data.email} />
        </label>
      </div>
    </div>
  );
};
