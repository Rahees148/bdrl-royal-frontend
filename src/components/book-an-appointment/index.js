import React, {useState, useRef} from 'react'
import classNames from 'classnames'
import * as style from './book-an-appointment.module.scss';
import useWindowSize from '../../libs/hooks/useWindowSize';

import CalendarIcon from '../../images/icons/CalendarIcon.svg';
import BookBtnIcon from '../../images/icons/lens-btn-icon.svg';
import useClickOutside from '../../libs/hooks/useClickOutside';

function BookAnAppointment() {
  const {isMobile} = useWindowSize();
  const selectRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  useClickOutside(
    selectRef,
    () => {
      setIsOpen(false);
    }
);
  const handleDropDownClick = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <div className={classNames(style.BookAnAppointment, 'py-4 px-8 rounded-10 bg-white flex items-center gap-4')}>
      {!isMobile && <img src={CalendarIcon} alt='Book An Appointment' /> }
      <div ref={selectRef} className={classNames( style.SpecialitySelectBox, 'bg-gray-100 p-6 rounded-5')} onClick={handleDropDownClick}>Select Speciality
      {isOpen &&
        <div className={classNames( style.SpecialitySelectBoxOpen, 'bg-gray-100 p-6 pt-0 rounded-b-5')}>
          <ul className={classNames(style.SpecialitySelectUl)}>
            <li className={classNames(style.SpecialitySelectList, 'flex items-center')}>
            <img src={CalendarIcon} alt='Book An Appointment' /> Speciality Item 1
            </li>
            <li className={classNames(style.SpecialitySelectList, 'flex items-center')}>
            <img src={CalendarIcon} alt='Book An Appointment' /> Speciality Item 2
            </li>
            <li className={classNames(style.SpecialitySelectList, 'flex items-center')}>
            <img src={CalendarIcon} alt='Book An Appointment' /> Speciality Item 3
            </li>
          </ul>
        </div>
      }
      </div>
      
      <button className={classNames( style.BookAnAppointmentBtn, 'p-6 rounded-5 text-white flex')}>
      {!isMobile &&<img src={BookBtnIcon} alt='Book An Appointment' className='mr-4'/>}
        Book Appointment</button>
    </div>
  )
}

export default BookAnAppointment