import React from "react";
import Navbar from "./components/navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Clothes from "./pages/Clothes";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
    </div>
  );
};

export default App;
