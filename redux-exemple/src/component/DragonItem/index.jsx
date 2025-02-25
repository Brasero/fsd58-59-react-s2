// path: redux-exemple/src/component/DragonItem/index.jsx
import "./style.scss";
import {useDispatch} from "react-redux";
import {deleteDragonAction} from "../../store/action/dragon-action.js";

const DragonItem = ({dragon}) => {
 
 const dispatch = useDispatch()
 
 const onDelete = () => {
  dispatch(deleteDragonAction(dragon.id))
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