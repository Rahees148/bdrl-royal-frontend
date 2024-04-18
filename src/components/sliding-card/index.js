import React, {useRef} from 'react'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import * as style from './sliding-card.module.scss';
import TitleDescription from '../global/title-description';


function SlidingCard({data}) {  
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    return (
      <section className={classNames(style.SlidingCardWrap, 'bg-bdrlGray py-12')}>
            <Swiper
              pagination={{
                clickable: true ,
                el: '.contentSliderSwiper-pagination',
              }}
              speed={1000}
              effect='fade'
              navigation={{
                nextEl: '.sliding-content-swiper-button-next',
                prevEl: '.sliding-content-swiper-button-prev',
              }}
              onBeforeInit={(swiper) => {
                swiper.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.prevEl = navigationPrevRef.current;
              }}
              modules={[Pagination, Navigation]}
              className="contentSliderSwiper"
            >
              {data && data.map((slider, index) =>(
                <SwiperSlide key={index}>
                  
            <div className='pageWrapper'>
                  <div className={classNames(style.SlidingCardWrapSec,'grid grid-cols-12 gap-8')}>
                    <div className={classNames( style.SlidingCardDescription,'rounded-3xl')}>
                            <TitleDescription data={{
                              theme:"black",
                              title:slider.Title,
                              description: slider.sub_title
                            }}/>
                            <div className={classNames(style.SlidingCardbtn, 'button bg-primary')}>{slider.button_label}</div>
                            <div className={classNames(style.SlidingCardDec, '')}  dangerouslySetInnerHTML={{__html: slider.description.data.childMarkdownRemark.html}}></div> 
                    </div>
                    <div className={classNames( style.SlidingCardImage,'')}>
                        <img src={slider.image.url} alt={slider.Title} className='rounded-3xl'/>
                    </div> 
                  </div>
                  </div>
          
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={style.sliderNavigation}>
              <div>
                <button className={classNames(style.swiperButton, style.prev, 'sliding-content-swiper-button-prev')}>Prev</button>
                <button className={classNames(style.swiperButton, 'sliding-content-swiper-button-next')}>Next</button>
              </div>
              <div className={classNames(style.pagination, 'contentSliderSwiper-pagination')}></div>
            </div>
            </section>
    )
}
export default SlidingCard