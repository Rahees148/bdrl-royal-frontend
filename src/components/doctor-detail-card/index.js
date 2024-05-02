import React from 'react'
import BookAnAppointmentBtn from '../global/button';
import * as style from './doctor-detail-card.module.scss';
import classNames from 'classnames';
import { Link } from 'gatsby';

function DoctorDetailCard({data, variant="doctorDetail"}) {
  return (
    <div className={classNames(style[variant], "rounded-5 px-[15px] lg:px-0 bg-bdrlGray  grid-cols-12  lg:grid-cols-12 py-6 mt-8 grid items-start gap-4 lg:gap-8")}>
        <div className="col-span-12 lg:col-span-5 flex justify-center">
            <div className={classNames(style.DoctorCardImage)}>
                <div className={classNames(style.Circle)}></div>
                <img src={data?.Image?.url} alt={data.Name}/>
            </div>
        </div>
        
        <div className={classNames( "col-span-12 lg:col-span-7 flex lg:items-end gap-[20px] lg:gap-[40px] mt-[35px] lg:mt-[100px] lg:pr-[20px] flex-col")}>
            <div className={classNames(style.doctorBanner, 'w-[100%]')}>
                <h2>{data.Name}</h2>
                <span className={style.designation}>{data.designation}</span>
                
                {variant === 'slider' &&
                    <p>description</p>
                }
                {variant !== 'slider' &&
                    <span className={classNames(style.tags,'bg-white my-[22px] px-[15px] py-[6px] rounded-[60px] ')}>
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

                <span className={style.degrees}>{data.degrees}</span>
                <h4 className={style.experience}>{data.experience}</h4>

                {variant === 'slider' &&
                    <>
                        <BookAnAppointmentBtn icon  className='justify-center'/>
                        <span>View profile</span>
                    </>
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