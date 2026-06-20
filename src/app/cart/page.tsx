"use client";

import cartSlice from "@/lib/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";

import Image from "next/image";

export default function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart);
  const { setQuantity } = cartSlice.actions;

  return (
    <>
      <div>
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
            </div>
          ))}
        </div>

        {/* order summery */}
      </div>
    </>
  );
}
