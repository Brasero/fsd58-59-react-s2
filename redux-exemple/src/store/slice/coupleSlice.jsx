import {createSlice} from '@reduxjs/toolkit'

let id = 0

const initialState = {
    couple: []
}


const coupleSlice = createSlice({
	name: "couple",
	initialState,
	reducers: {
     addCouple(state,action) {
         state.couple.push({id: id++,dragon: JSON.parse(action.payload.dragon), knight: JSON.parse(action.payload.knight)})
     },
     removeCouple(state,action) {
         state.couple = state.couple.filter(couple => couple.id !== action.payload)
     }
 }
})

export const {
    addCouple,
 removeCouple
} = coupleSlice.actions;

export default coupleSlice.reducer;