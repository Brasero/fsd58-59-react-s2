// path : denomination/src/page/Home/index.page.jsx
import "./style.scss";
import DenominationForm from "../../component/DenominationForm/index.jsx";
import DenominationResult from "../../component/DenominationResult/index.jsx";
const HomePage = () => {
 
 return <div className="page" id="Home">
  <DenominationForm />
  <DenominationResult />
 </div>
}

export default HomePage