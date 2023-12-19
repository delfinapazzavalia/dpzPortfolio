import React from "react";
import "../cardsResume/CardsResume.css";
import codigo from "../cardsResume/codigo.png"

const CardRolling = () => {
  return (
    <>
      <div className="card">
        <img src={codigo} alt="Imagen" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Figma desde cero</h3>
          <p className="card-description">Udemy</p>
          <p className="card-info">2023</p>
          <a className="card-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1lZooCdP8_Ombu9tLJlhd5jZMhjUooF3u/view?usp=drive_link">
          View certificate
          </a>
        </div>
      </div>
    </>
  );
};

export default CardRolling;