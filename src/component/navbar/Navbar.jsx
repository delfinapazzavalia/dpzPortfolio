import React from 'react';
import '../navbar/Navbar.css';

const Navbar = () => {
  return (
    <div>
            <nav className="navbar">
      <div className="navbar-left">DPZ.</div>
      <div className="navbar-right">
        <a href="#AboutMe">ABOUT ME</a>
        <a href="#Resume">RESUME</a>
        <a href="#Projects">PROJECTS</a>
        <a href="#Skills">SKILLS</a>
        <a href="#Contact">CONTACT ME</a>
      </div>
    </nav>
    </div>
  )
}

export default Navbar