import React, {useRef} from 'react'
import classNames from 'classnames'
import * as style from './centres-of-excellence.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

function CentresOfExcellence({data}) {  
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <section className={classNames(style.CentresOfExcellence, 'py-20')}>
    <div className="pageWrapper CentresOfExcellence">
      <div className={classNames(style.SectionTitle, 'flex items-end justify-between')}>
        <div className={classNames(style.SectionTitleLeft)}>
            <h3>{data.Title}</h3>
            <div className={classNames(style.SectionTagline, 'font-normal')}>{data.description}</div>
        </div>
        <a className='moreBtn' href={data.button_link} >{data.button_label}</a>
      </div> 
     
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
              <div className={classNames(style.COEcardtop,'bg-bdrlGray p-11 pb-0 relative')}>
              <div className='text-bodyCopy font-normal'>{card.sub_title}</div>
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