// path : denomination/src/page/DenominationSelection/index.page.jsx
import "./style.scss";
import {useSelector} from "react-redux";
import {selectDenominations} from "../../store/selector/denomination-selector.js";
import DenominationOption from "../../component/DenominationOption/index.jsx";

const DenominationSelectionPage = () => {
    
    const denominations = useSelector(selectDenominations)
    console.log(denominations)
    
    return <div className="page" id="DenominationSelection">
        <h2>Choisissez votre dénomination :</h2>
        {
            Object.keys(denominations).map((key) => <DenominationOption key={key} denomination={denominations[key]} />)
        }
    </div>
}

export default DenominationSelectionPage