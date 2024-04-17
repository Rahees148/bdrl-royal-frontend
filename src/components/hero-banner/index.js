import React, {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import useWindowSize from '../../libs/hooks/useWindowSize';

import { Fade } from "react-awesome-reveal";
// import Swiper and modules styles

import classNames from "classnames";
import * as s from "./hero-banner.module.scss";


function HeroBanner({sliderItems}) {
  const { isMobile } = useWindowSize(); 
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
      className="heroBannerSwiper"
    >
      {sliderItems && sliderItems.map((slider, index) =>{
        const mediaUrl = isMobile ? slider.mobile_media?.url ? slider.mobile_media?.url : slider.desktop_media?.url : slider.desktop_media?.url
        return (
          <SwiperSlide key={index}>
            {slider.media_type  && slider.media_type === 'video' ? (
              <video  height="100%"
              width="100%"
              loop
              muted
              autoPlay
              playsInline>
                  <source src={mediaUrl} type="video/mp4" /> 
              </video>
            ):(
              <img src={mediaUrl} alt="banner" />
            )}
            
            <div className={s.bannerOverlay} ></div>
              <div className={classNames(s.bannerOverlayText, 'pageWrapper text-white text-left')}>
                  <Fade cascade direction='down' damping={0.5}> 
                    <h2 className='text-3xl md:text-4xl w-[17rem] font-light leading-[53px] md:leading-[67px] mb-4'>{slider.Title}</h2>
                    <div className='text-sm md:text-base' dangerouslySetInnerHTML={{__html: slider.Description.data.childMarkdownRemark.html}}></div>
                    <button className='border rounded-10 py-2 px-5 bg-transparent mt-6 md:mt-14 text-sm md:text-base'>{slider.Button_label}</button>
                  </Fade>
              </div>
          </SwiperSlide>
        )
      })}
      
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