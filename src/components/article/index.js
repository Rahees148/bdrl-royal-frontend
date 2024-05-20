import React from 'react'
import * as style from './article.module.scss'
import classNames from 'classnames'
import WhatsAppIcon from '../../images/icons/WhatsApp_icon.svg';
import DoctorImg from '../../images/Venkateshwaran1.png';
function Article({pageData}) {
  return (
    <div className={style.articleDetails}>
        <img className="rounded-5 mb-[28px]" src={pageData.image?.url} alt={`Cover for ${pageData.title}`} />
        <div className={style.tagsWrapper}>
            <span className={classNames(style.tag, style[pageData.category.toLowerCase()])}>{pageData.category}</span>
            <span className={style.date}>{pageData.article_date}</span>
        </div>
        <h1>{pageData.title}</h1>
        <div className={style.icons}>
            <span>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0282 5.64788C11.2948 3.37563 11.9281 2.2395 12.875 2.2395C13.8219 2.2395 14.4552 3.37563 15.7218 5.64788L16.0495 6.23573C16.4095 6.88144 16.5894 7.20429 16.8701 7.41731C17.1507 7.63033 17.5001 7.7094 18.1991 7.86755L18.8355 8.01153C21.2951 8.56806 22.525 8.84632 22.8176 9.78723C23.1102 10.7281 22.2718 11.7086 20.5949 13.6694L20.1611 14.1767C19.6846 14.7339 19.4463 15.0125 19.3391 15.3572C19.232 15.7019 19.268 16.0736 19.34 16.8171L19.4056 17.4939C19.6591 20.1101 19.7859 21.4182 19.0199 21.9997C18.2538 22.5812 17.1023 22.051 14.7993 20.9907L14.2035 20.7163C13.5491 20.415 13.2219 20.2644 12.875 20.2644C12.5281 20.2644 12.2009 20.415 11.5465 20.7163L10.9507 20.9907C8.64768 22.051 7.49618 22.5812 6.73015 21.9997C5.96412 21.4182 6.09088 20.1101 6.3444 17.4939L6.40998 16.8171C6.48203 16.0736 6.51805 15.7019 6.41086 15.3572C6.30368 15.0125 6.06543 14.7339 5.58892 14.1767L5.1551 13.6694C3.47825 11.7086 2.63982 10.7281 2.93242 9.78723C3.22502 8.84632 4.45486 8.56806 6.91454 8.01153L7.55089 7.86755C8.24985 7.7094 8.59933 7.63033 8.87994 7.41731C9.16055 7.20429 9.34053 6.88144 9.70047 6.23574L10.0282 5.64788Z" stroke="#023321" stroke-width="1.5"/>
                </svg>
            </span>
            <span>
            <img src={WhatsAppIcon} alt='WhatsApp'/> 
            </span>
            <span>
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="19.9853" cy="6.72822" r="3.87202" fill="#E4FF85"/>
                    <circle cx="19.9853" cy="22.2551" r="3.87202" fill="#E4FF85"/>
                    <path d="M5.05469 14.4952C5.05469 16.1435 6.39088 17.4797 8.03915 17.4797C9.68743 17.4797 11.0236 16.1435 11.0236 14.4952C11.0236 12.8469 9.68743 11.5107 8.03915 11.5107" stroke="#023321" stroke-width="1.79068" stroke-linecap="round"/>
                    <path d="M16.9924 7.92944L11.0234 12.1077" stroke="#023321" stroke-width="1.79068" stroke-linecap="round"/>
                    <path d="M16.9924 21.0613L11.0234 16.883" stroke="#023321" stroke-width="1.79068" stroke-linecap="round"/>
                    <path d="M19.9806 25.2394C21.6288 25.2394 22.965 23.9032 22.965 22.255C22.965 20.6067 21.6288 19.2705 19.9806 19.2705C18.3323 19.2705 16.9961 20.6067 16.9961 22.255" stroke="#023321" stroke-width="1.79068" stroke-linecap="round"/>
                    <path d="M22.5618 8.22817C21.7376 9.65562 19.9124 10.1447 18.4849 9.32057C17.0575 8.49643 16.5684 6.67116 17.3925 5.24371C18.2167 3.81626 20.0419 3.32718 21.4694 4.15132" stroke="#023321" stroke-width="1.79068" stroke-linecap="round"/>
                </svg>
            </span>
        </div>
        <div className="postcontent" dangerouslySetInnerHTML={{ __html: pageData.description.data.childMarkdownRemark.html }} />
        <div className={classNames(style.articleAuthor)}>
            <h4 className={classNames(style.articleAuthorTitle)}>Author</h4>
            <div className={classNames(style.articleAuthorInr)}>
                <div className={classNames(style.articleAuthorImageSec)}>
                    <div className={classNames(style.DoctorCardImage)}>
                        <div className={classNames(style.Circle)}></div>
                        <img src={DoctorImg} alt='Doctor Name'/>
                    </div>
                </div>
                <div className={classNames(style.articleAuthorDec)}>
                    <h5>Dr. A Venkateshwaran</h5>
                    <span>Specialist Orthopaedic Surgeon</span>
                    <a href='#'>View Profile</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Article