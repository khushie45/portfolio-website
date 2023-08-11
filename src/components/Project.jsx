import React from 'react'
import './Project.css'
import { projects } from './data';
import { TbWorld } from 'react-icons/tb'
import { TbBrandGithubFilled } from 'react-icons/tb'

function Project() {
  return (
    <div id='projects' className='project'>
        <h1>Projects</h1>
        <div className='project--card'>
          {projects.map((project) => (
              <div key={project.image} className='project--item'>
                <div className="project--image--container">
                  <img
                    alt="gallery"
                    src={project.image}
                    className='project--img'
                  />
                </div>
                <div className='project--info'>
                  <h2>
                    {project.title}
                  </h2>
                  <p>{project.description}</p>
                  <div className="project--info--button">
                    <button onClick={() => window.open(project.github, '_blank')}>
                      <TbBrandGithubFilled size={25} className='project--button--margin'/>
                      Source Code
                    </button>
                    <button onClick={() => window.open(project.demo, '_blank')}>
                      <TbWorld size={25} className='project--button--margin'/>
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </div>
    </div>
  );
}

export default Project