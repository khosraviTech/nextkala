"use client";
import { useAppSelector } from "@/lib/redux/hooks";

export default function OrderList() {
  const ordersList = useAppSelector((state) => state.order);

  return (
    <>
      <div>
        
        {

        ordersList.map((order) => (
          <div key={order.orderId}>
            Date: {order.createdAt} ID: {order.orderId}
          </div>
        ))}
        
      </div>
    </>
  );
}
