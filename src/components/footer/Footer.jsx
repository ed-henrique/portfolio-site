import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Eduardo</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/*<li><a href="#services"></a>Services</li>*/}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials"></a>Testimonials</li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Eduardo Henrique, All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer