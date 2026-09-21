'use client'
import { useSession } from "next-auth/react";
export default function Dashboard() {
    const { data: session } = useSession()
    return (<>
        <div><h1>welcom,{session?.user.name}</h1></div>
        <div className="gird grid-cols-12">
            <div></div>
        </div>
    </>)
}