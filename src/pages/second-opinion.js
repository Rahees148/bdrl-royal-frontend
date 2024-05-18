import * as React from 'react';
import Layout from '../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import useWindowSize from '../libs/hooks/useWindowSize';
import ServiceBanner from '../components/service-banner';
import { Banners } from '../graphql/banners';
import SecondOpinionForm from '../components/form/second-opinion-form';

const SecondOption = () => {
    const pageBanners = Banners().allStrapiBannerForListingPage.nodes.filter(b => b.page_title === 'Second Option')[0];
    const {isMobile} = useWindowSize()
    return (
        <Layout  pageTitle="Second Opinion" template="inner" breadcrumb={{
            links: [
                {
                    title:'Home',
                    url:'/',
                },
            ],
            title: 'Second Opinion'
        }}>
            <Fade>
                <ServiceBanner 
                    theme="gold" 
                    buttonAsTag={true}
                    subtitle={false}  
                    data={{
                        title:pageBanners.banner.Title.data.Title,
                        description:pageBanners.banner.Description.data.Description,
                        desktopMedia: pageBanners.banner.desktop_media?.url,
                        mobileMedia: pageBanners.banner?.mobile_media?.url,
                        buttonLabel: pageBanners.banner?.Button_label
                    }}  />
                <div className='pageWrapper'>
                    <div className='py-[75px]'>
                        <SecondOpinionForm formTitle={'Get Second Opinion'} tagLine={'Select the speciality, and also attach your medical reports.'} />
                    </div>
                </div>
            </Fade>
            
        </Layout>
    );
};

export default SecondOption;
