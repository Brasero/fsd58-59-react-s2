import './App.css'
import DragonPage from "./page/Dragon/index.page.jsx";
import LogPage from "./page/Log/index.page.jsx";
import KnightPage from "./page/Knight/index.page.jsx";
import CouplePage from "./page/Couple/index.page.jsx";

function App() {
 
 
 
  return (
    <div className={"app"}>
     <LogPage />
     <DragonPage />
     <KnightPage />
     <CouplePage />
    </div>
  )
}

export default App