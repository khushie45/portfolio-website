import React from 'react'
import './Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Header() {
  return (
    <nav>
        <h1>Khushi</h1>
        <div className="nav--div">
            <ul>
              <AnchorLink className='links' href='#home'><li>Home</li></AnchorLink>
              <AnchorLink className='links' href='#about'><li>About</li></AnchorLink>
              <AnchorLink className='links' href='#skills'><li>Skills</li></AnchorLink>
              <AnchorLink className='links' href='#projects'><li>Projects</li></AnchorLink>
            </ul>
        </div>
    </nav>

  )
}

export default Header