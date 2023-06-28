import React from "react";
import "../cardsProjects/CardsProjects.css";
import viaje from "../cardsProjects/viaje.png";

const Travel = () => {
  return (
    <>
      <div className="card-project">
        <img src={viaje} alt="Imagen" className="card-project-image" />
        <div className="card-project-content">
          <h3 className="card-project-title">TRAVEL WEBSITE</h3>
          <p className="card-project-description">
            Group project to complete the first module of
            the program using agile methodologies for faster and more flexible
            development. We primarily used HTML, CSS,
            and Bootstrap to design and structure the project.
          </p>
          <p className="card-project-info">Rolling Tours</p>
          <a
            className="card-project-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://rolling-tours.netlify.app/"
          >
            Explore more
          </a>
        </div>
      </div>
    </>
  );
};

export default Travel;