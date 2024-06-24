import React, { useContext } from 'react'
import classNames from 'classnames' 
import * as style from './insurance-patient-form.module.scss'; 
import CalendarIcon from '../../../images/icons/CalendarIcon.svg'; 
import { useForm } from 'react-hook-form';
import AppointmentContext from '../../../context/bookAnAppointment';

function InsurancePatientForm() {
    const {formDate,updateFormData } = useContext(AppointmentContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        updateFormData({...formDate, insurancePatientInfo: data});
    };
    return (
        <div className={classNames(style.PatientFormWrap)}>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        <input 
                            type="text"  
                            placeholder="Enter your name"
                            className={classNames(style.PatientFormControl, errors.name && style.formError)} 
                            {...register('name', { required: true })}
                        ></input>
                    </div>
                    <div className={classNames(style.PatientFormGroup,'grid col-span-6')}>
                        <label className={classNames(style.PatientFormLabel)}>Gender*</label> 
                        <select 
                            className={classNames(style.PatientFormControl, errors.gender && style.formError)} 
                            {...register('gender', { required: true })}
                        >
                            <option>Choose gender</option>
                            <option>2</option> 
                        </select>
                    </div>
                    <div className={classNames(style.PatientFormGroup,'grid col-span-6 relative')}>
                        <label className={classNames(style.PatientFormLabel)}>DOB*</label>
                        <input 
                            className={classNames(style.PatientFormControl,style.FormCalendar, errors.dob && style.formError)} 
                            {...register('dob', { required: true })}
                            type="date"  placeholder="dd-mm-yyyy"
                        ></input>
                    </div>

                    <div className={classNames(style.PatientFormGroup,'grid col-span-12')}>
                        <label className={classNames(style.PatientFormLabel)}>Mobile*</label>
                        <input 
                              className={classNames(style.PatientFormControl, errors.mobile && style.formError)} 
                              {...register('mobile', { required: true })}
                            type="text"  placeholder="Enter you mobile number"></input>
                    </div>
                    <div className={classNames(style.PatientFormGroup,'grid col-span-12')}>
                        <label className={classNames(style.PatientFormLabel)}>Email*</label>
                        <input 
                             className={classNames(style.PatientFormControl, errors.mobile && style.formError)} 
                             {...register('email', { required: true })}
                            type="text"  placeholder="Enter you email ID"></input>
                    </div>
                    <div className={classNames(style.PatientFormGroup,'grid col-span-6')}>
                        <label className={classNames(style.PatientFormLabel)}>Select ID Type*</label> 
                        <select 
                             className={classNames(style.PatientFormControl, errors.idType && style.formError)} 
                             {...register('idType', { required: true })}
                        >
                            <option>Choose ID</option>
                            <option>2</option> 
                        </select>
                    </div>
                    <div className={classNames(style.PatientFormGroup,'grid col-span-6')}>
                        <label className={classNames(style.PatientFormLabel)}>ID Number*</label>
                        <input 
                             className={classNames(style.PatientFormControl, errors.idNumber && style.formError)} 
                             {...register('idNumber', { required: true })}
                            type="text"  placeholder="Enter ID"></input>
                    </div>
                    <div className={classNames(style.PatientFormGroup,'grid col-span-12')}>
                        <label className={classNames(style.PatientFormLabel)}>Insurance Provider*</label> 
                        <select
                             className={classNames(style.PatientFormControl, errors.insuranceProvider && style.formError)} 
                             {...register('insuranceProvider', { required: true })}
                        >
                            <option>Select Your Insurance Provider</option>
                            <option>2</option> 
                        </select>
                    </div>
                    <div className={classNames(style.PatientFormGroup,'grid col-span-6')}>
                        <label className={classNames(style.PatientFormLabel)}>Policy Number*</label>
                        <input 
                             className={classNames(style.PatientFormControl, errors.policyNumber && style.formError)} 
                             {...register('policyNumber', { required: true })}
                            type="text"  placeholder="Enter Policy Number"></input>
                    </div>
                    <div className={classNames(style.PatientFormGroup,'grid col-span-6')}>
                        <label className={classNames(style.PatientFormLabel)}>Policy Expiry*</label>
                        <input 
                            className={classNames(style.PatientFormControl,style.FormCalendar, errors.policyExpire && style.formError)} 
                            {...register('policyExpire', { required: true })}
                            type="date"  placeholder="dd-mm-yyyy"></input>
                    </div>
                </div>
                <div className={classNames(style.PatientFormBtnSec)}>
                    <button className='button light-green btn-fill'>Submit</button>
                </div>
                
                </div>
            </form>
        </div>
    )
  }
  
  export default InsurancePatientForm 