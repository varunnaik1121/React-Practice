import { createSlice } from "@reduxjs/toolkit";



export const todoSlice = createSlice({
    name:"todo",
    initialState:{
      list:[]
    },
    reducers:{
       addtodo:(state,action)=>{state.list=action.payload}
     
    }
})

export const {addtodo} = todoSlice.actions;
export default todoSlice.reducer;