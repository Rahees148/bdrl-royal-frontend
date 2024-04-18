// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import { Row, Column} from '@react-tiny-grid/core';
import InnerBanner from '../../components/inner-banner';
import TitleDescription from '../../components/global/title-description';
import HSPTLImage from '../../images/about-imag.jpeg'
import icon1 from '../../images/icons/about-1.png'
import cardImage from '../../images/about-imag-card.png'
import IconCard from '../../components/global/icon-card';
import ImageCard from '../../components/global/image-card';

import { Content } from '../../graphql/about/an-overview';


const AnOverviewPage = () => {
    const pageData = Content().allStrapiAboutAnOverview.nodes[0];
    console.log(pageData);
    return (
        <Layout pageTitle="Home Page" variant={'home'}>
            <Fade>
                <InnerBanner data={
                    {
                        title:pageData.banner?.Title,
                        description:pageData.banner?.Description?.data?.childMarkdownRemark?.html,
                        desktopMedia: pageData.banner?.desktop_media?.url,
                        mobileMedia: pageData.banner?.mobile_media?.url,
                    }
                } />
            </Fade>
            <section className='pageWrapper'>
                <div className='pt-[120px] pb-[60px]'>
                    <TitleDescription data={{
                        variant: 'details',
                        title: pageData.title_description?.title,
                        description: pageData.title_description.description,
                    }} />
                </div>
            </section>
            <section className='full-width-image' style={{
                backgroundImage:`url('${pageData.media?.desktop_media?.url}')`
            }} />
            <section className='circle-pattern-bg py-[90px]'>
                <div className='pageWrapper'>
                    <TitleDescription
                        data={{
                            theme: 'green',
                            title: pageData.highlights?.title,
                            description:pageData.highlights?.description
                        }}
                    />
                    <div className='h-[60px]' />
                    <Row breakpoints={[768]} spacing={[16, 10]}>
                        {pageData.highlight_card && pageData.highlight_card.map((card, index) => (
                            <Column widths={[6]} key={index} >
                                <IconCard data={{
                                    title: card.title,
                                    icon:card.icon.url
                                }} />
                            </Column>
                        ))}
                    </Row>
                </div>
            </section>

            <section className='bg-primary pt-[80px] pb-[245px]'>
                <div className='pageWrapper'>
                    <TitleDescription
                        data={{
                            variant: 'details',
                            theme: 'white',
                            title:pageData.why_us_title_description?.title,
                            description:pageData.why_us_title_description?.description
                        }}
                    />
                </div>
            </section>
            <section className='mt-[-155px]'>
                <div className='pageWrapper'>
                    <Row breakpoints={[768, 990]} spacing={[16, 10]}>
                        {pageData.why_us_cards && pageData.why_us_cards.map((imageCard, indexs)=>(
                            <Column widths={[6, 4]} key={indexs} >
                                <ImageCard data={{
                                    title: imageCard.title,
                                    image:imageCard.image.url,
                                    description:imageCard.description
                                }} />
                            </Column>
                        ))}
                        
                    </Row>
                </div>
            </section>
            
            
        </Layout>
    );
};

export default AnOverviewPage;
