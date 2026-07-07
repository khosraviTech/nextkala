import { Order } from "@/types/order";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";





const initialState: Order[] =
    typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("Orders") || "[]")
        : [];


const orederSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction<Order>) {
            const item = state.find((item) => item.orderId == action.payload.orderId)

            if (!item) {
                state.push(action.payload)
                localStorage.setItem('Orders', JSON.stringify(state))

            }


        },
        deleteOrder(state, action: PayloadAction<string>) {
            const newState = state.filter(item => item.orderId !== action.payload);
            localStorage.setItem('Orders', JSON.stringify(newState))
            return newState
        },
        editOrder(state, action: PayloadAction<Order>) {
            const index = state.findIndex(
                (item) => item.orderId === action.payload.orderId
            );

            if (index !== -1) {
                state[index] = action.payload;
            }

            localStorage.setItem("Orders", JSON.stringify(state));
        }


    }
})
export default orederSlice
