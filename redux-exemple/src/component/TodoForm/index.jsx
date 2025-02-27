// path: redux-exemple/src/component/TodoForm/index.jsx
import "./style.scss";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/slice/todoSlice.jsx";
import {useNavigate} from "react-router";

const TodoForm = () => {
	
	const dispatch = useDispatch()
	const [title, setTitle] = useState("")
	const [error, setError] = useState("")
	const navigate = useNavigate()
	
	const handleChange = (e) => {
		const {value} = e.target
		setTitle(value)
		setError("")
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		if (title.trim() === "") {
			setError("Veuillez remplir le champ titre")
			return
		}
		dispatch(addTodo({
			title,
			completed: false,
			userId: 1
		}))
		setTitle("")
		navigate(-1)
	}
	
	return (
	 <div className="TodoForm">
	  <h2>Ajouter une tâche</h2>
    <form onSubmit={handleSubmit}>
	    <label htmlFor={"title"}>
		    <textarea
		     id={"title"}
		     placeholder={"Votre tâche"}
		     value={title}
		     onChange={handleChange}
		    />
		    <span>Votre tâche</span>
	    </label>
	    <input type={"submit"} disabled={title === ""} value={"Ajouter"} />
    </form>
		 {error && <p className={"error"}>{error}</p>}
	 </div>
	)
}

export default TodoForm