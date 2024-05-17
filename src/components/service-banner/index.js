import React from 'react'
import * as style from './service-banner.module.scss'
import classNames from 'classnames';

function ServiceBanner({data,subtitle=true, buttonAsTag=false, theme}) {
  return (
    <section className={classNames(style.serviceBannerWrapper)}>
        <div className={classNames('pageWrapper', style[theme])}>
            <div className={style.bannerTextWrapper}>
                {buttonAsTag &&
                  <a href="#" className={classNames(style.serviceBannerBtnTag,'button inline-block' )} >{data.buttonLabel}</a>
                }
                <h1 dangerouslySetInnerHTML={{__html: data.title}} />
                <div className={classNames(subtitle ? style.subhead : style.description)} dangerouslySetInnerHTML={{__html: data.description}}></div>
                {!buttonAsTag &&
                  <a href="#" className={classNames(style.serviceBannerBtn,'button bg-primary inline-block' )}>{data.buttonLabel}</a>
                }
            </div>
            <div className={style.bannerImg}>
              <span className={style.serviceBannerIcon}>
                <img src={data.mobileMedia && data.mobileMedia} alt='diabetes'/> 
              </span>
              <img src={data.desktopMedia} alt={data.title} />
            </div>
        </div>
    </section>
  )
}

export default ServiceBanner