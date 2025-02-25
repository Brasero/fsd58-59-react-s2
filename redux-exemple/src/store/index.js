import { legacy_createStore as createStore, combineReducers} from "redux"
import countReducer from "./reducer/countReducer.js";
import messageReducer from "./reducer/messageReducer.js";

const store = createStore(
 combineReducers({
  counter: countReducer,
  messages: messageReducer
 }),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store