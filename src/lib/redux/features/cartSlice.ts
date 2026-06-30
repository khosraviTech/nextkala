import { cartItem } from '@/types/cartItem'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { json } from 'stream/consumers'



const initialState: cartItem[] =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("cartItems") || "[]")
    : [];


const cartSlice = createSlice({
    name: 'cart',
    initialState,


    reducers: {
        addToCart(state, action: PayloadAction<cartItem>) {
            const item = state.find(item => item.id === action.payload.id)

            if (item) {
                item.quantity +=1
                item.totalItemPrice = item.price * item.quantity
            }
            else {
                state.push(action.payload)
            }
            localStorage.setItem('cartItems',JSON.stringify(state))

        },


        DeleteFromCart(state, action: PayloadAction<number>) {
             const newState=state.filter(item => item.id !== action.payload);
             localStorage.setItem('cartItems',JSON.stringify(newState))
             return newState
        },

        setQuantity(state, action: PayloadAction<{ id: number, quantity: number }>) {
            const item = state.find(item => item.id === action.payload.id)
            if (item) {
                item.quantity = action.payload.quantity
                item.totalItemPrice = item.price * item.quantity
            }
            localStorage.setItem('cartItems',JSON.stringify(state))

        },
        cleanCart() {
            localStorage.setItem('cartItems',JSON.stringify([]))
            return []
        },







    },
},
)

export const { addToCart, DeleteFromCart, setQuantity } = cartSlice.actions
export default cartSlice