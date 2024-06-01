import React, {useContext, useRef, useState} from 'react'
import classNames from 'classnames' 
import * as style from './cash-patient-form.module.scss';   
import NextArrowIcon from '../../../images/icons/NextArrow.svg'; 
import AppointmentContext from '../../../context/bookAnAppointment';
import DateSelection from '../date-selection';

function SelectAvailableSlot() {
    const {formData, updateFormData} = useContext(AppointmentContext);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const availableSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM'];

    return (
        <div className={classNames(style.PatientFormSecMain)}>
                <DateSelection gutter={12} />
                <div className={style.availableSlots}>
                    <h5>Available Slots</h5>
                    {availableSlots && availableSlots.map((slot, index) => (
                        <span onClick={()=>{
                            setSelectedSlot(slot)
                        }} className={classNames(selectedSlot === slot && style.selected)} key={index}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.98828 6.73859V9.9365L11.987 11.9352" stroke="#023321" stroke-width="1.19922" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.98958 3.01127C7.16551 2.33103 8.53078 1.94171 9.98698 1.94171C14.4024 1.94171 17.9818 5.5211 17.9818 9.9365C17.9818 14.3519 14.4024 17.9313 9.98698 17.9313C5.57158 17.9313 1.99219 14.3519 1.99219 9.9365C1.99219 8.4803 2.38151 7.11503 3.06175 5.93911" stroke="#023321" stroke-width="1.19922" stroke-linecap="round"/>
                            </svg>
                        {slot}
                        </span>
                    ))}  
                </div>
                
                <div className={'error'}>
                    Please select a slot
                </div>
                    <div className={classNames(style.PatientFormBtnSec)}>
                        <button onClick={()=>{
                            updateFormData({...formData, selectedSlot: selectedSlot, formStep: "2" })
                        }} className='button light-green btn-fill'>Next <img src={NextArrowIcon} alt='Next'/></button>
                    </div>
                </div>
    )
  }
  
  export default SelectAvailableSlot 
