import React, { useState } from 'react';
import classNames from 'classnames';
import * as style from './doctor-card.module.scss'; 
import {AllDoctors} from '../../graphql/doctors/doctors'
import DoctorImg from '../../images/Venkateshwaran 1.png';  
import { Link } from 'gatsby';

function DoctorCard({toEmail, title}) { 
    const doctors = AllDoctors().allStrapiDoctor.nodes;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[12px] sm:gap-x-8 gap-y-[86px] pt-[98px]'>
            {doctors && doctors.map((doctor, index) =>(
                <div className={classNames(style.DoctorCard)} key={index}>
                <div className={classNames(style.DoctorCardImage)}>
                    <div className={classNames(style.Circle)}></div>
                    <img src={doctor?.Image?.url} alt={doctor.Name}/>
                </div>
                <div className={classNames(style.DoctorCardTitle)}>
                    <h4>{doctor.Name}</h4>
                    <aside>{doctor.designation}</aside>
                    <div className={classNames(style.DoctorCardTag)}><Link to={'/doctors/'+doctor.speciality?.slug}> {doctor.speciality?.title}</Link></div>
                    <div className={classNames(style.DoctorCardTagbtm)}>{doctor.degree}</div>
                </div>
                <div className={classNames(style.DoctorCardAreas)}>
                    <h4>{doctor.area_of_expertise?.title}</h4>
                    <ul className='grid lg:grid-cols-2 gap-x-8 gap-y-[15px]'>
                        {doctor.area_of_expertise && doctor.area_of_expertise?.list && doctor.area_of_expertise?.list.length > 0 && doctor.area_of_expertise?.list.map((list,index) => (
                            <li key={index}>{list.title}</li>
                        ))}
                    </ul>
                </div>
                <div className={classNames(style.DoctorCardFooter)}>
                    <button className={classNames(style.BookAnAppointmentBtn)}>
                        Book Appointment
                    </button>
                    <div className={classNames(style.DoctorCardFooterLink)}>
                        <Link to={doctor.slug}>View Profile</Link>
                    </div>
                </div>
            </div>   
            ))}
             
        </div>
    )
  }
  
  export default DoctorCard