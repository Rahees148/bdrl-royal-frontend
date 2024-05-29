import React from 'react'
import Layout from '../../components/global/layout'
import BookAnAppointmentDetails from '../../components/book-an-appointment-details'

function BookAnAppointment() {
  return (
    <Layout  pageTitle="Book an Appointment" template="inner" breadcrumb={{
        links: [
            {
                title:'Home',
                url:'/',
            },
        ],
        title: 'Second Opinion'
    }}>
        <BookAnAppointmentDetails />
    </Layout>
  )
}

export default BookAnAppointment