// path: redux-exemple/src/component/TodoItem/index.jsx
import "./style.scss";
import {useDispatch} from "react-redux";
import {updateTodo} from "../../store/slice/todoSlice.jsx";

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
		  <h4>{todo.title}</h4>
    <p>
        <input type={"checkbox"} onChange={handleCompleted} checked={todo.completed} />
        <span>Complété</span>
    </p>
		</div>
	)
}

export default TodoItem