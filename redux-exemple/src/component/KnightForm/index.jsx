// path: redux-exemple/src/component/KnightForm/index.jsx
import "./style.scss";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addKnightAction, reverseKnight, setKnightAction} from "../../store/action/knight-action.js";
import {selectKnight, selectKnights} from "../../store/selector/knight-selector.js";
import {addLogAction} from "../../store/action/log-action.js";

const KnightForm = () => {
 
 const dispatch = useDispatch()
 const [error, setError] = useState("")
	const knight = useSelector(selectKnight)
 const knights = useSelector(selectKnights)
 const handleChange = (e) => {
  const {value} = e.target
  dispatch(setKnightAction(value))
 }
 
 const handleSubmit = (e) => {
  e.preventDefault()
  if (knight.trim() === "") {
   setError("Merci de saisir un nom pour votre chevalier")
   return
  }
  
  const exist = knights.find(kni => kni.name.toLowerCase() === knight.trim().toLowerCase())
  if (exist !== undefined) {
   setError("Ce chevalier existe déjà")
   return
  }
  error && setError("")
  dispatch(addKnightAction())
 }
 
 const handleReverse = () => {
  dispatch(reverseKnight())
 }
 
	return (
  <div className="KnightForm">
      <h2>Ajouter un chevalier</h2>
      {
       error !== "" && <p style={{color: "red"}}>{error}</p>
      }
      <form onSubmit={handleSubmit}>
          <input type={"text"} onChange={handleChange} value={knight}/>
          <input type={"submit"} value={"Ajouter"}/>
      </form>
      <button onClick={handleReverse}>Invérser la liste</button>
  </div>
 )
}

export default KnightForm