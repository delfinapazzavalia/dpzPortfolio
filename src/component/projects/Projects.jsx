import React from 'react';
import './Projects.css';
import Travel from './cardsProjects/Travel';
import Movies from './cardsProjects/Movies';
import Gym from './cardsProjects/Gym';

const Projects = () => {
  return (
    <>
      <div id='Projects' className='projects'>
        <h2>PROJECTS</h2>
        <div className='projects-cards'>
          <Travel />
          <Movies />
          <Gym />
        </div>
      </div>
    </>
  );
}

export default Projects