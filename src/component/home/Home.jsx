import React from "react";
import "../home/Home.css";
import perfil from "../home/perfildelfi.png"


const Home = () => {
  return (
    <div className="home">

      <div className="home-left">
        <h2>WELCOME!</h2>
        <h1>I'm Delfina Paz Zavalia</h1>
        <span>_________</span>
        <p>FullStack Web Developer</p>
        <button class="my-button">CONTACT ME</button>
      </div>
      <div className="home-right">
        <img src={perfil} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;