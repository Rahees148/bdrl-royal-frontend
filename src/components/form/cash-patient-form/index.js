import React, {useContext} from 'react'
import classNames from 'classnames' 
import * as style from './cash-patient-form.module.scss';  
import NextArrowIcon from '../../../images/icons/NextArrow.svg'; 
import CalendarIcon from '../../../images/icons/CalendarIcon.svg'; 
import AppointmentContext from '../../../context/bookAnAppointment';
import SelectAvailableSlot from './select-available-slot';
import IsAlreadyRegisteredForm from './already-registered';
import RegisteredPatient from './registered-patient';
import OTPVerification from './otp-verification';
import NewRegistration from './new-registration';
import ConfirmAndPay from './confirm-and-pay';
function CashPatientForm() {
    const {formData} = useContext(AppointmentContext);
    return (
        <div className={classNames(style.PatientFormWrap)}>
             {/* {Step 1} */}
             {/* {Date Selection} */}
             {formData.formStep === '1' &&
                <SelectAvailableSlot />
            }
        
            {/* {Step 2} */}
            {/* {Is Already Registered} */}
            {formData.formStep === '2' &&
                <IsAlreadyRegisteredForm />
            }
            
            {/* Step 3 */}
            {/* Registered Patient */}
            {formData.formStep === "3" && formData.isAlreadyRegistered === 'Yes' &&
               <RegisteredPatient />
            }

            {/* Step 3 */}
            {/* New Registration */}
            {formData.formStep === "3" && formData.isAlreadyRegistered === 'No' &&
                <NewRegistration />
            }

            {/* Step 4 */}
            {/* OTP Verification */}
            {formData.formStep === "4" &&
                <OTPVerification />
            }
            {/* Step 5 */}
            {/* Confirm and Pay now */}
            {formData.formStep === "5" &&
                <ConfirmAndPay />
            }

            
        </div>
    )
  }
  
  export default CashPatientForm 