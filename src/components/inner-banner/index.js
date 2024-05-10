import React from 'react'
import * as style from './inner-banner.module.scss'
import overlayImage from '../../images/banner-overlay.svg';
import classNames from 'classnames';
import ResponsiveImage from '../global/responsive-image';

function InnerBanner({data, waterMark=true}) {
  return (
    <section className={style.innerBannerWrapper}>
        <div className={style.bannerWrapper}>
          <ResponsiveImage desktopImage={data.desktopMedia} mobileImage={data.mobileMedia ? data.mobileMedia : data.desktopMedia } alt={data.title} className={style.img} />
        </div>
        <div className={classNames('pageWrapper', style.bannerText)}>
            <div className={style.bannerTextWrapper}>
                <h1 dangerouslySetInnerHTML={{__html: data.title}} />
                <div className={style.subhead} dangerouslySetInnerHTML={{__html: data.description}}></div>
                {waterMark &&
                  <img src={overlayImage} alt='Badr Al Samaa Royal Hospital' />
                }
            </div>
        </div>
    </section>
  )
}

export default InnerBanner