"use client";


import userSlice from "@/lib/redux/features/userSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { Phone, Target } from "lucide-react";
import { useSession } from "next-auth/react";
import { useMemo, useState } from "react";

export default function Settings() {
  
  const { data: session } = useSession();
const dispatch = useAppDispatch()
const{editUser} = userSlice.actions
const user = session?.user
const[firstName,setFirstName]=useState(session?.user.firstName)
const[lastName,setLastName]=useState(session?.user.lastName)
const[email,setEmail]=useState(session?.user.email)

function saveHandler(){
  dispatch(editUser({
     firstName:user.firstName ,lastName:session?.user.lastName , email:session?.user.email 
  } ))
}

  return (
    <>
      {/* Profile Information */}
      <div>
        <h1>Profile Information</h1>
        <label htmlFor="firstName">firstName</label>
        <label htmlFor="lastName">lastName</label>
        <input type="text" name="firstName" value={firstName} onChange={(e)=>{
          setFirstName(e.target.value)
        }}/>
        <input type="text" name="laststName"value={lastName} onChange={(e)=>{
          
            setLastName(e.target.value)
          }
        } />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email?.toString()} onChange={(e)=>{
          
            setEmail(e.target.value)
          } }/>
        <button onClick={()=>{saveHandler()}}
          >Save Changes</button>
      </div>

      {/* Change Password */}
      <div>
        <h1> Change Password </h1>
        <label htmlFor="currentPassword">current password</label>
        <input type="text" name="currentPassword"  />
        <label htmlFor="newPassword">new password</label>
        <input type="text" name="newPassword" />
        <label htmlFor="confirmPassword">confirm new password</label>
        <input type="text" name="confirmPassword" />
        <button>Update password</button>
      </div>
    </>
  );
}
