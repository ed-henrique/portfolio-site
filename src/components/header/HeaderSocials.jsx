import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiHackerone} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/eduardo-henrique-freire-machado-26860521b/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/ed-henrique" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://hackerone.com/p1zza?type=user" target="_blank" rel="noreferrer"><SiHackerone /></a>
    </div>
  )
}

export default HeaderSocials