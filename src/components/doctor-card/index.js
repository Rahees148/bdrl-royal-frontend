import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import * as style from './doctor-card.module.scss'; 
import { Link } from 'gatsby';
import BookAnAppointmentBtn from '../global/button';
import useWindowSize from '../../libs/hooks/useWindowSize';

function DoctorCard({doctor}) { 
    const {isMobile} = useWindowSize();
    const contentHeight = useRef()
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={classNames(style.DoctorCard)}>
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
                <h4 onClick={()=>{setIsOpen(!isOpen)}}>{doctor.area_of_expertise?.title} <span className={isOpen ? style.active : ''}></span></h4>
                <ul  ref={contentHeight} style={
                isMobile ? isOpen
                ? { height: contentHeight.current.scrollHeight + 20 }
                : { height: "0px" } : { height: "auto" }
                } className={classNames( isMobile ? style.accordion: '', 'grid grid-cols-2 gap-x-8 gap-y-[15px]')}>
                    {doctor.area_of_expertise && doctor.area_of_expertise?.list && doctor.area_of_expertise?.list.length > 0 && doctor.area_of_expertise?.list.map((list,index) => (
                        <li key={index}>{list.title}</li>
                    ))}
                </ul>
            </div>
            <div className={classNames(style.DoctorCardFooter)}>
                <BookAnAppointmentBtn />
                <div className={classNames(style.DoctorCardFooterLink)}>
                    <Link to={doctor.slug}>View Profile</Link>
                </div>
            </div>
        </div>   
    )
  }
  
  export default DoctorCard