import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./component/Nav.jsx";
import ProductList from "./component/ProductList.jsx";
import Cart from "./component/Cart.jsx";

function App() {

  return (
    <>
     <Nav />
     <div className={"container"}>
      <Cart />
      <ProductList />
     </div>
    </>
  )
}

export default App