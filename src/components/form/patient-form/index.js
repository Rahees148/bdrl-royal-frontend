import React, {useRef} from 'react'
import classNames from 'classnames' 
import * as style from './patient-form.module.scss'; 
import CalendarIcon from '../../../images/icons/CalendarIcon.svg'; 
import QuestionIcon from '../../../images/icons/QuestionSquare.svg'; 
import NextArrowIcon from '../../../images/icons/NextArrow.svg'; 
function PatientForm() {
    return (
        <div className={classNames(style.PatientFormWrap)}>
         {/* Form */}
        <div className={classNames(style.PatientFormSecMain,'hidden')}>
            <div className={classNames(style.PatientFormIcon)}>
                <img src={CalendarIcon} alt='Calendar Icon'/>
            </div>
            <div className={classNames(style.PatientFormTitleSec)}>
                <h4>Appointment Booking (Insurance Patient)</h4>
                <h5>Enter Your Details For Call Back.</h5>
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
                <div className={classNames(style.PatientFormGroup,'grid col-span-6')}>
                    <label className={classNames(style.PatientFormLabel)}>DOB*</label>
                    <input className={classNames(style.PatientFormControl,style.FormCalendar)} type="text"  placeholder="dd-mm-yyyy"></input>
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
                <div className={classNames(style.PatientFormGroup,'grid col-span-6')}>
                    <label className={classNames(style.PatientFormLabel)}>Policy Number*</label>
                    <input className={classNames(style.PatientFormControl)} type="text"  placeholder="Enter Policy Number"></input>
                </div>
                <div className={classNames(style.PatientFormGroup,'grid col-span-6')}>
                    <label className={classNames(style.PatientFormLabel)}>Policy Expiry*</label>
                    <input className={classNames(style.PatientFormControl,style.FormCalendar)} type="text"  placeholder="dd-mm-yyyy"></input>
                </div>
            </div>
            <div className={classNames(style.PatientFormBtnSec)}>
                <button className='button light-green btn-fill'>Submit</button>
            </div>
            
        </div>
        {/* Question */}
        <div className={classNames(style.PatientFormSecMain)}>
            <div className={classNames(style.PatientFormIcon)}>
                <img src={QuestionIcon} alt='Question Icon'/>
            </div>
            <div className={classNames(style.PatientFormTitleSec)}>
                <h4>Are you already registered with Badr Al Samaa Royal Hospital ?</h4> 
            </div>
            <div className={classNames(style.PatientFormMidSec)}>
                <button className={classNames(style.PatientFormBtn1)}>Yes</button>
                <button className={classNames(style.PatientFormBtn2)}>No</button>
            </div>
            <div className={classNames(style.PatientFormBtnSec)}>
                <button className='button light-green btn-fill'>Next <img src={NextArrowIcon} alt='Next'/></button>
            </div>
            
        </div>
        </div>
    )
  }
  
  export default PatientForm 