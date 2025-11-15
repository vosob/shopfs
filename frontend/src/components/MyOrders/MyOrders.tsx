import React from "react";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import css from "./MyOrders.module.css";

const orders = [
  {
    id: 1,
    date: "26.09.19",
    number: "1N30325",
    items: [
      {
        name: "Букет из разноцветных роз (малый)",
        qty: "x2",
        price: "11 300 руб.",
      },
      {
        name: "Букет из разноцветных роз (малый)",
        qty: "x2",
        price: "11 300 руб.",
      },
    ],
    total: "90 000 руб.",
    status: "Доставлено",
  },
  {
    id: 2,
    date: "26.09.19",
    number: "1N30326",
    items: [
      {
        name: "Букет из разноцветных роз (малый)",
        qty: "x2",
        price: "11 300 руб.",
      },
    ],
    total: "11 300 руб.",
    status: "Оплачен",
  },
  {
    id: 3,
    date: "26.09.19",
    number: "1N30327",
    items: [
      {
        name: "Букет из разноцветных роз (малый)",
        qty: "x2",
        price: "11 300 руб.",
      },
    ],
    total: "90 000 руб.",
    status: "В обработке",
  },
];

export const MyOrders = () => {
  return (
    <>
      <Breadcrumbs />
      <div className={css.tableContainer}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Дата заказа</th>
              <th>Наименование</th>
              <th>Сумма</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr className={css.orderHeader}>
                  <td>
                    <div>{order.date}</div>
                    <div>{order.number}</div>
                  </td>
                  <td>
                    {order.items.map((item, idx) => (
                      <div key={idx}>
                        {item.name} {item.qty} {item.price}
                      </div>
                    ))}
                  </td>
                  <td>
                    <div>{order.total}</div>
                  </td>
                  <td
                    className={
                      css[order.status.replace(/\s+/g, "").toLowerCase()]
                    }
                  >
                    {order.status}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
