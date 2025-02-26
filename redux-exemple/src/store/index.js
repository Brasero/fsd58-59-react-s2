import { legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux"
import dragonReducer from "./reducer/dragonReducer.js";
import logReducer from "./reducer/logReducer.js";
import knightReducer from "./reducer/knightReducer.js";
import coupleReducer from "./reducer/coupleReducer.jsx";
import {logMiddleware} from "./middleware/logMiddleware.js";
import {composeWithDevTools} from "@redux-devtools/extension"
import counterReducer from "./reducer/CounterReducer.jsx";
import {thunk} from "redux-thunk";


const store = createStore(
 combineReducers({
  dragons: dragonReducer,
  logs: logReducer,
  knights: knightReducer,
  couple: coupleReducer,
  counter: counterReducer
 }),
 composeWithDevTools(
  applyMiddleware(logMiddleware, thunk)
 )
)


export default store