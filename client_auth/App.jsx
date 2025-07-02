import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './Components/Home/Header/Header.jsx'
import Home from "../src/Components/Home/HomePage.jsx"
import Footer from "./Components/Home/Footer/Footer.jsx";
import ProductList from "./Components/ProductList/ProductList.jsx";
import ProductDetail from "./Components/ProductDetalis/ProductDetail.jsx";
import Login from "./Components/LoginPage/Login.jsx";
import Emailverify from "./Components/LoginPage/Emailverify.jsx";
import Reset_pass from "./Components/LoginPage/Reset_pass.jsx";
import Add_to_cart from "./Components/Home/add_to_cart.jsx/add_to_cart.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>  {/* ✅ NO BrowserRouter here */}
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/email-verify' element={<Emailverify/>}/>
        <Route path='/Reset_pass' element={<Reset_pass/>}/>
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/productDetails/:id" element={<ProductDetail/>}/>
        <Route path="/Add_to_cart" element={<Add_to_cart/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
