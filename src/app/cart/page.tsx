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
} from "lucide-react";


import Image from "next/image";

import ProceedToCheckout from "./cartComponents/ProceedToCheckout";
import Link from "next/link";

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart);
  const { setQuantity, cleanCart } = cartSlice.actions;
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const itemCounter = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="max-lg:grid-cols-2 grid grid-cols-12 gap-6 p-12 h-full ">
        {/* title of page */}
        <div className=" ml-3 col-span-12 max-lg:col-span-2">
          <h1 className="inline-flex items-center gap-3 text-primary text-4xl mb-3">
            <ShoppingCart className="scale-150 text-accent-green" />
            Your Cart
          </h1>
          <h3 className="text-secondary text-xl">
            {itemCounter} {itemCounter > 1 ? "items" : "item"} in your cart
          </h3>
        </div>

        {/* products list */}
        <div className="max-lg:col-span-2  grid gird-cols-12 col-span-8 border-2 border-border rounded-3xl p-6 bg-bg-card">
          {/* product list col names */}
          {cartItems.length === 0 ? (
            <h1 className="col-span-12 flex justify-center text-primary text-2xl font-bold p-6">
              Your cart is empty!
            </h1>
          ) : (
            <div className="col-span-12 grid grid-cols-12 p-6  text-primary">
              <h1 className="col-span-6">Product</h1>
              <h1 className="col-span-1">Price</h1>
              <h1 className="col-span-3 pl-6">Quantity</h1>
              <h1 className="col-span-1 pl-6">Total</h1>
            </div>
          )}

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="col-span-12 grid grid-cols-12 p-6 gap-6  items-center"
            >
              {/* item image part */}
              <div className="col-span-6 inline-flex items-center text-primary gap-6">
                <Image
                  src={item.image[0]}
                  width={100}
                  height={100}
                  alt="Picture of product"
                  className="bg-gray-700 rounded-2xl"
                />
                {/* item title part */}
                <h1>{item.title}</h1>
              </div>
              {/* item price part */}
              <h1 className="col-span-1 text-primary">{item.price}</h1>

              {/* quantity part & buttons */}
              <div className="col-span-3 inline-flex items-center  text-primary">
                <button className="cursor-pointer border-2 border-border rounded-l-xl text-secondary text-xl p-2"
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
                <h2 className="border-2 border-border text-secondary text-xl p-2 ">{item.quantity}</h2>
                <button className="cursor-pointer border-2 border-border rounded-r-xl text-secondary text-xl p-2"
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
              <div className="col-span-1 text-accent-green ">
                ${item.totalItemPrice}
              </div>

              {/* delet item part- trash icon */}
              <button
                className="cursor-pointer col-span-1 flex  items-center  text-secondary pl-3"
                onClick={() => dispatch(DeleteFromCart(item.id))}
              >
                <Trash2 className="scale-100 shrink-0 " />
              </button>
            </div>
          ))}

          {/* footer of product list */}
          <div className="col-span-12 flex justify-between items-center ">
            <Link href="/">
              <button className="cursor-pointer inline-flex items-center gap-2 p-3 rounded-2xl border-2 border-border text-secondary  hover:text-white hover:border-accent-green hover:bg-accent-green">
                <MoveLeft />
                continue shopping
              </button>
            </Link>
            <button 
              onClick={() => dispatch(cleanCart())}
              className="cursor-pointer inline-flex items-center gap-2 p-3 rounded-2xl border-2 border-border text-secondary  hover:text-white hover:border-red-600 hover:bg-red-600"
            >
              clear Cart
              <Trash2 className="scale-80" />
            </button>
          </div>
        </div>

        {/* order summery & Proceed to checkout */}
        <div className="max-lg:col-span-2 max-lg:gap-10 grid grid-cols-12 col-span-4 border-2 rounded-3xl bg-bg-card border-border p-6 ">
          <h1 className="col-span-12 text-primary text-3xl">Order Summery</h1>
          <div className="col-span-12 flex justify-between text-secondary text-xl">
            <h3>
              Subtotal ({itemCounter} {itemCounter > 1 ? "items" : "item"})
            </h3>
            <h3>${totalPrice}</h3>
          </div>
          <div className="col-span-12 flex justify-between  text-secondary text-xl">
            <h3>Shipping</h3>
            <h3>$10</h3>
          </div>
          <div className="col-span-12 flex justify-between  text-primary text-2xl">
            <h1>Total</h1>
            <h1>${totalPrice + 10}</h1>
          </div>

          {/* checkout button */}
          <div className="max-lg:col-span-12 max-lg:p-4 col-start-2 col-span-10 cursor-pointer m-0 p-0 outline-0 border-2 border-accent-green  bg-accent-green rounded-2xl flex justify-center items-center font-bold ">
            {/* // TODO: Enable checkout button after user authentication is implemented in userSlice. */}
            
              <ProceedToCheckout  itemCounter={itemCounter} />
            
          </div>
        </div>

        {/* our shopping values*/}
        <div className=" max-lg:col-span-2 max-lg:flex-col max-lg:gap-5 max-lg:justify-center max-lg:items-center max-lg:space-y-5 p-6 pl-12 pr-12 col-span-12 flex justify-between border-2 border-border   bg-bg-card rounded-3xl ">
          <div className="inline-flex items-center gap-3 ">
            <Truck className="scale-150 text-accent-green" />
            <div className="flex-col items-center">
              <h2 className="text-primary">Free Shipping</h2>
              <h3 className="text-secondary">on orders over $50</h3>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 ">
            <ShieldCheck className="scale-140 text-accent-green" />
            <div className="flex-col items-center">
              <h2 className="text-primary">Secure Payment</h2>
              <h3 className="text-secondary">100% secure payment</h3>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 ">
            <RefreshCw className="scale-120 text-accent-green" />
            <div className="flex-col items-center">
              <h2 className="text-primary">Easy Return</h2>
              <h3 className="text-secondary">30-day return policy</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
