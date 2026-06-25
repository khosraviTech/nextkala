import { cartItem } from '@/types/cartItem'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



const initialState: cartItem[] = []



const cartSlice = createSlice({
    name: 'wishlist',
    initialState,


    reducers: {
        addToWishlist(state, action: PayloadAction<cartItem>) {
            const item = state.find(item => item.id === action.payload.id)

            if (item) {
                return state
            }
            else {
                state.push(action.payload)
            }

        },


        DeleteFromWishlist(state, action: PayloadAction<number>) {
            return state.filter(item => item.id !== action.payload);
        },


        cleanWishlist() {
            return []
        },







    },
},
)

export const { addToCart, DeleteFromCart, setQuantity } = cartSlice.actions
export default cartSlice