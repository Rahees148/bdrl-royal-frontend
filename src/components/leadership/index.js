import React,{useRef} from 'react';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import * as style from './leadership.module.scss'; 
import { Link } from 'gatsby';
import useWindowSize from '../../libs/hooks/useWindowSize';
import { LeadersList } from '../../graphql/about/leaders-list';

function LeaderShip() {
    const {isMobile} = useWindowSize();
    const data = LeadersList().allStrapiLeadershipList.nodes;
    console.log(data)
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    return (
        <>
        {isMobile ? (
            <div className={classNames(style.LeaderShipSec)}> 
                <Swiper
                    pagination={{
                        clickable: true ,
                        el: '.leader-swiper-pagination',
                    }}
                    speed={1000}
                    effect='fade'
                    spaceBetween={12}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.leader-swiper-button-next',
                        prevEl: '.leader-swiper-button-prev',
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.navigation.nextEl = navigationNextRef.current;
                        swiper.navigation.prevEl = navigationPrevRef.current;
                    }}
                    modules={[ Navigation, Pagination]}
                    className="leaderSliderSwiper"
                    >
                    
                    {data && data.map((leader, index) => (
                        <SwiperSlide key={index}>
                            <div className={classNames(style.LeaderShipCard)} >
                                <div className={classNames(style.LeaderShipCardImage)}>
                                <img src={leader?.photo?.url} alt={leader.title} />
                                </div>
                                <div className={classNames(style.LeaderShipCardDetails)}>
                                    <h4>{leader.title}</h4>
                                    <aside>{leader.designation}</aside>
                                    <Link className={classNames(style.LeaderShipCardBtn,'moreBtn white')} to={leader.slug.toLowerCase()}>{leader.button_label}</Link>
                                </div>
                            </div> 
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={style.sliderNavigation}>
                    <div>
                    <button className={classNames(style.swiperButton, style.prev, 'leader-swiper-button-prev')}>Prev</button>
                    <button className={classNames(style.swiperButton, 'leader-swiper-button-next')}>Next</button>
                    </div>
                    <div className={classNames(style.pagination, 'leader-swiper-pagination')}></div>
                </div>
              </div>
        ):(
            <div className={classNames(style.LeaderShipSec, 'flex gap-10')}> 
                {data && data.map((leader, index) => (
                    <div className={classNames(style.LeaderShipCard)} key={index}>
                        <div className={classNames(style.LeaderShipCardImage)}>
                        <img src={leader?.photo?.url} alt={leader.title} />
                        </div>
                        <div className={classNames(style.LeaderShipCardDetails)}>
                            <h4>{leader.title}</h4>
                            <aside>{leader.designation}</aside>
                            <Link className={classNames(style.LeaderShipCardBtn,'moreBtn white')} to={leader.slug.toLowerCase()}>{leader.button_label}</Link>
                        </div>
                    </div> 
                ))} 
        </div>
        )}
        
        </>
    
  )
}

export default LeaderShip;