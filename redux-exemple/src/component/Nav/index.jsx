// path: redux-exemple/src/component/Nav/index.jsx
import "./style.scss";
import {NavLink} from "react-router";

const Nav = () => {
	
	return (<nav className="Nav">
			<NavLink to={"/"}>Accueil</NavLink>
			<NavLink to={"/add"}>Ajouter une tâche</NavLink>
		</nav>)
}

export default Nav