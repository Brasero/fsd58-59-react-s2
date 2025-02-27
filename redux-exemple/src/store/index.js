import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./slice/todoSlice.jsx";

const store = configureStore({
	reducer: {
		todos: todoSlice
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([])
})

export default store