// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import Tabs from '../../components/tabs';
import {AllCentersOfExcellence} from '../../graphql/centre-of-excellence';
import {Banners} from '../../graphql/banners';
import InnerBanner from '../../components/inner-banner';


import DoctorBanner from '../../images/banner/doctor-banner.jpeg'
import CentersOfExcellenceCard from '../../components/CentersOfExcellenceCard';

const Specialties = () => {
    const excellenceList = AllCentersOfExcellence().allStrapiCentersOfExcellence.nodes;
   // const pageBanners = Banners().strapiBannersForListingPage.banner.filter(b => b.Title === 'Centre Of Excellence')[0];
    return (
        <Layout  pageTitle="Doctors" template="inner" breadcrumb={{
            links: [
                {
                    title:'Home',
                    url:'/',
                }
            ],
            title: 'Centre Of Excellence'
        }}>
            <Fade>
                <InnerBanner data={
                    {
                        title:'Centre Of Excellence',
                        description:'Description',
                        desktopMedia: DoctorBanner,
                        mobileMedia: DoctorBanner,
                    }
                } />
                <div className='pageWrapper'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-[115px]'>
                        {excellenceList && excellenceList.map(list => (
                            <CentersOfExcellenceCard data={list} key={list.id} />
                        ))}
                    </div>
                </div>
            </Fade>
            
        </Layout>
    );
};
export const Head = () => <title>Centers of Excellence</title>;
export default Specialties;
