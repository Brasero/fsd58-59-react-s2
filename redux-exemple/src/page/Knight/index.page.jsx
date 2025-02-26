// path : redux-exemple/src/page/Knight/index.page.jsx
import "./style.scss";
import Header from "../../component/Header/index.jsx";
import {selectKnightCount} from "../../store/selector/knight-selector.js";
import KnightForm from "../../component/KnightForm/index.jsx";
import KnightList from "../../component/KnightList/index.jsx";

const KnightPage = () => {
	
	return <div className="page" id="Knight">
		<Header label={"knight"} selector={selectKnightCount} />
		<div className={"knight__container"}>
			<KnightForm />
			<KnightList />
		</div>
	</div>
}

export default KnightPage