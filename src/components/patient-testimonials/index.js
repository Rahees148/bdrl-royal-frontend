import React, {useRef} from 'react'
import classNames from 'classnames'
import * as style from './patient-testimonials.module.scss';

function PatientTestimonials() {   
  return (
    <section className={classNames(style.CentresOfExcellence, 'py-20')}>
    <div className="pageWrapper CentresOfExcellence">
      <div className= 'flex items-end justify-between'>
        <div className='section-title'>
            <h3>Our patients loves us</h3>
            <div className='section-tagline'>Patient Testimonials</div>
        </div>
        <a className='moreBtn' href='#' >View All</a>
      </div> 
        <div className={classNames(style.COEcardWrap)}>
        </div> 
      </div>
    </section>
    ) 
}
  export default PatientTestimonials