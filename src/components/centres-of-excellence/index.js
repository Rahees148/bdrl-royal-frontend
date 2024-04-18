import React, {useRef} from 'react'
import classNames from 'classnames'
import * as style from './centres-of-excellence.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import TitleDescription from '../global/title-description';

function CentresOfExcellence({data}) {  
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <section className={classNames(style.CentresOfExcellence, 'sm:py-20 py-8')}>
    <div className="pageWrapper CentresOfExcellence">
      <TitleDescription data={{
        theme:"green",
        title:data.Title,
        description: data.description,
        button_label: data.button_label,
        button_link:data.button_link
      }} />
     
        <div className={classNames(style.COEcardWrap)}>
          <Swiper
            speed={1000}
            effect='fade'
            navigation={{
              nextEl: '.coe-swiper-button-next',
              prevEl: '.coe-swiper-button-prev',
            }}
            modules={[ Navigation]}
            className="COESwiper"
            onBeforeInit={(swiper) => {
              swiper.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.prevEl = navigationPrevRef.current;
            }}
          >
        {data.card && data.card.map((card, index) =>(
          <SwiperSlide key={index} virtualIndex={index}>
          <div className={classNames(style.COEcard, 'COEcard')}>
              <div className={classNames(style.COEcardtop,'bg-bdrlGray p-6 sm:p-11 pb-0 relative')}>
              <div className={classNames(style.COEcardSubTitle,'text-bodyCopy font-normal')}>{card.sub_title}</div>
              <h4 className='text-secondary'>{card.Title}</h4>
              <div className={classNames(style.COEcardImage)}>
                  <img src={card.image?.url} alt='Restoring mobility, Renewing lives' />
              </div>
              <div className={classNames(style.COEcardIcon,'rounded-full flex items-center justify-center')}>
                  <img src={card.icon?.url} alt='Restoring mobility, Renewing lives' /> 
              </div>
              </div>
              <div className={classNames(style.COEcardContent, 'text-primary')}>
              <div dangerouslySetInnerHTML={{__html: card.description.data.childMarkdownRemark.html}}></div>
              <a className='moreBtn' href={card.button_link} >{card.button_label}</a>
              </div>
              
          </div>
          </SwiperSlide>
        ))}
         
          </Swiper>
        </div>
        <div className={style.sliderNavigation}>
          <div>
            <button className={classNames(style.swiperButton, style.prev, 'coe-swiper-button-prev')}>Prev</button>
            <button className={classNames(style.swiperButton, 'coe-swiper-button-next')}>Next</button>
          </div>
        </div>
      </div>
    </section>
    ) 
}
  export default CentresOfExcellence