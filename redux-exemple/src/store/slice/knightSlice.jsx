import {createSlice} from '@reduxjs/toolkit'

let id = 0;

const initialState = {
    knights: [],
    knight: "",
    count: 0
}

const knightSlice = createSlice({
	name: "knight",
	initialState,
	reducers: {
     setKnight(state,action){
         state.knight = action.payload
     },
     addKnight(state,action) {
         state.knights.push({id: id++, name: action.payload.trim()})
         state.knight = ""
         state.count++
     },
     deleteKnight(state,action) {
         state.knights = state.knights.filter(knight => knight.id !== action.payload)
         state.count--
     },
     reverseKnight(state,action) {
         state.knights.reverse()
     }
 }
})

export const {
    setKnight,
 addKnight,
 deleteKnight,
 reverseKnight
} = knightSlice.actions;

export default knightSlice.reducer;