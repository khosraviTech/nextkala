"use client";
import { addToCart } from "@/lib/redux/features/cartSlice";
import wishlistSlice from "@/lib/redux/features/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Wishlist() {
  const wishlistItems = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  const { DeleteFromWishlist } = wishlistSlice.actions;
  if (wishlistItems.length == 0) {
    return (
      <div className=" bg-bg-card p-24 m-24 rounded-3xl border-border border-2 text-5xl text-center text-primary font-extrabold">
        <h1>Your wishlist is empty!</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className=" p-12 flex flex-wrap gap-12">
          {wishlistItems.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-12 gap-4 border-border border-2 rounded-3xl p-6 bg-bg-card"
            >
              <div className="col-span-12">
                <Image
                  src={item.image[0]}
                  alt={`${item.title} image`}
                  width={300}
                  height={300}
                  className=""
                />
              </div>

              <h1 className="col-span-12 text-primary text-xl">{item.title}</h1>

              <h2 className="col-span-12 text-accent-green text-xl font-medium">
                ${item.price}
              </h2>

              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      totalItemPrice: item.price,
                    }),
                  )
                }
                className="cursor-pointer col-span-6 flex items-center gap-2 p-3  rounded-3xl bg-accent-green text-primary font-medium"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>

              <button
                className="cursor-pointer col-span-6  rounded-3xl p-3 text-primary bg-red-500 font-medium"
                onClick={() => dispatch(DeleteFromWishlist(item.id))}
              >
                Delete from wishlist
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
