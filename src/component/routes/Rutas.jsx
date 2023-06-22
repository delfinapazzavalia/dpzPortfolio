import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../about/About";
import Resume from "../resume/Resume";
import Projects from "../resume/Projects";
import Skills from "../resume/Skills";
import Contact from "../resume/Contact";

const Rutas = () => {
  return (
    <Routes>
      <Route path="#AboutMe" element={<About />} />
      <Route path="#Resume" element={<Resume />} />
      <Route path="#Projects" element={<Projects />} />
      <Route path="#Skills" element={<Skills />} />
      <Route path="#Contact" element={<Contact />} />
    </Routes>
  );
};

export default Rutas;
