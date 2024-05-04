import React from 'react'
import * as style from './service-banner.module.scss'
import overlayImage from '../../images/banner-overlay.svg';
import classNames from 'classnames';
import ResponsiveImage from '../global/responsive-image';

function ServiceBanner({data}) {
  return (
    <section className={style.serviceBannerWrapper}>
        <div className={classNames('pageWrapper')}>
            <div className={style.bannerTextWrapper}>
                <h1>{data.title}</h1>
                <div className={style.subhead} dangerouslySetInnerHTML={{__html: data.description}}></div>
            </div>
            <div className={style.bannerImg}>
              <img src={data.desktopMedia} alt={data.title} />
            </div>
        </div>
    </section>
  )
}

export default ServiceBanner