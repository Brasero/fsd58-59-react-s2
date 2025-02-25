import {CALC_DENOMINATION, SELECT_DENOMINATION, SET_NUMBER} from "../action-type/denomination-type.js";

export const setNumberAction = (val) => {
 return {
  type: SET_NUMBER,
  payload: val
 }
}

export const calcDenominationAction = () => {
 return {
  type: CALC_DENOMINATION
 }
}

export const selectDenominationAction = (denomination) => {
 return {
  type: SELECT_DENOMINATION,
  payload: denomination
 }
}