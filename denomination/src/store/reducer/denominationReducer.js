import {denomination} from "../../constant/denomination.js";
import {CALC_DENOMINATION, SELECT_DENOMINATION, SET_NUMBER} from "../action-type/denomination-type.js";

const initialState = {
 number: 0,
 selectedDenomination: denomination.first,
 denominations: denomination,
 denomination: {}
}

const calcDenomination = (num, deno) => {
 let rest = num;
 return [...deno].reverse().reduce((acc, curr) => {
  const count = Math.floor(rest / curr)
  rest %= curr
  return {...acc, [curr]: count}
 }, {})
}


const denominationReducer = (state = initialState, action) => {
 switch(action.type) {
  case SET_NUMBER:
   return {
    ...state,
    number: action.payload
   }
   
  case CALC_DENOMINATION:
   return {
    ...state,
    denomination: calcDenomination(state.number, state.selectedDenomination)
   }
   
  case SELECT_DENOMINATION:
   return {
    ...state,
    selectedDenomination: action.payload,
    denomination: {}
   }
  
  default:
   return state;
 }
}

export default denominationReducer