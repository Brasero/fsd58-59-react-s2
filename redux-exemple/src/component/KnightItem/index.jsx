// path: redux-exemple/src/component/KnightItem/index.jsx
import "./style.scss";
import {useDispatch} from "react-redux";
import {deleteKnight} from "../../store/slice/knightSlice.jsx";

const KnightItem = ({knight}) => {
	const dispatch = useDispatch()
	
	const onDelete = () => {
		dispatch(deleteKnight(knight.id))
	}
	
	
	return (
		<div className="KnightItem">
				<span>{knight.name}</span>
				<span>
					<button onClick={onDelete}>
						X
					</button>
				</span>
		</div>
	)
}

export default KnightItem