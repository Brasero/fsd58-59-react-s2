// path: redux-exemple/src/component/Header/index.jsx
import "./style.scss";
import {useSelector} from "react-redux";

const Header = ({label, selector}) => {
 
 const count = useSelector(selector)
 
 return (
  <header className="Header">
   <h1 className={"brand"}>{label}s</h1>
   <p>Nombre de {label} : {count}</p>
  </header>
 )
}

export default Header