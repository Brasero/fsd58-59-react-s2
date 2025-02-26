// path: redux-exemple/src/component/CoupleList/index.jsx
import "./style.scss";
import {useSelector} from "react-redux";
import {selectCouples} from "../../store/selector/couple-selector.js";
import CoupleItem from "../CoupleItem/index.jsx";

const CoupleList = () => {
	
 const couples = useSelector(selectCouples)
 
	return (
		<div className="CoupleList">
      {
          couples.length ?
           couples.map(couple => <CoupleItem key={couple.id} couple={couple} />)
           :
           <p>Aucun couple pour le moment</p>
      }
		</div>
	)
}

export default CoupleList