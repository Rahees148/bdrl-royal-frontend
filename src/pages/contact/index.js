import React from 'react'
import { Contact } from '../../graphql/contact'
import Layout from '../../components/global/layout';
import ContactDetails from '../../components/contact-details';
function ContactUs() {
    const pageData = Contact().strapiContact;
    console.log('pageData', pageData)
  return (
    <Layout  pageTitle="Contact Us" template="inner" >
      <ContactDetails pageData={pageData} />
  </Layout>
  )
}

export default ContactUs