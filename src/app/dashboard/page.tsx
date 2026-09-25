'use client'
import { useSession } from "next-auth/react";
import { Wallet } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { ChartNoAxesColumn } from 'lucide-react';
import { Package } from 'lucide-react';
export default function Dashboard() {
    const { data: session } = useSession()
    return (<div className="p-3 grid    grid-cols-12 gap-6">
        {/* welcome title */}
        <div className="col-span-full"><h1 className="font-bold"><span className="text-[#c9a57d] font-bold"> WELCOME BACK, </span>{session?.user.name?.toUpperCase()} !</h1></div>

        {/* row 1 */}
        <div className="col-span-12 grid grid-cols-12 gap-3">

            {/* wallet div */}
            <div className="col-span-3 grid grid-cols-3 bg-[#f3debd] border-2 p-3 rounded-xl">
                <Wallet className="col-span-1 bg-[#c9ab89] rounded  scale-190 m-3" />
                {/* text */}
                <div className="flex flex-col items-start">
                    <h6 className="text-[#73685c]">Total Spent</h6>
                    <h6 className="text-2xl">$134.22</h6>
                </div>
            </div>

            {/* order div */}
            <div className="col-span-3 grid grid-cols-3 bg-[#f3debd] border-2 p-3 rounded-xl">
                <ShoppingCart className="col-span-1 bg-[#c9ab89] rounded  scale-190 m-3" />
                {/* text */}
                <div className="flex flex-col items-start">
                    <h6 className="text-[#73685c]">Total Orders</h6>
                    <h6 className="text-2xl">3</h6>
                </div>
            </div>

            {/*average order div */}
            <div className="col-span-3 grid grid-cols-3 bg-[#f3debd] border-2 p-3 rounded-xl">
                <ChartNoAxesColumn className="col-span-1 bg-[#c9ab89] rounded  scale-190 m-3" />
                {/* text */}
                <div className="flex flex-col items-start">
                    <h6 className="text-[#73685c] whitespace-nowrap">Average Order Value</h6>
                    <h6 className="text-2xl">$44.22</h6>
                </div>

            </div>

            {/*Total ordpurchased div */}
            <div className="col-span-3 bg-[#f3debd] border-2 p-3 rounded-xl">
                <Package className="col-span-1 bg-[#c9ab89] rounded  scale-190 m-3" />
            </div>

        </div>


        {/* row 2 */}
        <div className="col-span-12 grid grid-cols-13 gap-3">
            <div className="col-span-5 bg-[#f3debd] border-2 p-3 rounded-xl"></div>
            <div className="col-span-4 bg-[#f3debd] border-2 p-3 rounded-xl"></div>
            <div className="col-span-4 bg-[#f3debd] border-2 p-3 rounded-xl"></div>

        </div>
        {/* row 3 */}
        <div className="col-span-12 grid grid-cols-12 gap-3">
            <div className="col-span-5 bg-[#f3debd] border-2 p-3 rounded-xl"></div>
            <div className="col-span-7 bg-[#f3debd] border-2 p-3 rounded-xl"></div>
        </div>
        {/* row 4 */}
        <div className="col-span-12 grid grid-cols-12 gap-3">
            <div className="col-span-12 bg-[#f3debd] border-2 p-3 rounded-xl"></div>

        </div>
    </div>)
}