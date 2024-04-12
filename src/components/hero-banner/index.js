import React, {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classNames from "classnames";
import * as s from "./hero-banner.module.scss";


function HeroBanner({sliderItems}) {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <div className={s.bannerWrapper}>
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true ,
        el: '.custom-pagination',
      }}
      speed={1000}
      effect='fade'
      navigation={{
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      }}
      onBeforeInit={(swiper) => {
        swiper.navigation.nextEl = navigationNextRef.current;
        swiper.navigation.prevEl = navigationPrevRef.current;
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {sliderItems && sliderItems.map((slider, index) =>(
        <SwiperSlide key={index}>
          {slider.bannerType  && slider.bannerType === 'video' ? (
            <video  height="100%"
            width="100%"
            loop
            muted
            autoPlay
            playsInline>
                <source src={slider.video} type="video/mp4" /> 
            </video>
          ):(
            <img src={slider.image} alt="banner" />
          )}
          
          <div className={s.bannerOverlay} ></div>
            <div className={classNames(s.bannerOverlayText, 'pageWrapper text-white text-left')}>
                <h2 className='text-4xl w-[17rem] font-light leading-[67px] mb-4'>{slider.title}</h2>
                <p className='text-base'>{slider.description}</p>
                <button className='border rounded-10 py-2 px-5 bg-transparent mt-14'>{slider.buttonLabel}</button>
            </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
      <div className={s.sliderNavigation}>
        <div>
          <button className={classNames(s.swiperButton, s.prev, 'swiper-button-prev1')}>Prev</button>
          <button className={classNames(s.swiperButton, 'swiper-button-next1')}>Next</button>
        </div>
        <div className={classNames(s.pagination, 'custom-pagination')}></div>
      </div>
    </div>
  )
}

export default HeroBanner