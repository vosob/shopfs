import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import css from "./MyOrders.module.css";
import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../../services/order";
import { Order } from "../../types/orders";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { getTranslatedField } from "../../Utils/getTranslatedField";

export const MyOrders = () => {
  const { data, isLoading, isError } = useQuery<Order[]>({
    queryKey: ["userOrders"],
    queryFn: () => getUserOrders(),
  });

  const { i18n } = useTranslation();
  const lang = i18n.language;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const formatOrderNumber = (id: string) => id.slice(0, 8);

  console.log(data);

  return (
    <div style={{ width: "100%" }}>
      <Breadcrumbs />

      <div className={css.tableContainer}>
        <table className={css.table}>
          <tbody>
            {data.map((order) => {
              const name = getTranslatedField(
                order.items[0].bouquet,
                "name",
                lang
              );
              console.log("name", name);

              return (
                <>
                  <tr key={`${order.id}-${order.items[0].id}`}>
                    <td rowSpan={order.items.length}>
                      <div style={{ marginBottom: "8px" }}>
                        <span className={css.spanStyle}>Дата замовлення:</span>
                        <p className={css.pStyle}>
                          {format(new Date(order.createdAt), "dd.MM.yyyy")}
                        </p>
                      </div>

                      <div>
                        <span className={css.spanStyle}>Номер замовлення:</span>
                        <p className={css.pStyle}>
                          {formatOrderNumber(order.id)}
                        </p>
                      </div>
                    </td>

                    <td>
                      <span className={css.spanStyle}>Назва</span>
                      <p className={css.pStyle}>{name}</p>
                    </td>

                    <td className={css.price}>
                      <span className={css.spanStyle}>Ціна</span>
                      <p>{order.items[0].price} грн.</p>
                    </td>

                    <td className={css.price}>
                      <span className={css.spanStyle}>Сумма</span>
                      <p>
                        {order.items.reduce((acc, item) => acc + item.price, 0)}
                        грн.
                      </p>
                    </td>

                    <td rowSpan={order.items.length}>
                      <span className={css.spanStyle}>Статус:</span>
                      <p className={css.pStyle}>
                        {order.status === "PENDING"
                          ? "В обробці"
                          : order.status}
                      </p>
                    </td>
                  </tr>

                  {order.items.slice(1).map((item) => {
                    const itemName = getTranslatedField(
                      item.bouquet,
                      "name",
                      lang
                    );
                    return (
                      <tr key={`${order.id}-${item.id}`}>
                        <td>
                          <p className={css.pStyle}>{itemName}</p>
                        </td>

                        <td className={css.price}>
                          <span className={css.spanStyle}>Сумма</span>
                          <p>{item.price} грн.</p>
                        </td>
                      </tr>
                    );
                  })}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
