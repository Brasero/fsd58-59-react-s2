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

export const addTodo = createAsyncThunk(
	"todo/addTodo",
	async (todo) => {
		return (await api.addTodo(todo)).data
	}
)

export const resetError = createAsyncThunk(
	"todo/resetError",
	async (time = 3500) => {
		return await new Promise((resolve) => {
			setTimeout(() => {
				resolve("")
			}, time)
		})
	}
)

const initialState = {
    todos: [],
		isLoading: false,
		error: ""
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
				state.error = "Une erreur est survenue"
			})
		
		builder.addCase(updateTodo.fulfilled, (state,action)=> {
			state.todos = state.todos.map(todo => {
				if(todo.id === action.payload.id) {
					return action.payload
				}
				return todo
			})
			state.isLoading = false
		})
		 .addCase(updateTodo.pending,(state) => {
			 state.isLoading = true
		 })
		 .addCase(updateTodo.rejected, (state) => {
			 state.isLoading = false
			 state.error = "Une erreur est survenue"
		 })
		
		builder.addCase(addTodo.fulfilled, (state,action) => {
			state.isLoading = false
			state.todos.push({
				...action.payload,
				id: state.todos.length + 1,
			})
		})
		 .addCase(addTodo.pending, (state) => {
			 state.isLoading = true
		 })
		 .addCase(addTodo.rejected, (state) => {
			 state.isLoading = false
			 state.error = "Une erreur est survenue"
		 })
		
		builder
		 .addCase(resetError.fulfilled, (state,action) => {
			 state.error = action.payload;
		 })
	}
})

export const {} = todoSlice.actions;

export default todoSlice.reducer;