import React from 'react';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function HeroBanner() {
  return (
    <>
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true 
      }}
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={'https://picsum.photos/id/183/1440/515'} alt="banner" />
        <div className='pageWrapper bannerOverlayText'>
            
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={'https://picsum.photos/id/184/1440/515'} alt="banner" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={'https://picsum.photos/id/185/1440/515'} alt="banner" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={'https://picsum.photos/id/186/1440/515'} alt="banner" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={'https://picsum.photos/id/187/1440/515'} alt="banner" />
    </SwiperSlide>
    </Swiper>
  </>
  )
}

export default HeroBanner