"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


export default function LogInInfo() {
  const { data: session } = useSession();

 

  if (session?.user) {
    
    return (
      <>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="w-10 h-10 rounded-full">
              {session.user.name}
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content>
              <DropdownMenu.Item><Link href="/profile">profile</Link></DropdownMenu.Item>

              <DropdownMenu.Item><Link href="/accountSettings">setting</Link></DropdownMenu.Item>

              <DropdownMenu.Item><Link href="/profileOrders">orders</Link></DropdownMenu.Item>

              <DropdownMenu.Item><Link href="/wishlist">wishlist</Link></DropdownMenu.Item>

              <DropdownMenu.Item><button onClick={()=>{signOut()}}>Log Out</button></DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </>
    );
  } else {
    return <Link href="/login">Log In</Link>;
  }
}
