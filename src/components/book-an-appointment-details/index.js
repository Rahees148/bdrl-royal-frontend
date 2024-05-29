import React, {useEffect, useState} from 'react'
import * as style from './book-an-appointment-details.module.scss'
import BookAnAppointment from '../book-an-appointment'
import classNames from 'classnames'
import { getNext30Days } from '../../libs/util';

function BookAnAppointmentDetails() {
    const monthDates = getNext30Days();
    const [selectedDate, setSelectedDate] = useState(monthDates[0]);
    useEffect(() => {
        console.log("monthDates", monthDates)
    },[]);
    const getDateValue = (date, val) =>{
        const index = {
            day: 0,
            month: 1,
            date: 2,
            year: 3
        }
        return date.split(" ")[index[val]]
    }
  return (
    <>
        <section className={classNames(style.banner)}>
            <span className='button gold'>Book Appointment</span>
            <h2>Schedule Your Appointments Today.</h2>
        </section>
        <BookAnAppointment />
        <div className='pageWrapper'>
            <div className={classNames(style.dateSelection, 'py-4')}>
                <h4>{selectedDate}</h4>
                <div className={style.dateWrapper}>
                    {monthDates && monthDates.map((date, index)=>(
                        <span 
                            key={index} 
                            className={classNames(selectedDate === date && style.selected)}
                            onClick={()=>{setSelectedDate(date)}}
                        >
                            <span className={style.day}>{getDateValue(date, 'day')}</span>
                            <span className={style.date} >{getDateValue(date, 'date')}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default BookAnAppointmentDetails