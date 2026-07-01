"use client";
import Link from "next/link";
import Logo from "./Logo";
import LogInInfo from "./LogInInfo";
import { Heart, ShoppingCart } from "lucide-react";



export default function Menu() {
  return (
    <div className="flex items-center gap-6 p-2 bg-white w-full   shadow-lg outline-0 ">
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/">Home</Link>

      <Link href="/about">About</Link>
      
        <LogInInfo />
     

      {/* Search bar */}
      
      {/* Cart Icon */}
      <Link href="/cart">
        <ShoppingCart />
      </Link>

      {/* Wishlist Icon */}
      <Link href="/wishlist">
        <Heart />
      </Link>
    </div>
  );
}
