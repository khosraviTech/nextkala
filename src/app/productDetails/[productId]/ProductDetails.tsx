"use client";
import cartSlice from "@/lib/redux/features/cartSlice";
import wishlistSlice from "@/lib/redux/features/wishlistSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ProductDetails(props: { product: any }) {
  const dispatch = useAppDispatch();
  const { addToCart } = cartSlice.actions;
  const { addToWishlist } = wishlistSlice.actions;
  const { product } = props;

  return (
    <>
      <div className="flex flex-wrap gap-20 m-10 ">
        {/* product info */}
        <div
          key={product.id}
          className="flex-1 grid grid-cols-2  gap-5 p-6  text-amber-50 text-center  bg-blue-950  outline-0 border-2 border-blue-950 rounded-3xl shadow-2xl  "
        >
          <div className="col-span-2">
            <Image
              src={product.images[0]}
              alt={`${product.title} image`}
              width={300}
              height={300}
            />
          </div>

          <h1 className="col-span-2">{product.title}</h1>
          <h2 className="col-span-1">$ {product.price}</h2>

          <h3 className="col-span-1">⭐{product.rating}</h3>

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
            className="cursor-pointer flex items-center gap-2 rounded-2xl px-4 py-2 hover:text-accent-green border-2"
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
            className="cursor-pointer p-2 rounded-2xl hover:text-pink-600 border-2 flex items-center gap-2"
          >
            <Heart className="h-5 w-5" />
            Add to Wish list
          </button>
        </div>


        <div className="flex-1 m-20">
          <h3 className="text-primary">{product.description}</h3>
        </div>

        
      </div>
    </>
  );
}
