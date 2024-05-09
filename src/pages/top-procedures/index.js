// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import InnerBanner from '../../components/inner-banner';
import { Banners } from '../../graphql/banners';
import { AllProcedures } from '../../graphql/top-procedure';
import TextCard from '../../components/global/text-card';

const Specialties = () => {
    const allProcedures = AllProcedures().allStrapiTopProcedur.nodes;
    const pageBanners = Banners().allStrapiBannerForListingPage.nodes.filter(b => b.page_title === 'Top Procedures')[0];
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
                <InnerBanner
                waterMark={false}
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
                        search
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-[55px] sm:py-[115px]'>
                        {allProcedures && allProcedures.map(list => (
                            <TextCard data={{
                                title: list.title,
                                description: list.about_procedure?.description?.data.description,
                                button_label: 'know more',
                                link: '/top-procedures/'+list?.slug
                            }} />
                        ))}
                    </div>
                </div>
            </Fade>
            
        </Layout>
    );
};
export const Head = () => <title>Top Procedures</title>;
export default Specialties;
