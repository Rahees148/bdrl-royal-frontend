import React from 'react'
import * as style from './inner-banner.module.scss'
import overlayImage from '../../images/banner-overlay.svg';
import classNames from 'classnames';
import ResponsiveImage from '../global/responsive-image';

function InnerBanner({data}) {
  return (
    <section className={style.innerBannerWrapper}>
        <ResponsiveImage desktopImage={data.desktopMedia} mobileImage={data.mobileMedia ? data.mobileMedia : data.desktopMedia } alt={data.title} className={style.img} />
        <div className={classNames('pageWrapper', style.bannerText)}>
            <div className={style.bannerTextWrapper}>
                <h1>{data.title}</h1>
                <div className={style.subhead} dangerouslySetInnerHTML={{__html: data.description}}></div>
                <img src={overlayImage} alt='Badr Al Samaa Royal Hospital' />
            </div>
        </div>
    </section>
  )
}

export default InnerBanner