import React, {useContext, useRef, useState} from 'react'
import classNames from 'classnames' 
import * as style from './cash-patient-form.module.scss';  
import QuestionIcon from '../../../images/icons/QuestionSquare.svg'; 
import NextArrowIcon from '../../../images/icons/NextArrow.svg'; 
import CalendarIcon from '../../../images/icons/CalendarIcon.svg'; 
import SecurityIcon from '../../../images/icons/SecurityIcon.svg'; 
import AppointmentContext from '../../../context/bookAnAppointment';
import DateSelection from '../date-selection';
function CashPatientForm() {
    const {formData, updateFormData} = useContext(AppointmentContext);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(null);

    const availableSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM'];

    return (
        <div className={classNames(style.PatientFormWrap)}>
             {/* {Date Selection} */}
             {!formData.selectedSlot &&
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
                            updateFormData({...formData, selectedSlot: selectedSlot })
                        }} className='button light-green btn-fill'>Next <img src={NextArrowIcon} alt='Next'/></button>
                    </div>
                    
                </div>
            }
        
            {/* {Is Already Registered} */}
            {formData.selectedSlot && !formData.isAlreadyRegistered &&
                <div className={classNames(style.PatientFormSecMain)}>
                <div className={classNames(style.PatientFormIcon)}>
                    <img src={QuestionIcon} alt='Question Icon'/>
                </div>
                <div className={classNames(style.PatientFormTitleSec)}>
                    <h4>Are you already registered with Badr Al Samaa Royal Hospital ?</h4> 
                </div>
                <div className={classNames(style.PatientFormMidSec)}>
                    <button onClick={()=>{
                        setIsAlreadyRegistered('Yes'); 
                    }} className={classNames(style.PatientFormBtn, isAlreadyRegistered === 'Yes' && style.selected)} >Yes</button>
                    <button onClick={()=>{
                        setIsAlreadyRegistered('No'); 
                    }} className={classNames(style.PatientFormBtn, isAlreadyRegistered === 'No' && style.selected)}>No</button>
                </div>


                <div className={classNames(style.PatientFormBtnSec)}>
                    <button onClick={()=>{
                        updateFormData({...formData, isAlreadyRegistered: isAlreadyRegistered })
                    }} className='button light-green btn-fill'>Next <img src={NextArrowIcon} alt='Next'/></button>
                </div>
                
                </div>
            }
            
            {/* Registered Patient */}
            {formData.selectedSlot && formData.isAlreadyRegistered === 'Yes' && !formData.registeredPatient &&
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
                        updateFormData({...formData, registeredPatient: 'isAlreadyRegistered' })
                    }} className='button light-green btn-fill'>Next <img src={NextArrowIcon} alt='Next'/></button>
                    <div className='error mt-[29px]'>Not Found: ID Not Found In Our System</div>
                    <div className={classNames(style.PatientFormBtnSecText)}>New Registration <img src={NextArrowIcon} alt='Next'/></div>
                </div>
                
                </div>
            }

            {/* OTP Verification */}
            {formData.selectedSlot && formData.isAlreadyRegistered === 'Yes'  && formData.registeredPatient &&
                <div className={classNames(style.PatientFormSecMain)}>
                <div className={classNames(style.PatientFormIcon)}>
                    <img src={SecurityIcon} alt='Security Icon'/>
                </div>
                <div className={classNames(style.PatientFormTitleSec)}>
                    <h4>OTP Verification </h4> 
                    <h5>OTP has been sent to registered mobile number <span>+968 xxxx x890</span></h5>
                </div>
                <div className={classNames(style.PatientFormSec,'grid grid-cols-2')}>
                        <div className={classNames(style.PatientFormGroup,'grid col-span-1 relative')}>
                            <label className={classNames(style.PatientFormLabel)}>Enter OTP:</label>
                            <div className={classNames(style.OtpForm,'grid grid-cols-4')}>
                                <input className={classNames(style.PatientFormControl)} type="text"  placeholder="X"></input>
                                <input className={classNames(style.PatientFormControl)} type="text"  placeholder="X"></input>
                                <input className={classNames(style.PatientFormControl)} type="text"  placeholder="X"></input>
                                <input className={classNames(style.PatientFormControl)} type="text"  placeholder="X"></input>
                             </div>
                             <div className='error'>OTP Verification Failed!</div>
                        </div> 
                </div>


                <div className={classNames(style.PatientFormBtnSec)}>
                    <div className={classNames(style.OtpBtnSec)}>
                        <button onClick={()=>{
                            updateFormData({...formData, isAlreadyRegistered: isAlreadyRegistered })
                        }} className='button light-green btn-fill'>Next <img src={NextArrowIcon} alt='Next'/></button>
                        <div className={classNames(style.ResendOtp)}>
                        30 sec
                        <span>Resend OTP
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2495 6.4702L13.7338 5.95448C11.4552 3.67592 7.76093 3.67592 5.48236 5.95448C3.2038 8.23305 3.2038 11.9273 5.48236 14.2059C7.76093 16.4845 11.4552 16.4845 13.7338 14.2059C15.0588 12.8808 15.6133 11.077 15.3973 9.35124M14.2495 6.4702H11.1552M14.2495 6.4702V3.37592" stroke="#023321" stroke-opacity="0.5" stroke-width="1.09399" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </span>
                        </div>
                    </div>
                    <h5>Didnt get OTP?</h5>
                    <div className={classNames(style.PatientFormBtnSecText)}>Contact Support, Call +968 2238 7777</div>
                </div>
                
                </div>
            }


            {/* New Registration */}
            {formData.selectedSlot && formData.isAlreadyRegistered === 'No' &&
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
            }
            
        </div>
    )
  }
  
  export default CashPatientForm 