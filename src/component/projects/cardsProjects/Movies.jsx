import React from "react";
import "../cardsProjects/CardsProjects.css";
import pelicula from "../cardsProjects/pelicula.png";

const Movies = () => {
  return (
    <>
      <div className="card-project">
        <img src={pelicula} alt="Imagen" className="card-project-image" />
        <div className="card-project-content">
          <h3 className="card-project-title">MOVIE SEARCH WEBSITE</h3>
          <p className="card-project-description">
            For the second module project, we developed a JavaScript-powered
            movie website. Users can browse and watch movies online.
          </p>
          <p className="card-project-info">Movies 5i</p>
          <a
            className="card-project-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://movies-5i.netlify.app"
          >
            Explore more
          </a>
        </div>
      </div>
    </>
  );
};

export default Movies;
