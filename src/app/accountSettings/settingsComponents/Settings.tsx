"use client";

import userSlice from "@/lib/redux/features/userSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Settings() {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const { editUser } = userSlice.actions;
  const user = session?.user;
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
useEffect(() => {
  console.log(session?.user);
}, [session]);
useEffect(() => {
  if (session?.user) {
    setFirstName(session.user.firstName);
    setLastName(session.user.lastName);
    setEmail(session.user.email!);
  }
}, [session]);
// console.log(session);
// console.log(session?.user);
// console.log('firstName is: '+firstName)
// console.log('lastName is: '+lastName)
// console.log('email is: '+email)


  function saveHandler() {
    dispatch(
      editUser({
        id: Number(user?.id),
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    );
  }

  return (
    <>
      {/* Profile Information */}
      <div>
        <h1>Profile Information</h1>
        <label htmlFor="firstName">firstName</label>
        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          name="laststName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email?.toString()}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button
          onClick={() => {
            saveHandler();
          }}
        >
          Save Changes
        </button>
      </div>

      {/* Change Password */}
      <div>
        <h1> Change Password </h1>
        <label htmlFor="currentPassword">current password</label>
        <input type="text" name="currentPassword" />
        <label htmlFor="newPassword">new password</label>
        <input type="text" name="newPassword" />
        <label htmlFor="confirmPassword">confirm new password</label>
        <input type="text" name="confirmPassword" />
        <button onClick={()=>alert('This App has not backend yet it\'s just front-end, so the passowrd is imutable')}>Update password</button>
      </div>
    </>
  );
}
