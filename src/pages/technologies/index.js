// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import InnerBanner from '../../components/inner-banner';
import { Banners } from '../../graphql/banners';
import { AllTechnologies } from '../../graphql/technologies';
import TextCard from '../../components/global/text-card';
import TechnologyCard from '../../components/technology-card';

const Specialties = () => {
    const allTechnology = AllTechnologies().allStrapiTechnology.nodes;
    const pageBanners = Banners().allStrapiBannerForListingPage.nodes.filter(b => b.page_title === 'Technologies')[0];
    return (
        <Layout  pageTitle="Doctors" template="inner" breadcrumb={{
            links: [
                {
                    title:'Home',
                    url:'/',
                }
            ],
            title: 'Technologies'
        }}>
            <Fade>
                <InnerBanner
                data={
                    {
                        title:pageBanners.banner.Title.data.Title,
                        description:pageBanners.banner.Description.data.Description,
                        desktopMedia: pageBanners.banner.desktop_media?.url,
                        mobileMedia: pageBanners.banner?.mobile_media?.url,
                    }
                } />
                <div className='pageWrapper'>
                    <div>
                        specialty dropdown
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-[55px] sm:py-[115px]'>
                        {allTechnology && allTechnology.map(list => (
                            <TechnologyCard title={list.title} image={list.listing_image.url} label={list.listing_cta_label} slug={list.slug} key={list.id} />
                        ))}
                    </div>
                </div>
            </Fade>
            
        </Layout>
    );
};
export const Head = () => <title>Top Procedures</title>;
export default Specialties;
