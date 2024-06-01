import React, {useEffect, useState, useRef, useContext} from 'react'
import * as style from './date-selection.module.scss'
import classNames from 'classnames'
import { getNext30Days } from '../../../libs/util';
import AppointmentContext from '../../../context/bookAnAppointment';

function DateSelection({ gutter=32}) {
    const { selectedDate, updateDate} = useContext(AppointmentContext)
    const divRef = useRef(null);
    const selectedRef = useRef(null);
    const monthDates = getNext30Days();
    const [slctdDate, setSlctdDate] = useState(selectedDate.toDateString());
    const [disableLeftButton, setDisableLeftButton] = useState(true);
    const [disableRightButton, setDisableRightButton] = useState(false);
    const [direction, setDirection] = useState('left')
    useEffect(()=>{
        if(divRef.current){
            divRef.current.addEventListener('scroll', function() {
                // Check if scroll reached the top
                if (divRef.current.scrollLeft === 0) {
                    setDisableLeftButton(true)
                }else{
                    setDisableLeftButton(false)
                }
            
                // Check if scroll reached the bottom
                if (divRef.current.scrollLeft + divRef.current.clientWidth === divRef.current.scrollWidth) {
                    setDisableRightButton(true)
                }else{
                    setDisableRightButton(false)
                }
            });
            const scrollOffset =  selectedRef.current.offsetLeft - divRef.current.offsetLeft;
            divRef.current.scrollLeft = scrollOffset - (divRef.current.clientWidth / 2.25);
        }
    },[divRef, selectedRef])

    const next = ()=>{
        divRef.current.scrollTo({
            top: 0,
            left: divRef.current.scrollLeft + (60+gutter),
            behavior: 'smooth'
          });
         // setDirection('left');
    }
    const prev = ()=>{
      //  setDirection('right');
        divRef.current.scrollTo({
            top: 0,
            left: divRef.current.scrollLeft - (60+gutter),
            behavior: 'smooth'
        })
       
  }

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
    <div className={classNames(style.dateSelection, 'py-4')}>
        <h4>{slctdDate}</h4>
        <div className={style.datesSlidingButtonWrapper}>
            <button disabled={disableLeftButton} className={classNames(style.datesSlidingButton, style.prev)} onClick={prev}>prev</button>
            <button disabled={disableRightButton} className={style.datesSlidingButton} onClick={next}>next</button>
        </div>
        <div className={style.dateWrapper} style={{gap:gutter}} ref={divRef}>
            {monthDates && monthDates.map((date, index)=> {
                const itemProps = slctdDate === date ? { ref: selectedRef } : {}
                    return (
                        <span 
                            key={index} 
                            {...itemProps}
                            className={classNames(slctdDate === date && style.selected, style[direction])}
                            onClick={()=>{
                                setSlctdDate(date)
                                updateDate(new Date(date));
                            }}
                        >
                            <span className={style.day}>{getDateValue(date, 'day')}</span>
                            <span className={style.date} >{getDateValue(date, 'date')}</span>
                        </span>
                    )
                }
            )}
        </div>
    </div>
  )
}

export default DateSelection