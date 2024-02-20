import React from "react";
import "../Components/Navbar/Navbar.css";
// Router Dom
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import APC from "../Pages/Products/APC/APC";
import ACCL from "../Pages/Products/ACCL/ACCL";
import Voltage from "../Pages/Products/Voltage/Voltage";
import Water from "../Pages/Products/Water/Water";
import PowerFactor from "../Pages/Products/PowerFactor/PowerFactor";
import Contact from "../Pages/Contact/Contact";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<APC />} path="/apc" />
        <Route element={<ACCL />} path="/accl" />
        <Route element={<Voltage />} path="/automatic-voltage" />
        <Route element={<Water />} path="/automatic-water" />
        <Route element={<PowerFactor />} path="/automatic-powerfactor-panel" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </div>
  );
};

export default Router;
