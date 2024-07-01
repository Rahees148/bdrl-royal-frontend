import { Link } from 'gatsby'
import React from 'react'
import classNames from 'classnames';
import * as style from './testimonial-list-card.module.scss'
import TestimonialListImage from '../../images/testimonial_list_image.png'
import QuoteTag from '../global/quote-tag';
function TestimonialListCard({data}) {
  return ( 
    <div className={classNames(style.cardBox)}>
        <div className={classNames(style.cardBoxTop,'flex')}>
            <div className={classNames(style.cardBoxImage)}>
                <img src={data?.image?.url} alt={data.title}/>
            </div>
            <div className={classNames(style.cardBoxHeading)}>
                <QuoteTag name={data.author_name}/>
                <h4>{data.title}</h4>
            </div>
        </div>
        <div className={classNames(style.cardBoxMid)}>
            <div className='labelTag grey'>label</div>
            <div className={classNames(style.cardBoxMidTag)}><span>Treated By</span>Dr. Abdul Rahiman</div>
            <div className={classNames(style.cardBoxMidDec)} dangerouslySetInnerHTML={{__html: data.description.data.childMarkdownRemark.html}}></div>
            <a className='moreBtn' href={'/testimonials/'+data.slug}>{data.button_label}</a>
        </div>
    </div>
  )
}

export default TestimonialListCard