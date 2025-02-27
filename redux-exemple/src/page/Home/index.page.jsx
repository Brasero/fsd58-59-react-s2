// path : redux-exemple/src/page/Home/index.page.jsx
import "./style.scss";
import TodoList from "../../component/TodoList/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectError, selectIsLoading} from "../../store/selector/todo-selector.js";
import Loader from "../../component/Loader/index.jsx";
import {useEffect} from "react";
import {resetError} from "../../store/slice/todoSlice.jsx";

const HomePage = () => {

	const todoIsLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError)
	const dispatch = useDispatch()
	
	useEffect(() => {
		if (error !== "") {
			dispatch(resetError(2500))
		}
	}, [error]);
	
	
	if (todoIsLoading) {
		return <Loader />
	}
	
	
	return <div className="page" id="Home">
		{error && <p className={"error"}>{error}</p>}
    <TodoList />
	</div>
}

export default HomePage