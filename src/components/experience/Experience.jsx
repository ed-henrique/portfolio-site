import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    title: 'Frontend Development',
    content: [
      {
        tech: 'HTML',
        level: 'Intermediate'
      },
      {
        tech: 'CSS',
        level: 'Intermediate' 
      },
      {
        tech: 'Javascript',
        level: 'Beginner' 
      },
      {
        tech: 'React',
        level: 'Beginner' 
      }
    ]
  },
  {
    id: 2,
    title: 'Backend Development',
    content: [
      {
        tech: 'Python',
        level: 'Intermediate'
      },
      {
        tech: 'Go',
        level: 'Beginner' 
      }
    ]
  },
  {
    id: 3,
    title: 'Game Development',
    content: [
      {
        tech: 'Godot & GDScript',
        level: 'Beginner'
      },
      {
        tech: 'Unity',
        level: 'Beginner' 
      },
      {
        tech: 'Pygame',
        level: 'Beginner' 
      }
    ]
  },
  {
    id: 4,
    title: 'Video Editing',
    content: [
      {
        tech: 'Davinci Resolve',
        level: 'Intermediate'
      },
      {
        tech: 'Blender',
        level: 'Beginner' 
      }
    ]
  },
  {
    id: 5,
    title: 'Graphic Design',
    content: [
      {
        tech: 'Photoshop',
        level: 'Experienced'
      },
      {
        tech: 'Illustrator',
        level: 'Beginner' 
      },
      {
        tech: 'Inkscape',
        level: 'Beginner' 
      },
      {
        tech: 'Figma',
        level: 'Intermediate' 
      }
    ]
  }
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <Swiper className="container experience__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({id, title, content}) => {
            return (
              <SwiperSlide key={id} className='experience__contents'>
                <h3>{title}</h3>
                <div className="experience__content">
                  {
                  content.map(({tech, level}) => {
                    return (
                      <article>
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>
                          <h4>{tech}</h4>
                          <small className='text-light'>{level}</small>
                        </div>
                      </article>
                    )
                  })
                  }
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>

  )
}

export default Experience