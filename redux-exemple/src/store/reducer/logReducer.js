import {ADD_LOG, RESET_LOG} from "../action-type/log-action-type.js";

const initialState = {
	logsArray: []
}

const logReducer = (state = initialState, action) => {
	
	switch (action.type) {
		
		case ADD_LOG:
			return {
				...state,
				logsArray: state.logsArray.concat([action.payload])
			}
			
		case RESET_LOG:
			return {
				...state,
				logsArray: []
			}
		
		default:
			return state;
	}
}

export default logReducer