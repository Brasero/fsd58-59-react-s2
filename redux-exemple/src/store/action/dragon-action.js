import {ADD_DRAGON, DELETE_DRAGON, SET_DRAGON, SORT_DRAGON} from "../action-type/dragon-action-type.js";

export const setDragonAction = (name) => {
 return {
  type: SET_DRAGON,
  payload: name
 }
}

export const addDragonAction = () => {
 return {
  type: ADD_DRAGON
 }
}

export const deleteDragonAction = (id) => {
 return {
  type: DELETE_DRAGON,
  payload: id
 }
}

export const sortDragonAction = () => {
 return {
  type: SORT_DRAGON
 }
}