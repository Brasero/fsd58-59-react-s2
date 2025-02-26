import {ADD_LOG, RESET_LOG} from "../action-type/log-action-type.js";

export const resetLogAction = () => ({
	type: RESET_LOG
})

export const addLogAction = (log) => ({
	type: ADD_LOG,
	payload: {...log, date: new Date()}
})