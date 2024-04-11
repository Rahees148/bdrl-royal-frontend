import React, {useState} from 'react'
import classNames from 'classnames'
import * as style from './book-an-appointment.module.scss';

import CalendarIcon from '../../images/icons/CalendarIcon.svg';

function BookAnAppointment() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDropDownClick = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <div className={classNames(style.BookAnAppointment, 'py-4 px-8 rounded-10 bg-white flex items-center gap-4')}>
      <img src={CalendarIcon} alt='Book An Appointment' />
      <div onClick={handleDropDownClick}>Select</div>
      {isOpen &&
        <div>
          <ul>
            <li>
              items
            </li>
          </ul>
        </div>
      }
      <button>Book Appointment</button>
    </div>
  )
}

export default BookAnAppointment