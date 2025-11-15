import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import css from "./MyOrders.module.css";
import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../../services/order";
import { Order } from "../../types/orders";
import { format } from "date-fns";

export const MyOrders = () => {
  const { data, isLoading, isError } = useQuery<Order[]>({
    queryKey: ["userOrders"],
    queryFn: () => getUserOrders(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const formatOrderNumber = (id: string) => id.slice(0, 8);

  console.log(data);
  return (
    <>
      <Breadcrumbs />
      <div className={css.tableContainer}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Дата замовлення</th>
              <th>Назва</th>
              <th>Сумма</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <>
                <tr key={`${order.id}-${order.items[0].id}`}>
                  <td rowSpan={order.items.length}>
                    <div>
                      <span>Дата замовлення:</span>
                      <p>{format(new Date(order.createdAt), "dd.MM.yyyy")}</p>
                    </div>
                    <div>
                      <span>Номер замовлення:</span>
                      <p>{formatOrderNumber(order.id)}</p>
                    </div>
                  </td>

                  <td>{order.items[0].bouquet.name}</td>
                  <td>{order.items[0].price} грн.</td>
                  <td rowSpan={order.items.length}>
                    <span>Статус:</span>
                    <p>{order.status}</p>
                  </td>
                </tr>

                {order.items.slice(1).map((item) => (
                  <tr key={`${order.id}-${item.id}`}>
                    <td>{item.bouquet.name}</td>
                    <td>{item.price} грн.</td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
