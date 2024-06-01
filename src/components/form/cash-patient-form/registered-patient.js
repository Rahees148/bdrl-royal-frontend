import React, {useContext} from 'react'
import classNames from 'classnames' 
import * as style from './cash-patient-form.module.scss';  
import NextArrowIcon from '../../../images/icons/NextArrow.svg'; 
import CalendarIcon from '../../../images/icons/CalendarIcon.svg'; 
import AppointmentContext from '../../../context/bookAnAppointment';
function RegisteredPatient() {
    const {formData, updateFormData} = useContext(AppointmentContext);
    return (
        <div className={classNames(style.PatientFormSecMain)}>
        <div className={classNames(style.PatientFormIcon)}>
            <img src={CalendarIcon} alt='Calendar Icon'/>
        </div>
        <div className={classNames(style.PatientFormTitleSec)}>
            <h4>Registered Patient </h4> 
            <h5>Enter Your Registered Details</h5>
        </div>
        <div className={classNames(style.PatientFormSec,'grid grid-cols-2')}>  
                <div className={classNames(style.PatientFormGroup,'grid col-span-1')}>
                    <label className={classNames(style.PatientFormLabel)}>Select ID Type*</label> 
                    <select className={classNames(style.PatientFormControl)}>
                        <option>Choose ID</option>
                        <option>2</option> 
                    </select>
                </div>
                <div className={classNames(style.PatientFormGroup,'grid col-span-1 relative')}>
                    <label className={classNames(style.PatientFormLabel)}>ID Number*</label>
                    <input className={classNames(style.PatientFormControl)} type="text"  placeholder="Enter ID"></input>
                </div> 
        </div>


        <div className={classNames(style.PatientFormBtnSec)}>
            <button onClick={()=>{
                updateFormData({...formData, registeredPatient: 'isAlreadyRegistered', formStep:'4' })
            }} className='button light-green btn-fill'>Next <img src={NextArrowIcon} alt='Next'/></button>
            <div className='error mt-[29px]'>Not Found: ID Not Found In Our System</div>
            <div className={classNames(style.PatientFormBtnSecText)}>New Registration <img src={NextArrowIcon} alt='Next'/></div>
        </div>
        
        </div>
    )
  }
  
  export default RegisteredPatient 