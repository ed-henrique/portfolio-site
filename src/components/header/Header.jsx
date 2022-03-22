import React, { useEffect, useRef } from 'react'
import CTA from'./CTA'
import ME from '../../assets/me.png'
import { init } from 'ityped'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ['Fullstack Developer', 'Graphic Designer', 'Ethical Hacker', 'Content Creator'],
      typeSpeed: 100,
      loop: true,
      backDelay: 300
    })
  }, [])

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Eduardo Machado</h1>
        <h5 className="text-light typed"><span ref={textRef}></span></h5>
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="javascript: document.body.scrollIntoView(false)" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header