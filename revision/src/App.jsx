import './App.css'
import {Routes, Route, NavLink} from "react-router";
import AccueilPage from "./page/Accueil/index.page.jsx";
import BlogListPage from "./page/BlogList/index.page.jsx";
import Lien from "./component/Lien.jsx";
import BlogDetailPage from "./page/BlogDetail/index.page.jsx";


const checkIsActive = ({isActive}) => isActive ? {color: "orange"} : {}

const App = () => {

 
  return (
    <>
      <h1> Route App </h1>
     <nav>
      <Lien label={"Accueil"} to={"/"} />
      <Lien label={"Blog"} to={"/blog"} />
     </nav>
      <Routes>
        <Route path={"/"} element={<AccueilPage />} />
        <Route path={"/blog"} element={<BlogListPage />} />
        <Route path={"/blog/:id"} element={<BlogDetailPage />} />
      </Routes>
    </>
  )
}

export default App