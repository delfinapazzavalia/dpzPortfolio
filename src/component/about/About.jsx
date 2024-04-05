import React from "react";
import "../about/About.css";

const About = () => {
  const handleClick = () => {
    window.open('https://drive.google.com/file/d/1aB_UdTF5mUTmVy6jcy2Aqw3DGWlzpdpM/view?usp=sharing', '_blank');
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
          located in Argentina. A year ago, I delved into this exciting world,
          and since then, I haven't stopped learning and growing. I'm always
          seeking new challenges and opportunities for personal and professional
          development
        </p>
        <button onClick={handleClick} class="my-button-contact" style={{ cursor: 'pointer' }}>VIEW RESUME</button>
      </div>
    </>
  );
};

export default About;
