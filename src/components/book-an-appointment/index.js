import React, {useState, useRef, useEffect} from 'react'
import classNames from 'classnames'
import * as style from './book-an-appointment.module.scss';
import useWindowSize from '../../libs/hooks/useWindowSize';

import CalendarIcon from '../../images/icons/CalendarIcon.svg';
import BookBtnIcon from '../../images/icons/lens-btn-icon.svg';
import SpecialtySelect from '../speciality-select';
import { navigate } from 'gatsby';

function BookAnAppointment({selectedSpecialty, linkTo=false, buttonLabel="Book Appointment"}) {
  const {isMobile} = useWindowSize();
  const [specialty, setSpecialty] = useState('');
  return (
    <div className={classNames(style.BookAnAppointment, 'rounded-10 bg-white flex items-center gap-4')}>
      {!isMobile && <img src={CalendarIcon} alt='Book An Appointment' /> }
      <SpecialtySelect onSpChange={(sp)=>{setSpecialty(sp)}}  />
      
      <button onClick={()=>{
        if(linkTo){
          navigate(`/book-an-appointment/?specialty=${encodeURIComponent(specialty)}`)
        }else{
          selectedSpecialty(specialty)
        }
      }} className={classNames( style.BookAnAppointmentBtn, 'p-6 rounded-5 text-white flex')}>
      {!isMobile &&<img src={BookBtnIcon} alt='Book An Appointment' className='mr-4'/>}
        {buttonLabel}</button>
    </div>
  )
}

export default BookAnAppointment