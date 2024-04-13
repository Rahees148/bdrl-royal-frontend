// src/pages/index.js
import * as React from 'react'
import Layout from '../components/global/layout'
import HeroBanner from '../components/hero-banner'
import BookAnAppointment from '../components/book-an-appointment'
import CentresOfExcellence from '../components/centres-of-excellence'
import { Fade } from "react-awesome-reveal";

import { Content } from "../graphql/home";
import SlidingCard from '../components/sliding-card'
import PatientTestimonials from '../components/patient-testimonials'

const IndexPage = () => {
  const pageData = Content().allStrapiHome.nodes[0];
  console.log(pageData)
    return (
        <Layout pageTitle="Home Page">
          <Fade>
            <HeroBanner sliderItems={pageData?.banner} />
          </Fade>
          <BookAnAppointment />
          <CentresOfExcellence />
          <SlidingCard />
          {/* Centres Of Excellence component */}
          <section className='bg-white py-12'>
            <div className='pageWrapper'>
              test
            </div>
          </section>
        <PatientTestimonials/>
          
        
        </Layout>
        )
}

export default IndexPage