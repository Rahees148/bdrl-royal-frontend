import React from 'react';
import classNames from 'classnames';
import * as style from './newsletter-subscribe.module.scss';
import NlUserIcon from '../../images/icons/user-icon.svg';

function NewsletterSubscribe({ data }) {
    return (
        <section className={classNames(style.NewsletterSubscribeSec,'bg-primary py-24.5')}>
            <div className='pageWrapper'>
                <div className={classNames(style.NewsletterSubscribeWrap,'grid grid-cols-12 gap-8 justify-between items-center')}>
                    <div className={classNames(style.NewsletterSubscribeLeft,'col-span-4')}>Join our newsletter to keep up to date with us!</div>
                    <div className={classNames(style.NewsletterSubscribeRight,'col-span-8 flex ml-auto')}>
                        <div className={classNames(style.NewsletterSubscribeInputSec,'')}>
                            <img src={NlUserIcon} alt='Newsletter' />
                            <input className={classNames(style.NewsletterSubscribeInput,'')} placeholder='Enter your email'/>  
                        </div>
                        <button className={classNames(style.NewsletterSubscribeBtn,'button light-green')}>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    
  )
}

export default NewsletterSubscribe;