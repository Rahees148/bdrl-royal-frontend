import React, { useContext } from 'react'
import classNames from 'classnames' 
import * as style from './cash-patient-form.module.scss';  
import NextArrowIcon from '../../../images/icons/NextArrow.svg'; 
import WalletIcon from '../../../images/icons/WalletMoney.svg'; 
import AppointmentContext from '../../../context/bookAnAppointment';
function ConfirmAndPay() {
    const {formData, updateFormData} = useContext(AppointmentContext)

    return (
        <div className={classNames(style.PatientFormSecMain)}>
        <div className={classNames(style.PatientFormIcon)}>
            <img src={WalletIcon} alt='Wallet Icon'/>
        </div>
        <div className={classNames(style.PatientFormTitleSec)}>
            <h4>Confirm & Pay </h4> 
            <h5>Verify the patient name & UHID and proceed for payment.</h5>
        </div>
        <div className={classNames(style.PatientFormSec,'grid grid-cols-2')}>
                <div className={classNames(style.PatientFormGroup,' text-white p-5 gap-4 grid col-span-2 relative bg-primary rounded-5')}>
                    <div>
                        <span>Patient Name</span>
                        <h5 className='font-bold text-l'>Abdul Waseem</h5>
                    </div>
                    <div>
                        <span>UHID</span>
                        <h5 className='font-bold text-l'>BRH9763579</h5>
                    </div>
                </div> 
        </div>


        <div className={classNames(style.PatientFormBtnSec, 'flex-wrap')}>
            <button onClick={()=>{
                    updateFormData({...formData, formStep: "3"  })
            }} className={classNames('button light-green btn-fill', style.backButton)}><img src={NextArrowIcon} className={style.backIcon} alt='Back'/> Back</button>
            <button className='button light-green btn-fill'>Pay Now <img src={NextArrowIcon} alt='Next'/></button>
            
            <h5 className='w-[100%]'>Need Help ?</h5>
            <div className={classNames(style.PatientFormBtnSecText, 'w-[100%]')}>Contact Support, Call +968 2238 7777</div>
        </div>
        
        </div>
    )
  }
  
  export default ConfirmAndPay 