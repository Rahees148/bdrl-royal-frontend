import React from 'react';
import classNames from 'classnames';
import * as style from './news-events.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import TitleDescription from '../global/title-description';
import { Content } from '../../graphql/news-and-events';
import useWindowSize from '../../libs/hooks/useWindowSize';
import { Link } from 'gatsby';

function NewsEvents({ template = false, data, titleDescription, linkTo }) {
    const newsAndEvents = data ? data : Content().allStrapiNewsAndEvent.nodes;
    return (
        <section className={classNames(style.NewsEvents, template && style[template])}>
            <div className={classNames(style.NewsEventsTop, 'bg-primary')}>
                <div className="pageWrapper">
                    <TitleDescription
                        data={{
                            theme: titleDescription.theme,
                            title: titleDescription.title,
                            size: template && template === 'inner' && 'small',
                            description:
                                titleDescription.description && titleDescription.description,
                            button_label: titleDescription.button_label,
                            button_link: titleDescription.button_link,
                        }}
                    />
                </div>
            </div>
            <div className={classNames(style.NewsEventsBtm)}>
                <div className={classNames(style.halfBg, 'pageWrapper')}>
                    <div className={classNames(style.NewsEventsCardwrap)}>
                        <Swiper
                            speed={1000}
                            spaceBetween={32}
                            slidesPerView={1}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 32,
                                },
                                980: {
                                    slidesPerView: 3,
                                    spaceBetween: 32,
                                },
                            }}
                            effect="fade"
                            pagination={{
                                clickable: true,
                                el: '.newsSlider-pagination',
                            }}
                            modules={[Pagination]}
                            className="NewsSwiper"
                        >
                            {newsAndEvents &&
                                newsAndEvents.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className={classNames(
                                                style.NewsEventsCard,
                                                'col-span-4',
                                            )}
                                        >
                                            <div className={classNames(style.NewsEventsCardImage)}>
                                                <img src={item.image?.url} alt={item.title} />
                                            </div>
                                            <div className={classNames(style.NewsEventsCardDec)}>
                                                <div
                                                    className={classNames(
                                                        style.NewsEventsCardTag,
                                                        item.category === 'News'
                                                            ? style.NewsTag
                                                            : style.EventsTag,
                                                    )}
                                                >
                                                    {item.category}
                                                </div>
                                                {item.slug ? (
                                                    <Link to={'/'+linkTo+'/'+item.slug}><h4>{item.title}</h4></Link>
                                                ) : (
                                                    <h4>{item.title}</h4>
                                                )}

                                                {!template && (
                                                    <>
                                                        <aside>{item.summary}</aside>
                                                        <a
                                                            className={classNames(
                                                                style.NewsEventsMorebtn,
                                                                'moreBtn',
                                                            )}
                                                            href={'/'+linkTo+'/' + item.slug}
                                                        >
                                                            {item.button_label}
                                                        </a>
                                                    </>
                                                )}
                                                {template && (
                                                    <div className={style.cardFooter}>
                                                        <span>{item.publish_date}</span>
                                                        <span>|</span>
                                                        <span>
                                                            <Link
                                                                to={'/doctors/' + item.doctor?.slug}
                                                            >
                                                                {item.doctor?.Name}
                                                            </Link>
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                    <div className={classNames(style.pagination, 'newsSlider-pagination')}></div>
                </div>
            </div>
        </section>
    );
}
export default NewsEvents;
