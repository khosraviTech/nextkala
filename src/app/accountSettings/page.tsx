'use client'
import { SessionProvider } from "next-auth/react";
import Settings from "./settingsComponents/Settings";

export default function page() {
  return (
    <div>
      <SessionProvider>
      <Settings/>
      </SessionProvider >
      </div>
  )
}
