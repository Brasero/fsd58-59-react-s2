// path: denomination/src/component/DenominationOption/index.jsx
import "./style.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectSelectedDenomination} from "../../store/selector/denomination-selector.js";
import {selectDenominationAction} from "../../store/action/denomination-action.js";

const DenominationOption = ({denomination}) => {
 
	const dispatch = useDispatch()
 const selectedDenomination = useSelector(selectSelectedDenomination)
 
	
	const handleClick = () => {
		dispatch(selectDenominationAction(denomination))
	}
	
 return (
  <div className="DenominationOption" onClick={handleClick}>
			<input type="checkbox" checked={selectedDenomination === denomination}/>
			<span>{denomination.join(", ")}</span>
  </div>
 )
}

export default DenominationOption