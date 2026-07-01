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
            <button className=" ">
              {session.user.name}
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal >

            <DropdownMenu.Content className="grid gap-3  text-primary border-2 rounded-b-3xl p-6 bg-bg-dark">
            
              <DropdownMenu.Item className="text-xl m-2 "><Link href="/profile">profile</Link></DropdownMenu.Item>

              <DropdownMenu.Item className="text-xl m-2 "><Link href="/accountSettings">setting</Link></DropdownMenu.Item>

              <DropdownMenu.Item className="text-xl m-2 "><Link href="/profileOrders">orders</Link></DropdownMenu.Item>

              <DropdownMenu.Item className="text-xl m-2 "><Link href="/wishlist">wishlist</Link></DropdownMenu.Item>

              <DropdownMenu.Item className=" m-2 "><button  onClick={()=>{signOut()}}>Log Out</button></DropdownMenu.Item>
           
            </DropdownMenu.Content>
          
          </DropdownMenu.Portal>
        
        </DropdownMenu.Root>
      </>
    );
  } else {
    return <Link href="/login">Log In</Link>;
  }
}
