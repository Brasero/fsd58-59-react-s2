// path : redux-exemple/src/page/Update/index.page.jsx
import "./style.scss";
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectTodos} from "../../store/selector/todo-selector.js";
import {useState} from "react";
import {updateTodo} from "../../store/slice/todoSlice.jsx";

const UpdatePage = () => {
	
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const {id} = useParams();
	const todos = useSelector(selectTodos);
	const todo = todos.find((todo) => todo.id === parseInt(id))
	const [title, setTitle] = useState(todo.title)
	const [error, setError] = useState("")
	
	const handleChange = (e) => {
		const {value} = e.target
		setTitle(value)
		setError("")
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		if (title.trim() === "") {
			setError("Veuillez remplir le champ")
			return
		}
		dispatch(updateTodo({
			...todo,
			title
		}))
		navigate(-1)
	}
	
	return <div className="page" id="Update">
		<h2>Modifier une tâche</h2>
		<form onSubmit={handleSubmit}>
			<label htmlFor="title">
				<textarea
				 id="title"
				 placeholder={"Modifier votre tâche"}
				 value={title}
				 onChange={handleChange}
				/>
				<span>Modifier votre tâche</span>
			</label>
			<input type="submit" disabled={title === ""} value="Modifier" />
		</form>
		{error && <p className={"error"}>{error}</p>}
	</div>
}

export default UpdatePage