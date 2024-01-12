import React from 'react'
import './Footer.css'
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer--links'>
        <a href="https://github.com/khushie45" target="_blank"><SiGithub size={40} /></a>
        <a href="https://leetcode.com/khushie45" target="_blank"><SiLeetcode size={40} /></a>
        <a href="https://www.linkedin.com/in/khushie45" target="_blank"><SiLinkedin size={40} /></a>
        <a href="https://twitter.com/khushie45" target="_blank"><SiTwitter size={40} /></a>
      </div>
      <p>Coded with ❤️ by Khushi Patel</p>
    </div>
  )
}

export default Footer