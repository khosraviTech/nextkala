"use client";
import { useSession } from "next-auth/react";

export default function ProceedToCheckout(props) {
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
  if (session?.user) {
    return (
      <>
        <button
          onClick={() => {
            alert("go to checkout list");
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
