import React, {useState} from 'react'
import classNames from 'classnames'
import * as style from './sliding-card.module.scss';

import SlidingCardpic from '../../images/SlidingCard-pic.jpg'

function SlidingCard() {  
    return (
<section className='bg-bdrlGray py-12'>
            <div className='pageWrapper'>
              <div className={classNames( style.SlidingCardWrap,'grid grid-cols-12 gap-8')}>
                <div className={classNames( style.SlidingCardDescription,'rounded-3xl')}>
                        <div className='section-title'> 
                          <h3>So what if I can’t run, I Am old!</h3>
                          <div className='section-tagline'>Make your thoughts young, your body will follow.</div>
                        </div> 
                        <div className={classNames(style.SlidingCardbtn, 'button bg-primary')}>Think <b>Joint Replacement</b> With Us!</div>
                        <div className={classNames(style.SlidingCardDec, '')}>Knee, Hip, Shoulder & Wrist Joint Replacements with US FDA approved Implants.</div> 
                </div>
                <div className={classNames( style.SlidingCardImage,'')}>
                    <img src={SlidingCardpic} alt='Orthopaedics & Joint Replacements' className='rounded-3xl'/>
                </div> 
              </div>
            </div>
  </section>
    )
}
export default SlidingCard