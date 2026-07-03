"use client";
import { DollarSign } from "lucide-react";
import { Heart } from "lucide-react";
import { Product } from "@/types/product";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useAppDispatch } from "@/lib/redux/hooks";
import cartSlice from "@/lib/redux/features/cartSlice";
import wishlistSlice from "@/lib/redux/features/wishlistSlice";
import Link from "next/link";

const Product_Per_Page = 6;

export default function ProductList({ products }: { products: Product[] }) {
  const dispatch = useAppDispatch();

  const { addToCart } = cartSlice.actions;
  const { addToWishlist } = wishlistSlice.actions;
  //page 1 -> [0-6)
  //page 2 -> [6-12)
  //...
  //page last -> [last-6 -last)

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * Product_Per_Page;
  const totalPages = Math.ceil(products.length / Product_Per_Page);

  const paginatedProducts = products.slice(
    startIndex,
    startIndex + Product_Per_Page,
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  };

  return (
    <>
      {/* products in selected page */}

      <div className="flex flex-wrap justify-center gap-6 p-12">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="text-amber-50 text-center  bg-blue-950 p-5 outline-0 border-2 border-blue-950 rounded-3xl shadow-2xl  "
          ><Link href={`/productDetails/${product.id}`}>
            <div>
              <Image
                src={product.images[0]}
                alt={`${product.title} image`}
                width={300}
                height={300}
              />
            </div>
            </Link>
            <h1>{product.title}</h1>
            <h2 className="flex justify-center">
              <DollarSign className="size-5" />
              {product.price}
            </h2>
            <h3>⭐{product.rating}</h3>

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
              className="cursor-pointer flex items-center gap-2 rounded-md px-4 py-2 hover:bg-gray-100"
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
              className="cursor-pointer p-2 rounded-full hover:bg-gray-100"
            >
              <Heart className="h-5 w-5" />
              Add to Wish list
            </button>
          </div>
        ))}
      </div>

      {/*Pagination buttons */}
      <div className="text-center">
        {/* prev button */}

        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className=" cursor-pointer px-4 py-2 border rounded disabled:opacity-60 disabled:cursor-no-drop text-white"
        >
          Prev
        </button>

        {/* page numbers */}

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => {
                goToPage(pageNumber);
              }}
              className={`w-10 h-10 rounded ${
                pageNumber === currentPage
                  ? "bg-red-500 text-white"
                  : "border hover:bg-gray-100 text-white"
              }`}
            >
              {pageNumber}
            </button>
          ),
        )}

        {/* next button */}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="cursor-pointer px-4 py-2 border rounded disabled:opacity-60 text-white disabled:cursor-no-drop"
        >
          Next
        </button>
      </div>
    </>
  );
}
