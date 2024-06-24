import React, {useContext, useState} from 'react'
import classNames from 'classnames' 
import * as style from './cash-patient-form.module.scss';  
import NextArrowIcon from '../../../images/icons/NextArrow.svg'; 
import CalendarIcon from '../../../images/icons/CalendarIcon.svg'; 
import AppointmentContext from '../../../context/bookAnAppointment';
function RegisteredPatient() {
    const {formData, updateFormData} = useContext(AppointmentContext);
    const [isValidationTriggered, setIsValidationTriggered] = useState(false);
    const [idType, setIdType] = useState(formData.hasOwnProperty('idType') ? formData.idType : '');
    const [idNumber, setIdNumber] = useState(formData.hasOwnProperty('idNumber') ? formData.idNumber : '');
    const [userNotFound, setUserNotFound] = useState(false);
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
                    <select className={classNames(style.PatientFormControl)} value={idType} onChange={(e)=>{
                        setIdType(e.target.value)
                    }}>
                        <option value={''}>Choose ID</option>
                        <option value={2}>2</option> 
                    </select>
                </div>
                <div className={classNames(style.PatientFormGroup,'grid col-span-1 relative')}>
                    <label className={classNames(style.PatientFormLabel)}>ID Number*</label>
                    <input className={classNames(style.PatientFormControl)}　value={idNumber} onChange={(e)=>{setIdNumber(e.target.value)}} type="text"  placeholder="Enter ID"></input>
                </div> 
        </div>
        {(idType === '' || idNumber === '') && isValidationTriggered &&
            <div className={'error'}>
                All fields are mandatory
            </div>
        }


        <div className={classNames(style.PatientFormBtnSec, 'flex-wrap')}>
            <button onClick={()=>{
                updateFormData({...formData, formStep: "2"  })
            }} className={classNames('button light-green btn-fill', style.backButton)}><img src={NextArrowIcon} className={style.backIcon} alt='Back'/> Back</button>
            <button onClick={()=>{
                setIsValidationTriggered(true);
                console.log({idType, idNumber})
                if(idType !== '' && idNumber !== ''){
                    updateFormData({...formData, formStep:'4', idType, idNumber})
                }
            }} className='button light-green btn-fill'>Next <img src={NextArrowIcon} alt='Next'/></button>
            {userNotFound &&
                <>
                    <div className='error mt-[29px] w-[100%]'>Not Found: ID Not Found In Our System</div>
                    <div className={classNames(style.PatientFormBtnSecText,'w-[100%]')} onClick={()=>{
                        updateFormData({...formData, isAlreadyRegistered: 'No', formStep:'3'})
                    }}>New Registration <img src={NextArrowIcon} alt='Next'/></div>
                </>
            }
        </div>
        
        </div>
    )
  }
  
  export default RegisteredPatient 