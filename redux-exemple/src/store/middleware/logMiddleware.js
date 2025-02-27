import {ADD_DRAGON, DELETE_DRAGON} from "../action-type/dragon-action-type.js";
import {ADD_KNIGHT, DELETE_KNIGHT} from "../action-type/knight-action-type.js";
import {setKnightAction} from "../action/knight-action.js";
import {addLogAction} from "../action/log-action.js";
import {selectKnight, selectKnights} from "../selector/knight-selector.js";
import {selectDragon, selectDragons} from "../selector/dragon-selector.js";
import {ADD_COUPLE} from "../action-type/couple-action-type.js";
import {addKnight, deleteKnight} from "../slice/knightSlice.jsx";
import {addDragon, deleteDragon} from "../slice/dragonSlice.js";
import {addLog} from "../slice/logSlice.js";
import {addCouple} from "../slice/coupleSlice.jsx";

export const logMiddleware = (store) => (next) => (action) => {
	const knightActions = [addKnight.toString(), deleteKnight.toString()];
	if (knightActions.includes(action.type)) {
		let name;
		if (action.type === addKnight.toString()) {
			name = selectKnight(store.getState())
		} else {
			const knights = selectKnights(store.getState())
			const knight = knights.find((kni) => kni.id === action.payload)
			name = knight.name
		}
		store.dispatch(addLog({
			action: action.type,
			name: name
		}))
	}
	const dragonActions = [addDragon.toString(), deleteDragon.toString()];
	if (dragonActions.includes(action.type)) {
		let name;
		if(action.type === addDragon.toString()) {
			name = selectDragon(store.getState());
		} else {
			const dragons = selectDragons(store.getState())
			const dragon = dragons.find((drag) => drag.id === action.payload)
			name = dragon.name
		}
		store.dispatch(addLog({
			action: action.type,
			name: name
		}))
	}
	
	if (action.type === addCouple.toString()) {
		const knight = JSON.parse(action.payload.knight)
		const dragon = JSON.parse(action.payload.dragon)
		store.dispatch(addLog({
			action: "Un couple à été crée",
			name: `${knight.name} / ${dragon.name}`
		}))
	}
	
	next(action)
}

function logMiddleware2 (store) {
	return function(next) {
		return function(action) {
		
		}
	}
}