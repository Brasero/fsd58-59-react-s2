// path: redux-exemple/src/component/TodoItem/index.jsx
import "./style.scss";
import {useDispatch} from "react-redux";
import {updateTodo} from "../../store/slice/todoSlice.jsx";
import {Link} from "react-router";

const TodoItem = ({todo}) => {
	
	const dispatch = useDispatch()
	
	const handleCompleted = () => {
		dispatch(updateTodo({
			...todo,
			completed: !todo.completed
		}))
	}
	
	return (
		<div className="TodoItem">
			<Link to={`/update/${todo.id}`} className={todo.completed ? "link complete" : "link"}>
				<h4>{todo.title}</h4>
			</Link>
			<p>
				<span className={`checkbox ${todo.completed && "checked"}`}>
          <input type={"checkbox"} onChange={handleCompleted} checked={todo.completed}/>
        </span>
			</p>
		</div>
	)
}

export default TodoItem