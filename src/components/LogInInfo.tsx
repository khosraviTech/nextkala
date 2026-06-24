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
              <DropdownMenu.Item>profile</DropdownMenu.Item>

              <DropdownMenu.Item>setting</DropdownMenu.Item>

              <DropdownMenu.Item>orders</DropdownMenu.Item>

              <DropdownMenu.Item>wishlist</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </>
    );
  } else {
    return <Link href="/login">Log In</Link>;
  }
}
