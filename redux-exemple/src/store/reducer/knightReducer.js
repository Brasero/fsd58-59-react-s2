import {ADD_KNIGHT, DELETE_KNIGHT, REVERSE_KNIGHT, SET_KNIGHT} from "../action-type/knight-action-type.js";

let id = 0;

const initialState = {
	knights: [],
	knight: "",
	count: 0
}

const addKnightFromStateOrPayload = (payload, state) => {
	if (!payload) {
		return state.knights.concat([{
			name: state.knight.trim(),
			id: id++
		}])
	}
	return state.knights.concat([payload])
}

const knightReducer = (state=initialState, action) => {
	
	switch(action.type) {
		
		case SET_KNIGHT:
			return {
				...state,
				knight: action.payload
			}
			
		case ADD_KNIGHT:
			return {
				...state,
				knights: addKnightFromStateOrPayload(action.payload, state),
				count: state.count + 1,
				knight: ""
			}
			
		case DELETE_KNIGHT:
			return {
				...state,
				knights: state.knights.filter((knight) => knight.id !== action.payload),
				count: state.count - 1
			}
			
		case REVERSE_KNIGHT:
			return {
				...state,
				knights: [...state.knights].reverse()
			}
		
		default:
			return state;
	}
	
}

export default knightReducer