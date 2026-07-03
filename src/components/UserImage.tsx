import { useSession } from "next-auth/react";

async function getUserImage(id: number) {
  const res = await fetch(`https://dummyjson.com/users/${id}`, {
    cache: "no-store",
  });

  return res.json();
}

export default function UserImage() {
    const{data:Session}=useSession()
const user =getUserImage(Number(Session?.user.id))
  return (
    <div>UserImage</div>
  )
}
