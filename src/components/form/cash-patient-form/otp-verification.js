import React, { useEffect, useRef, useState} from 'react'
import classNames from 'classnames' 
import * as style from './cash-patient-form.module.scss';  
import NextArrowIcon from '../../../images/icons/NextArrow.svg'; 
import SecurityIcon from '../../../images/icons/SecurityIcon.svg'; 
function OTPVerification() {
    const [timeLeft, setTimeLeft] = useState(30);
    const otpFirstField = useRef(null);
    const otpSecondField = useRef(null);
    const otpThirdField = useRef(null);
    const otpFourthField = useRef(null);
    useEffect(() => {
        if(timeLeft===0){
           console.log("TIME LEFT IS 0");
           setTimeLeft(null)
        }
    
        // exit early when we reach 0
        if (!timeLeft) return;
    
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
    
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
      }, [timeLeft]);

    const resendOtp = () => {
        if(timeLeft){
            return
        }
        if(!timeLeft){
            setTimeLeft(30)
        }
    }

    return (
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
                        <input 
                            className={classNames(style.PatientFormControl)} 
                            onChange={()=>{ otpSecondField.current.focus();}} 
                            ref={otpFirstField} 
                            type="text" 
                            maxLength={1}  
                            placeholder="X"
                        ></input>
                        <input 
                            className={classNames(style.PatientFormControl)} 
                            onChange={()=>{ otpThirdField.current.focus(); }} 
                            ref={otpSecondField} 
                            type="text" maxLength={1} 
                            placeholder="X"
                        ></input>
                        <input 
                            className={classNames(style.PatientFormControl)} 
                            onChange={()=>{
                                otpFourthField.current.focus();
                            }} 
                            ref={otpThirdField} 
                            type="text" 
                            maxLength={1}  
                            placeholder="X"
                        ></input>
                        <input 
                            className={classNames(style.PatientFormControl)} 
                            ref={otpFourthField} 
                            type="text" 
                            maxLength={1}  
                            placeholder="X"
                        ></input>
                     </div>
                     <div className='error'>OTP Verification Failed!</div>
                </div> 
        </div>


        <div className={classNames(style.PatientFormBtnSec)}>
            <div className={classNames(style.OtpBtnSec)}>
                <button className='button light-green btn-fill'>Next <img src={NextArrowIcon} alt='Next'/></button>
                <div className={classNames(style.ResendOtp)}>
                    {timeLeft &&
                        <>
                        {timeLeft} sec
                        </>
                    }
                    
                    <span onClick={resendOtp} className={classNames(!timeLeft && style.active)}>
                        Resend OTP
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
    )
  }
  
  export default OTPVerification 