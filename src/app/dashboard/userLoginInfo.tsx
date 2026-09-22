import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserLoginInfo() {
    const { data: session } = useSession();
    if (session?.user) {
        return (<>

            <Link href="/dashboard">My analytics</Link>



        </>)
    }
}