import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface cartItem {
    id: number,
    title: string,
    image: string,
    price: number,
    quantity: number,
    totalItemPrice: number,
}
const initialState: cartItem[] = []



const cartSlice = createSlice({
    name: 'cart',
    initialState,


    reducers: {
        addToCart(state, action: PayloadAction<cartItem>) {
            state.push(action.payload)
        },
        DeleteFromCart(state, action: PayloadAction<number>) {
            return state.filter(item => item.id !== action.payload);
        },
        setQuantity(state, action: PayloadAction<{ id: number, quantity: number }>) {
            const item = state.find(item => item.id === action.payload.id)
            if (item) {
                item.quantity = action.payload.quantity
                item.totalItemPrice = item.price * item.quantity
            }
        },



    },
})

export const { addToCart, DeleteFromCart, setQuantity } = cartSlice.actions
export default cartSlice.reducer