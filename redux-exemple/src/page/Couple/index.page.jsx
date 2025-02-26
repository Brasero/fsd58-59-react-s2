// path : redux-exemple/src/page/Couple/index.page.jsx
import "./style.scss";
import CoupleForm from "../../component/CoupleForm/index.jsx";
import CoupleList from "../../component/CoupleList/index.jsx";

const CouplePage = () => {
	
	return <div className="page" id="Couple">
	   <CoupleForm />
			 <CoupleList />
	</div>
}

export default CouplePage