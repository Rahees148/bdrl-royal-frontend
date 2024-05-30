import React, {useRef} from 'react'
import classNames from 'classnames' 
import * as style from './patient-booking-details.module.scss';  
import ArrowLeftIcon from '../../images/icons/ArrowLeft.svg'
import CalendarIcon from '../../images/icons/Calendar.svg'
import WalletMoneyIcon from '../../images/icons/WalletMoney.svg'
import DoctorImage from '../../images/Venkateshwaran1.png'
function PatientBookingDetails() {
    return (
      <div className={classNames(style.PatientBookingDetails)}>
        <div className={classNames(style.BackBtn)}>
            <img src={ArrowLeftIcon} alt='Back Button'/>
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
                <div className={classNames(style.AppointmentDetailsData)}><img src={CalendarIcon} alt='Calendar Icon'/>03 March, Tuesday</div>
            </div>
            <div className={classNames(style.AppointmentDetailsSec)}>
                <div className={classNames(style.AppointmentDetailsTitle)}>Consultation Fee</div>
                <div className={classNames(style.AppointmentDetailsData)}><img src={WalletMoneyIcon} alt='Wallet Money Icon'/>OMR 6</div>
            </div>
            <div className={classNames(style.AppointmentDetailsSec)}>
                <div className={classNames(style.AppointmentDetailsTitle)}>Speciality</div>
                <div className={classNames(style.AppointmentDetailsData)}><span className={classNames(style.SpecialityTag)}>Orthopaedics & Joint Replacements</span></div>
            </div>
            <div className={classNames(style.AppointmentDetailsSec)}>
                <div className={classNames(style.AppointmentDetailsTitle)}>Doctor Details</div>
                <div className={classNames(style.AppointmentDetailsData)}>
                    <div className={classNames(style.AppointmentDetailsDoctorInr)}>
                        <div className={classNames(style.AppointmentDetailsDoctorImageSec)}>
                            <div className={classNames(style.DoctorCardImage)}>
                                <div className={classNames(style.Circle)}></div>
                                <img src={DoctorImage} alt='Doctor Name'/>
                            </div>
                        </div>
                        <div className={classNames(style.AppointmentDetailsDoctorDec)}>
                            <h5>Dr. A Venkateshwaran</h5>
                            <h6>Specialist Orthopaedic Surgeon</h6>
                            <span>MBBS, MS, MCh</span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default PatientBookingDetails 