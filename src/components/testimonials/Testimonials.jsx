import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/real1.jpg'
import AVTR2 from '../../assets/abhay2.jpeg'
import AVTR3 from '../../assets/real3.jpg'
import AVTR4 from '../../assets/real4.jpg'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
avatar:AVTR1,
name: 'kartik',
review: 'I had the pleasure of visiting [Website Name] recently, and I must say it left a lasting impression on me and a clear and concise manner, making it easy to find what I was looking for.'
},
{
  avatar:AVTR2,
  name: 'Abhay',
  review: 'One of the standout features of [Website Name] is its exceptional content. The information is presented in a clear and concise manner, making it easy to find what I was looking for to fit each screen size.'
  


},
{
  avatar:AVTR3,
  name: 'Anadi',
  review: 'the websites responsiveness across different devices is commendable. Whether I accessed it on my desktop, tablet, or smartphone, the layout and design seamlessly adjusted to fit each screen size'
  




},
{

  avatar:AVTR4,
name: 'ayush',
review: 'the websites responsiveness across different devices is commendable. Whether I accessed it on my desktop, tablet, or smartphone, the layout and design seamlessly adjusted to fit each screen size'

}
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        
        pagination={{ clickable: true }}
       >
       {

        data.map(({avatar,name,review} ,index) =>{
          return(
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src= {avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}

              </small>
            </SwiperSlide>
          )
        })
       }
       
       
      </Swiper>
    </section>
  )
}

export default Testimonials
