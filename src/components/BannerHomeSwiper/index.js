

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './index.css';

import banner1 from '../../assets/banner01.png';

export default function BannerHomeSwiper() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={banner1} alt="" srcSet="" />
      </SwiperSlide> <SwiperSlide>
        <img src={banner1} alt="" srcSet="" />
      </SwiperSlide> <SwiperSlide>
        <img src={banner1} alt="" srcSet="" />
      </SwiperSlide>
    </Swiper>
  );
}