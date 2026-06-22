import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    isLoggedIn: boolean,
    password: string


}
const initialState: User[] = []


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:
    {
        addUser(state,action:PayloadAction<User>) {
            
         },
        editUser(state) { },
        deleteUser(state) { },
        getUser(state) { },
        getAllUser(state) { },
    }

})
export default userSlice