import './App.css'
import {useSelector, useDispatch} from "react-redux"
import {addMessageAction, decrementAction, incrementAction, setMessageAction} from "./store/action/action.js";
import {selectCount, selectMessage, selectMessages} from "./store/selector/selector.js";
function App() {
 
 const count = useSelector(selectCount)
 const messages = useSelector(selectMessages)
 const message = useSelector(selectMessage)
 const dispatch = useDispatch()
 
 
 const increment = () => {
  dispatch(incrementAction())
 }
 
 const decrement = () => {
  dispatch(decrementAction())
 }
 
 const setMessage = (e) => {
  const {value} = e.target
  dispatch(setMessageAction(value))
 }
 
 const handleSubmit = () => {
  dispatch(addMessageAction())
 }

 // store.subscribe(() => {
 //  console.log(store.getState())
 // })
 //
 // console.log(store.getState())
 // store.dispatch({
 //  type: "INCREMENT"
 // })
 //
 
  return (
    <>
     <button onClick={decrement}>-1</button>
     <span>{count}</span>
     <button onClick={increment}>+1</button>
     <div>
      <input type={"text"} value={message} onChange={setMessage} />
      <button onClick={handleSubmit}>Ajouter</button>
     </div>
     <div>
      <ul>
       {
        messages.length ?
         messages.map((message, i) => <li key={i}>{message}</li>)
         :
         <p>Aucun message à afficher</p>
       }
      </ul>
     </div>
    </>
  )
}

export default App