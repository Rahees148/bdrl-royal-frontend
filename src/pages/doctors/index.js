// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import InnerBanner from '../../components/inner-banner';
import DoctorBanner from '../../images/banner/doctor-banner.jpeg'
import { Content } from '../../graphql/about/an-overview';
import useWindowSize from '../../libs/hooks/useWindowSize';
import DoctorCard from '../../components/doctor-card';


const doctors = () => {
    const pageData = Content().allStrapiAboutAnOverview.nodes[0];
    const {isMobile} = useWindowSize()
    return (
        <Layout  pageTitle="Doctors" template="inner" breadcrumb={{
            links: [
                {
                    title:'Home',
                    url:'/',
                }
            ],
            title: 'Doctors'
        }}>
            <Fade>
                <InnerBanner data={
                    {
                        title:'Doctors',
                        description:'Our Medical Experts',
                        desktopMedia: DoctorBanner,
                        mobileMedia: DoctorBanner,
                    }
                } />
            
          
            <section className='pt-[37px] sm:pb-[100px]'>
                <div className='pageWrapper'>
                    <DoctorCard/>
                </div>
            </section>
            </Fade>
            
        </Layout>
    );
};

export default doctors;
