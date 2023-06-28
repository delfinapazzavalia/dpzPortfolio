import React from 'react';
import '../navbar/Navbar.css';

const Navbar = () => {
  return (
    <div>
            <nav className="navbar">
      <a href='#Home' className="navbar-left">DPZ.</a>
      <div className="navbar-right">
        <a href="#AboutMe">ABOUT ME</a>
        <a href="#Resume">RESUME</a>
        <a href="#Projects">PROJECTS</a>
        <a href="#Skills">SKILLS</a>

      </div>
    </nav>
    </div>
  )
}

export default Navbar