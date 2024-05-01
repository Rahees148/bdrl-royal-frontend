// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import InnerBanner from '../../components/inner-banner';
import DoctorBanner from '../../images/banner/doctor-banner.jpeg'
import useWindowSize from '../../libs/hooks/useWindowSize';
import DoctorCard from '../../components/doctor-card';
import {AllDoctors} from '../../graphql/doctors/doctors';

const doctors = () => {
    const doctors = AllDoctors().allStrapiDoctor.nodes;
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
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[12px] sm:gap-x-8 gap-y-[86px] pt-[98px]'>
                        {doctors && doctors.map((doctor, index) =>(
                            <DoctorCard doctor={doctor} key={index}/>
                        ))}
                    </div>
                </div>
            </section>
            </Fade>
            
        </Layout>
    );
};

export default doctors;
