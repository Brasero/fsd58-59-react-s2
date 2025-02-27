import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import useApi from "../../service/api.service.jsx";

const api = useApi()
export const fetchTodo = createAsyncThunk(
	"todo/fetchTodo",
	async (_, thunkAPI) => {
		return (await api.fetchTodos()).data
	}
)


export const updateTodo = createAsyncThunk(
	"todo/updateTodo",
	async (todo) => {
		return (await api.updateTodo(todo)).data
	}
)

const initialState = {
    todos: [],
		isLoading: false
}

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
 },
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodo.fulfilled, (state, action) => {
			state.todos = action.payload
			state.isLoading = false
		})
			.addCase(fetchTodo.pending, (state, action) => {
				state.isLoading = true
			})
			.addCase(fetchTodo.rejected, (state, action) => {
				state.isLoading = false
			})
		
		builder.addCase(updateTodo.fulfilled, (state,action)=> {
			state.todos = state.todos.map(todo => {
				if(todo.id === action.payload.id) {
					return action.payload
				}
				return todo
			})
		})
	}
})

export const {} = todoSlice.actions;

export default todoSlice.reducer;