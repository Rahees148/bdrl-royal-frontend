import React from 'react';
import classNames from 'classnames';
import * as style from './quote-tag.module.scss';
import TestimonialIcon from '../../../images/icons/TestimonialsIcon.svg'

function QuoteTag() {
    return (
        <div className={classNames(style.QuoteTag)}><img src={TestimonialIcon} alt='Testimonials'/>Mohsin Al Zadjali</div>
    
  )
}

export default QuoteTag;