import React, { useState } from 'react'
import * as style from './article.module.scss'
import classNames from 'classnames'
import WhatsAppIcon from '../../images/icons/WhatsApp_icon.svg';
import ModalDialog from '../global/modal-dialog';
import Share from '../global/share';
function Article({pageData, author}) {
    const [modalOpen, setModalOpen] = useState(false)
    const imageURL = pageData.image?.url ? pageData.image?.url : pageData.media?.url
  return (
    <div className={style.articleDetails}>
        <img className="rounded-5 mb-[28px]" src={imageURL} alt={`Cover for ${pageData.title}`} />
        <div className={style.tagsWrapper}>
            <span className={classNames(style.tag, style[pageData.category.toLowerCase()])}>{pageData.category}</span>
            <span className={style.date}>{pageData.article_date?pageData.article_date : pageData.publishedAt }</span>
        </div>
        <h1>{pageData.title}</h1>
        <div className={style.icons}>
            <span>
                <a target='_blank' href={`https://api.whatsapp.com/send?text=${window.location.href}`} data-action="share/whatsapp/share"><img src={WhatsAppIcon} alt='WhatsApp'/> </a>
            </span>
            <span onClick={()=>{setModalOpen(true)}}>
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
        <div className="postcontent" dangerouslySetInnerHTML={{ __html: pageData.description.data.description }} />
        {author &&
            <div className={classNames(style.articleAuthor)}>
                <h4 className={classNames(style.articleAuthorTitle)}>Author</h4>
                <div className={classNames(style.articleAuthorInr)}>
                    <div className={classNames(style.articleAuthorImageSec)}>
                        <div className={classNames(style.DoctorCardImage)}>
                            <div className={classNames(style.Circle)}></div>
                            <img src={pageData.doctor.Image.url} alt={pageData.doctor.Name}/>
                        </div>
                    </div>
                    <div className={classNames(style.articleAuthorDec)}>
                        <h5>{pageData.doctor.Name}</h5>
                        <span>{pageData.doctor.designation}</span>
                        <a href={'/doctors/'+pageData.doctor.slug}>View Profile</a>
                    </div>
                </div>
            </div>
        }
        <ModalDialog title={'Share on'} body={<Share description={pageData.title} />} isOpen={modalOpen} setIsOpen={(val) => {
            setModalOpen(val)
        }} />
    </div>
  )
}

export default Article