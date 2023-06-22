import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/dhrupal-patel-7b1797237/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Dhrupalpatelpatel" target="_blank"><FiGithub/></a>
        <a href="https://www.instagram.com/dhrupal.143/?hl=en" target="_blank"><FaInstagram/></a>
      
    </div>
  )
}

export default HeaderSocials
