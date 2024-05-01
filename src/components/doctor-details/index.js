import { Link } from 'gatsby';
import React from 'react';
import TitleDescription from '../global/title-description';

import TextMessageIcon from '../../images/icons/text-message-icon.svg';
import classNames from 'classnames';
import LeadershipForm from '../form/leadership-form';
import * as style from './doctor-details.module.scss';
import IconCard from '../global/icon-card';
import BookAnAppointmentBtn from '../global/button';

function DoctorDetails({ data }) {
    return (
        <div className={classNames('pageWrapper',style.doctorDetails)}>
            <div className="rounded-5 bg-bdrlGray grid-cols-12 py-6 mt-8 grid items-start gap-8">
                <div className="col-span-5 flex justify-center">
                    <div className={classNames(style.DoctorCardImage)}>
                        <div className={classNames(style.Circle)}></div>
                        <img src={data?.Image?.url} alt={data.Name}/>
                    </div>
                </div>
                
                <div className={classNames( "col-span-7 flex items-end gap-[40px] mt-[100px] pr-[20px] flex-col")}>
                    <div className={classNames(style.doctorBanner, 'w-[100%]')}>
                        <h2>{data.Name}</h2>
                        <span className={style.designation}>{data.designation}</span>
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
                        <span className={style.degrees}>{data.degrees}</span>
                        <h4 className={style.experience}>{data.experience}</h4>
                    </div>
                    <BookAnAppointmentBtn icon />
                </div>
            </div>
            <div className=" grid-cols-12 pt-[55px] grid gap-8">
                <div className="col-span-6">
                    <TitleDescription
                        data={{
                            variant: 'stack',
                            size: 'small',
                            title: 'About ' + data.Name,
                            description: data.description.data.description,
                        }}
                    />
                </div>
                <div className="col-span-6">
                    <LeadershipForm
                        toEmail={data.Name}
                        title={data.Name}
                        formTitle={data.form_title?.title?.data.title}
                        tagLine={data?.form_title?.description.data.description}
                    />
                </div>
            </div>

            <div className=" grid-cols-12 pt-[55px] grid gap-8">
                <div className="col-span-6">
                    <TitleDescription
                        data={{
                            variant: 'stack',
                            size: 'small',
                            title: data.area_of_expertise?.title,
                        }}
                    />
                    {data.area_of_expertise?.list &&
                        data.area_of_expertise?.list.map((list, index) => (
                            <div key={index} className={style.areaOfExpCard}>
                                <i className={style.icon}>
                                    <img src={list.image.url} alt={list.title} />
                                </i>
                                <div className={style.description}>
                                    <h5>{list.title}</h5>
                                    <p>{list.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="col-span-6">
                    <div className="p-6 bg-bdrlGray rounded-[24px]">
                        <TitleDescription
                            data={{
                                variant: 'stack',
                                size: 'small',
                                title: data.qualification?.title?.data?.title,
                                description: data.qualification?.description?.data?.description,
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="pt-[55px]">
                <TitleDescription
                    data={{
                        variant: 'stack',
                        size: 'small',
                        title: data.awards?.title,
                    }}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] mt-[30px] sm:gap-8">
                    {data.awards?.list &&
                        data.awards?.list.map((list, index) => (
                            <IconCard
                                key={index}
                                data={{
                                    icon: list.image?.url,
                                    title: list.title,
                                }}
                                bold
                            />
                        ))}
                </div>
            </div>
            <div className="pt-[55px]">
                <TitleDescription
                    data={{
                        variant: 'stack',
                        size: 'small',
                        title: data.work_experience?.title?.data?.title,
                        description: data.work_experience?.description?.data?.description,
                    }}
                />
            </div>

            <div className="pt-[55px]">
                <TitleDescription
                    data={{
                        variant: 'stack',
                        size: 'small',
                        title: data.opd_timings?.title?.data?.title,
                    }}
                />
            </div>

            <div className="pt-[55px]">
                <TitleDescription
                    data={{
                        variant: 'stack',
                        size: 'small',
                        title: data.top_procedure_title,
                    }}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[30px]">
                    {data.top_procedures &&
                        data.top_procedures.map((procedure, index) => (
                            <div key={index} className={style.procedureCard}>
                                {procedure.title}
                                <Link to={'/'+procedure.slug}>
                                    Know More
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9.76636" cy="10.584" r="5.09448" fill="#E4FF85"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.96911 18.009C14.2937 18.009 17.7995 14.5032 17.7995 10.1786C17.7995 5.85395 14.2937 2.34814 9.96911 2.34814C5.64448 2.34814 2.13867 5.85395 2.13867 10.1786C2.13867 14.5032 5.64448 18.009 9.96911 18.009ZM8.37927 7.41418C8.60862 7.18483 8.98046 7.18483 9.20981 7.41418L11.5589 9.76331C11.7883 9.99265 11.7883 10.3645 11.5589 10.5939L9.20981 12.943C8.98046 13.1723 8.60862 13.1723 8.37927 12.943C8.14992 12.7136 8.14992 12.3418 8.37927 12.1124L10.3131 10.1786L8.37927 8.24472C8.14992 8.01537 8.14992 7.64352 8.37927 7.41418Z" fill="#023321"/>
                                    </svg>

                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default DoctorDetails;
