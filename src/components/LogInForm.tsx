"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("please fill in all fields");
      return;
    }
    // email == "admin@gmail.com" && password == "admin"
    if (email == "1@1" && password == "1") {
      setLoading(true);
      localStorage.setItem(
        "user",
        JSON.stringify({ email: email, pass: password }),
      );

      router.push("/"); // redirect to home
      setTimeout(() => {
        setLoading(false);
        alert("you logged in succes fully");
      }, 1000);
    } else {
      setError("email or password was wrong!");
      return;
    }
  }

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center border-2 border-black  rounded-4xl w-80
       h-auto p-3"
      >
        <div className="w-full">
          <label htmlFor="name">Email:</label>
          <input
            placeholder="admin@gmail.com"
            className="border-2 rounded-3xl m-1 ml-7 p-1"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full">
          <label htmlFor="password">Password:</label>
          <input
            placeholder="admin"
            className="border-2 rounded-3xl m-1 p-1"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="w-full">
          <button
            type="submit"
            disabled={loading}
            className=" border-2 rounded-4xl m-1 p-1 w-full h-10"
          >
            LogIn
          </button>
          {/* Error message */}
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}
        </div>

        <div className="">
          <h1>Don&apos;t have an account?</h1>
          <Link href="/signup" className="underline ">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
