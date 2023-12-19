import React from "react";
import "../resume/Resume.css";
import CardRolling from "../resume/cardsResume/CardRolling";
import CardScrum from "../resume/cardsResume/CardScrum";
import CardFigma from "../resume/cardsResume/CardFigma";

const Resume = () => {
  return (
    <>
      <div id="Resume" className="resume">
        <h2>RESUME</h2>
        <div className="resume-cards">
          <CardRolling />
          <CardScrum />
          <CardFigma />
        </div>
      </div>
    </>
  );
};

export default Resume;
