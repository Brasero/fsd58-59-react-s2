// path: redux-exemple/src/component/MessageForm/index.jsx
import "./style.scss";
import {useDispatch, useSelector} from "react-redux";
import {addMessage, deleteMessage, setMessage} from "../../store/messageSlice.js";

const MessageForm = () => {
	
	const message = useSelector((state) => state.messages.message)
	const messages = useSelector(state => state.messages.messages)
	const dispatch = useDispatch()
	
	const handleChange = (e) => {
		const {value} = e.target
		dispatch(setMessage(value))
	}
	
	const handleDelete = (mess) => {
		dispatch(deleteMessage(mess))
	}
	
	const handleClick = () => {
		dispatch(addMessage(message))
	}
	
	console.log(deleteMessage.toString())
	
	return (<div className="MessageForm">
			<input type={"text"} value={message} onChange={handleChange}/>
			<button onClick={handleClick}>Ajouté</button>
			<ul>
				{
					messages.length ?
						messages.map((mess, i) => <li key={i} onClick={() => handleDelete(mess)}>{mess}</li>)
						:
						<p>Aucun message</p>
				}
			</ul>
		</div>)
}

export default MessageForm