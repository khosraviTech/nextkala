import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import React from "react";

export default function OrderList() {

  const ordersList = useAppSelector((state) => state.order);

  return (
    <>
      <div>
        {ordersList.map((order) => (
          <div key={order.orderId}>
            Date: {order.createdAt} ID: {order.orderId}
          </div>
        ))}
      </div>
    </>
  );
}
