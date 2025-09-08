import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import CartPage from "./components/CartPage"
import CheckOut from "./pages/CheckOut"



export default function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/*" element={<Product/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        </Routes>
        <Footer />
        
      


    </div>
  )
}