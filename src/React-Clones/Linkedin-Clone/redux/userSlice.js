import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    textAreaContent: "",
  },
  reducers: {
    setUserTyped: (state, action) => {
      state.textAreaContent = action.payload;
    },
  },
});

export const { setUserTyped } = userSlice.actions;
export default userSlice.reducer;
