import React from 'react';
import '../navbar/Navbar.css';

const Navbar = () => {
  return (
    <div>
            <nav className="navbar">
      <div className="navbar-left">DPZ.</div>
      <div className="navbar-right">
        <a href="/AboutMe">ABOUT ME</a>
        <a href="/studies">RESUME</a>
        <a href="/projects">PROJECTS</a>
        <a href="/projects">SKILLS</a>
        <a href="/contact">CONTACT ME</a>
      </div>
    </nav>
    </div>
  )
}

export default Navbar