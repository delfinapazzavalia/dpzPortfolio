import React from "react";
import "../about/About.css";

const About = () => {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/19bAQEelgEzt8643ou_RB28Q2fJ3rj0va/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <>
      <div id="AboutMe" className="about-me-container">
        <h2 className="title">ABOUT ME</h2>
        <p className="text">
          Hello! I'm Delfina Paz Zavalia,{" "}
          <strong>
            {"<"}FullStack Web Developer{">"}
          </strong>{" "}
          based in Argentina. I embarked on this exciting journey a year ago and
          have been continuously learning and growing ever since. I'm passionate
          about taking on new challenges and exploring opportunities for both
          personal and professional development.
        </p>
        <button
          onClick={handleClick}
          class="my-button-contact"
          style={{ cursor: "pointer" }}
        >
          VIEW RESUME
        </button>
      </div>
    </>
  );
};

export default About;
