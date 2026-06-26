"use client";


import { useSession } from "next-auth/react";

export default function Settings() {
  const { data: session } = useSession();

  return (
    <>
      {/* Profile Information */}
      <div>
        <h1>Profile Information</h1>
        <label htmlFor="firstName">firstName</label>
        <label htmlFor="lastName">lastName</label>
        <input type="text" name="firstName" />
        <input type="text" name="laststName" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <button>Save Changes</button>
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
        <button>Update password</button>
      </div>
    </>
  );
}
