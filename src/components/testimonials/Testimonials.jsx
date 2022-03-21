import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import './testimonials.css'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    name: 'Ernest Achiever',
    avatar: AVTR1,
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam accusantium dicta dignissimos maxime modi, veritatis officia.'
  },
  {
    id: 2,
    name: 'Ernest Achiever',
    avatar: AVTR2,
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam accusantium dicta dignissimos maxime modi, veritatis officia.'
  },
  {
    id: 3,
    name: 'Ernest Achiever',
    avatar: AVTR3,
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam accusantium dicta dignissimos maxime modi, veritatis officia.'
  },
  {
    id: 4,
    name: 'Ernest Achiever',
    avatar: AVTR4,
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam accusantium dicta dignissimos maxime modi, veritatis officia.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({id, name, avatar, review}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials