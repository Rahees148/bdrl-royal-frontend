import React,{useRef} from 'react'
import classNames from 'classnames'
import * as style from './leadership-details.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import TitleDescription from '../global/title-description'
import IconCard from '../global/icon-card'
import LeadershipForm from '../form/leadership-form'
import TextMessageIcon from '../../images/icons/text-message-icon.svg';

function LeaderShipDetails({pageData}) {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <div className={classNames(style.leadershipPage, 'bg-gradient-to-b from-[#E4FF8520] via-[#FFFFFF] to-[#FFFFFF] pt-[20px] md:pt-[93px] pb-[50px]')}>
    <div className='pageWrapper'>
      <div className='grid grid-cols-12 gap-8 items-end'>
        <div className='col-span-12 md:col-span-4  bg-[#EDEDED] rounded-5'>
          <img src={pageData?.photo?.url} alt={pageData.title} />
        </div>
        <div className='col-span-12 md:col-span-8'>
          <TitleDescription data={{
            variant: 'stack',
            title: pageData.title,
            tagLine: pageData.designation,
            description: pageData?.description?.data?.description
          }} />
        </div>
      </div>
      
      <div className='pt-[45px] md:pt-[87px] grid grid-cols-12 gap-8 items-start overflow-hidden'>
        <div className='col-span-12 md:col-span-6'>
          <TitleDescription data={
            {
              variant: 'stack',
              size:'small',
              title: pageData.awards_title?.title?.data?.title,
              description: pageData?.awards_title?.description?.data?.description
            }
          } />
          {pageData.award_icons && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-[34px] pb-[60px]">
              {pageData.award_icons.map((icon, index) => (
                <IconCard key={index} data={{
                  variant:'stack',
                  title: icon.title,
                  icon: icon.icon?.url
                }}/>
              ))}
            </div>
          )}
          
          <TitleDescription data={
            {
              variant: 'stack',
              size:'small',
              title: pageData.key_position_title_description?.title?.data?.title,
              description: pageData?.key_position_title_description?.description?.data?.description
            }
          } />
          {pageData.keyposition_icons && (
            <div className="pt-[45px] pb-[45px] w-[90%] mr-[auto] ml-[auto]">
              <Swiper
              speed={1000}
              effect='fade'
              spaceBetween={12}
              slidesPerView={2}
              breakpoints={
                {
                  768: {
                    slidesPerView: 3,
                    spaceBetween:12
                  }
                }
              }
              navigation={{
                nextEl: '.leadership-swiper-button-next',
                prevEl: '.leadership-swiper-button-prev',
              }}
              onBeforeInit={(swiper) => {
                swiper.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.prevEl = navigationPrevRef.current;
              }}
              modules={[ Navigation]}
              className="leadershipSliderSwiper"
            >
            
                
                {pageData.keyposition_icons.map((icon, index) => (
                  <SwiperSlide key={index}>
                    <IconCard data={{
                      icon: icon.icon?.url
                    }}/>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={style.sliderNavigation}>
                <div>
                  <button className={classNames(style.swiperButton, style.prev, 'leadership-swiper-button-prev')}>Prev</button>
                  <button className={classNames(style.swiperButton, 'leadership-swiper-button-next')}>Next</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='col-span-12 md:col-span-6'>
          <div className='p-6 bg-primary rounded-[24px]'>
            <div className={classNames( style.LeaderShipFormIcon, 'rounded-full bg-white')}>
              <img src={TextMessageIcon} alt='Form Icon'/>
            </div>
            <div className={classNames( style.LeaderShipFormTitle)}>
              <h4  dangerouslySetInnerHTML={{__html: pageData.form_title_description?.title?.data.title}} />
              <aside>{pageData?.form_title_description?.tagline}</aside>
            </div>
            <LeadershipForm />
          </div> 
        </div>
      </div>
    </div>
</div>
  )
}

export default LeaderShipDetails