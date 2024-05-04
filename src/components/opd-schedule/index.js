import React from 'react'
import * as style from './opd-schedule.module.scss';
import classNames from 'classnames';
import useWindowSize from '../../libs/hooks/useWindowSize'

function OPDSchedule() {
    const {isMobile} = useWindowSize()
  return (
    <div>
        <div className={classNames(style.OPDScheduleDec,'w-[90%] mt-[22px] sm:mt-8 max-w-[700px]')}>The outpatient timings at Badr Al Samaa Hospitals have been planned in such a way that your choice of doctor is available whenever you are free.</div>
        <div className={classNames(style.OPDScheduleContainer, 'mt-6')}>
            <div className={'grid grid-cols-8 md:gap-8'}>
                <div className='col-span-3 md:col-span-2 bg-primary rounded-t-5 rounded-bl-5 md:rounded-b-5 px-4 text-white'>
                    <div className='pt-[61px] pb-[60px] md:py-6 text-center font-bold border-b border-[#FFFFFF35]'>Sunday</div>
                    <div className='pt-[61px] pb-[60px] md:py-6 text-center font-bold border-b border-[#FFFFFF35]'>Monday</div>
                    <div className='pt-[61px] pb-[60px] md:py-6 text-center font-bold border-b border-[#FFFFFF35]'>Tuesday</div>
                    <div className='pt-[61px] pb-[60px] md:py-6 text-center font-bold border-b border-[#FFFFFF35]'>Wednesday</div>
                    <div className='pt-[61px] pb-[60px] md:py-6 text-center font-bold border-b border-[#FFFFFF35]'>Thursday</div>
                    <div className='pt-[61px] pb-[60px] md:py-6 text-center font-bold border-b border-[#FFFFFF35]'>Friday</div>
                    <div className='pt-[61px] pb-[60px] md:py-6 text-center font-bold'>Saturday</div>
                </div>
                <div className='col-span-5 md:col-span-6 grid grid-cols-6'>
                {!isMobile &&
                    <>
                        <div className='col-span-3'>
                            <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                            <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                            <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                            <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                            <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                            <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                            <div className='py-6 text-center font-bold '>9:00 AM - 1:00 PM</div>
                        </div>
                        <div className='col-span-3 bg-bdrlGrayLight rounded-r-5 pr-[32px]'>
                            <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>4:00 PM - 8:00 PM</div>
                            <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>4:00 PM - 8:00 PM</div>
                            <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>4:00 PM - 8:00 PM</div>
                            <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>4:00 PM - 8:00 PM</div>
                            <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>4:00 PM - 8:00 PM</div>
                            <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>4:00 PM - 8:00 PM</div>
                            <div className='py-6 text-center font-bold'>4:00 PM - 8:00 PM</div>
                        </div>
                    </>
                }
                {isMobile &&
                    <div className='col-span-6 striped'>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>4:00 PM - 8:00 PM</div>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>4:00 PM - 8:00 PM</div>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>4:00 PM - 8:00 PM</div>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>4:00 PM - 8:00 PM</div>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>4:00 PM - 8:00 PM</div>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>4:00 PM - 8:00 PM</div>
                        <div className='py-6 text-center font-bold border-b border-[#BDBDBD32]'>9:00 AM - 1:00 PM</div>
                        <div className='py-6 text-center font-bold'>4:00 PM - 8:00 PM</div>
                    </div>
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OPDSchedule