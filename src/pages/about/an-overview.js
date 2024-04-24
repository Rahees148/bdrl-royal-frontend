// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import InnerBanner from '../../components/inner-banner';
import TitleDescription from '../../components/global/title-description';
import IconCard from '../../components/global/icon-card';
import ImageCard from '../../components/global/image-card';

import { Content } from '../../graphql/about/an-overview';
import useWindowSize from '../../libs/hooks/useWindowSize';


const AnOverviewPage = () => {
    const pageData = Content().allStrapiAboutAnOverview.nodes[0];
    const {isMobile} = useWindowSize()
    return (
        <Layout  pageTitle="An Overview" template="inner" breadcrumb={{
            links: [
                {
                    title:'About',
                    url:'',
                }
            ],
            title: 'An Overview'
        }}>
            <Fade>
                <InnerBanner data={
                    {
                        title:pageData.banner?.Title,
                        description:pageData.banner?.Description?.data?.childMarkdownRemark?.html,
                        desktopMedia: pageData.banner?.desktop_media?.url,
                        mobileMedia: pageData.banner?.mobile_media?.url,
                    }
                } />
            
            <section className='pageWrapper'>
                <div className='pt-[120px] pb-[60px]'>
                    <TitleDescription data={{
                        variant: 'details',
                        title: pageData.title_description?.title?.data?.title,
                        description: pageData.title_description.description.data.description,
                    }} />
                </div>
            </section>
            {!isMobile &&
                <section className='full-width-image' style={{
                    backgroundImage:`url('${pageData.media?.desktop_media?.url}')`
                }} />
            }
            {isMobile &&
                <section className='full-width-image'>
                    <img src={pageData.media?.desktop_media?.url} alt={pageData.title_description?.title} />
                </section>
            }
            
            <section className='circle-pattern-bg py-[90px]'>
                <div className='pageWrapper'>
                    <TitleDescription
                        data={{
                            theme: 'green',
                            title: pageData.highlights?.title?.data?.title,
                            description:pageData.highlights?.tagline
                        }}
                    />
                    <div className='h-[30px] md:h-[60px]' />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {pageData.highlight_card && pageData.highlight_card.map((card, index) => (
                                <IconCard key={index} data={{
                                    title: card.title,
                                    icon:card.icon.url
                                }} />
                        ))}
                    </div>
                </div>
            </section>
            <section className='bg-primary pt-[80px] pb-[245px]'>
                <div className='pageWrapper'>
                    <TitleDescription
                        data={{
                            variant: 'details',
                            theme: 'white',
                            title:pageData.why_us_title_description?.title?.data?.title,
                            description:pageData.why_us_title_description?.description.data.description,
                        }}
                    />
                </div>
            </section>
            <section className='mt-[-155px] pb-[100px]'>
                <div className='pageWrapper'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {pageData.why_us_cards && pageData.why_us_cards.map((imageCard, indexs)=>(
                            <ImageCard key={indexs} data={{
                                title: imageCard.title,
                                image:imageCard.image.url,
                                description:imageCard.description
                            }} />
                          
                        ))}
                        
                    </div>
                </div>
            </section>
            </Fade>
            
        </Layout>
    );
};

export default AnOverviewPage;
