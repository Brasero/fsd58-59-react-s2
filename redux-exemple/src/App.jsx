import './App.css'
import DragonPage from "./page/Dragon/index.page.jsx";
import LogPage from "./page/Log/index.page.jsx";
import KnightPage from "./page/Knight/index.page.jsx";
import CouplePage from "./page/Couple/index.page.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectCount, startCounter} from "./store/reducer/CounterReducer.jsx";

function App() {
 
 const count = useSelector(selectCount)
 const dispatch = useDispatch()
 
 const onClick = () => {
  dispatch(startCounter())
 }
 
  return (
    <>
     <span>{count}</span>
     <button onClick={onClick}>Start</button>
     <LogPage />
     <DragonPage />
     <KnightPage />
     <CouplePage />
    </>
  )
}

export default App