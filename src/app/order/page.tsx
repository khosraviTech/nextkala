"use client";
import { SessionProvider } from "next-auth/react";
import CreateOrder from "./orderComponents/CreateOrder";

export default function page() {
  return (
    <div>
      <SessionProvider>
        <CreateOrder />
      </SessionProvider>
    </div>
  );
}
