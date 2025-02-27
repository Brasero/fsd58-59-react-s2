// path: redux-exemple/src/component/DragonForm/index.jsx
import "./style.scss";
import {useSelector, useDispatch} from "react-redux"
import {selectDragon, selectDragons} from "../../store/selector/dragon-selector.js";
import {addDragonAction, setDragonAction, sortDragonAction} from "../../store/action/dragon-action.js";
import {useState} from "react";
import {addLogAction} from "../../store/action/log-action.js";

const DragonForm = () => {
 
 const dragon = useSelector(selectDragon);
 const dragons = useSelector(selectDragons);
 const dispatch = useDispatch()
 const [error, setError] = useState("")
 
 const handleChange = (e) => {
  const {value} = e.target
  dispatch(setDragonAction(value))
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  if (dragon.trim() === "") {
   setError("Merci de bien remplir le champs avant la soumission.")
   return
  }
  const exist = dragons.find((drag => drag.name.toLowerCase() === dragon.toLowerCase()))
  if (exist !== undefined) {
   setError("Ce dragon existe déjà.")
   return
  }
  setError("")
  dispatch(addDragonAction())
 }
 
 const onReverse = () => {
  dispatch(sortDragonAction())
 }
 
 return (
  <div className="DragonForm">
   <h2>Ajouter un dragon</h2>
   {
    error !== "" && <p style={{color: "red"}}>{error}</p>
   }
   <form onSubmit={handleSubmit}>
    <input type={"text"} value={dragon} onChange={handleChange} />
    <input type={"submit"} value={"Ajouter"} />
   </form>
   <button onClick={onReverse}>Invérser la liste</button>
  </div>
 )
}

export default DragonForm