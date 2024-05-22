import React from 'react'
import * as style from './contact.module.scss'
import classNames from 'classnames'
import LeadershipForm from '../form/leadership-form'
import { Parallax } from 'react-scroll-parallax'
import ParallaxElement from '../parallax-element'
import EmailIcon from '../../images/icons/mail-icon.svg';
import CallIcon from '../../images/icons/call-icon.svg';
import useWindowSize from '../../libs/hooks/useWindowSize'

function ContactDetails({pageData}) {
    const {isMobile} = useWindowSize();
  return (
    <div className={style['contactDetails']}>
    <section className='py-[80px] relative z-10'>
        <div className={classNames('pageWrapper')}>
            <span className={classNames(style.ContactTag,' gold')}>{pageData.title}</span>
            <h2 dangerouslySetInnerHTML={{__html: pageData.banner_title?.data.banner_title}} /> 
        </div>
      </section>
      <div className={classNames('pageWrapper')}>
        <Parallax speed={10} translateY={10} >
            <ParallaxElement variant='circle' style={{left:'40%', top:'-200px'}} />
        </Parallax>
        <Parallax speed={10} translateY={-10} >
            <ParallaxElement variant='circle' style={{left:'80%', top:'-350px'}} />
        </Parallax>
       </div>
      <section className='pt-[45px] sm:pt-[66px] pb-[45px] sm:pb-[81px] bg-bdrlGray '>
        <div className='pageWrapper flex flex-col sm:grid grid-cols-2 gap-[34px] sm:gap-[34px] relative z-10' >
            <div className='p-[45px] bg-white rounded-5'>
                <ul className={classNames(style.CallDetails)}>
                    <li><span><img src={EmailIcon} alt='Email'/></span>{pageData.email}</li>
                    <li><span><img src={CallIcon} alt='Call'/></span>{pageData.number}</li>
                </ul>
                <div className={classNames(style.ContactFollowUs)}>
                    <h3>{pageData.follow_us_label}</h3>
                    <p>{pageData.follow_us_description}</p>
                    <ul className='flex gap-4'>
                    {pageData.social_media && pageData.social_media.map(icon => (
                        <li key={icon.id}><img src={icon.icon?.url} alt={icon.title} /></li>
                    ))}
                    </ul>
                </div>
            </div>
            <div>
            <LeadershipForm
                overlap={!isMobile}
                messageRow={5}
                title={'Contact Us ' }
                formTitle={pageData.form_title?.title?.data.title}
                tagLine={pageData.form_title?.description?.data.description}
            />
            </div>
        </div>
      </section>
      <section className='py-[45px] sm:py-[80px]'>
      <div className='pageWrapper sm:grid grid-cols-2 gap-[60px] sm:items-center flex flex-col items-stretch'>
            <div className=' bg-white rounded-5 h-[544px] overflow-hidden order-last sm:order-first' dangerouslySetInnerHTML={{__html: pageData.location_map}} />
            <div className={classNames(style.ContactLocation)}>
                <span className={classNames(style.ContactLocationSubtitle)}>{pageData.location_subtitle}</span>
                <h4>{pageData.location_title}</h4>

                <h5>{pageData.address_title}</h5>
                <address dangerouslySetInnerHTML={{__html: pageData.address?.data.address}} />
            </div>
        </div>
      </section>
      </div>
  )
}

export default ContactDetails