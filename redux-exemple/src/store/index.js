import { legacy_createStore as createStore, combineReducers} from "redux"
import dragonReducer from "./reducer/dragonReducer.js";


const store = createStore(
 combineReducers({
  dragons: dragonReducer
 }),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store