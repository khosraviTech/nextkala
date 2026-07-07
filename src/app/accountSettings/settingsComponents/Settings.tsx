"use client";
import { fetchUsers } from "@/lib/redux/features/userSlice";
import userSlice from "@/lib/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Settings() {
  const { data: session, status } = useSession();
   const dispatch = useAppDispatch();
//dispatch(fetchUsers());
  //const users = useAppSelector((state) => state.user);
  //const user = users.find((item) => item.id === Number(session?.user.id));
 
  
  const { editUser } = userSlice.actions;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  //   useEffect(() => {
  //    console.log("status:", status);
  // console.log("session:", session);
  // console.log("session.user:", session?.user);
  // console.log("users:", users);
  // console.log("found user:", user);
  //   }, []);

useEffect(() => {
  if (!session?.user) return;

  setFirstName(session?.user.firstName ?? "");
  setLastName(session?.user.lastName ?? "");
  setEmail(session?.user.email ?? "");
}, [session]);

  function saveHandler() {
    dispatch(
      editUser({
        id: Number(session?.user?.id),
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    );
    console.log("lastname changed to :  " + session?.user?.lastName );
    alert("This App has not backend yet it's just front-end and the data fetches from dummyjson.com and it's imutable")
  }
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <>
      {/* Profile Information */}
      <div className="grid grid-cols-12 m-12 gap-6 border-2 border-border rounded-3xl p-6 bg-bg-card">
        <h1 className="col-span-12 text-3xl text-accent-green">Profile Information</h1>
        
        
        <label className="col-span-6  text-primary" htmlFor="firstName">firstName</label>
        <label className="col-span-6  text-primary" htmlFor="lastName">lastName</label>
        
        <input className="col-span-6  text-secondary border-2  rounded-2xl p-2"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
        className="col-span-6  text-secondary border-2  rounded-2xl p-2"
          type="text"
          name="laststName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <label className="col-span-12  text-primary" htmlFor="email">Email</label>
        <input
        className="col-span-12  text-secondary border-2  rounded-2xl p-2"
          type="email"
          name="email"
          value={email?.toString()}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button
        className="cursor-pointer col-start-10 col-span-3 border-2 rounded-2xl text-primary border-amber-50 p-2 "
          onClick={() => {
            saveHandler();
          }}
        >
          Save Changes
        </button>
      </div>

      {/* Change Password */}
      <div className="grid grid-cols-12 m-12 gap-6 border-2 border-border rounded-3xl p-6 bg-bg-card">
        <h1 className="col-span-12 text-3xl text-accent-green"> Change Password </h1>
        
        
        <label className="col-span-12  text-primary" htmlFor="currentPassword">current password</label>
        <input className="col-span-12  text-secondary border-2  rounded-2xl p-2"  type="text" name="currentPassword" />
        
        <label className="col-span-12  text-primary"  htmlFor="newPassword">new password</label>
        <input className="col-span-12  text-secondary border-2  rounded-2xl p-2" type="text" name="newPassword" />
        
        <label className="col-span-12  text-primary"  htmlFor="confirmPassword">confirm new password</label>
        <input className="col-span-12  text-secondary border-2  rounded-2xl p-2" type="text" name="confirmPassword" />
        
        <button
        className="cursor-pointer col-start-9 col-span-4 border-2 rounded-2xl text-primary border-amber-50 p-2 "
          onClick={() =>
            alert(
              "This App has not backend yet it's just front-end, so the passowrd is imutable",
            )
          }
        >
          Update password
        </button>
      </div>
    </>
  );
}
