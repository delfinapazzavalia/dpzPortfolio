import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../about/About";
import Resume from "../resume/Resume";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Home from "../home/Home";


const Rutas = () => {
  return (
    <Routes>
      <Route path="#Home" element={<Home />} /> 
      <Route path="#AboutMe" element={<About />} />
      <Route path="#Resume" element={<Resume />} />
      <Route path="#Projects" element={<Projects />} />
      <Route path="#Skills" element={<Skills />} />
      <Route path="#Contact" element={<Contact />} />
      
      
     
    </Routes>
  );
};

export default Rutas;
