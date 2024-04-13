import React, {useRef} from 'react'
import classNames from 'classnames'
import * as style from './patient-testimonials.module.scss';
import TestimonialsPic from '../../images/TestimonialsPic1.png'
import TestimonialsIcon from '../../images/icons/TestimonialsIcon.svg'

function PatientTestimonials() {   
  return (
    <section className={classNames(style.PatientTestimonials, 'py-20')}>
    <div className="pageWrapper CentresOfExcellence">
      <div className= 'flex items-end justify-between'>
        <div className='section-title'>
            <h3>Our patients loves us</h3>
            <div className='section-tagline'>Patient Testimonials</div>
        </div>
        <a className='moreBtn' href='#' >View All</a>
      </div> 
        <div className={classNames(style.TestimonialscardWrap, 'flex')}>
            <div className={classNames(style.TestimonialsCard,'grid grid-cols-6 gap-8')}>
                <div className={classNames(style.TestimonialsCardDec,'rounded-3xl bg-white')}>
                    <div className={classNames(style.TestimonialsCardIcon)}>
                        <img src={TestimonialsIcon} alt='Testimonials'/>
                    </div>
                    <h4>It felt like home, doctors and nurses were so caring</h4>
                    <aside>Badr Al Samaa Royal Hospital truly stands to their name. After years of struggle with my chronic health issues, I was fortunate to find solace here.</aside>
                    <a className='moreBtn' href='#'>Read More</a>
                    <div className={classNames(style.PatientTestimonialsCustomerSec)}>
                        <div className={classNames(style.PatientTestimonialsCustomer)}>Mohsin Al Zadjali</div>
                        <div className={classNames(style.PatientTestimonialsCustomerDec)}>Anterior Cervical Discectomy with Fusion Surgery Patent  </div>
                        <div className={classNames(style.PatientTestimonialsDr)}><b>Treated by: </b>Dr. Abdul Rahman  </div>
                    </div>
                </div>
                <div className={classNames( style.TestimonialsCardImage,'')}>
                    <img src={TestimonialsPic} alt='Testimonials Pic' className='rounded-3xl'/>
                </div> 
            </div>

            
        </div> 
      </div>
    </section>
    ) 
}
  export default PatientTestimonials