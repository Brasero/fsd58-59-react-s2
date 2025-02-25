// path : redux-exemple/src/page/Dragon/index.page.jsx
import "./style.scss";
import Header from "../../component/Header/index.jsx";
import DragonForm from "../../component/DragonForm/index.jsx";
import DragonList from "../../component/DragonList/index.jsx";

const DragonPage = () => {
 
 return <div className="page" id="Dragon">
  <Header />
  <div className={"dragon__container"}>
   <DragonForm />
   <DragonList />
  </div>
 </div>
}

export default DragonPage