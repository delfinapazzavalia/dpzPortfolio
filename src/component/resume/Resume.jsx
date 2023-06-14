import React from "react";
import "../resume/Resume.css";
import CardRolling from "../resume/cardsResume/CardRolling";
import CardScrum from "../resume/cardsResume/CardScrum";

const Resume = () => {
  return (
    <>
    <div className="resume">
             <h1>Resume</h1>
      <div className="resume-cards">
        <CardRolling />
        <CardScrum />
        
      </div>
    </div>
 
    </>
  );
};

export default Resume;