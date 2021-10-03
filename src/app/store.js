import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import commentReducers from "../slices/commentSlice";

const store = configureStore({
  reducer: {
    comments: commentReducers,
    authUser: authReducer,
  },
});

export default store;
