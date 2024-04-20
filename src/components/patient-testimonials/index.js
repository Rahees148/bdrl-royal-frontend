import React, {useRef} from 'react'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import * as style from './patient-testimonials.module.scss';
import TestimonialsIcon from '../../images/icons/TestimonialsIcon.svg'
import { Content } from "../../graphql/testimonials/testimonials";
import TitleDescription from '../global/title-description';

function PatientTestimonials({titleDescription}) {  
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null); 
  const testimonials = Content().allStrapiTestimonial.nodes;
  return (
    <section className={classNames(style.PatientTestimonials, 'py-20')}>
    <div className="pageWrapper ">
      <TitleDescription 
        data={{
          title:titleDescription.title,
          description:titleDescription.description,
          button_label:titleDescription.button_label,
          button_link:titleDescription.button_link
        }} 
      />
     
        <div className={classNames(style.TestimonialscardWrap)}>
        <Swiper
            speed={1000}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={
              {
                768: {
                  slidesPerView: 2,
                  spaceBetween: 32,
               }
              }
            }
            effect='fade'
            navigation={{
              nextEl: '.testimonial-swiper-button-next',
              prevEl: '.testimonial-swiper-button-prev',
            }}
            modules={[ Navigation]}
            className="testimonialSwiper"
            onBeforeInit={(swiper) => {
              swiper.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.prevEl = navigationPrevRef.current;
            }}
          >
            {testimonials && testimonials.map( (testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={classNames(style.TestimonialsCard,'grid grid-cols-6 gap-8')}>
                  <div className={classNames(style.TestimonialsCardDec,'rounded-3xl bg-white order-[2]')}>
                      <div className={classNames(style.TestimonialsCardIcon)}>
                          <img src={TestimonialsIcon} alt='Testimonials'/>
                      </div>
                      <h4>{testimonial.title}</h4>
                      <aside dangerouslySetInnerHTML={{__html: testimonial.description.data.childMarkdownRemark.html}}></aside>
                      <a className={classNames(style.PatientTestimonialsBtn,'moreBtn')} href={'/testimonials/'+testimonial.slug}>{testimonial.button_label}</a>
                      <div className={classNames(style.PatientTestimonialsCustomerSec)}>
                          <div className={classNames(style.PatientTestimonialsCustomer)}>{testimonial.author_name}</div>
                          <div className={classNames(style.PatientTestimonialsCustomerDec)}>{testimonial.author_description}</div>
                          <div className={classNames(style.PatientTestimonialsCustomerDecNme)}><b>Treated by: </b>{testimonial.treated_by[0]?.Name}</div>
                      </div>
                  </div>
                  <div className={classNames( style.TestimonialsCardImage)}>
                      <img src={testimonial.image.url} alt='Testimonials Pic' className='rounded-[10px] md:rounded-3xl'/>
                  </div> 
                </div>
            </SwiperSlide>
            ))}
            

          </Swiper>
            
          <div className={style.sliderNavigation}>
            <div>
              <button className={classNames(style.swiperButton, style.prev, 'testimonial-swiper-button-prev')}>Prev</button>
              <button className={classNames(style.swiperButton, 'testimonial-swiper-button-next')}>Next</button>
            </div>
          </div>
        </div> 
      </div>
    </section>
    ) 
}
  export default PatientTestimonials