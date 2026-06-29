"use client";

import cartSlice, { DeleteFromCart } from "@/lib/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  Trash2,
  MoveLeft,
  ShoppingCart,
  Truck,
  RefreshCw,
  ShieldCheck,
  CreditCard,

} from "lucide-react";
import { SessionProvider } from "next-auth/react";

import Image from "next/image";

import ProceedToCheckout from "./cartComponents/ProceedToCheckout";

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart);
  const { setQuantity } = cartSlice.actions;
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const itemCounter = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="grid grid-cols-12 gap-6 border-2 border-blue-500 ">
        {/* title of page */}
        <div className="ml-3 space-y-2  col-span-12">
          <h1 className="inline-flex items-center gap-2">
            <ShoppingCart />
            Your Cart
          </h1>
          <h3>
            {itemCounter} {itemCounter > 1 ? "items" : "item"} in your cart
          </h3>
        </div>

        {/* products list */}
        <div className="grid gird-cols-12 col-span-8 border-2 border-red-500 p-6">
          {/* product list col names */}
          <div className="col-span-12 grid grid-cols-12 p-6 ">
            <h1 className="col-span-8">Product</h1>
            <h1 className="col-span-1">Price</h1>
            <h1 className="col-span-1">Quantity</h1>
            <h1 className="col-span-1 pl-6">Total</h1>
          </div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="col-span-12 grid grid-cols-12 p-6 gap-6  items-center"
            >
              {/* item image part */}
              <div className="col-span-8 inline-flex items-center">
                <Image
                  src={item.image[0]}
                  width={100}
                  height={100}
                  alt="Picture of product"
                  className=""
                />
                {/* item title part */}
                <h1>{item.title}</h1>
              </div>
              {/* item price part */}
              <h1 className="col-span-1">{item.price}</h1>

              {/* quantity part */}
              <div className="col-span-1 inline-flex items-center">
                <button
                  onClick={() =>
                    dispatch(
                      setQuantity({
                        id: item.id,
                        quantity: item.quantity - 1,
                      }),
                    )
                  }
                >
                  -
                </button>
                <h2>{item.quantity}</h2>
                <button
                  onClick={() =>
                    dispatch(
                      setQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      }),
                    )
                  }
                >
                  +
                </button>
              </div>

              {/* total item price part */}
              <div className="col-span-1">{item.totalItemPrice}</div>

              {/* delet item part- trash icon */}
              <button
                className="col-span-1 flex  items-center "
                onClick={() => dispatch(DeleteFromCart(item.id))}
              >
                <Trash2 />
              </button>
            </div>
          ))}

          {/* footer of product list */}
          <div className="col-span-12 flex justify-between ">
            <button className="inline-flex items-center gap-2">
              <MoveLeft />
              continue shopping
            </button>
            <button className="inline-flex items-center gap-2">
              clear Cart
              <Trash2 />
            </button>
          </div>
        </div>

        {/* order summery & Proceed to checkout */}
        <div className="grid grid-cols-12 col-span-4 border-2 border-green-500 p-6 ">
          <h1 className="col-span-12">Order Summery</h1>
          <div className="col-span-12 flex justify-between">
            <h3>
              Subtotal ({itemCounter} {itemCounter > 1 ? "items" : "item"})
            </h3>
            <h3>${totalPrice}</h3>
          </div>
          <div className="col-span-12 flex justify-between">
            <h3>Shipping</h3>
            <h3>$10</h3>
          </div>
          <div className="col-span-12 flex justify-between">
            <h1>Total</h1>
            <h1>${totalPrice + 10}</h1>
          </div>
          {/* checkout button */}
          <div className="col-span-12 border-2 border-red-500  text-center p-2" >
          {/* // TODO: Enable checkout button after user authentication is implemented in userSlice. */}
          <SessionProvider>
            <ProceedToCheckout itemCounter={itemCounter} />
          </SessionProvider>
        </div>
        </div>

        {/* our shopping values*/}
        <div className="p-6 col-span-12 flex justify-between border-2 border-purple-500 ">
          <div className="inline-flex items-center gap-3">
            <Truck className="scale-150" />
            <div className="flex-col items-center">
              <h2>Free Shipping</h2>
              <h3>on orders over $50</h3>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 ">
            <ShieldCheck className="scale-140" />
            <div className="flex-col items-center">
              <h2>Secure Payment</h2>
              <h3>100% secure payment</h3>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 ">
            <RefreshCw className="scale-120" />
            <div className="flex-col items-center">
              <h2>Easy Return</h2>
              <h3>30-day return policy</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
