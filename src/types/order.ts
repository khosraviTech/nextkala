// types/order.ts

import { cartItem } from "./cartItem";


export interface Order {
  orderId: string;

  userId: string;
  userName: string;
  userEmail: string;

  items: cartItem[];

  subtotal: number;
  shipping: number;
  tax: number;
  total: number;

  paymentStatus: "pending" | "paid" | "failed";
  orderStatus: "processing" | "shipped" | "delivered" | "cancelled";

  createdAt: Date;
}