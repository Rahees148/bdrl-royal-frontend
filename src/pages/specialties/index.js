// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import Tabs from '../../components/tabs';
import {AllSpecialty} from '../../graphql/specialties';
import SpecialtyCard from '../../components/specialty-card';
import InnerBanner from '../../components/inner-banner';
import { Banners } from '../../graphql/banners';

const Specialties = () => {
    const specialtyList = AllSpecialty().allStrapiSpeciality.nodes;
    const pageBanners = Banners().allStrapiBannerForListingPage.nodes.filter(b => b.page_title === 'Specialities')[0];
    return (
        <Layout  pageTitle="Doctors" template="inner" breadcrumb={{
            links: [
                {
                    title:'Home',
                    url:'/',
                }
            ],
            title: 'Specialties'
        }}>
            <Fade>
                <InnerBanner data={
                    {
                        title:pageBanners.banner.Title.data.Title,
                        description:pageBanners.banner.Description.data.Description,
                        desktopMedia: pageBanners.banner.desktop_media?.url,
                        mobileMedia: pageBanners.banner?.mobile_media?.url,
                    }
                } />
                <div className='pageWrapper'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-[55px] sm:py-[115px]'>
                        {specialtyList && specialtyList.map(list => (
                            <SpecialtyCard data={list} key={list.id} />
                        ))}
                    </div>
                </div>
            </Fade>
            
        </Layout>
    );
};
export const Head = () => <title>Specialties</title>;
export default Specialties;
