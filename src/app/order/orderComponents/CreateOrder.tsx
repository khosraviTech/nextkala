"use client";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { Order } from "@/types/order";
import { useSession } from "next-auth/react";
import orederSlice from "@/lib/redux/features/orderSlice";
import cartSlice from "@/lib/redux/features/cartSlice";
import { useEffect, useMemo } from "react";

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
      <div>
        <div>
          <h1>Thank you for your order!</h1>
          <h3>your order has been confirmed.</h3>
        </div>
        <div>
          <h4>Order number</h4>
          <h4>{newOrder.orderId}</h4>
          <h4>Date</h4>
          <h4>{newOrder.createdAt.split("T")[0]}</h4>{" "}
          <div>
            {newOrder.items.map((item) => (
              <div key={item.title}>
                <h4>
                  {item.title} x{item.quantity}
                </h4>
                <h4>${item.totalItemPrice}</h4>
              </div>
            ))}
          </div>
          <h4>subtotal</h4>
          <h4>${totalPrice}</h4>
          <h4>shipping</h4>
          <h4>$10</h4>
          <h4>Tax</h4>
          <h4>{newOrder.tax}</h4>
          <h4>Total</h4>
          <h4>${newOrder.total}</h4>
        </div>
      </div>
    </>
  );
}
