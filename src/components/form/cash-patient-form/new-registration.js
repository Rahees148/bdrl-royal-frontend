import React from 'react'
import classNames from 'classnames' 
import * as style from './cash-patient-form.module.scss';  
import NextArrowIcon from '../../../images/icons/NextArrow.svg'; 
import CalendarIcon from '../../../images/icons/CalendarIcon.svg'; 
function NewRegistration() {
    return (
        <div className={classNames(style.PatientFormSecMain)}>
        <div className={classNames(style.PatientFormIcon)}>
            <img src={CalendarIcon} alt='Calendar Icon'/>
        </div>
        <div className={classNames(style.PatientFormTitleSec)}>
            <h4>New Registration </h4> 
            <h5>Enter Your Details For New Registration</h5>
        </div>
        <div className={classNames(style.PatientFormSec,'grid grid-col-12')}>
        <div className={classNames(style.PatientFormGroup,'grid col-span-12')}>
            <label className={classNames(style.PatientFormLabel)}>Name*</label>
            <input className={classNames(style.PatientFormControl)} type="text"  placeholder="Enter your name"></input>
        </div>
        <div className={classNames(style.PatientFormGroup,'grid col-span-6')}>
            <label className={classNames(style.PatientFormLabel)}>Gender*</label> 
            <select className={classNames(style.PatientFormControl)}>
                <option>Choose gender</option>
                <option>2</option> 
            </select>
        </div>
        <div className={classNames(style.PatientFormGroup,'grid col-span-6 relative')}>
            <label className={classNames(style.PatientFormLabel)}>DOB*</label>
            <input className={classNames(style.PatientFormControl,style.FormCalendar)} type="date"  placeholder="dd-mm-yyyy"></input>
        </div>

        <div className={classNames(style.PatientFormGroup,'grid col-span-12')}>
            <label className={classNames(style.PatientFormLabel)}>Mobile*</label>
            <input className={classNames(style.PatientFormControl)} type="text"  placeholder="Enter you mobile number"></input>
        </div>
        <div className={classNames(style.PatientFormGroup,'grid col-span-12')}>
            <label className={classNames(style.PatientFormLabel)}>Email*</label>
            <input className={classNames(style.PatientFormControl)} type="text"  placeholder="Enter you email ID"></input>
        </div>
        <div className={classNames(style.PatientFormGroup,'grid col-span-6')}>
            <label className={classNames(style.PatientFormLabel)}>Select ID Type*</label> 
            <select className={classNames(style.PatientFormControl)}>
                <option>Choose ID</option>
                <option>2</option> 
            </select>
        </div>
        <div className={classNames(style.PatientFormGroup,'grid col-span-6')}>
            <label className={classNames(style.PatientFormLabel)}>ID Number*</label>
            <input className={classNames(style.PatientFormControl)} type="text"  placeholder="Enter ID"></input>
        </div>
        <div className={classNames(style.PatientFormGroup,'grid col-span-12')}>
            <label className={classNames(style.PatientFormLabel)}>Insurance Provider*</label> 
            <select className={classNames(style.PatientFormControl)}>
                <option>Select Your Insurance Provider</option>
                <option>2</option> 
            </select>
        </div> 
        <div className={classNames(style.PatientFormGroup,'grid col-span-12')}>
            <label className={classNames(style.PatientFormLabel)}>Upload ID Proof <strong>(PDF, DOC, JPG, PNG)</strong></label> 
            <div>FileUploader</div>
        </div> 
    </div>


        <div className={classNames(style.PatientFormBtnSec)}>
            <button className='button light-green btn-fill'>Next <img src={NextArrowIcon} alt='Next'/></button>
        </div>
        
        </div>
    )
  }
  
  export default NewRegistration 