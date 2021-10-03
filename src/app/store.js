import { configureStore } from "@reduxjs/toolkit";
import commentReducers from "../slices/commentSlice";

const store = configureStore({
  reducer: {
    comments: commentReducers,
  },
});

export default store;
