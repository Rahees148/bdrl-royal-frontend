import React from 'react';
import classNames from 'classnames';
import * as style from './quote-tag.module.scss';
import TestimonialIcon from '../../../images/icons/TestimonialsIcon.svg'

function QuoteTag({name}) {
    return (
        <div className={classNames(style.QuoteTag)}><img src={TestimonialIcon} alt='Testimonials'/>{name}</div>
    
  )
}

export default QuoteTag;