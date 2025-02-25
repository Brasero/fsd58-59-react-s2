import {ADD_MESSAGE, DECREMENT, INCREMENT, SET_MESSAGE} from "../action-type/action-type.js";

export const incrementAction = () => {
 return {
  type: INCREMENT
 }
}

export const decrementAction = () => {
 return {
  type: DECREMENT
 }
}

export const setMessageAction = (message) => {
 return {
  type: SET_MESSAGE,
  payload: message
 }
}

export const addMessageAction = () => {
 return {
  type: ADD_MESSAGE
 }
}