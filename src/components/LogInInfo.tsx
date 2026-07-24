"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function LogInInfo() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="cursor-pointer flex items-center gap-2 ">
              <div className="rounded-full overflow-hidden border-3 border-black shadow-lg" >
                <Image
                  src={session.user.image!.toString()}
                  alt={`${session.user.name} image`}
                  width={30}
                  height={30}
                  // TODO: fix image hight when logged in with gmail.
                  className="w-7.5 h-7.5 "
                  
                />
              </div>
              {session.user.name}
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal >
            <DropdownMenu.Content className="grid gap-3  text-primary border rounded-b-3xl p-6 bg-bg-dark">

              <DropdownMenu.Item className="text-xl m-2 hover:border-none">
                <Link href="/profile"  >profile</Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="text-xl m-2 ">
                <Link href="/accountSettings">setting</Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="text-xl m-2 ">
                <Link href="/profileOrders">orders</Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="text-xl m-2 ">
                <Link href="/wishlist">wishlist</Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item className=" m-2 ">
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Log Out
                </button>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </>
    );
  } else {
    return <Link href="/login">Log In</Link>;
  }
}
