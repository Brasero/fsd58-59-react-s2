// path: denomination/src/component/DenominationResult/index.jsx
import "./style.scss";
import {useSelector} from "react-redux";
import {selectDenomination} from "../../store/selector/denomination-selector.js";

const DenominationResult = () => {
 
 const denomination = useSelector(selectDenomination)
 
 return (
  <div className="DenominationResult">
   <h3>Résultat</h3>
   {
    Object.keys(denomination).map((key) => denomination[key] ?
     <span key={key}>Dénomination {key} unité(s) : {denomination[key]}</span> : null)
   }
  </div>
 )
}

export default DenominationResult