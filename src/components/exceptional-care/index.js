import React from 'react'
import * as style from './exceptional-care.module.scss';
import classNames from 'classnames';
import TitleDescription from '../global/title-description';
function ExceptionalCare() {
  return (
    <section className={style.exceptionalCare}>
        <div className={style.imageContainer}></div>
        <div className={style.rightColumn}></div>
        <div className={classNames('pageWrapper', style.textContainer)}>
            <div></div>
            <div>
                <TitleDescription data={{
                    theme: 'white',
                    title: 'Exceptional Care',
                    description: 'Elite Specialties, Exceptional Care'
                }} />
                <ul className={classNames(style.listItem, 'text-white mt-[25px]')}>
                    <li className={style.active}>
                        <span className='text-sm'>Empathy & Care</span>
                        <h4 className='text-[20px] font-semibold'>Unrivaled Patient Experience</h4>
                    </li>
                    <li>
                        <span className='text-sm'>A Relaxing environment</span>
                        <h4 className='text-[20px] font-semibold'>Soothing Ambience</h4>
                    </li>
                    <li>
                        <span className='text-sm'>Redefined experience</span>
                        <h4 className='text-[20px] font-semibold'>Best of the Doctors</h4>
                    </li>
                    <li>
                        <span className='text-sm'>Empathy & Care</span>
                        <h4 className='text-[20px] font-semibold'>Unrivaled Patient Experience</h4>
                    </li>
                    <li>
                        <span className='text-sm'>Empathy & Care</span>
                        <h4 className='text-[20px] font-semibold'>Unrivaled Patient Experience</h4>
                    </li>
                    <li>
                        <span className='text-sm'>Empathy & Care</span>
                        <h4 className='text-[20px] font-semibold'>Unrivaled Patient Experience</h4>
                    </li>
                    <li>
                        <span className='text-sm'>Empathy & Care</span>
                        <h4 className='text-[20px] font-semibold'>Unrivaled Patient Experience</h4>
                    </li>
                    <li>
                        <span className='text-sm'>Empathy & Care</span>
                        <h4 className='text-[20px] font-semibold'>Unrivaled Patient Experience</h4>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default ExceptionalCare