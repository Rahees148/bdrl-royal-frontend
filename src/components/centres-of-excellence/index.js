import React, {useRef} from 'react'
import classNames from 'classnames'
import * as style from './centres-of-excellence.module.scss';
import Orthopaedicspic from '../../images/Orthopaedics-coe.png'; 
import OrthoIcon from '../../images/icons/ortho-icon.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

function CentresOfExcellence() {  
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <section className={classNames(style.CentresOfExcellence, 'py-20')}>
    <div className="pageWrapper CentresOfExcellence">
      <div className={classNames(style.SectionTitle, 'flex items-end justify-between')}>
        <div className={classNames(style.SectionTitleLeft)}>
            <h3>Centres Of Excellence</h3>
            <div className={classNames(style.SectionTagline, 'font-normal')}>Elite Specialties, Exceptional Care</div>
        </div>
        <a className='moreBtn' href='#' >Know More</a>
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
        
          <SwiperSlide>
            <div className={classNames(style.COEcard, 'COEcard')}>
                <div className={classNames(style.COEcardtop,'bg-bdrlGray p-11 pb-0 relative')}>
                <div className='text-bodyCopy font-normal'>Restoring mobility, Renewing lives.</div>
                <h4 className='text-secondary'>Orthopaedics & Joint Replacements</h4>
                <div className={classNames(style.COEcardImage)}>
                    <img src={Orthopaedicspic} alt='Restoring mobility, Renewing lives' />
                </div>
                <div className={classNames(style.COEcardIcon,'rounded-full flex items-center justify-center')}>
                    <img src={OrthoIcon} alt='Restoring mobility, Renewing lives' /> 
                </div>
                </div>
                <div className={classNames(style.COEcardContent, 'text-primary')}>
                Arthroscopy, Joint Replacements, Sports Medicine, zPediatric Orthopaedics, Rehabilitation and everything. 
                <a className='moreBtn' href='#' >Read More</a>
                </div>
                
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classNames(style.COEcard, 'COEcard')}>
                <div className={classNames(style.COEcardtop,'bg-bdrlGray p-11 pb-0 relative')}>
                <div className='text-bodyCopy font-normal'>Restoring mobility, Renewing lives.</div>
                <h4 className='text-secondary'>Orthopaedics & Joint Replacements</h4>
                <div className={classNames(style.COEcardImage)}>
                    <img src={Orthopaedicspic} alt='Restoring mobility, Renewing lives' />
                </div>
                <div className={classNames(style.COEcardIcon,'rounded-full flex items-center justify-center')}>
                    <img src={OrthoIcon} alt='Restoring mobility, Renewing lives' /> 
                </div>
                </div>
                <div className={classNames(style.COEcardContent, 'text-primary')}>
                Arthroscopy, Joint Replacements, Sports Medicine, zPediatric Orthopaedics, Rehabilitation and everything. 
                <a className='moreBtn' href='#' >Read More</a>
                </div>
                
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classNames(style.COEcard, 'COEcard')}>
                <div className={classNames(style.COEcardtop,'bg-bdrlGray p-11 pb-0 relative')}>
                <div className='text-bodyCopy font-normal'>Restoring mobility, Renewing lives.</div>
                <h4 className='text-secondary'>Orthopaedics & Joint Replacements</h4>
                <div className={classNames(style.COEcardImage)}>
                    <img src={Orthopaedicspic} alt='Restoring mobility, Renewing lives' />
                </div>
                <div className={classNames(style.COEcardIcon,'rounded-full flex items-center justify-center')}>
                    <img src={OrthoIcon} alt='Restoring mobility, Renewing lives' /> 
                </div>
                </div>
                <div className={classNames(style.COEcardContent, 'text-primary')}>
                Arthroscopy, Joint Replacements, Sports Medicine, zPediatric Orthopaedics, Rehabilitation and everything. 
                <a className='moreBtn' href='#' >Read More</a>
                </div>
                
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classNames(style.COEcard, 'COEcard')}>
                <div className={classNames(style.COEcardtop,'bg-bdrlGray p-11 pb-0 relative')}>
                <div className='text-bodyCopy font-normal'>Restoring mobility, Renewing lives.</div>
                <h4 className='text-secondary'>Orthopaedics & Joint Replacements</h4>
                <div className={classNames(style.COEcardImage)}>
                    <img src={Orthopaedicspic} alt='Restoring mobility, Renewing lives' />
                </div>
                <div className={classNames(style.COEcardIcon,'rounded-full flex items-center justify-center')}>
                    <img src={OrthoIcon} alt='Restoring mobility, Renewing lives' /> 
                </div>
                </div>
                <div className={classNames(style.COEcardContent, 'text-primary')}>
                Arthroscopy, Joint Replacements, Sports Medicine, zPediatric Orthopaedics, Rehabilitation and everything. 
                <a className='moreBtn' href='#' >Read More</a>
                </div>
                
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classNames(style.COEcard, 'COEcard')}>
                <div className={classNames(style.COEcardtop,'bg-bdrlGray p-11 pb-0 relative')}>
                <div className='text-bodyCopy font-normal'>Restoring mobility, Renewing lives.</div>
                <h4 className='text-secondary'>Orthopaedics & Joint Replacements</h4>
                <div className={classNames(style.COEcardImage)}>
                    <img src={Orthopaedicspic} alt='Restoring mobility, Renewing lives' />
                </div>
                <div className={classNames(style.COEcardIcon,'rounded-full flex items-center justify-center')}>
                    <img src={OrthoIcon} alt='Restoring mobility, Renewing lives' /> 
                </div>
                </div>
                <div className={classNames(style.COEcardContent, 'text-primary')}>
                Arthroscopy, Joint Replacements, Sports Medicine, zPediatric Orthopaedics, Rehabilitation and everything. 
                <a className='moreBtn' href='#' >Read More</a>
                </div>
                
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classNames(style.COEcard, 'COEcard')}>
                <div className={classNames(style.COEcardtop,'bg-bdrlGray p-11 pb-0 relative')}>
                <div className='text-bodyCopy font-normal'>Restoring mobility, Renewing lives.</div>
                <h4 className='text-secondary'>Orthopaedics & Joint Replacements</h4>
                <div className={classNames(style.COEcardImage)}>
                    <img src={Orthopaedicspic} alt='Restoring mobility, Renewing lives' />
                </div>
                <div className={classNames(style.COEcardIcon,'rounded-full flex items-center justify-center')}>
                    <img src={OrthoIcon} alt='Restoring mobility, Renewing lives' /> 
                </div>
                </div>
                <div className={classNames(style.COEcardContent, 'text-primary')}>
                Arthroscopy, Joint Replacements, Sports Medicine, zPediatric Orthopaedics, Rehabilitation and everything. 
                <a className='moreBtn' href='#' >Read More</a>
                </div>
                
            </div>
          </SwiperSlide>
      
        
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