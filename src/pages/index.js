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
const IndexPage = ({location}) => {
    const pageData = Content().allStrapiHome.nodes[0];
    console.log(pageData);
    return (
        <Layout location={location} pageTitle="Home Page">
            <Fade>
                <HeroBanner sliderItems={pageData?.banner} />
            </Fade>
            <BookAnAppointment />
            <Fade triggerOnce >
                <CentresOfExcellence data={pageData.centres_excellence} />
            </Fade>
            <Fade triggerOnce  >
                <SlidingCard data={pageData.sliding_card} />
            </Fade>
            <Fade triggerOnce >
            <ExceptionalCare data={pageData.exceptional_care} />
            </Fade>
            <Fade triggerOnce >
                <TextImage data={pageData.image_text} />
            </Fade>
            {/* Centres Of Excellence component */}
            <PatientTestimonials titleDescription={pageData.testimonials_title} />
            <NewsEvents/>
        </Layout>
    );
};

export default IndexPage;
