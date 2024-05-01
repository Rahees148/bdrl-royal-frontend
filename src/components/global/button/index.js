import React from 'react'
import * as style from './button.module.scss';
import classNames from 'classnames';

function BookAnAppointmentBtn({icon = false, className}) {
  return (
    <button className={classNames(style.BookAnAppointmentBtn, className)}>
        {icon && 
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2462 17.902L18.1045 17.902M18.1045 17.902L15.9629 17.902M18.1045 17.902L18.1045 15.7671M18.1045 17.902L18.1045 20.0369" stroke="white" stroke-width="1.3543" stroke-linecap="round"/>
                <path d="M8.4668 5.09265V3.49146" stroke="white" stroke-width="1.3543" stroke-linecap="round"/>
                <path d="M19.1758 5.09265V3.49146" stroke="white" stroke-width="1.3543" stroke-linecap="round"/>
                <path d="M23.9941 10.4299H18.7739H12.4828M3.11313 10.4299H7.26256" stroke="white" stroke-width="1.3543" stroke-linecap="round"/>
                <path d="M15.9631 24.3068H11.6798C7.64153 24.3068 5.62237 24.3068 4.36783 23.0562C3.11328 21.8056 3.11328 19.7928 3.11328 15.7672V13.6322C3.11328 9.60657 3.11328 7.59375 4.36783 6.34314C5.62237 5.09253 7.64153 5.09253 11.6798 5.09253H15.9631C20.0015 5.09253 22.0206 5.09253 23.2752 6.34314C24.5297 7.59375 24.5297 9.60657 24.5297 13.6322V15.7672C24.5297 19.7928 24.5297 21.8056 23.2752 23.0562C22.5757 23.7535 21.6386 24.062 20.2464 24.1985" stroke="white" stroke-width="1.3543" stroke-linecap="round"/>
            </svg>            
        }
        Book Appointment
    </button>
  )
}

export default BookAnAppointmentBtn