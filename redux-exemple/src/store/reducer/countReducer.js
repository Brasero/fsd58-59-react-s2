import {DECREMENT, INCREMENT} from "../action-type/action-type.js";

const initialeState = {
 count: 0
}

const countReducer = (state = initialeState, action) => {
 
 switch (action.type) {
  
  case INCREMENT:
   return {
    ...state,
    count: state.count + 1
   }
   
  case DECREMENT:
   return {
    ...state,
    count: state.count - 1
   }
  
  default:
   return state;
 }
}


export default countReducer