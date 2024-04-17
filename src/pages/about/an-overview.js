// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import { Content } from '../../graphql/home';
import InnerBanner from '../../components/inner-banner';
import TitleDescription from '../../components/global/title-description';
const AnOverviewPage = () => {
    const pageData = Content().allStrapiHome.nodes[0];
    console.log(pageData);
    return (
        <Layout pageTitle="Home Page" variant={'home'}>
            <Fade>
                <InnerBanner />
            </Fade>
            <section className='pageWrapper'>
                <TitleDescription data={{
                    variant: 'details',
                    title: 'About <br/> Badr Al Sama <br/> Royal Hospital',
                    description: `<p>Badr Al Samaa Royal Hospital, a flagship premium hospital of the largest private healthcare provider of Oman - Badr Al Samaa Group of Hospitals, is a premium hospital where healthcare experience will transcend meagre treatment to become an unparalleled experience of premium services, advanced medical care, and an exquisite healing environment. Nestled in the heart of Muscat, this hospital will redefine premium healthcare by setting new standards of excellence. </p>
                    <p>Since long Badr Al Samaa Group was being demand for a premium category hospital with luxury ambience by the people of Oman. Their vow is fulfilled now. </p>
                    <p>Exceptional Medical Expertise will be offered by extraordinary doctors of all specialties. We have the best consultants and specialists on board who are the leaders of their respective fields and thereby making many specialties as the Centre of Excellence. </p>`,
                }} />
            </section>
            
            
        </Layout>
    );
};

export default AnOverviewPage;
