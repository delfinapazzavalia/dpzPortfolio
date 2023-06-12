import React from "react";
import "../cardsProjects/CardsProjects.css";
import gym from "../cardsProjects/gym.png";

const Gym = () => {
  return (
    <>
      <div className="card-project">
        <img src={gym} alt="Imagen" className="card-project-image" />
        <div className="card-project-content">
          <h3 className="card-project-title">GYM WEBSITE</h3>
          <p className="card-project-description">
            We developed a gym management system as a group project using
            React.js for the frontend and Node.js for the backend. Clients can
            access an online store, while administrators can maintain membership
            fee records.
          </p>
          <p className="card-project-info">GYM</p>
          <a
            className="card-project-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://gimnasio.vercel.app/"
          >
            Explore more
          </a>
        </div>
      </div>
    </>
  );
};

export default Gym;
