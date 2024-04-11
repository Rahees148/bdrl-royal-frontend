import React from 'react';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function HeroBanner({sliderItems}) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true 
      }}
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {sliderItems && sliderItems.map((slider, index) =>(
        <SwiperSlide key={index}>
          <img src={slider.image} alt="banner" />
          <div className='pageWrapper bannerOverlayText'>
              {/* {slider.title} */}
          </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
  )
}

export default HeroBanner