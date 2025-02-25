// path: redux-exemple/src/component/DragonList/index.jsx
import "./style.scss";
import {useSelector} from "react-redux";
import {selectDragons} from "../../store/selector/dragon-selector.js";
import DragonItem from "../DragonItem/index.jsx";

const DragonList = () => {
 
 const dragons = useSelector(selectDragons)
 
 return (
  <div className="DragonList">
   {
    dragons.length ?
     <ul>
      {
       dragons.map(dragon => <DragonItem dragon={dragon} key={dragon.id} /> )
      }
     </ul>
     :
     <p>Aucun dragon dans liste</p>
   }
  </div>
 )
}

export default DragonList