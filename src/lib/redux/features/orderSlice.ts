import { Order } from "@/types/order";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: Order[] = []
const orederSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction<Order>) {
            const item = state.find((item) => item.orderId == action.payload.orderId)
            if (!item) {
                state.push(action.payload)
            }
        },
        deleteOrder(state, action: PayloadAction<string>) {
            //TODO
        },
        editOrder(state, action: PayloadAction<string>) {
            //TODO
        }

    }
})
export default orederSlice
