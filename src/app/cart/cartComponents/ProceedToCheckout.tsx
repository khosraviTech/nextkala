"use client";

import cartSlice from "@/lib/redux/features/cartSlice";
import orederSlice from "@/lib/redux/features/orderSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export default function ProceedToCheckout(props: { itemCounter: number }) {
  
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { data: session ,status } = useSession();
  const cartItems = useAppSelector((state) => state.cart);
  const { cleanCart } = cartSlice.actions;
  const { addOrder } = orederSlice.actions;
 
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
 
  if (props.itemCounter == 0) {
 
    return (
      <>
        <button className="cursor-pointer p-0 m-0 w-full max-lg:text-2xl"
          onClick={() => {
            alert("But your shopping cart is empty!");
          }}
        >
          Proceed to checkout
        </button>
      </>
    );
  }
  if (session?.user && props.itemCounter > 0) {
    return (
      <>
        <button 
        className="cursor-pointer p-0 m-0 w-full max-lg:text-2xl "
          onClick={() => {
            const id = uuidv4();
            dispatch(
              addOrder({
                orderId: id,
                userName: session.user?.name ?? "",
                userEmail: session.user?.email ?? "",
                items: cartItems,
                subtotal: totalPrice,
                shipping: 10,
                tax: "10%",
                total: totalPrice * 1.1 + 10,
                paymentStatus: "pending",
                orderStatus: "processing",
                createdAt: new Date().toISOString(),
              }),
            );
            dispatch(cleanCart());
            router.push(`/order/${id}`);
          }}
        >
          Proceed to checkout
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
        className="cursor-pointer p-0 m-0 w-full max-lg:text-2xl"
          onClick={() => {
            console.log("CLICK SESSION:", session);
  console.log("CLICK STATUS:", status);
            alert("Please login first! then you can proceed to checkout");
          }}
        >
          Proceed to checkout
        </button>
      </>
    );
  }
}
