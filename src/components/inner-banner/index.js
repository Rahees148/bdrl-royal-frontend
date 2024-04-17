import React from 'react'
import * as style from './inner-banner.module.scss'
import bannerIMG from '../../images/about-banner.jpeg';
import overlayImage from '../../images/banner-overlay.svg';
import classNames from 'classnames';

function InnerBanner() {
  return (
    <section className={style.innerBannerWrapper}>
        <img src={bannerIMG} alt='banner' />
        <div className={classNames('pageWrapper', style.bannerText)}>
            <div className={style.bannerTextWrapper}>
                <h1>An Overview</h1>
                <p>Badr Al Samaa Royal Hospital</p>
                <img src={overlayImage} alt='Badr Al Samaa Royal Hospital' />
            </div>
        </div>
    </section>
  )
}

export default InnerBanner