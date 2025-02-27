import './App.css'
import HomePage from "./page/Home/index.page.jsx";
import {Route, Routes} from "react-router";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchTodo} from "./store/slice/todoSlice.jsx";
import Nav from "./component/Nav/index.jsx";
import FormPage from "./page/Form/index.page.jsx";
import UpdatePage from "./page/Update/index.page.jsx";

function App() {
	const dispatch = useDispatch()
	
	//Chargement des todos lorsque l'app monte
	useEffect(() => {
		dispatch(fetchTodo())
	}, []);
	
	return (<div className={"app"}>
		 <header>
			 <h1>Todo App</h1>
			 <Nav/>
		 </header>
		 <Routes>
			 <Route path={"/"} element={<HomePage/>}/>
			 <Route path={"/add"} element={<FormPage />}/>
			 <Route path={"/update/:id"} element={<UpdatePage />} />
		 </Routes>
	 </div>)
}

export default App