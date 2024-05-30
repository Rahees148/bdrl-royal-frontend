import React, { useContext, useRef, useState } from 'react';
import classNames from 'classnames';
import * as style from './doctor-card.module.scss'; 
import { Link } from 'gatsby';
import BookAnAppointmentBtn from '../global/button';
import useWindowSize from '../../libs/hooks/useWindowSize';
import ShareIcon from '../../images/icons/share-icon.svg'
import ModalDialog from '../global/modal-dialog';
import Share from '../global/share';
import AppointmentContext from '../../context/bookAnAppointment';

function DoctorCard({doctor}) { 
    const {updateDoctor, setIsPatientTypeOpen} = useContext(AppointmentContext)
    const {isMobile} = useWindowSize();
    const contentHeight = useRef()
    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className={classNames(style.DoctorCard)}>
            <div onClick={()=>{setModalOpen(true)}} className={classNames(style.DoctorCardShare,'rounded-full')}>
                <img src={ShareIcon} alt='Share'/>
            </div>
            <div className={classNames(style.DoctorCardImage)}>
                <div className={classNames(style.Circle)}></div>
                <img src={doctor?.Image?.url} alt={doctor.Name}/>
            </div>
            <div className={classNames(style.DoctorCardTitle)}>
                <h4>{doctor.Name}</h4>
                <aside>{doctor.designation}</aside>
                {doctor.speciality?.title &&
                    <div className={classNames(style.DoctorCardTag)}><Link to={'/specialties/'+doctor.speciality?.slug}> {doctor.speciality?.title}</Link></div>
                }
                {doctor.centers_of_excellence?.title &&
                    <div className={classNames(style.DoctorCardTag)}><Link to={'/centers-of-excellence/'+doctor.centers_of_excellence?.slug}> {doctor.centers_of_excellence?.title}</Link></div>
                }
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
                        <li key={index}>{list.title?.data.title}</li>
                    ))}
                </ul>
            </div>
            <div className={classNames(style.DoctorCardFooter)}>
                <BookAnAppointmentBtn callback={()=>{
                   updateDoctor(doctor);
                   setIsPatientTypeOpen(true);
                }} />
                <div className={classNames(style.DoctorCardFooterLink)}>
                    <Link to={'/doctors/'+doctor.slug}>View Profile</Link>
                </div>
            </div>
            <ModalDialog title={'Share on'} body={<Share description={doctor.Name} />} isOpen={modalOpen} setIsOpen={(val) => {
                setModalOpen(val)
            }} />
        </div>   
    )
  }
  
  export default DoctorCard