import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import bgimg1 from '../../../assets/img1.jpg'
import bgimg2 from '../../../assets/img2.jpg'
import bgimg3 from '../../../assets/img3.jpg'
import bgimg4 from '../../../assets/img4.jpg'

export default function Banner() {
  return (
    <div className='md:mx-8 lg:mx-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide image={bgimg1}></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={bgimg2}></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={bgimg3}></Slide>
        </SwiperSlide>
        <SwiperSlide>
            <Slide image={bgimg4}></Slide>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
