import axios from "axios";

const api = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/"
})

const useApi = () => {
	
	const fetchTodos = async () => {
		return await api.get("/todos")
	}
	
	const updateTodo = async (todo) => {
		return await api.put(`/todos/${todo.id}`, todo)
	}
	
	const addTodo = async (todo) => {
		return await api.post("/todos", todo)
	}
	
	return {
		fetchTodos,
		updateTodo,
		addTodo
	}
}

export default useApi;