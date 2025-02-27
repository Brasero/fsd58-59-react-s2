import {configureStore} from "@reduxjs/toolkit";
import dragonSlice from "./slice/dragonSlice.js";
import knightSlice from "./slice/knightSlice.jsx";
import coupleSlice from "./slice/coupleSlice.jsx";
import logSlice from "./slice/logSlice.js";
import {logMiddleware} from "./middleware/logMiddleware.js";

const store = configureStore({
	reducer: {
		dragons: dragonSlice,
		knights: knightSlice,
		couple: coupleSlice,
		logs: logSlice
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logMiddleware])
})

export default store