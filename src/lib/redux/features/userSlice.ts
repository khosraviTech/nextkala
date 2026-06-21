import { createSlice } from "@reduxjs/toolkit";
interface User{
firstName:string,
lastName:string,
Email:string,
//TODO: implement the interface of user base on the project needs in design

}
const initialState:User[]=[]
const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:
    {
        addUser(state){},
    editUser(state){},
    deleteUser(state){},
    getUser(state){},
    getAllUser(state){},
    }

})
export default userSlice