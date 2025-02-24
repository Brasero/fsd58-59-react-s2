import './App.css'
import {Routes, Route} from "react-router";
import BlogListPage from "./page/BlogList/index.page.jsx";
import Lien from "./component/Lien.jsx";
import BlogDetailPage from "./page/BlogDetail/index.page.jsx";
import usePostReducer from "./reducer/postReducer.jsx";
import BlogFormPage from "./page/BlogForm/index.page.jsx";

const App = () => {
 
 const {state, resetPost, changePost, addPost} = usePostReducer();

 
  return (
    <>
      <h1> Post App </h1>
     <nav style={{
      display: "flex",
      gap: "15px",
      justifyContent: "center"
     }}>
      <Lien label={"Accueil"} to={"/accueil"} />
      <Lien label={"Ajouter un article"} to={"/blog/add"} />
     </nav>
      <Routes>
       <Route path={"/accueil"} element={<BlogListPage posts={state.data} />}>
        <Route path={"blog/:id"} element={<BlogDetailPage posts={state.data} />} />
       </Route>
       <Route path={"/blog/add"} element={<BlogFormPage post={state.post} submit={addPost} change={changePost} reset={resetPost} />} />
       
       <Route path={"*"} element={<div>404 not found</div>} />
      </Routes>
    </>
  )
}

export default App