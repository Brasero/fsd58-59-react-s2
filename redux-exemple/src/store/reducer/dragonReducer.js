import {ADD_DRAGON, DELETE_DRAGON, SET_DRAGON, SORT_DRAGON} from "../action-type/dragon-action-type.js";

let id = 0;

const initialState = {
 dragons: [],
 dragon: "",
 count: 0
}
const dragonReducer = (state=initialState, action) => {
 
 switch(action.type) {
  
  case SET_DRAGON:
   return {
    ...state,
    dragon: action.payload
   }
   
  case ADD_DRAGON:
   return {
    ...state,
    dragons: state.dragons.concat([{name: state.dragon.trim(), id: id++}]),
    dragon: "",
    count: state.count+1
   }
   
  case DELETE_DRAGON:
   return {
    ...state,
    dragons: state.dragons.filter((drag) => drag.id !== action.payload),
    count: state.count - 1
   }
   
  case SORT_DRAGON:
   return {
    ...state,
    dragons: [...state.dragons.reverse()]
   }
  
  default:
   return state;
 }
 
}
export default dragonReducer