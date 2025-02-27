// path : redux-exemple/src/page/Home/index.page.jsx
import "./style.scss";
import TodoList from "../../component/TodoList/index.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchTodo} from "../../store/slice/todoSlice.jsx";

const HomePage = () => {
	
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(fetchTodo())
	}, []);
	
	return <div className="page" id="Home">
    <TodoList />
	</div>
}

export default HomePage