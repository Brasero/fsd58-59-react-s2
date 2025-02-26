// path: redux-exemple/src/component/DragonItem/index.jsx
import "./style.scss";
import {useDispatch} from "react-redux";
import {deleteDragonAction} from "../../store/action/dragon-action.js";
import {addLogAction} from "../../store/action/log-action.js";

const DragonItem = ({dragon}) => {
 
 const dispatch = useDispatch()
 
 const onDelete = () => {
  dispatch(deleteDragonAction(dragon.id))
  dispatch(addLogAction({
   action: "Dragon supprimée",
   name: dragon.name
  }))
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