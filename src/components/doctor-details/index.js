import { Link } from 'gatsby'
import React from 'react'
import TitleDescription from '../global/title-description'

import TextMessageIcon from '../../images/icons/text-message-icon.svg';
import classNames from 'classnames';
import LeadershipForm from '../form/leadership-form';
import IconCard from '../global/icon-card';

function DoctorDetails({data}) {
  return (
    <div className='pageWrapper'>
        <div className='rounded-5 bg-bdrlGray grid-cols-12 py-6 mt-8 grid items-center gap-8'>
            <div className='col-span-5 flex justify-center'>
                <img src={data.Image.url} className='max-w-[283px]' alt={data.Name} />
            </div>
            <div className='col-span-7'>
                <h2>{data.Name}</h2>
                <span className="">{data.designation}</span>
                <Link className='bg-white px-[10px] py-[13px] rounded-[60px]'>{data.speciality.title}</Link>
                <span className="">{data.degree}</span>
                <h4 className="">{data.experience}</h4>
            </div>
        </div>
        <div className=' grid-cols-12 pt-[55px] grid gap-8'>
            <div className='col-span-6'>
                <TitleDescription data={{
                    variant: 'stack',
                    size: 'small',
                    title: 'About '+data.Name,
                    description: data.description.data.description,
                }} />
            </div>
            <div className='col-span-6'>
            <div className='p-6 bg-primary rounded-[24px]'>
                <div className={classNames( 'rounded-full bg-white')}>
                    <img src={TextMessageIcon} alt='Form Icon'/>
                </div>
                <div>
                <h4  dangerouslySetInnerHTML={{__html: data.form_title?.title?.data.title}} />
                <aside>{data?.form_title?.description.data.description}</aside>
                </div>
                <LeadershipForm toEmail={data.Name} title={data.Name} />
            </div> 
            </div>
        </div>

        <div className=' grid-cols-12 pt-[55px] grid gap-8'>
            <div className='col-span-6'>
                <TitleDescription data={{
                    variant: 'stack',
                    size: 'small',
                    title: data.area_of_expertise.title
                }} />
                {data.area_of_expertise.list && data.area_of_expertise.list.map((list,index) => (
                    <div key={index}>
                        <i><img src={list.image.url} alt={list.title}/></i>
                        <h4>{list.title}</h4>
                        <div>{list.description}</div>
                    </div>
                ))}
            </div>
            <div className='col-span-6'>
                <div className='p-6 bg-bdrlGray rounded-[24px]'>
                    <TitleDescription data={{
                        variant: 'stack',
                        size: 'small',
                        title: data.qualification.title.data.title,
                        description: data.qualification.description.data.description,
                    }} />
                </div> 
            </div>
        </div>

        <div className='pt-[55px]'>
            <h2>{ data.awards.title}</h2>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] sm:gap-8'>
                {data.awards.list && data.awards.list.map((list,index) => (
                    <IconCard key={index} data={{
                        icon:list.image.url,
                        title: list.title
                    }} />
                ))}
            </div>
            
        </div>
        <div className='pt-[55px]'>
            <TitleDescription data={{
                variant: 'stack',
                size: 'small',
                title: data.work_experience.title.data.title,
                description: data.work_experience.description.data.description,
            }} />
        </div>

        <div className='pt-[55px] grid grid-cols-2'>
            <TitleDescription data={{
                variant: 'stack',
                size: 'small',
                title: data.opd_timings.title.data.title,
                description: data.opd_timings.description.data.description,
            }} />
        </div>

        <div className='pt-[55px] grid grid-cols-2 mb-[50px]'>
            <h2>Top Procedure</h2>
        </div>
    </div>
  )
}

export default DoctorDetails