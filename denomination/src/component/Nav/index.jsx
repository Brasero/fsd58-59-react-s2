// path: denomination/src/component/Nav/index.jsx
import "./style.scss";
import {NavLink} from "react-router";

const Nav = () => {
	
	return (
		<div className="Nav">
      <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/settings"}>Réglages</NavLink>
      </nav>
		</div>
	)
}

export default Nav