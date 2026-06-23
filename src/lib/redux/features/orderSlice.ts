import { Order } from "@/types/order";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Edit } from "lucide-react";
import { initialize } from "next/dist/server/lib/render-server";

const initialState: Order[] = []
const orederSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction) { },
        deleteOrder(state, action: PayloadAction) { },
        editOrder(state, action: PayloadAction) { }

    }
})
export default orederSlice