'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Profile() {
  const {data:session}=useSession()
  return (
    <>
    <div className="grid grid-cols-12">
    <h1 className="col-span-12 text-3xl text-primary pl-12 pt-6 pb-3  font-medium">Your Account</h1>
    <h3 className="col-span-12 text-xl text-secondary pl-12  font-medium">Hello {session?.user.firstName}</h3>
     
     
      <ul className=" col-span-12 grid grid-cols-12 gap-12 m-12">
        
        
        <li className="col-span-4 text-center p-6 border-2 border-border rounded-3xl ">
          <Link href="/profileOrders">
            <h1 className="text-xl text-accent-green pb-3  font-medium"> Orders</h1>
            <h3 className="text-sm text-secondary  font-medium">View your order history and track shipments</h3>
          </Link>
        </li>


        <li className="col-span-4 text-center p-6 border-2 border-border rounded-3xl ">
          <Link href="/wishlist">
            <h1 className="text-xl text-accent-green pb-3  font-medium">Wishlist</h1>
            <h3 className="text-sm text-secondary font-medium" >Products you&apos;ve saved for later</h3>
          </Link>
        </li>


        <li className="col-span-4 text-center p-6 border-2 border-border rounded-3xl ">
          <Link href="/accountSettings">
            <h1 className="text-xl text-accent-green pb-3  font-medium">Settings</h1>
            <h3 className="text-sm text-secondary  font-medium">Update your profile</h3>
          </Link>
        </li>


      </ul>
      </div>
    </>
  );
}
