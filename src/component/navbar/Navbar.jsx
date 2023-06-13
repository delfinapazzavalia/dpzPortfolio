import React from 'react';
import '../navbar/Navbar.css';

const Navbar = () => {
  return (
    <div>
            <nav className="navbar">
      <div className="navbar-left">DPZ.</div>
      <div className="navbar-right">
        <a href="/about">about</a>
        <a href="/studies">resume</a>
        <a href="/projects">projetcts</a>
        <a href="/contact">contact</a>
      </div>
    </nav>
    </div>
  )
}

export default Navbar