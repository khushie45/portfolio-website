import React from 'react'
import './Header.css'

function Header() {
  return (
    <nav>
        <h1>Khushi</h1>
        <div className="nav--div">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
            </ul>
        </div>
    </nav>

  )
}

export default Header