import React from 'react'
import BookAnAppointmentBtn from '../global/button';
import * as style from './doctor-detail-card.module.scss';
import classNames from 'classnames';
import { Link } from 'gatsby';
import ShareIcon from '../../images/icons/share-icon.svg'

function DoctorDetailCard({data, variant="doctorDetail"}) {
  return (
    <div className={classNames(style[variant], "rounded-5 px-[15px] lg:px-0 bg-bdrlGray  grid-cols-12  lg:grid-cols-12 py-6  grid items-start gap-4 lg:gap-8")}>
        <div className="col-span-12 lg:col-span-5 flex justify-center">
            {variant === 'slider' &&
                <div className={classNames(style.DoctorCardShare,'rounded-full hidden')}>
                    <img src={ShareIcon} alt='Share'/>
                </div>
            }
            {variant !== 'slider' &&
                <div className={classNames(style.DoctorCardShare,'rounded-full')}>
                    <img src={ShareIcon} alt='Share'/>
                </div>
            }
            <div className={classNames(style.DoctorCardImage)}>
                <div className={classNames(style.Circle)}></div>
                <img src={data?.Image?.url} alt={data.Name}/>
            </div>
        </div>
        
        <div className={classNames(style.DoctorCardDetails, 'col-span-12 lg:col-span-7 flex lg:items-end gap-[20px] lg:gap-[40px]  flex-col')}>
            <div className={classNames(style.doctorBanner, 'w-[100%]')}>
                <h2>{data.Name}</h2>
                <span className={style.designation}>{data.designation}</span>
                
                {variant === 'slider' &&
                    <p className={classNames(style.doctorSliderDec)}>Dr. A. Venkateshwaran is a distinguished orthopedic and trauma surgeon renowned for his unwavering commitment to excellence in patient care and surgical expertise</p>
                }
                {variant !== 'slider' &&
                    <span className={classNames(style.tags,'bg-white my-[20px] sm:my-[24px] px-[16px] py-[6px] sm:py-[9px] rounded-[60px] ')}>
                        {data.speciality &&
                            <Link to={data.speciality?.slug}>
                                <img src={data.speciality?.icon?.url} alt={data.speciality?.title}/>
                                {data.speciality?.title}
                            </Link>
                        }
                        {data.centers_of_excellence &&
                            <Link to={data.centers_of_excellence?.slug}>
                                {data.centers_of_excellence?.title}
                            </Link>
                        }
                    </span>
                }
                {variant === 'slider' &&
                    <div className={classNames(style.doctorSliderDecBtm, 'flex')}>
                        <span className={style.degrees}>{data.degrees}</span>
                        <h4 className={style.experience}>{data.experience}</h4>
                    </div>

                }
                {variant !== 'slider' &&
                <>
                    <span className={style.degrees}>{data.degrees}</span>
                    <h4 className={style.experience}>{data.experience}</h4>
                </>
                    
                }
                

                {variant === 'slider' &&
                    <div className={classNames(style.doctorSliderDecftr, 'flex items-center')}>
                        <BookAnAppointmentBtn icon  className='justify-center'/>
                        <span>View profile</span>
                    </div>
                }
                
            </div>
            {variant !== 'slider' &&
                <BookAnAppointmentBtn icon  className='justify-center'/>
            }
        </div>
    </div>
  )
}

export default DoctorDetailCard