"use client";

import cartSlice, { DeleteFromCart } from "@/lib/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { Trash2 } from "lucide-react";
import { MoveLeft } from "lucide-react";
import { Truck } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { RefreshCw } from "lucide-react";
import { ShoppingCart } from 'lucide-react';

import Image from "next/image";

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
      <div>
        <div>
          <h1><ShoppingCart/>Your Cart</h1>
          <h3>{itemCounter} {itemCounter > 1 ? "items" : "item"} in your cart</h3>
        </div>
        {/* products */}
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              {/* item image part */}
              <Image
                src={item.image[0]}
                width={100}
                height={100}
                alt="Picture of Amir Mohammad Khosravi"
                className="w-full h-full object-cover"
              />
              {/* item title part */}
              <h1>{item.title}</h1>
              {/* item price part */}
              <h1>{item.price}</h1>
              {/* quantity part */}
              <div>
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

              {item.totalItemPrice}
              {/* delet item part- trash icon */}
              <button onClick={() => dispatch(DeleteFromCart(item.id))}>
                <Trash2 />
              </button>
            </div>
          ))}
        </div>
        {/* footer of product list */}
        <div>
          <button>
            <MoveLeft />
            continue shopping
          </button>
          <button>
            clear Cart
            <Trash2 />
          </button>
        </div>
        {/* order summery & Proceed to checkout */}
        <div>
          <h1>Order Summery</h1>

          <h3>
            Subtotal ({itemCounter} {itemCounter > 1 ? "items" : "item"})
          </h3>
          <h3>
            ${totalPrice}
          </h3>

          <h3>Shipping</h3>
          <h3>
            $10
          </h3>
          <h1>Total</h1>
          <h1>
            ${totalPrice + 10}
          </h1>

          {/* // TODO: Enable checkout button after user authentication is implemented in userSlice. */}
          <button>Proceed to checkout</button>
        </div>
        {/* our shopping values*/}
        <div>
          <div>
            <Truck />
            <h2>Free Shipping</h2>
            <h3>on orders over $50</h3>
          </div>
          <div>
            <ShieldCheck />

            <h2>Secure Payment</h2>
            <h3>100% secure payment</h3>
          </div>

          <div>
            <RefreshCw />
            <h2>Easy Return</h2>
            <h3>30-day return policy</h3>
          </div>
        </div>
      </div>
    </>
  );
}
