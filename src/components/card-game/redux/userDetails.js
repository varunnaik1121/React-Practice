import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  userName:''
}

export const userSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    GETUSERNUMBER: (state,action) => {
      state.value = action.payload
    },
    GETUSERNAME: (state,action) => {
      state.userName =action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { GETUSERNAME,GETUSERNUMBER } = userSlice.actions

export default userSlice.reducer