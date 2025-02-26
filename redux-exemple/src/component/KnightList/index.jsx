// path: redux-exemple/src/component/KnightList/index.jsx
import "./style.scss";
import {useSelector} from "react-redux";
import {selectKnights} from "../../store/selector/knight-selector.js";
import KnightItem from "../KnightItem/index.jsx";

const KnightList = () => {
	
	const knights = useSelector(selectKnights)
	
	return (
		<div className="KnightList">
			{
				knights.length ?
					knights.map(knight => <KnightItem key={knight.id} knight={knight} />)
					:
					<p>Aucun chevalier dans la liste</p>
			}
		</div>
	)
}

export default KnightList