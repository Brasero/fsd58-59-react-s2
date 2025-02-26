// path : redux-exemple/src/page/Log/index.page.jsx
import "./style.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectLog} from "../../store/selector/log-selector.js";
import LogItem from "../../component/LogItem/index.jsx";
import {resetLogAction} from "../../store/action/log-action.js";

const LogPage = () => {
	
	const logs = useSelector(selectLog)
	const dispatch = useDispatch()
	
	const handleReset = () => {
		dispatch(resetLogAction())
	}
	
	return <div className="page" id="Log">
		{
			logs.length ?
				logs.map((log, i) => <LogItem key={i} log={log} /> )
				:
				<span>Aucun Log pour le moment</span>
		}
		<button onClick={handleReset}>reset</button>
	</div>
}

export default LogPage