import { Link } from 'gatsby';
import React from 'react';
import TitleDescription from '../global/title-description';

import TextMessageIcon from '../../images/icons/text-message-icon.svg';
import classNames from 'classnames';
import LeadershipForm from '../form/leadership-form';
import * as style from './doctor-details.module.scss';
import IconCard from '../global/icon-card';
import BookAnAppointmentBtn from '../global/button';
import OPDSchedule from '../opd-schedule';
import useWindowSize from '../../libs/hooks/useWindowSize';
import DoctorDetailCard from '../doctor-detail-card';

function DoctorDetails({ data }) {
    const {isMobile} = useWindowSize();
    return (
        <div className={classNames('pageWrapper',style.doctorDetails)}> 
           
           <DoctorDetailCard data={data}  />

            <div className=" grid-cols-12 pt-[40px] sm:pt-[55px] grid gap-8">
                <div className="col-span-12 lg:col-span-6">
                    <TitleDescription
                        data={{
                            variant: 'stack',
                            size: 'small',
                            title: 'About ' + data.Name,
                            description: data.description.data.description,
                        }}
                    />
                </div>
                {!isMobile &&               
                    <div className="col-span-6">
                        <LeadershipForm
                            toEmail={data.Name}
                            title={data.Name}
                            formTitle={data.form_title?.title?.data.title}
                            tagLine={data?.form_title?.description.data.description}
                        />
                    </div>
                }
            </div>

            <div className=" grid-cols-12 pt-[45px] sm:pt-[55px] grid gap-8">
                <div className="col-span-12 lg:col-span-6 py-[0px] sm:py-[25px]">
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
                <div className="col-span-12 lg:col-span-6">
                    <div className="px-[0px] sm:px-[35px] pt-[25px] pb-[10px] sm:pb-[50px] bg-none sm:bg-bdrlGray rounded-[24px]">
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

            <div className="pt-[25px] sm:pt-[55px]">
                <TitleDescription
                    data={{
                        variant: 'stack',
                        size: 'small',
                        title: data.awards?.title,
                    }}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] mt-[20px] sm:mt-[30px] sm:gap-8">
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

            <div className="pt-[45px] sm:pt-[55px]">
                <TitleDescription
                    data={{
                        variant: 'stack',
                        size: 'small',
                        title: data.opd_timings?.title?.data?.title,
                    }}
                />
                <OPDSchedule />
            </div>

            <div className="pt-[45px] sm:pt-[55px]">
                <TitleDescription
                    data={{
                        variant: 'stack',
                        size: 'small',
                        title: data.top_procedure_title,
                    }}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] sm:gap-8 mt-[20px] sm:mt-[30px]">
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
            {isMobile &&               
                <div className="mt-[45px] sm:mt-[55px]">
                    <LeadershipForm
                        toEmail={data.Name}
                        title={data.Name}
                        formTitle={data.form_title?.title?.data.title}
                        tagLine={data?.form_title?.description.data.description}
                    />
                </div>
            }
        </div>
    );
}

export default DoctorDetails;
