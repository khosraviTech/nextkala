"use client";
import cartSlice from "@/lib/redux/features/cartSlice";
import wishlistSlice from "@/lib/redux/features/wishlistSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { DollarSign, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ProductDetails(props: { product: any }) {
  const dispatch = useAppDispatch();
  const { addToCart } = cartSlice.actions;
  const { addToWishlist } = wishlistSlice.actions;
  const { product } = props;

  return (
    <>
      {/* product info */}
      <div
        key={product.id}
        className="text-amber-50 text-center  bg-blue-950 p-5 outline-0 border-2 border-blue-950 rounded-3xl shadow-2xl  "
      >
        <div>
          <Image
            src={product.images[0]}
            alt={`${product.title} image`}
            width={300}
            height={300}
          />
        </div>

        <h1>{product.title}</h1>
        <h2 className="flex justify-center">
          <DollarSign className="size-5" />
          {product.price}
        </h2>
        <h3>⭐{product.rating}</h3>
      </div>

      {/* buttons */}
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id: product.id,
              title: product.title,
              image: product.images,
              price: product.price,
              quantity: 1,
              totalItemPrice: product.price,
            }),
          )
        }
        className="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100"
      >
        <ShoppingCart size={18} />
        Add to Cart
      </button>

      <button
        onClick={() => {
          dispatch(
            addToWishlist({
              id: product.id,
              title: product.title,
              image: product.images,
              price: product.price,
              quantity: 1,
              totalItemPrice: product.price,
            }),
          );
        }}
        className="p-2 rounded-full hover:bg-gray-100 flex items-center gap-2"
      >
        <Heart className="h-5 w-5" />
        Add to Wish list
      </button>
    </>
  );
}
