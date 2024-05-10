import React, {useState, useRef} from 'react'
import classNames from 'classnames'
import * as style from './book-an-appointment.module.scss';
import useWindowSize from '../../libs/hooks/useWindowSize';

import CalendarIcon from '../../images/icons/CalendarIcon.svg';
import BookBtnIcon from '../../images/icons/lens-btn-icon.svg';
import SpecialtySelect from '../speciality-select';

function BookAnAppointment() {
  const {isMobile} = useWindowSize();
  const onSpecialtyChange = (selectedSpecialty) =>{

  }

  return (
    <div className={classNames(style.BookAnAppointment, 'rounded-10 bg-white flex items-center gap-4')}>
      {!isMobile && <img src={CalendarIcon} alt='Book An Appointment' /> }
      <SpecialtySelect onSpChange={(sp)=>{onSpecialtyChange(sp)}}  />
      
      <button className={classNames( style.BookAnAppointmentBtn, 'p-6 rounded-5 text-white flex')}>
      {!isMobile &&<img src={BookBtnIcon} alt='Book An Appointment' className='mr-4'/>}
        Book Appointment</button>
    </div>
  )
}

export default BookAnAppointment