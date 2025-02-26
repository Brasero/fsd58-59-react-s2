// path: redux-exemple/src/component/CoupleItem/index.jsx
import "./style.scss";
import {useDispatch} from "react-redux";
import {removeCouple} from "../../store/action/couple-action.js";
import {addKnightAction} from "../../store/action/knight-action.js";
import {addDragonAction} from "../../store/action/dragon-action.js";

const CoupleItem = ({couple}) => {
	
	const dispatch = useDispatch()
	
	const handleDelete = () => {
		dispatch(removeCouple(couple.id))
		dispatch(addKnightAction(couple.knight))
		dispatch(addDragonAction(couple.dragon))
	}
	
	return (
		<div className="CoupleItem">
		  <div className={"text"}>
        <span>Le chevalier {couple.knight.name}</span>
        <span>monte {couple.dragon.name}</span>
    </div>
    <div>
        <button onClick={handleDelete}>X</button>
    </div>
		</div>
	)
}

export default CoupleItem