import React from 'react'
import classNames from 'classnames'
import * as style from './leadership-details.module.scss'
import photo from '../../images/leadership-pic1.png'
import TitleDescription from '../global/title-description'
import IconCard from '../global/icon-card'
import LeadershipForm from '../form/leadership-form'
import TextMessageIcon from '../../images/icons/text-message-icon.svg';

function LeaderShipDetails({pageData}) {
  return (
    <div className='bg-gradient-to-b from-[#E4FF8520] via-[#FFFFFF] to-[#FFFFFF] pt-[90px] pb-[50px]'>
    <div className='pageWrapper'>
      <div className='grid grid-cols-12 gap-8 items-end'>
        <div className='col-span-12 md:col-span-4  bg-[#EDEDED] rounded-5'>
          <img src={pageData?.photo?.url} alt={pageData.title} />
        </div>
        <div className='col-span-12 md:col-span-8'>
          <TitleDescription data={{
            variant: 'stack',
            title: pageData.title,
            tagLine: pageData.designation,
            description: pageData?.description?.data?.description
          }} />
        </div>
      </div>
      
      <div className='pt-[80px] grid grid-cols-12 gap-8'>
        <div className='col-span-12 md:col-span-6'>
          <TitleDescription data={
            {
              variant: 'stack',
              size:'small',
              title: pageData.awards_title?.title,
              description: pageData?.awards_title?.description?.data?.description
            }
          } />
          {pageData.award_icons && (
            <div className="grid grid-cols-3 gap-8 pt-[30px] pb-[45px]">
              {pageData.award_icons.map((icon, index) => (
                <IconCard key={index} data={{
                  variant:'stack',
                  title: icon.title,
                  icon: icon.icon?.url
                }}/>
              ))}
            </div>
          )}
          
          <TitleDescription data={
            {
              variant: 'stack',
              size:'small',
              title: pageData.key_position_title_description?.title,
              description: pageData?.key_position_title_description?.description?.data?.description
            }
          } />
          {pageData.keyposition_icons && (
            <div className="grid grid-cols-3 gap-8 pt-[30px] pb-[45px]">
              {pageData.keyposition_icons.map((icon, index) => (
                <IconCard key={index} data={{
                  icon: icon.icon?.url
                }}/>
              ))}
            </div>
          )}
        </div>
        <div className='col-span-12 md:col-span-6 p-6 bg-primary rounded-[24px]'> 
          <div className={classNames( style.LeaderShipFormIcon, 'rounded-full bg-white')}>
            <img src={TextMessageIcon} alt='Form Icon'/>
          </div>
          <div className={classNames( style.LeaderShipFormTitle)}>
            <h4>{pageData.form_title_description?.title}</h4>
            <aside>{pageData?.form_title_description?.description?.data?.description}</aside>
          </div>
            <LeadershipForm />
        </div>
      </div>
    </div>
</div>
  )
}

export default LeaderShipDetails