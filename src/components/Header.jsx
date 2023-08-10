import React from 'react'
import './Header.css'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { HiMenu } from 'react-icons/hi'

function Header() {
  const [showNavbar, setShowNavbar] = React.useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <nav className="navbar">
      <div className="container">
        <h1>Khushi</h1>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <HiMenu size={25}/>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
                <li>
                  <AnchorLink className='links' href='#home'>Home</AnchorLink>
                </li>
                <li>
                  <AnchorLink className='links' href='#about'>About</AnchorLink>
                </li>
                <li>
                  <AnchorLink className='links' href='#skills'>Skills</AnchorLink>
                </li>
                <li>
                  <AnchorLink className='links' href='#projects'>Projects</AnchorLink>
                </li>
              </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header