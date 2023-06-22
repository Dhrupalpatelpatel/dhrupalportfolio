import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To know </h5>
      <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
                        <h5>Experience</h5>
            <small>1+ Years working</small>
          </article>
          
          <article className='about__card'>
            <FiUsers className='about__icon'/>
                        <h5>Clients</h5>
            <small>10+ clients</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
            <small>15+ Completed </small>
          </article>
        
          </div>

          <p>I'm full stack web developer with a passion for creating innovative and user-friendly digital experiences. My expertise in both front-end and back-end technologies allows me to seamlessly integrate and optimize functionalities. With my strong problem-solving skills and dedication to continuous learning, I'm consistently deliver high-quality solutions that exceed client expectations.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>

    </section>
  )
}

export default About
