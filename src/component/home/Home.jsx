import React from "react";
import "../home/Home.css";
import perfil from "../home/perfildelfi.png"

const handleClick = () => {
  const seccionElement = document.getElementById('Contact');
  if (seccionElement) {
    seccionElement.scrollIntoView({ behavior: 'smooth' });
  }
};

const Home = () => {
  return (
    <div id="Home" className="home">

      <div className="home-left">
        <h1 className="home-welcome"><strong>WELCOME</strong></h1>
        <h2>I'm Delfina Paz Zavalia</h2>
        
        <h3>FullStack Web Developer</h3>
        <br />
        <br />
        <button onClick={handleClick} class="my-button" style={{ cursor: 'pointer' }}>CONTACT ME</button>
      </div>
      <div className="home-right">
        <img src={perfil} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;