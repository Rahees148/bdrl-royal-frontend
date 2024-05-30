import React from 'react'
import Layout from '../../components/global/layout'
import PatientBookingDetails from '../../components/patient-booking-details'
import PatientForm from '../../components/form/patient-form'
function InsurancePatient() {
  return (
    <Layout  pageTitle="Book an Appointment" template="inner" breadcrumb={{
      links: [
          {
              title:'Home',
              url:'/',
          },
          ,
                {
                    title:'BOOK APPOINTMENT',
                    url:'/book-an-appointment',
                }
      ],
      title: 'CASH PATIENT'
  }}>
      <div className=' circle-pattern-bg-2 bg-primary h-[210px]'></div>
      <section className='pageWrapper'>
        <div className='pb-[125px]'>
          <div className='bg-white rounded-[30px] p-[13px] mt-[-135px] grid grid-cols-12  shadow-[0px_3px_20px_rgba(0,0,0,0.1)]'>
            <div className='sm:col-span-6 col-span-12'>
              <PatientBookingDetails/>
            </div>
            <div className='sm:col-span-6 col-span-12'>
              <PatientForm/>
            </div>
          </div>
        </div>
      </section>
  </Layout>
  )
}

export default InsurancePatient