import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    posts: [],
    status: null,
  },
  reducers: {
    updateStart: (state) => {
      state.loading = true;
      state.status = "pending";
    },
    updateSuccess: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.status = "success";
    },
    updateError: (state, action) => {
      state.posts = [];
      state.loading = false;
      state.status = action.payload;
    },
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
