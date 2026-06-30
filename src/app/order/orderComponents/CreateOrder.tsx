"use client";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { Order } from "@/types/order";
import { useSession } from "next-auth/react";
import orederSlice from "@/lib/redux/features/orderSlice";
import cartSlice from "@/lib/redux/features/cartSlice";
import { useEffect, useMemo } from "react";
import { ClipboardCheck } from "lucide-react";

export default function CreateOrder() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart);
  const { cleanCart } = cartSlice.actions;
  const { addOrder } = orederSlice.actions;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const { data: session } = useSession();
  const user = session?.user;
  const newOrder = useMemo<Order>(
    () => ({
      orderId: uuidv4(),
      userName: user?.name ?? "",
      userEmail: user?.email ?? "",
      items: cartItems,
      subtotal: totalPrice,
      shipping: 10,
      tax: "10%",
      total: totalPrice * 1.1 + 10,
      paymentStatus: "pending",
      orderStatus: "processing",
      createdAt: new Date().toISOString(),
    }),
    [],
  );

  useEffect(() => {
    dispatch(addOrder(newOrder));
    dispatch(cleanCart());
  }, []);
  //dispatch(cleanCart());

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
            <h4 className="text-accent-green ">{newOrder.orderId}</h4>
          </div>

          <div className="col-span-12 flex justify-between text-2xl">
            <h4 className="text-primary">Date</h4>
            <h4 className="text-accent-green ">{newOrder.createdAt.split("T")[0]}</h4>
          </div>

          <div className="col-span-12 flex justify-between text-2xl">
            {newOrder.items.map((item) => (
              <div key={item.title}>
                <h4 className="text-primary">
                  {item.title} x{item.quantity}
                </h4>
                <h4 className="text-accent-green ">${item.totalItemPrice}</h4>
              </div>
            ))}
          </div>


          <div className="col-span-12 flex justify-between text-2xl">
            <h4 className="text-primary">subtotal</h4>
            <h4 className="text-accent-green ">${totalPrice}</h4>
          </div>


          <div className="col-span-12 flex justify-between text-2xl">
            <h4 className="text-primary">shipping</h4>
            <h4 className="text-accent-green ">$10</h4>
          </div>


          <div className="col-span-12 flex justify-between text-2xl">
            <h4 className="text-primary">Tax</h4>
            <h4 className="text-accent-green ">{newOrder.tax}</h4>
          </div>


          <div className="col-span-12 flex justify-between text-2xl">
            <h4 className="text-primary">Total</h4>
            <h4 className="text-accent-green ">${newOrder.total}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
