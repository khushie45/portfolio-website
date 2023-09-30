import React from 'react'
import './AboutMe.css'
import { HiOutlineDownload } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md"
import { FaArrowRightLong } from "react-icons/fa6"
import Resume from "../../public/assets/pdf/Khushi-Patel-resume.pdf"

function AboutMe() {
  return (
    <div id='about' className='about'>
      <h1>About Me</h1>
      <p className="about--info">
          <li>🎓 I'm a final year student pursuing Bachelors of Technology in Computer Engineering at Charusat University.</li>
          <li>💼 Currently seeking opportunities in front-end development.</li>
          <li>🌟 I have a strong interest in web development and user interfaces</li>
          <li>🚀 Proficient in ReactJS and passionate about creating interactive web applications.</li>
          <li>📚 Continuous learner with a keen interest in staying updated with the latest tech trends.</li>
          <li>🌈 Enjoy creating intuitive and visually appealing user experiences.</li>
          <li>🎮 Outside coding, I love watching anime, reading books and exploring new places.</li>
      </p>
      
      <div className="about--button">  
        <button className='about--button--resume'>
          Resume 
          <FaArrowRightLong size={25} style={{marginLeft:'10px'}}/>
          <a href="https://drive.google.com/file/d/14cfF9YKkhd_nvSnsu4ScHFPlEPIwK4TG/view?usp=sharing" target="_blank">
          <button className='about--button--open'>
            <MdOpenInNew size={30}/>
          </button>
          </a>
          <a href={Resume} download="Khushi-Patel-resume.pdf">
          <button className='about--button--download'>
            <HiOutlineDownload size={30}/>
          </button>
          </a>
        </button>
      </div>
      {/* <p className='about--info'>Hello World!! I'm a Computer Science student, absolutely captivated by web development, especially the fantastic realm of ReactJS. My passion revolves around taking those snazzy design concepts and turning them into actual functional websites. When I'm not diving into lines of code, you'll likely catch me reading books or sleeping. </p>

      <p className='about--info'>This portfolio? Think of it as a scrapbook documenting my journey through the web development landscape. From quirky personal projects to my spotify playlist, it's all here. So take a little tour, explore around, and if you share the same enthusiasm for all things web, let's have a chat!</p> */}

    </div>
  )
}

export default AboutMe