import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    user: false,
  },
  reducers: {
    login(state) {
      state.user = true;
    },
    logout(state) {
      state.user = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
