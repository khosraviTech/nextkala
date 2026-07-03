"use client";
import Link from "next/link";
import Logo from "./Logo";
import LogInInfo from "./LogInInfo";
import { Heart, ShoppingCart } from "lucide-react";
import CartItemCounter from "./CartItemCounter";

export default function Menu() {
  return (
    <div className="flex items-center justify-between gap-6 p-2 bg-white w-full   shadow-lg outline-0 ">
      <div className="flex items-center gap-6">
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/">Home</Link>

        <Link href="/about">About</Link>
      </div>

      <div className="flex items-center gap-6">
        {/* SearchBar */}
        {/* <SearchBar/> */}

        {/* Login User */}
        <LogInInfo />

        {/* Cart Icon */}
        <Link href="/cart" className="relative flex items-center">
          <ShoppingCart className='scale-120' />

          <div className="absolute -top-2 -right-1 ">
            <CartItemCounter  />
          </div>
        </Link>

        {/* Wishlist Icon */}
        <Link href="/wishlist">
          <Heart />
        </Link>
      </div>
    </div>
  );
}
