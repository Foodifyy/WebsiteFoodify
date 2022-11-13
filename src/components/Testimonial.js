import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from './TestimonialCard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonial() {
  return (
    <div>
      <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl shadow-black drop-shadow-md">WHAT PEOPLE SAYS</h2>
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