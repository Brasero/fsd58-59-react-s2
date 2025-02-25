import {ADD_MESSAGE, SET_MESSAGE} from "../action-type/action-type.js";

const initialState = {
 messages: [],
 message: ""
}

const messageReducer = (state = initialState, action) => {
 switch(action.type) {
  
  case SET_MESSAGE:
   return {
    ...state,
    message: action.payload
   }
   
  case ADD_MESSAGE:
   return {
    ...state,
    messages: state.messages.concat([state.message]),
    message: ""
   }
  
  default:
   return state;
 }
}

export default messageReducer