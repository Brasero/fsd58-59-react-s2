import {ADD_COUPLE, REMOVE_COUPLE} from "../action-type/couple-action-type.js";

let id = 0

const initialState = {
	couple: []
}

const coupleReducer = (state = initialState, action) => {
	switch (action.type) {
		
		case ADD_COUPLE:
			return {
				...state,
				couple: state.couple.concat([{
					id: id++,	knight: JSON.parse(action.payload.knight),	dragon: JSON.parse(action.payload.dragon),	//...action.payload
				}])
			}
			
		case REMOVE_COUPLE:
			return {
				...state,
				couple: state.couple.filter(couple => couple.id !== action.payload)
			}
		
		default:
			return state;
	}
}

export default coupleReducer