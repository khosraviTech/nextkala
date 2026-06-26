'use client'
import wishlistSlice from "@/lib/redux/features/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { DollarSign } from "lucide-react";
import Image from "next/image";

export default function Wishlist() {
  const wishlistItems = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  const { DeleteFromWishlist } = wishlistSlice.actions;

  return (
    <>
      <div>
        {wishlistItems.map((item) => (
          <div key={item.title}>
            <div>
              <Image
                src={item.image[0]}
                alt={`${item.title} image`}
                width={300}
                height={300}
              />
            </div>
            <h1>{item.title}</h1>
            <h2 className="flex justify-center">
              <DollarSign className="size-5" />
              {item.price}
            </h2>

            <button onClick={() => dispatch(DeleteFromWishlist(item.id))}>
              Delete from wishlist
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
