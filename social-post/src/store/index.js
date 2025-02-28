import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice.js";
import postReducer from "./slice/postSlice.js";

const store = configureStore({
 reducer: {
  userReducer,
  postReducer
 }
})

export default store;