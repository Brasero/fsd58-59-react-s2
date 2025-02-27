import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	log: []
}

const logSlice = createSlice({
	name: "log",
	initialState,
	reducers: {
		addLog(state, action) {
			state.log.push(action.payload)
		},
		resetLog(state,action) {
			state.log = []
		}
	}
})

export const {
	addLog,
	resetLog
} = logSlice.actions

export default logSlice.reducer