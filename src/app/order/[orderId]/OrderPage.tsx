"use client";

import { useAppSelector } from "@/lib/redux/hooks";
import { ClipboardCheck } from "lucide-react";

export default function OrderPage(props: { orderId: string }) {
  const orders = useAppSelector((state) => state.order);

  const { orderId } = props;
  const newOrder = orders.find((item) => item.orderId == orderId);
  return (
    <>
      <div className="grid grid-cols-12 gap-6 p-6">
        {/* title of page */}
        <div className="col-span-12 rounded-4xl pt-6 text-center">
          <div className="inline-flex items-center gap-2 text-4xl">
            <ClipboardCheck className="scale-140 text-accent-green shrink-0" />
            <h1 className="text-primary  ">Thank you for your order!</h1>
          </div>

          <h3 className="text-secondary mt-2 text-xl">
            your order has been confirmed.
          </h3>
        </div>

        {/* checkout  */}
        <div className="grid grid-cols-12 gap-6 p-6 col-span-12 p-3 border-border border-2 rounded-3xl bg-bg-card">
          <div className="col-span-12 flex justify-between text-2xl">
            <h4 className="text-primary">Order number</h4>
            <h4 className="text-accent-green ">{newOrder?.orderId}</h4>
          </div>

          <div className="col-span-12 flex justify-between text-2xl">
            <h4 className="text-primary">Date</h4>
            <h4 className="text-accent-green ">
              {newOrder?.createdAt.split("T")[0]}
            </h4>
          </div>

          <div className="col-span-12   text-2xl ">
            {newOrder?.items.map((item) => (
              <div key={item.title} className="flex justify-between ">
                <h4 className="text-primary  pt-4">
                  {item.title} x{item.quantity}
                </h4>
                <h4 className="text-accent-green">${item.totalItemPrice}</h4>
              </div>
            ))}
          </div>

          <div className="col-span-12 flex justify-between text-2xl">
            <h4 className="text-primary">subtotal</h4>
            <h4 className="text-accent-green ">${newOrder?.subtotal}</h4>
          </div>

          <div className="col-span-12 flex justify-between text-2xl">
            <h4 className="text-primary">shipping</h4>
            <h4 className="text-accent-green ">$10</h4>
          </div>

          <div className="col-span-12 flex justify-between text-2xl">
            <h4 className="text-primary">Tax</h4>
            <h4 className="text-accent-green ">{newOrder?.tax}</h4>
          </div>

          <div className="col-span-12 flex justify-between text-2xl">
            <h4 className="text-primary">Total</h4>
            <h4 className="text-accent-green ">${newOrder?.total}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
