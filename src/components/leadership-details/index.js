import React, { useRef } from 'react';
import classNames from 'classnames';
import * as style from './leadership-details.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import TitleDescription from '../global/title-description';
import IconCard from '../global/icon-card';
import LeadershipForm from '../form/leadership-form';
import TextMessageIcon from '../../images/icons/text-message-icon.svg';

function LeaderShipDetails({ pageData }) {
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    return (
        <div
            className={classNames(
                style.leadershipPage,
                'pt-[20px] md:pt-[93px] pb-[50px]',
            )}
        >
            <div className="pageWrapper">
                <div className="grid grid-cols-12 gap-8 items-end">
                    <div className="col-span-12 md:col-span-4  bg-[#EDEDED] rounded-5">
                        <img src={pageData?.photo?.url} alt={pageData.title} />
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <TitleDescription
                            data={{
                                variant: 'stack',
                                title: pageData.title,
                                tagLine: pageData.designation,
                                description: pageData?.description?.data?.description,
                            }}
                        />
                    </div>
                </div>

                <div className="pt-[45px] md:pt-[87px] grid grid-cols-12 gap-8 items-start">
                    <div className="col-span-12 md:col-span-6">
                        <TitleDescription
                            data={{
                                variant: 'stack',
                                size: 'small',
                                title: pageData.awards_title?.title?.data?.title,
                                description: pageData?.awards_title?.description?.data?.description,
                            }}
                        />
                        {pageData.award_icons && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-[11px] sm:gap-8 pt-[26px] sm:pt-[34px] pb-[55px] sm:pb-[60px]">
                                {pageData.award_icons.map((icon, index) => (
                                    <IconCard
                                        key={index}
                                        data={{
                                            variant: 'stack',
                                            title: icon.title,
                                            icon: icon.icon?.url,
                                        }}
                                    />
                                ))}
                            </div>
                        )}

                        <TitleDescription
                            data={{
                                variant: 'stack',
                                size: 'small',
                                title: pageData.key_position_title_description?.title?.data?.title,
                                description:
                                    pageData?.key_position_title_description?.description?.data
                                        ?.description,
                            }}
                        />
                        {pageData.keyposition_icons && (
                            <div className="py-[45px] w-[100%] relative">
                                <Swiper
                                    speed={1000}
                                    effect="fade"
                                    spaceBetween={12}
                                    slidesPerView={2}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 12,
                                        },
                                    }}
                                    navigation={{
                                        nextEl: '.leadership-swiper-button-next',
                                        prevEl: '.leadership-swiper-button-prev',
                                    }}
                                    onBeforeInit={(swiper) => {
                                        swiper.navigation.nextEl = navigationNextRef.current;
                                        swiper.navigation.prevEl = navigationPrevRef.current;
                                    }}
                                    modules={[Navigation]}
                                    className="leadershipSliderSwiper"
                                >
                                    {pageData.keyposition_icons.map((icon, index) => (
                                        <SwiperSlide key={index}>
                                            <IconCard
                                                data={{
                                                    icon: icon.icon?.url,
                                                }}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className={style.sliderNavigation}>
                                    
                                        <button
                                            className={classNames(
                                                style.swiperButton,
                                                style.prev,
                                                'leadership-swiper-button-prev',
                                            )}
                                        >
                                            Prev
                                        </button>
                                        <button
                                            className={classNames(
                                                style.swiperButton,
                                                'leadership-swiper-button-next',
                                            )}
                                        >
                                            Next
                                        </button>
                                    
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <LeadershipForm
                            toEmail={pageData.title}
                            title={pageData.title}
                            formTitle={pageData.form_title_description?.title?.data.title}
                            tagLine={pageData?.form_title_description?.tagline}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaderShipDetails;
