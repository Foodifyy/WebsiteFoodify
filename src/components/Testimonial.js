import React,{useContext} from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from './TestimonialCard';
import {useThemeContext} from '../context/UsethemecontextProvider'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonial() {
  const {state} = useContext(useThemeContext);
  return (
    <div>
      <h2 className={`py-5 text-4xl font-bold leading-none text-center sm:text-5xl shadow-black drop-shadow-md  ${state.font}`} style={{backgroundColor:state.flag ? "white" : "black"}}>WHAT PEOPLE SAYS</h2>
         <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>{<TestimonialCard  index={1}/>}</SwiperSlide>
            <SwiperSlide>{<TestimonialCard  index={2}/>}</SwiperSlide>
            <SwiperSlide>{<TestimonialCard  index={3}/>}</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial