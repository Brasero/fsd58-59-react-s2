import {ADD_KNIGHT, DELETE_KNIGHT, REVERSE_KNIGHT, SET_KNIGHT} from "../action-type/knight-action-type.js";

export const setKnightAction = (name) => (
	{
		type: SET_KNIGHT,
		payload: name
	}
)

export const addKnightAction = (knight = null) => ({
	type: ADD_KNIGHT,
	payload: knight
})

export const deleteKnight = (id) => ({
	type: DELETE_KNIGHT,
	payload: id
})

export const reverseKnight = () => ({
	type: REVERSE_KNIGHT
})