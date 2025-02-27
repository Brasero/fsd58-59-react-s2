import {configureStore} from "@reduxjs/toolkit";
import messageSlice from "./messageSlice.js";

const store = configureStore({
	reducer: {
		messages: messageSlice
	}
})

export default store