import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
  reducers: {
    createComment(state, action) {
      state.comments = [...state.comments, action.payload];
    },
  },
});

export const commentActions = commentSlice.actions;

export default commentSlice.reducer;
