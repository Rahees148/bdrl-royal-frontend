import React from 'react'
import * as style from './service-banner.module.scss'
import overlayImage from '../../images/banner-overlay.svg';
import classNames from 'classnames';
import ResponsiveImage from '../global/responsive-image';
import DiabetesIcon from '../../images/icons/diabetes-icon-1.svg'

function ServiceBanner({data}) {
  return (
    <section className={style.serviceBannerWrapper}>
        <div className={classNames('pageWrapper')}>
            <div className={style.bannerTextWrapper}>
                <h1>{data.title}</h1>
                <div className={style.subhead} dangerouslySetInnerHTML={{__html: data.description}}></div>
                <a href="#" className={classNames(style.serviceBannerBtn,'button bg-primary inline-block' )}>Enquire Now</a>
            </div>
            <div className={style.bannerImg}>
              <span className={style.serviceBannerIcon}>
                <img src={DiabetesIcon} alt='diabetes'/> 
              </span>
              <img src={data.desktopMedia} alt={data.title} />
            </div>
        </div>
    </section>
  )
}

export default ServiceBanner