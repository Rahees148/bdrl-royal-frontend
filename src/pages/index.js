// src/pages/index.js
import * as React from 'react';
import Layout from '../components/global/layout';
import HeroBanner from '../components/hero-banner';
import BookAnAppointment from '../components/book-an-appointment';
import CentresOfExcellence from '../components/centres-of-excellence';
import { Fade } from 'react-awesome-reveal';
import { Content } from '../graphql/home';
import SlidingCard from '../components/sliding-card';
import PatientTestimonials from '../components/patient-testimonials';
import ExceptionalCare from '../components/exceptional-care';
import NewsEvents from '../components/news-events';
import TextImage from '../components/text-image'
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
            <TextImage data={pageData.image_text} />
            {/* Centres Of Excellence component */}
            
            <PatientTestimonials titleDescription={pageData.testimonials_title} />
            <NewsEvents/>
        
        </Layout>
    );
};

export default IndexPage;
