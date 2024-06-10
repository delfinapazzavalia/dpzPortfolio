import React from 'react'
import '../skills/Skills.css'
import html from '../skills/html.png'
import css from '../skills/css.png'
import js from '../skills/js.png'
import bootstrap from '../skills/bootstrap.png'
import github from '../skills/github.png'
import react from '../skills/react.png'
import node from '../skills/node.png'
import gitLocal from '../skills/gitLocal.png'
import mongodb from '../skills/mongodb.png'
import postman from '../skills/postman.png'
import figma from '../skills/figma.png'
import tailwind from '../skills/tail.png'

const Skills = () => {
  return (
    <>
    <div id='Skills' className='skills'>
        <h2 className='skills-title'>SKILLS</h2>
        <div className='skills-icon'>
        <img className='skills-icon-img' src={html} alt="html" />
        <img className='skills-icon-img' src={css} alt="css" />
        <img className='skills-icon-img' src={js} alt="js" />
        <img className='skills-icon-img' src={react} alt="react" />
        <img className='skills-icon-img' src={node} alt="node" />
        <img className='skills-icon-img' src={bootstrap} alt="bootstrap" />
        <img className='skills-icon-img' src={github} alt="github" />
        <img className='skills-icon-img' src={gitLocal} alt="gitLocal" />
        <img className='skills-icon-img' src={mongodb} alt="mongodb" />
        <img className='skills-icon-img' src={postman} alt="postman" />
        <img className='skills-icon-img' src={figma} alt="figma" />
        <img className='skills-icon-img' src={tailwind} alt="tailwind" />
        </div>

    </div>
    </>
  )
}

export default Skills