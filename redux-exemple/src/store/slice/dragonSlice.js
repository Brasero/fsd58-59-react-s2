import {createSlice} from "@reduxjs/toolkit";

let id = 0;

const initialState = {
	dragons: [],
	dragon: "",
	count: 0
}

const dragonSlice = createSlice({
	name: "dragon",
	initialState,
	reducers: {
		setDragon(state, action) {
			state.dragon = action.payload
		},
		addDragon(state, action) {
			state.dragons.push({id: id++, name: action.payload.trim()})
			state.dragon = ""
			state.count++
		},
		deleteDragon(state, action) {
			state.dragons = state.dragons.filter((drag) => drag.id !== action.payload)
			state.count--
		},
		reverseDragon(state,action) {
			state.dragons.reverse()
		}
	}
})

export const {
	setDragon,
	addDragon,
	deleteDragon,
	reverseDragon
} = dragonSlice.actions

export default dragonSlice.reducer