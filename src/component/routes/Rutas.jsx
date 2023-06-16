import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../about/About";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/AboutMe" element={<About/>} />
    </Routes>
  );
};

export default Rutas;
