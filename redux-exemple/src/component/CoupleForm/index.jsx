// path: redux-exemple/src/component/CoupleForm/index.jsx
import "./style.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectKnights} from "../../store/selector/knight-selector.js";
import {selectDragons} from "../../store/selector/dragon-selector.js";
import Select from "../Select/index.jsx";
import {useState} from "react";
import {addCouple} from "../../store/slice/coupleSlice.jsx";
import {deleteKnight} from "../../store/slice/knightSlice.jsx";
import {deleteDragon} from "../../store/slice/dragonSlice.js";

const CoupleForm = () => {
	
	const knights = useSelector(selectKnights)
	const dragons = useSelector(selectDragons)
	const dispatch = useDispatch()
	const [selectedCouple, setSelectedCouple] = useState({
		knight: "",
		dragon: ""
	})
	
	const handleChange = (e) => {
		const {name, value} = e.target
		setSelectedCouple({
			...selectedCouple,
			[name]: value
		})
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		if (selectedCouple.dragon === "" || selectedCouple.knight === "") {
			return
		}
		dispatch(addCouple(selectedCouple))
		setSelectedCouple({
			dragon: "",
			knight: ""
		})
		dispatch(deleteKnight(JSON.parse(selectedCouple.knight).id))
		dispatch(deleteDragon(JSON.parse(selectedCouple.dragon).id))
	}
 
	return (
		<div className="CoupleForm">
      <h2>Créer un couple</h2>
      <form onSubmit={handleSubmit}>
       <div>
								<label>Dragon</label>
								<Select value={selectedCouple.dragon} name={"dragon"} list={dragons} changeValue={handleChange} />
							</div>
							<div>
								<label>Chevalier</label>
								<Select value={selectedCouple.knight} name={"knight"} list={knights} changeValue={handleChange} />
							</div>
							<input type={"submit"} value={"Créer le couple"}/>
      </form>
		</div>
	)
}

export default CoupleForm