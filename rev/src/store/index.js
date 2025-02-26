import {legacy_createStore, combineReducers} from "redux";
import cartReducer from "./reducer/cartReducer.js";


const store1 = legacy_createStore(
	combineReducers({
		cart: cartReducer
	})
)

export default store1