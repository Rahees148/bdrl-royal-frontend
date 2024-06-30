import { Link } from 'gatsby'
import React from 'react'
import classNames from 'classnames';
import * as style from './testimonial-list-card.module.scss'
import TestimonialListImage from '../../images/testimonial_list_image.png'
import QuoteTag from '../global/quote-tag';
function TestimonialListCard({title, image, label, slug}) {
  return ( 
    <>
        <div className={classNames(style.cardBox)}>
            <div className={classNames(style.cardBoxTop,'flex')}>
                <div className={classNames(style.cardBoxImage)}>
                    <img src={TestimonialListImage} alt='Testimonials'/>
                </div>
                <div className={classNames(style.cardBoxHeading)}>
                    <QuoteTag/>
                    <h4>Special thanks to the ortho team for your valuable support.</h4>
                </div>
            </div>
            <div className={classNames(style.cardBoxMid)}>
                <div className='labelTag grey'>Anterior Cervical Discectomy with Fusion Surgery</div>
                <div className={classNames(style.cardBoxMidTag)}><span>Treated By</span>Dr. Abdul Rahiman</div>
                <div className={classNames(style.cardBoxMidDec)}>Badr Al Samaa Royal Hospital truly stands to their name. After years of struggle with my chronic health issues, I was fortunate to find solace here.</div>
                <div className='moreBtn'>Read More</div>
            </div>
        </div>
        <div className={classNames(style.cardBox)}>
            <div className={classNames(style.cardBoxTop,'flex')}>
                <div className={classNames(style.cardBoxImage)}>
                    <img src={TestimonialListImage} alt='Testimonials'/>
                </div>
                <div className={classNames(style.cardBoxHeading)}>
                    <QuoteTag/>
                    <h4>Special thanks to the ortho team for your valuable support.</h4>
                </div>
            </div>
            <div className={classNames(style.cardBoxMid)}>
                <div className='labelTag grey'>Anterior Cervical Discectomy with Fusion Surgery</div>
                <div className={classNames(style.cardBoxMidTag)}><span>Treated By</span>Dr. Abdul Rahiman</div>
                <div className={classNames(style.cardBoxMidDec)}>Badr Al Samaa Royal Hospital truly stands to their name. After years of struggle with my chronic health issues, I was fortunate to find solace here.</div>
                <div className='moreBtn'>Read More</div>
            </div>
        </div>
        <div className={classNames(style.cardBox)}>
            <div className={classNames(style.cardBoxTop,'flex')}>
                <div className={classNames(style.cardBoxImage)}>
                    <img src={TestimonialListImage} alt='Testimonials'/>
                </div>
                <div className={classNames(style.cardBoxHeading)}>
                    <QuoteTag/>
                    <h4>Special thanks to the ortho team for your valuable support.</h4>
                </div>
            </div>
            <div className={classNames(style.cardBoxMid)}>
                <div className='labelTag grey'>Anterior Cervical Discectomy with Fusion Surgery</div>
                <div className={classNames(style.cardBoxMidTag)}><span>Treated By</span>Dr. Abdul Rahiman</div>
                <div className={classNames(style.cardBoxMidDec)}>Badr Al Samaa Royal Hospital truly stands to their name. After years of struggle with my chronic health issues, I was fortunate to find solace here.</div>
                <div className='moreBtn'>Read More</div>
            </div>
        </div> 
        </>
  )
}

export default TestimonialListCard