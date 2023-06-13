import React from 'react'
import '../skills/Skills.css'
import html from '../skills/html.png'
import css from '../skills/css.png'
import js from '../skills/js.png'
import bootstrap from '../skills/bootstrap.png'
import github from '../skills/github.png'
import react from '../skills/react.png'
import node from '../skills/node.png'

const Skills = () => {
  return (
    <>
    <div className='skills'>
        <h1>Skills</h1>
        <div className='skills-icon'>
        <img className='skills-icon-img' src={html} alt="html" />
        <img className='skills-icon-img' src={css} alt="css" />
        <img className='skills-icon-img' src={js} alt="js" />
        <img className='skills-icon-img' src={react} alt="react" />
        <img className='skills-icon-img' src={node} alt="node" />
        <img className='skills-icon-img' src={bootstrap} alt="bootstrap" />
        <img className='skills-icon-img' src={github} alt="github" />
        
        </div>

    </div>
    </>
  )
}

export default Skills