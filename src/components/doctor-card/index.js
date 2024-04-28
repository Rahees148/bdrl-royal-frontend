import React, { useState } from 'react';
import classNames from 'classnames';
import * as style from './doctor-card.module.scss'; 
import DoctorImg from '../../images/Venkateshwaran 1.png';  

function DoctorCard({toEmail, title}) {  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[12px] sm:gap-x-8 gap-y-[86px] pt-[98px]'>
            <div className={classNames(style.DoctorCard)}>
                <div className={classNames(style.DoctorCardImage)}>
                    <div className={classNames(style.Circle)}></div>
                    <img src={DoctorImg} alt='Dr. A Venkateshwaran'/>
                </div>
                <div className={classNames(style.DoctorCardTitle)}>
                    <h4>Dr. A Venkateshwaran</h4>
                    <aside>Specialist Orthopaedic Surgeon</aside>
                    <div className={classNames(style.DoctorCardTag)}>Orthopaedics & Joint Replacements</div>
                    <div className={classNames(style.DoctorCardTagbtm)}>MBBS, MS, MCh</div>
                </div>
                <div className={classNames(style.DoctorCardAreas)}>
                    <h4>Areas Of Expertise</h4>
                    <ul className='grid lg:grid-cols-2 gap-x-8 gap-y-[15px]'>
                        <li>Diagnosis & Assessment</li>
                        <li>Surgical Expertise</li>
                        <li>Emergency Response</li>
                        <li>Research & Innovation</li>
                    </ul>
                </div>
                <div className={classNames(style.DoctorCardFooter)}>
                    <button className={classNames(style.BookAnAppointmentBtn)}>
                        Book Appointment
                    </button>
                    <div className={classNames(style.DoctorCardFooterLink)}>View Profile</div>
                </div>
            </div>  

            <div className={classNames(style.DoctorCard)}>
                <div className={classNames(style.DoctorCardImage)}>
                    <div className={classNames(style.Circle)}></div>
                    <img src={DoctorImg} alt='Dr. A Venkateshwaran'/>
                </div>
                <div className={classNames(style.DoctorCardTitle)}>
                    <h4>Dr. A Venkateshwaran</h4>
                    <aside>Specialist Orthopaedic Surgeon</aside>
                    <div className={classNames(style.DoctorCardTag)}>Orthopaedics & Joint Replacements</div>
                    <div className={classNames(style.DoctorCardTagbtm)}>MBBS, MS, MCh</div>
                </div>
                <div className={classNames(style.DoctorCardAreas)}>
                    <h4>Areas Of Expertise</h4>
                    <ul className='grid lg:grid-cols-2 gap-x-8 gap-y-[15px]'>
                        <li>Diagnosis & Assessment</li>
                        <li>Surgical Expertise</li> 
                    </ul>
                </div>
                <div className={classNames(style.DoctorCardFooter)}>
                    <button className={classNames(style.BookAnAppointmentBtn)}>
                        Book Appointment
                    </button>
                    <div className={classNames(style.DoctorCardFooterLink)}>View Profile</div>
                </div>
            </div> 

            <div className={classNames(style.DoctorCard)}>
                <div className={classNames(style.DoctorCardImage)}>
                    <div className={classNames(style.Circle)}></div>
                    <img src={DoctorImg} alt='Dr. A Venkateshwaran'/>
                </div>
                <div className={classNames(style.DoctorCardTitle)}>
                    <h4>Dr. A Venkateshwaran</h4>
                    <aside>Specialist Orthopaedic Surgeon</aside>
                    <div className={classNames(style.DoctorCardTag)}>Orthopaedics & Joint Replacements</div>
                    <div className={classNames(style.DoctorCardTagbtm)}>MBBS, MS, MCh</div>
                </div>
                <div className={classNames(style.DoctorCardAreas)}>
                    <h4>Areas Of Expertise</h4>
                    <ul className='grid lg:grid-cols-2 gap-x-8 gap-y-[15px]'>
                        <li>Diagnosis & Assessment</li>
                        <li>Surgical Expertise</li>
                        <li>Emergency Response</li>
                        <li>Research & Innovation</li>
                    </ul>
                </div>
                <div className={classNames(style.DoctorCardFooter)}>
                    <button className={classNames(style.BookAnAppointmentBtn)}>
                        Book Appointment
                    </button>
                    <div className={classNames(style.DoctorCardFooterLink)}>View Profile</div>
                </div>
            </div> 

            <div className={classNames(style.DoctorCard)}>
                <div className={classNames(style.DoctorCardImage)}>
                    <div className={classNames(style.Circle)}></div>
                    <img src={DoctorImg} alt='Dr. A Venkateshwaran'/>
                </div>
                <div className={classNames(style.DoctorCardTitle)}>
                    <h4>Dr. A Venkateshwaran</h4>
                    <aside>Specialist Orthopaedic Surgeon</aside>
                    <div className={classNames(style.DoctorCardTag)}>Orthopaedics & Joint Replacements</div>
                    <div className={classNames(style.DoctorCardTagbtm)}>MBBS, MS, MCh</div>
                </div>
                <div className={classNames(style.DoctorCardAreas)}>
                    <h4>Areas Of Expertise</h4>
                    <ul className='grid lg:grid-cols-2 gap-x-8 gap-y-[15px]'>
                        <li>Diagnosis & Assessment</li>
                        <li>Surgical Expertise</li>
                        <li>Emergency Response</li>
                        <li>Research & Innovation</li>
                    </ul>
                </div>
                <div className={classNames(style.DoctorCardFooter)}>
                    <button className={classNames(style.BookAnAppointmentBtn)}>
                        Book Appointment
                    </button>
                    <div className={classNames(style.DoctorCardFooterLink)}>View Profile</div>
                </div>
            </div>     
                  
        </div>
    )
  }
  
  export default DoctorCard