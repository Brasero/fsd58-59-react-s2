// path: denomination/src/component/DenominationForm/index.jsx
import "./style.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectNumber, selectSelectedDenomination} from "../../store/selector/denomination-selector.js";
import {calcDenominationAction, setNumberAction} from "../../store/action/denomination-action.js";

const DenominationForm = () => {
 
 const selectedDenomination = useSelector(selectSelectedDenomination)
 const number = useSelector(selectNumber)
 const dispatch = useDispatch()
 
 const handleChange = (e) => {
  const {value} = e.target
  dispatch(setNumberAction(value))
 }
 
 const handleSubmit = () => {
  dispatch(calcDenominationAction())
 }
 
 return <div className="DenominationForm">
   <h2>Dénomination séléctionné : {selectedDenomination.join(", ")}</h2>
   <input type={"number"} value={number} onChange={handleChange}/>
   <button onClick={handleSubmit} disabled={number === 0}>Calculer</button>
  </div>
}

export default DenominationForm