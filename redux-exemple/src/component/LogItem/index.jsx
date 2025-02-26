// path: redux-exemple/src/component/LogItem/index.jsx
import "./style.scss";
import moment from "moment";

const LogItem = ({log}) => {
	
	console.log(log)
	const date = moment(log.date).format("MMMM DD, h:mm:ss")
	
	return (
		<div className="LogItem">
			<span>Date : {date}</span>
			<span>Action : {log.action}</span>
			<span>Name : {log.name}</span>
		</div>
	)
}

export default LogItem