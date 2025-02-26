import {ADD_COUPLE, REMOVE_COUPLE} from "../action-type/couple-action-type.js";

export const addCouple = (couple) => ({
	type: ADD_COUPLE,
	payload: couple
})

export const removeCouple = (id) => ({
	type: REMOVE_COUPLE,
	payload: id
})