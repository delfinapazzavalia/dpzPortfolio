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
          <a className="card-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1Lh-Y06asXF3l-1vI38U4V9aMyGWBM69V/view?usp=drive_link">
            View certificate
          </a>

        </div>
      </div>
    </>
  );
};

export default CardScrum;