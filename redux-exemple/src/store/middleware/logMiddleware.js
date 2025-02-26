import {SET_DRAGON} from "../action-type/dragon-action-type.js";
import {setKnightAction} from "../action/knight-action.js";

export const logMiddleware = (store) => (next) => (action) => {
	console.log(action)
	if (action.type === SET_DRAGON) {
		action.payload = action.payload.toUpperCase()
		store.dispatch(setKnightAction(action.payload))
	}
	
	next(action)
}

function logMiddleware2 (store) {
	return function(next) {
		return function(action) {
		
		}
	}
}