import React, { useRef } from 'react';
import classNames from 'classnames';
import * as style from './news-events.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import TitleDescription from '../global/title-description';
import { Content } from '../../graphql/news-and-events';
import { Link } from 'gatsby';
import TechnologyCard from '../technology-card';

function NewsEvents({
    template = false,
    theme = 'primary',
    data,
    titleDescription,
    linkTo,
    variant = 'news_events',
}) {
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const newsAndEvents = data ? data : Content().allStrapiNewsAndEvent.nodes;
    return (
        <>
            {newsAndEvents && newsAndEvents.length > 0 && (
                <section
                    className={classNames(
                        style.NewsEvents,
                        theme && style[theme],
                        template && style[template],
                    )}
                >
                    <div className={classNames(style.NewsEventsTop, 'bg-primary')}>
                        <div className="pageWrapper">
                            <TitleDescription data={{ ...titleDescription }} />
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
                                    navigation={{
                                        nextEl: '.newsandevents-swiper-button-next',
                                        prevEl: '.newsandevents-swiper-button-prev',
                                    }}
                                    onBeforeInit={(swiper) => {
                                        swiper.navigation.nextEl = navigationNextRef.current;
                                        swiper.navigation.prevEl = navigationPrevRef.current;
                                    }}
                                    modules={[Pagination, Navigation]}
                                    className="NewsSwiper"
                                >
                                    {newsAndEvents &&
                                        newsAndEvents.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                {variant === 'technology' ? (
                                                    <TechnologyCard
                                                        title={item.title}
                                                        image={item.listing_image?.url}
                                                        label={item.listing_cta_label}
                                                        slug={item.slug}
                                                    />
                                                ) : (
                                                    <div
                                                        className={classNames(
                                                            style.NewsEventsCard,
                                                            'col-span-4',
                                                        )}
                                                    >
                                                        <div
                                                            className={classNames(
                                                                style.NewsEventsCardImage,
                                                            )}
                                                        >
                                                            {item.image && (
                                                                <img
                                                                    src={item.image?.url}
                                                                    alt={item.title}
                                                                />
                                                            )}
                                                            {!item.image && item.media && (
                                                                <img
                                                                    src={item.media?.url}
                                                                    alt={item.title}
                                                                />
                                                            )}
                                                        </div>
                                                        <div
                                                            className={classNames(
                                                                style.NewsEventsCardDec,
                                                            )}
                                                        >
                                                            <div
                                                                className={classNames(
                                                                    style.NewsEventsCardTag,
                                                                    style[item.category],
                                                                )}
                                                            >
                                                                {item.category}
                                                            </div>
                                                            {item.slug ? (
                                                                <Link
                                                                    to={
                                                                        '/' +
                                                                        linkTo +
                                                                        '/' +
                                                                        item.slug
                                                                    }
                                                                >
                                                                    <h4>{item.title}</h4>
                                                                </Link>
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
                                                                        href={
                                                                            '/' +
                                                                            linkTo +
                                                                            '/' +
                                                                            item.slug
                                                                        }
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
                                                                            to={
                                                                                '/doctors/' +
                                                                                item.doctor?.slug
                                                                            }
                                                                        >
                                                                            {item.doctor?.Name}
                                                                        </Link>
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </div>
                            <div className={style.sliderNavigation}>
                                <div className={style.sliderBtn}>
                                    <button
                                        className={classNames(
                                            style.swiperButton,
                                            style.prev,
                                            'newsandevents-swiper-button-prev',
                                        )}
                                    >
                                        Prev
                                    </button>
                                    <button
                                        className={classNames(
                                            style.swiperButton,
                                            'newsandevents-swiper-button-next',
                                        )}
                                    >
                                        Next
                                    </button>
                                </div>
                                <div
                                    className={classNames(
                                        style.pagination,
                                        'newsSlider-pagination',
                                    )}
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
export default NewsEvents;
