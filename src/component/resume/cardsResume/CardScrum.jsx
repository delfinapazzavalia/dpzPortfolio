import React from "react";
import "../cardsResume/CardsResume.css";
import codigo from "../cardsResume/codigo.png"

const CardScrum = () => {
  return (
    <>
      <div className="card">
        <img src={codigo} alt="Imagen" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Agile Framework - Scrum</h3>
          <p className="card-description">Certiprof</p>
          <p className="card-info">2022</p>
          <a className="card-link" target="_blank" rel="noopener noreferrer" href="https://media.licdn.com/dms/image/C4D22AQHvO4ZQYJeYww/feedshare-shrink_2048_1536/0/1663194243034?e=1689206400&v=beta&t=jioIr7ZTQHA4emiiy1UXMYiPMpaeE-oJIFVaZ6tNGuE">
          View certificate
          </a>
          
        </div>
      </div>
    </>
  );
};

export default CardScrum;