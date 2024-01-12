import React from "react";
import "../cardsResume/CardsResume.css";
import codigo from "../cardsResume/codigo.png"

const CardRolling = () => {
  return (
    <>
      <div className="card">
        <img src={codigo} alt="Imagen" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Full Stack Web Developer</h3>
          <p className="card-description">Rolling Code School</p>
          <p className="card-info">2022 - 2023</p>
          <a className="card-link" target="_blank" rel="noopener noreferrer" href="https://certs.rollingcodeschool.com//ZGVsZmlwYXp6YXZhbGlhQGhvdG1haWwuY29t-1679573151976-1.png">
          View certificate
          </a>
        </div>
      </div>
    </>
  );
};

export default CardRolling;