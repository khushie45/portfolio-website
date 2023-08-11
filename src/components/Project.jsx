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
                {/* <TbBrandGithubFilled />
                <TbWorld /> */}
                <img
                  alt="gallery"
                  src={project.image}
                  className='project--img'
                />
                <div className='project--info'>
                  <h1>
                    {project.title}
                  </h1>
                  <p>{project.description}</p>
                </div>
              </div>
          ))}
        </div>
    </div>
  );
}

export default Project