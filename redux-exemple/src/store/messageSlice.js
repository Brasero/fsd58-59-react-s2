import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	messages: [],
	message: ""
}

const messageSlice = createSlice({
	name: "message",
	initialState,
	reducers: {
		setMessage(state, action) {
			state.message = action.payload
		},
		addMessage(state, action) {
			state.messages.push(action.payload)
			state.message = ""
		},
		deleteMessage(state, action) {
			state.messages = state.messages.filter(m => m !== action.payload)
		}
	}
})


export const {
	setMessage,
	addMessage,
	deleteMessage
} = messageSlice.actions

export default messageSlice.reducer;