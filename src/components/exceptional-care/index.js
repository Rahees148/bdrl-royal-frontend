import React, {useState, useRef} from 'react'
import * as style from './exceptional-care.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import classNames from 'classnames';
import TitleDescription from '../global/title-description';
import CustomCursor from '../global/cutom-cursor';

function ExceptionalCare({data}) {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const [progress, setProgress] = useState(0);
    const [swiper, setSwiper] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        setProgress(progress)
    };
    const onSlideChange = (s) =>{
        setActiveSlide(s.activeIndex)
    }
  return (
    <div className='overflow-hidden exceptionCareContainer'>
        <section className={style.exceptionalCare}>
            <div className={style.imageContainer}>
            <Swiper
                onSwiper={setSwiper}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="exceptionalSwiper"
                onSlideChange={onSlideChange}
            >
            {data.card && data.card.map((item, index) => (
                <SwiperSlide style={{
                    backgroundImage:`url(${item.image.url})`,
                }}>
                </SwiperSlide>
            ))}
            <div className={style.autoplayProgress} slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            </div>
            <div className={style.rightColumn}></div>
            <div className={classNames('pageWrapper', style.textContainer)}>
                <div></div>
                <div>
                    <TitleDescription data={{
                        theme: 'white',
                        title: data.Title,
                        description: data.description,
                    }} />
                    <ul className={classNames(style.listItem, 'text-white mt-[25px]')}>
                        {data.card && data.card.map((item, index) => (
                             <li onClick={()=>{
                                swiper.slideTo(index);
                             }} key={index} className={activeSlide === index ? style.active :''}>
                                <span className='text-sm'>{item.sub_title}</span>
                                <h4 className='text-[20px] font-semibold'>{item.Title}</h4>
                                <div className={style.autoplayProgress}>
                                    <svg viewBox="0 0 48 48" className='circle' style={{
                                        '--progress': -progress
                                    }}>
                                        <circle cx="24" cy="24" r="20"></circle>
                                    </svg>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        <CustomCursor targetedClass="exceptionCareContainer" />
    </div>
  )
}

export default ExceptionalCare