// path: redux-exemple/src/component/Select/index.jsx
import "./style.scss";

const Select = ({list, value, changeValue, name}) => {
	
	return (
		<select name={name} onChange={changeValue} value={value} className="Select">
		  <option value={""}>----</option>
      {list.map((item) => <option value={JSON.stringify(item)} key={item.id}>{item.name}</option>)}
		</select>
	)
}

export default Select