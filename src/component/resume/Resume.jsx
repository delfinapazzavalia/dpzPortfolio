import React from "react";
import "../resume/Resume.css";
import CardRolling from "../resume/cardsResume/CardRolling";
import CardScrum from "../resume/cardsResume/CardScrum";

const Resume = () => {
  return (
    <>
    <div className="resume">
             <h2>RESUME</h2>
      <div className="resume-cards">
        <CardRolling />
        <CardScrum />
        
      </div>
    </div>
 
    </>
  );
};

export default Resume;