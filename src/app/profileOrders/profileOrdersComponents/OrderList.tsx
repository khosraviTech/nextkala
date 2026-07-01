"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import Link from "next/link";
import Image from "next/image";

export default function OrderList() {
  const ordersList = useAppSelector((state) => state.order);

  return (
    <>
      <div className="grid grid-cols-12 gap-6 p-12">
        
          <h1 className="col-span-12 text-primary text-3xl p-6">Your Orders:</h1>
        
        {ordersList.map((order) => (
          <div
            key={order.orderId}
            className="col-span-12 grid grid-cols-12 gap-4 border-border border-2 rounded-3xl p-4 bg-bg-card"
          >
            <div className="col-span-12 flex items-center gap-2">
              <h1 className="text-primary text-xl">ID: </h1>
              <h1 className="text-accent-green text-xl">{order.orderId}</h1>
            </div>

            <div className="col-span-12 flex items-center gap-2">
              <h1 className="text-primary text-xl">Date: </h1>
              <h1 className="text-accent-green text-xl">
                {order.createdAt.split("T")[0]}
              </h1>
            </div>
            
            
            
            <div className="col-span-12 flex justify-between items-center">

              <div className="col-span-8 flex gap-2 ">
            
                {order.items.map((item) => (
                  <div key={item.id}>
                    <Image
                      src={item.image[0]}
                      alt={`${item.title} image`}
                      width={80}
                      height={80}
                      className="bg-gray-700 rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            
              <Link href={`/order/${order.orderId}`} className="col-span-4">
                <button className="text-primary border-border border-3 rounded-2xl p-2 text-center">
                  Order Details
                </button>
              </Link>
            
            
            </div>
          
          
          </div>
        ))}
      </div>
    </>
  );
}
