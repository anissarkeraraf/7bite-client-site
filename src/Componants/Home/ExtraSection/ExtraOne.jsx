import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import cardiology from '../../../assets/cardiology.png'
import dental from '../../../assets/dental.jpg'
import gastrology from '../../../assets/gastrology.png'
import neorology from '../../../assets/neorology.png'
import obstetricsy from '../../../assets/obstetricsy.jpg'
import padiatrician from '../../../assets/padiatrician.png'
import pulmonology from '../../../assets/pulmonology-intensive-care-medicine-allergology-specialty-others.jpg'
import urology from '../../../assets/urology.jpg'


// import required modules
import { Pagination } from 'swiper/modules';
import ExtraOneSlide from './ExtraOneSlide';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ExtraOneSlide image={cardiology} header={'Cardiology'} text={'Sed do eiusmod tempor incididunt ut labore aliqua.'}></ExtraOneSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <ExtraOneSlide image={dental} header={'Dental'} text={'Praesent vulputate mi non dolor mollis, quis porttitor.'}></ExtraOneSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <ExtraOneSlide image={gastrology} header={'Gastrology'} text={'SMaecenas euismod sapien vitae lectus fermentum.'}></ExtraOneSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <ExtraOneSlide image={neorology} header={'Neorology'} text={'Donec sagittis euismod arcu id ullamcorper. In hac habitasse '}></ExtraOneSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <ExtraOneSlide image={obstetricsy} header={'Obstetricsy'} text={'Nam sed suscipit erat. Curabitur egestas velit sit'}></ExtraOneSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <ExtraOneSlide image={padiatrician} header={'Padiatrician'} text={'Curabitur blandit posuere vestibulum. Ut tincidunt'}></ExtraOneSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <ExtraOneSlide image={pulmonology} header={'Pulmonology'} text={'Aliquam tincidunt velit sit amet neque.'}></ExtraOneSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <ExtraOneSlide image={urology} header={'Urology'} text={'Aenean dignissim lectus dui, et ornare leo ullamcorper ac.'}></ExtraOneSlide>
                </SwiperSlide>
            </Swiper>
        </>
    );
}