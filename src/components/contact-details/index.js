import React from 'react'
import * as style from './contact.module.scss'
import classNames from 'classnames'
import LeadershipForm from '../form/leadership-form'

function ContactDetails({pageData}) {
  return (
    <>
    <section className='py-[80px]'>
        <div className={classNames('pageWrapper', style['contactDetails'])}>
            <span className='button gold'>{pageData.title}</span>
            <h2 dangerouslySetInnerHTML={{__html: pageData.banner_title[0].children[0].text}} />
        </div>
      </section>
      <section className='pt-[66px] pb-[81px] bg-bdrlGray '>
        <div className='pageWrapper grid grid-cols-2 gap-8'>
            <div className='p-[45px] bg-white rounded-5'>
                <ul>
                    <li>{pageData.email}</li>
                    <li>{pageData.number}</li>
                </ul>
                <div>
                    <h3>{pageData.follow_us_label}</h3>
                    <p>{pageData.follow_us_description}</p>
                    <ul className='flex gap-4'>
                    {pageData.social_media && pageData.social_media.map(icon => (
                        <li key={icon.id}><img src={icon.icon?.url} alt={icon.title} /></li>
                    ))}
                    </ul>
                </div>
            </div>
            <div>
            <LeadershipForm
                overlap={true}
                title={'Contact Us ' }
                formTitle={pageData.form_title?.title?.data.title}
                tagLine={pageData.form_title?.description?.data.description}
            />
            </div>
        </div>
      </section>
      <section className='py-[80px]'>
      <div className='pageWrapper grid grid-cols-2 gap-8 items-center'>
            <div className=' bg-white rounded-5 h-[544px] overflow-hidden' dangerouslySetInnerHTML={{__html: pageData.location_map}} />
            <div>
                <span className=''>{pageData.location_subtitle}</span>
                <h4>{pageData.location_title}</h4>

                <h5>{pageData.address_title}</h5>
                <address dangerouslySetInnerHTML={{__html: `<p>PC 133, Plot No. 141</br>
South Al Ghubra, Muscat, </br>
Sultanate of Oman</p>`}} />
            </div>
        </div>
      </section>
      </>
  )
}

export default ContactDetails