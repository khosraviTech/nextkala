import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/user";






export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        return data.users as User[];
    }
);
const initialState: User[] = [];

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:
    {
        addUser(state, action: PayloadAction<User>) {
            const user = state.find((user) => user.id == action.payload.id)

            if (!user) {
                state.push(action.payload)
            } else {
                console.log('user exist')
            }
        },
        editUser(state, action:PayloadAction<{id:number, firstName: string,lastName:string , email: string}>) {
            const index = state.findIndex(
                (user) => user.id === action.payload.id
            );

            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    ...action.payload,
                };
            }
            
            
        },
        deleteUser(state, action: PayloadAction<number>) {
            return state.filter(
                (user) => user.id !== action.payload
            );
        },



        getAllUser(state) {
            console.log(state)
            return state;
        },


    },


    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (_, action) => {
            return action.payload;
        });
    },

})
export default userSlice
 