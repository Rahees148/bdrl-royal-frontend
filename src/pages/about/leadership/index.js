// src/pages/index.js
import * as React from 'react';
import Layout from '../../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import InnerBanner from '../../../components/inner-banner';
import TitleDescription from '../../../components/global/title-description';
import IconCard from '../../../components/global/icon-card';
import ImageCard from '../../../components/global/image-card';

import { Content } from '../../../graphql/about/an-overview';


const AnOverviewPage = () => {
    const pageData = Content().allStrapiAboutAnOverview.nodes[0];
    return (
        <Layout pageTitle="Home Page" variant={'home'}>
            <Fade>

            <section className='bg-primary py-[80px]'>
                <div className='pageWrapper'>
                    <TitleDescription
                        data={{
                            variant: 'details',
                            theme: 'white',
                            title:'Our Leadership',
                            description:'Years of dedication by this dynamic group of eminent and renowned visionery directors has led to a dream come true with the Badr Al Samaa Group of Hospitals & Medical Centres. The aim was to provide world class, superior multi-specialty healthcare at affordable rates, coupled with the warmth of caring hands. Backed by superior technology, this aim has been fulfilled.',
                        }}
                    />
                </div>
            </section>
            <section className='circle-pattern-bg py-[90px]'>
                <div className='pageWrapper'>
                    people
                </div>
            </section>
            </Fade>
            
        </Layout>
    );
};

export default AnOverviewPage;
