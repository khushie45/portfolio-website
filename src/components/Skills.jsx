import React from 'react'
import './Skills.css'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiFigma,
  SiPostman,
  SiGit,
  SiGithub,
  SiNetlify,
  SiFirebase,
  SiVisualstudiocode,
  SiCplusplus,
  SiMui
} from "react-icons/si";
import Github from './Github';

function Skills() {
  return (
    <div id='skills' className='skills'>
      <h1>Skills and Technologies</h1>
      <div className="skill--card">
        <div className='skill--item'>
          <SiHtml5 size="5rem" />
          <p>HTML</p>
        </div>
        <div className='skill--item'>
          <SiCss3 size="5rem" />
          <p>CSS</p>
        </div>
        <div className='skill--item'>
          <SiJavascript size="5rem" />
          <p>JAVASCRIPT</p>
        </div>
        <div className='skill--item'>
          <SiReact size="5rem" />
          <p>REACT</p>
        </div>
        <div className='skill--item'>
          <SiNextdotjs size="5rem" />
          <p>NEXTJS</p>
        </div>
        <div className='skill--item'>
          <SiPython size="5rem" />
          <p>PYTHON</p>
        </div>
        <div className='skill--item'>
          <SiGit size="5rem" />
          <p>GIT</p>
        </div>
        <div className='skill--item'>
          <SiGithub size="5rem" />
          <p>GITHUB</p>
        </div>
        <div className='skill--item'>
          <SiTailwindcss size="5rem" />
          <p>TAILWIND CSS</p>
        </div>
        <div className='skill--item'>
          <SiMui size="5rem" />
          <p>MATERIAL UI</p>
        </div>
        <div className='skill--item'>
          <SiBootstrap size="5rem" />
          <p>BOOTSTRAP</p>
        </div>
        <div className='skill--item'>
          <SiNetlify size="5rem" />
          <p>NETLIFY</p>
        </div>
        <div className='skill--item'>
          <SiRedux size="5rem" />
          <p>REDUX</p>
        </div>
        <div className='skill--item'>
          <SiFigma size="5rem" />
          <p>FIGMA</p>
        </div>
        <div className='skill--item'>
          <SiPostman size="5rem" />
          <p>POSTMAN</p>
        </div>
        <div className='skill--item'>
          <SiFirebase size="5rem" />
          <p>FIREBASE</p>
        </div>
        <div className='skill--item'>
          <SiVisualstudiocode size="5rem" />
          <p>VS CODE</p>
        </div>
        <div className='skill--item'>
          <SiCplusplus size="5rem" />
          <p>C++</p>
        </div>
      </div>
      <Github />
      {/* <div className="skills--section">
        <h3>Front-end: </h3>
        <button>HTML</button>
        <button>CSS</button>
        <button>JAVASCRIPT</button>
        <button>REACTJS</button>
      </div>
      <div className="skills--section">
        <h3>Frameworks: </h3>
        <button>REACT ROUTER</button>
        <button>CONTEXT API</button>
        <button>TAILWIND CSS</button>
      </div>
      <div className="skills--section">
        <h3>Data Science: </h3>
        <button>PYTHON</button>
        <button>SUPERVISED LEARNING</button>
        <button>TENSORFLOW</button>
      </div>
      <div className="skills--section">
        <h3>Other: </h3>
        <button>C++</button>
      </div> */}
      {/* <div className='skills--learningPath'>
        <h3>Learning Path:</h3>
        <ul>
          <li>Exploring NextJS, a powerful React framework that simplifies server-side rendering and makes building dynamic web applications a breeze.</li>
          <li>Deepening my understanding of CSS methodologies and responsive design.</li>
          <li>Diving into back-end technologies like NodeJS to round out my full-stack knowledge.</li>
        </ul>
      </div> */}
    </div>
  )
}

export default Skills