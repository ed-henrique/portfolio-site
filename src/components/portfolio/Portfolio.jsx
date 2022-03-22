import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: IMG1,
    title: '8-bit RISC CPU',
    github: 'https://github.com/ed-henrique/AOC_Eduardo_Kelvin_UFRR_2022',
    demo: '#'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio