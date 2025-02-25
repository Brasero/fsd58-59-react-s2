import './App.css'
import {Route, Routes} from "react-router";
import HomePage from "./page/Home/index.page.jsx";
import Nav from "./component/Nav/index.jsx";
import DenominationSelectionPage from "./page/DenominationSelection/index.page.jsx";

function App() {

  return (
    <>
      <Nav />
      <h1>Dénomination app</h1>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/settings"} element={<DenominationSelectionPage />} />
      </Routes>
    </>
  )
}

export default App