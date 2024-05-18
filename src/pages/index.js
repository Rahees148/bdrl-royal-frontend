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
import { Parallax } from 'react-scroll-parallax';
import ParallaxElement from '../components/parallax-element';
const IndexPage = () => {
    const pageData = Content().allStrapiHome.nodes[0];
    return (
        <Layout  pageTitle="Home Page">
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
            <Parallax speed={100} translateY={100}>
                <ParallaxElement />
            </Parallax>
            {/* Centres Of Excellence component */}
            <PatientTestimonials titleDescription={pageData.testimonials_title} />
            <NewsEvents linkTo='news-and-events' titleDescription={{
                theme:"white",
                title:"News & events",
                description: "Get the latest updates from us.",
                button_label: "View All",
                button_link:"/news-and-events/"
            }}/>
        </Layout>
    );
};

export default IndexPage;
