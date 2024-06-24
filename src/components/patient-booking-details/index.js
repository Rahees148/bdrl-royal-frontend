import React, {useContext, useEffect, useRef} from 'react'
import classNames from 'classnames' 
import * as style from './patient-booking-details.module.scss';  
import ArrowLeftIcon from '../../images/icons/ArrowLeft.svg'
import CalendarIcon from '../../images/icons/Calendar.svg'
import WalletMoneyIcon from '../../images/icons/WalletMoney.svg'
import AppointmentContext from '../../context/bookAnAppointment';
import { navigate } from 'gatsby';
function PatientBookingDetails() {
    const {selectedDate, doctor, patientType, formData, updateFormData} = useContext(AppointmentContext)

    useEffect(() =>{
        console.log('doctor',doctor);
    },[doctor]);
    return (
      <div className={classNames(style.PatientBookingDetails)}>
        <div className={classNames(style.BackBtn)}>
            <img onClick={()=>{navigate(-1)}} src={ArrowLeftIcon} alt='Back Button'/>
        </div>
        <h4>Appointment Details</h4>
        <div className={classNames(style.AppointmentDetails)}>
            <div className={classNames(style.AppointmentDetailsSec)}>
                <div className={classNames(style.AppointmentDetailsTitle)}>Location</div>
                <div className={classNames(style.AppointmentDetailsData)}>Badr Al Samaa Royal Hospital, Al Ghubra</div>
            </div>
            <div className={classNames(style.AppointmentDetailsSec)}>
                <div className={classNames(style.AppointmentDetailsTitle)}>Type</div>
                <div className={classNames(style.AppointmentDetailsData)}>In-Hospital Consultation</div>
            </div>
            <div className={classNames(style.AppointmentDetailsSec)}>
                <div className={classNames(style.AppointmentDetailsTitle)}>Date</div>
                <div className={classNames(style.AppointmentDetailsData)}>
                    <img src={CalendarIcon} alt='Calendar Icon'/>
                    {selectedDate.toDateString()}
                    {formData.selectedSlot &&
                        <>
                        , {formData.selectedSlot}
                        </>
                    }
                </div>
            </div>
            {patientType === 'Cash Patient' &&
                <div className={classNames(style.AppointmentDetailsSec)}>
                    <div className={classNames(style.AppointmentDetailsTitle)}>Consultation Fee</div>
                    <div className={classNames(style.AppointmentDetailsData)}><img src={WalletMoneyIcon} alt='Wallet Money Icon'/>OMR 6</div>
                </div>
            }
            <div className={classNames(style.AppointmentDetailsSec)}>
                <div className={classNames(style.AppointmentDetailsTitle)}>Speciality</div>
                <div className={classNames(style.AppointmentDetailsData)}>
                    <span className={classNames(style.SpecialityTag)}>
                        {doctor.centers_of_excellence? doctor.centers_of_excellence.title : doctor.speciality?.title}
                    </span>
                </div>
            </div>
            <div className={classNames(style.AppointmentDetailsSec)}>
                <div className={classNames(style.AppointmentDetailsTitle)}>Doctor Details</div>
                <div className={classNames(style.AppointmentDetailsData)}>
                    <div className={classNames(style.AppointmentDetailsDoctorInr)}>
                        <div className={classNames(style.AppointmentDetailsDoctorImageSec)}>
                            <div className={classNames(style.DoctorCardImage)}>
                                <div className={classNames(style.Circle)}></div>
                                <img src={doctor?.Image?.url} alt={doctor?.Name}/>
                            </div>
                        </div>
                        <div className={classNames(style.AppointmentDetailsDoctorDec)}>
                            <h5>{doctor?.Name}</h5>
                            <h6>{doctor?.designation}</h6>
                            <span>{doctor?.degrees}</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default PatientBookingDetails 