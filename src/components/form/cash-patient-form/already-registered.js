import React, {useContext, useState} from 'react'
import classNames from 'classnames' 
import * as style from './cash-patient-form.module.scss';  
import QuestionIcon from '../../../images/icons/QuestionSquare.svg'; 
import NextArrowIcon from '../../../images/icons/NextArrow.svg'; 
import AppointmentContext from '../../../context/bookAnAppointment';
function IsAlreadyRegisteredForm() {
    const {formData, updateFormData} = useContext(AppointmentContext);
    const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(null);
    return (
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
                        updateFormData({...formData, isAlreadyRegistered: isAlreadyRegistered, formStep: "3"  })
                    }} className='button light-green btn-fill'>Next <img src={NextArrowIcon} alt='Next'/></button>
                </div>
                
                </div>
    )
  }
  
  export default IsAlreadyRegisteredForm 