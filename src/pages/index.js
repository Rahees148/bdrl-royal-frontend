// src/pages/index.js
import * as React from 'react';
import Layout from '../components/global/layout';
import HeroBanner from '../components/hero-banner';
import BookAnAppointment from '../components/book-an-appointment';
import CentresOfExcellence from '../components/centres-of-excellence';
import { Fade } from 'react-awesome-reveal';
import doctorImage from '../images/image-1.png'
import { Content } from '../graphql/home';
import SlidingCard from '../components/sliding-card';
import PatientTestimonials from '../components/patient-testimonials';
import ExceptionalCare from '../components/exceptional-care';
import NewsEvents from '../components/news-events'
const IndexPage = () => {
    const pageData = Content().allStrapiHome.nodes[0];
    console.log(pageData);
    return (
        <Layout pageTitle="Home Page">
            <Fade>
                <HeroBanner sliderItems={pageData?.banner} />
            </Fade>
            <BookAnAppointment />
            <CentresOfExcellence data={pageData.centres_excellence} />
            <SlidingCard data={pageData.sliding_card} />
            <ExceptionalCare data={pageData.exceptional_care} />
            {/* Centres Of Excellence component */}
            <section className="bg-gradient-golden">
                <div className='bg-white absolute top-0 left-0 w-[50%] h-[100%] z-0'></div>
                <div className="pageWrapper flex relative z-30 ">
                    <div className='w-[60%] bg-white pt-8'>
                        test
                        
                    </div>
                    <div className='w-[40%] clipContainer pt-8'>
                        <img src={doctorImage} alt='test' />
                        <div className='bg-white clip'></div>
                    </div>
                </div>
            </section>
            <PatientTestimonials titleDescription={pageData.testimonials_title} />
          <Fade>
            <HeroBanner sliderItems={pageData?.banner} />
          </Fade>
          <BookAnAppointment />
          <CentresOfExcellence data={pageData.centres_excellence} />
          <SlidingCard data={pageData.sliding_card} />
          {/* Centres Of Excellence component */}
          <section className='bg-white py-12'>
            <div className='pageWrapper'>
              test
            </div>
          </section>
          <PatientTestimonials titleDescription={pageData.testimonials_title} />
          <NewsEvents/>
        
        </Layout>
    );
};

export default IndexPage;
