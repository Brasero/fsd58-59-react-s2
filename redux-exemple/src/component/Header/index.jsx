// path: redux-exemple/src/component/Header/index.jsx
import "./style.scss";
import {useSelector} from "react-redux";
import {selectDragonCount} from "../../store/selector/dragon-selector.js";

const Header = () => {
 
 const count = useSelector(selectDragonCount)
 
 return (
  <header className="Header">
   <h1 className={"brand"}>Dragons</h1>
   <p>Nombre de dragon : {count}</p>
  </header>
 )
}

export default Header