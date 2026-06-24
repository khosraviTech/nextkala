import userSlice from '@/lib/redux/features/userSlice';
import { useAppDispatch } from '@/lib/redux/hooks';
import { User } from '@/types/user';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState } from 'react';

export default function SignUpForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [error, setError] = useState("")

  const{addUser,getAllUser}=userSlice.actions

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const newUser: User = {
      id: Date.now() + Math.floor(Math.random() * 1000), 
      firstName,
      lastName,
      email,
      password,
      username: email.split("@")[0],
      image: "",
      role: "user",

      // fake fill (for dummyjson type compatibility)
      maidenName: "",
      age: 0,
      gender: "male",
      phone: "",
      birthDate: "",
      bloodGroup: "",
      height: 0,
      weight: 0,
      eyeColor: "",
      hair: { color: "", type: "" },
      ip: "",
      address: {
        address: "",
        city: "",
        state: "",
        stateCode: "",
        postalCode: "",
        coordinates: { lat: 0, lng: 0 },
        country: "",
      },
      macAddress: "",
      university: "",
      bank: {
        cardExpire: "",
        cardNumber: "",
        cardType: "",
        currency: "",
        iban: "",
      },
      company: {
        department: "",
        name: "",
        title: "",
        address: {
          address: "",
          city: "",
          state: "",
          stateCode: "",
          postalCode: "",
          coordinates: { lat: 0, lng: 0 },
          country: "",
        },
      },
      ein: "",
      ssn: "",
      userAgent: "",
      crypto: {
        coin: "",
        wallet: "",
        network: "",
      },
    };

    dispatch(addUser(newUser));


    
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-10! border-2 border-amber-600 w-96">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* First name & Last name  */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block mb-1">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="flex-1">
              <label htmlFor="lastName" className="block mb-1">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Email - full width */}
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Password - full width */}
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Confirm Password - full width */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-1">
              Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Create Account Button */}
          <button  type='submit' className="w-full bg-black text-white py-2 rounded-md mt-2">
            Create Account
          </button>
          {/* Error message */}
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}


          {/* Sign in link */}
          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600">
            Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
