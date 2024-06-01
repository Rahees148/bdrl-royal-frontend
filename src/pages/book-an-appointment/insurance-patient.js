import React, { useContext, useEffect } from 'react'
import Layout from '../../components/global/layout'
import PatientBookingDetails from '../../components/patient-booking-details'
import PatientForm from '../../components/form/cash-patient-form'
import AppointmentContext from '../../context/bookAnAppointment'
import { navigate } from 'gatsby'
import InsurancePatientForm from '../../components/form/insurance-patient-form'
function InsurancePatient() {
  const { doctor, patientType} = useContext(AppointmentContext)
  useEffect(()=>{
    if(!doctor|| patientType !== 'Insurance Patient'){
      navigate('/book-an-appointment');
    }
  },[doctor, patientType])
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
      title: 'INSURANCE PATIENT'
  }}>
      <div className=' circle-pattern-bg-2 bg-primary h-[210px]'></div>
      <section className='pageWrapper'>
        <div className='pb-[125px]'>
          <div className='bg-white rounded-[30px] p-[13px] mt-[-135px] grid grid-cols-12  shadow-[0px_3px_20px_rgba(0,0,0,0.1)]'>
            <div className='sm:col-span-6 col-span-12'>
              <PatientBookingDetails/>
            </div>
            <div className='sm:col-span-6 col-span-12'>
              <InsurancePatientForm/>
            </div>
          </div>
        </div>
      </section>
  </Layout>
  )
}

export default InsurancePatient