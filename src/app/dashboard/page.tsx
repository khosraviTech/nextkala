'use client'
import { useSession } from "next-auth/react";
export default function Dashboard() {
    const { data: session } = useSession()
    return (<div className="p-3">
        {/* welcome title */}
        <div ><h1 className="font-bold"><span className="text-[#c9a57d] font-bold"> WELCOME BACK, </span>{session?.user.name?.toUpperCase()} !</h1></div>
        <div className="gird grid-cols-12">
            <div></div>
        </div>
    </div>)
}