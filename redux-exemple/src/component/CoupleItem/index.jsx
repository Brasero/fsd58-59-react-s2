// path: redux-exemple/src/component/CoupleItem/index.jsx
import "./style.scss";
import {useDispatch} from "react-redux";
import {removeCouple} from "../../store/slice/coupleSlice.jsx";
import {addKnight} from "../../store/slice/knightSlice.jsx";
import {addDragon} from "../../store/slice/dragonSlice.js";

const CoupleItem = ({couple}) => {
	
	const dispatch = useDispatch()
	
	const handleDelete = () => {
		dispatch(removeCouple(couple.id))
		dispatch(addKnight(couple.knight.name))
		dispatch(addDragon(couple.dragon.name))
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