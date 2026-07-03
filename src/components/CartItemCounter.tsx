"use client";

import { useAppSelector } from "@/lib/redux/hooks";

export default function CartItemCounter() {
  const cartItems = useAppSelector((state) => state.cart);

  const cartItemCounter = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  if (cartItemCounter > 0) {
    return (
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
        {cartItemCounter}
      </div>
    );
  }
}
