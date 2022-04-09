import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 0,
  userName:''
}

export const counterSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    GETUSERNAME: (state,action) => {
      state.value = action.payload
    },
    GETUSERNUMBER: (state,action) => {
      state.userName =action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { GETUSERNAME,GETUSERNUMBER } = counterSlice.actions

export default counterSlice.reducer