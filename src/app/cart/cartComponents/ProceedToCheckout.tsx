"use client";

import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

export default function ProceedToCheckout(props: { itemCounter: number }) {

  const router = useRouter();
  const { data: session } = useSession();
  if (props.itemCounter == 0) {
    return (
      <>
        <button
          onClick={() => {
            alert("But your shopping cart is empty!");
          }}
        >
          Proceed to checkout
        </button>
      </>
    );
  }
  if (session?.user && props.itemCounter > 0) {
    return (
      <>
        <button
          onClick={() => {
            router.push("/order");
            //dispatch(cleanCart());
          }}
        >
          Proceed to checkout
        </button>
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => {
            alert("Please login first! then you can proceed to checkout");
          }}
        >
          Proceed to checkout
        </button>
      </>
    );
  }
}
