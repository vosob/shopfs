import { useForm } from "react-hook-form";
import { postBouquet } from "../../services/admin";
import {
  AddNewBouquet,
  Size,
} from "../../components/Admin/AddNewBouquet/AddNewBouquet";
import { flowers } from "../../components/Admin/data";
import css from "./AdminPage.module.css";

export interface AdminFormData {
  name_uk: string;
  name_en: string;
  size: Size;
  price: number;
  flowers: string[];
}

export interface BouquetPayload {
  name_uk: string;
  name_en: string;
  size: Size;
  price: number;
  flowers: {
    name_uk: string;
    name_en: string;
  }[];
}

export const AdminPage = () => {
  const { handleSubmit, register, reset } = useForm<AdminFormData>({
    defaultValues: {
      name_uk: "",
      name_en: "",
      size: Size.SMALL,
      price: 0,
      flowers: [],
    },
  });

  const onSubmit = async (data: AdminFormData) => {
    const selectedFlowers = data.flowers.map((flowerUk) => {
      const flowerObj = flowers.find((f) => f.name_uk === flowerUk);
      return flowerObj!;
    });

    const payload: BouquetPayload = {
      ...data,
      flowers: selectedFlowers,
    };

    try {
      await postBouquet(payload);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  return (
    <div className="container">
      <h2 className={css.title}>Add new bouquet</h2>
      <AddNewBouquet
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
      />
    </div>
  );
};
