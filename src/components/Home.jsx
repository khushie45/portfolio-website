import React, { useEffect } from 'react'
import './Home.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import TypeWriter from './TypeWriter';

function Home() {
  return (
    <div id='home' className='home'>
      <h1>Hi,</h1>
      <h1>I'm <span>Khushi Patel</span></h1>
      <h2><TypeWriter /></h2>
      <p>Aspiring Software Engineer, fascinated by technology, fuelled by the desire to build creative applications</p>
      <AnchorLink href='#about'>
        <button className='home--button'>Dive In</button>
      </AnchorLink>
    </div>
  )
}

export default Home