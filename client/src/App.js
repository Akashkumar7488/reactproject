import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Success from './components/success';
import "./App.css"
const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="success" element={<Success />} />
   </Routes>
   
   </>
  )
}

export default App
