import React from "react";
import "../about/About.css";



const About = () => {
  return (
    <>
      <div id="AboutMe" className="about-me-container">
        <h2 className="title">ABOUT ME</h2>
        <p className="text">
          Hello! I'm Delfina Paz Zavalia,{" "}
          <strong>
            {"<"}FullStack Web Developer{">"}
          </strong>{" "}
          located in Argentina. A year ago, I delved into this exciting world,
          and since then, I haven't stopped learning and growing. I'm always
          seeking new challenges and opportunities for personal and professional
          development.
        </p>
        <a className="card-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1Lh-Y06asXF3l-1vI38U4V9aMyGWBM69V/view?usp=drive_link">
          View my resume
        </a>


      </div>
    </>
  );
};

export default About;
