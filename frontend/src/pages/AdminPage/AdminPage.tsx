import { useForm } from "react-hook-form";
import { getFlowers, postBouquet } from "../../services/admin";
import {
  AddNewBouquet,
  Size,
} from "../../components/Admin/AddNewBouquet/AddNewBouquet";

import css from "./AdminPage.module.css";
import { useQuery } from "@tanstack/react-query";

export type FlowersList = {
  flowerId: string;
  quantity: number;
};

export interface AdminFormData {
  name_uk: string;
  name_en: string;
  size: Size;
  price: number;
  flowers: FlowersList[];
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
  const { data, isLoading, error } = useQuery({
    queryKey: ["flowers"],
    queryFn: getFlowers,
  });

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
    const payload = {
      ...data,
      flowers: data.flowers.map((f) => ({
        flowerId: f,
        quantity: 1,
      })),
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
