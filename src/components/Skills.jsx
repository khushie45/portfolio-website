import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div id='skills' className='skills'>
      <h1>Skills and Technologies</h1>
      <div className="skills--section">
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
        <button>MATERIAL UI</button>
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
      </div>
      <div className='skills--learningPath'>
        <h3>Learning Path:</h3>
        <ul>
          <li>Exploring more about advanced React concepts such as hooks and custom hooks.</li>
          <li>Deepening my understanding of CSS methodologies and responsive design.</li>
          <li>Diving into back-end technologies like Django to round out my full-stack knowledge.</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills