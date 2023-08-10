import React, { useEffect } from 'react'
import './Home.css'
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
  return (
    <div id='home' className='home'>
      <h1>Hi,</h1>
      <h1>I'm Khushi Patel</h1>
      <p>Aspiring Software Engineer, fascinated by technology, fuelled by the desire to build creaitve applications</p>
      <AnchorLink href='#about'>
        <button className='home--button'>Dive In</button>
      </AnchorLink>
    </div>
  )
}

export default Home