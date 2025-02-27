// path: redux-exemple/src/component/DragonItem/index.jsx
import "./style.scss";
import {useDispatch} from "react-redux";
import {deleteDragonAction} from "../../store/action/dragon-action.js";
import {addLogAction} from "../../store/action/log-action.js";
import {deleteDragon} from "../../store/slice/dragonSlice.js";

const DragonItem = ({dragon}) => {
 
 const dispatch = useDispatch()
 
 const onDelete = () => {
  dispatch(deleteDragon(dragon.id))
 }
 
 return (
  <li className="DragonItem">
   <span>{dragon.name}</span>
   <span>
    <button onClick={onDelete}>X</button>
   </span>
  </li>
 )
}

export default DragonItem