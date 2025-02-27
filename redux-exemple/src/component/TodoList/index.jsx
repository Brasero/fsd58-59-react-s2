// path: redux-exemple/src/component/TodoList/index.jsx
import "./style.scss";
import {useSelector} from "react-redux";
import {selectTodos} from "../../store/selector/todo-selector.js";
import TodoItem from "../TodoItem/index.jsx";

const TodoList = () => {
	
	const todos = useSelector(selectTodos)
	
	return (
		<div className="TodoList">
			{
				todos.length ?
					[...todos].reverse().map(todo => <TodoItem key={todo.id} todo={todo} /> )
					:
					<p>Aucune todo à afficher</p>
			}
		</div>
	)
}

export default TodoList