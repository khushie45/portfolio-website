import React from 'react'
import './Header.css'
import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-scroll';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [emoji, setEmoji] = useState("🍕")

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  const emojis = ["🍕", "🍔", "🍟", "🍰", "🌼", "🌻", "🌹", "🍓", "🌞", "🌈", "🌟", "⛅", "🌎", "🪐", "🚀", "🥂", "🍉", "🌺", "🍁", "🧿", "⏳", "👧", "💅", "💀", "👽", "👾", "👀", "🐣", "🦢", "🦚", "🦋", "🦕", "🐸"]

  function toggleEmojis() {
    const randomEmoji = Math.floor(Math.random() * emojis.length)
    setEmoji(emojis[randomEmoji])
  }

  return (
    <nav className="navbar">
      <div className="container">
        <h1 onClick={toggleEmojis}>
          &lt;Khushi {emoji}&gt;
        </h1>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <HiMenu size={25} />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="home" smooth={true} offset={-120} duration={800} className='links'>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-120} duration={800} className='links'>
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} offset={-120} duration={800} className='links'>
                Projects
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} offset={-120} duration={800} className='links'>
                Skills
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} offset={-120} duration={800} className='links'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header