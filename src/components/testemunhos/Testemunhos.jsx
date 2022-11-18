import React from 'react'
import './testemunhos.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";





const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut reiciendis voluptatum aspernatur ipsa, maxime dignissimos suscipit nam id? Dignissimos quos tempora temporibus minus, saepe modi ducimus quidem laudantium esse nisi!"
  },
  {
    avatar: AVTR2,
    name: "Maria Snow",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut reiciendis voluptatum aspernatur ipsa, maxime dignissimos suscipit nam id? Dignissimos quos tempora temporibus minus, saepe modi ducimus quidem laudantium esse nisi!"
  },
  {
    avatar: AVTR3,
    name: "Marta Snow",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut reiciendis voluptatum aspernatur ipsa, maxime dignissimos suscipit nam id? Dignissimos quos tempora temporibus minus, saepe modi ducimus quidem laudantium esse nisi!"
  },
  {
    avatar: AVTR4,
    name: "Tiago Snow",
    review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut reiciendis voluptatum aspernatur ipsa, maxime dignissimos suscipit nam id? Dignissimos quos tempora temporibus minus, saepe modi ducimus quidem laudantium esse nisi!"
  },
]

const Testemunhos = () => {
  return (
    <section id='testemunhos'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper pagination={{dynamicBullets: true,}}  modules={[Pagination]} className="container testimonials_container">
       {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
                    
              </div>
              <h5 className="client_name">{name}</h5>
                <small className="client_review">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut reiciendis voluptatum aspernatur ipsa, maxime dignissimos suscipit nam id? Dignissimos quos tempora temporibus minus, saepe modi ducimus quidem laudantium esse nisi!
                </small>
              </SwiperSlide>
            )
          })

       }
        
      </Swiper>
    </section>
  )
}

export default Testemunhos