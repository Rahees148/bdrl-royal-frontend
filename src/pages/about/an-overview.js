// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import { Row, Column} from '@react-tiny-grid/core';
import { Content } from '../../graphql/home';
import InnerBanner from '../../components/inner-banner';
import TitleDescription from '../../components/global/title-description';
import HSPTLImage from '../../images/about-imag.jpeg'
import icon1 from '../../images/icons/about-1.png'
import cardImage from '../../images/about-imag-card.png'
import IconCard from '../../components/global/icon-card';
import ImageCard from '../../components/global/image-card';
const AnOverviewPage = () => {
    const pageData = Content().allStrapiHome.nodes[0];
    console.log(pageData);
    return (
        <Layout pageTitle="Home Page" variant={'home'}>
            <Fade>
                <InnerBanner />
            </Fade>
            <section className='pageWrapper'>
                <div className='pt-[120px] pb-[60px]'>
                    <TitleDescription data={{
                        variant: 'details',
                        title: 'About <br/> Badr Al Sama <br/> Royal Hospital',
                        description: `<p>Badr Al Samaa Royal Hospital, a flagship premium hospital of the largest private healthcare provider of Oman - Badr Al Samaa Group of Hospitals, is a premium hospital where healthcare experience will transcend meagre treatment to become an unparalleled experience of premium services, advanced medical care, and an exquisite healing environment. Nestled in the heart of Muscat, this hospital will redefine premium healthcare by setting new standards of excellence. </p>
                        <p>Since long Badr Al Samaa Group was being demand for a premium category hospital with luxury ambience by the people of Oman. Their vow is fulfilled now. </p>
                        <p>Exceptional Medical Expertise will be offered by extraordinary doctors of all specialties. We have the best consultants and specialists on board who are the leaders of their respective fields and thereby making many specialties as the Centre of Excellence. </p>`,
                    }} />
                </div>
            </section>
            <section className='full-width-image' style={{
                backgroundImage:`url('${HSPTLImage}')`
            }} />
            <section className='circle-pattern-bg py-[90px]'>
                <div className='pageWrapper'>
                    <TitleDescription
                        data={{
                            theme: 'green',
                            title:'Highlights',
                            description:'Key Highlights and Strengths'
                        }}
                    />
                    <div className='h-[60px]' />
                    <Row breakpoints={[768]} spacing={[16, 10]}>
                        <Column widths={[6]} >
                            <IconCard data={{
                                title: 'Band-A and Premium healthcare facility at the heart of Muscat',
                                icon:icon1
                            }} />
                        </Column>
                        <Column widths={[6]} >
                            <IconCard data={{
                                title: 'Band-A and Premium healthcare facility at the heart of Muscat',
                                icon:icon1
                            }} />
                        </Column>
                        <Column widths={[6]} >
                            <IconCard data={{
                                title: 'Band-A and Premium healthcare facility at the heart of Muscat',
                                icon:icon1
                            }} />
                        </Column>
                        <Column widths={[6]} >
                            <IconCard data={{
                                title: 'Band-A and Premium healthcare facility at the heart of Muscat',
                                icon:icon1
                            }} />
                        </Column>
                        <Column widths={[6]} >
                            <IconCard data={{
                                title: 'Band-A and Premium healthcare facility at the heart of Muscat',
                                icon:icon1
                            }} />
                        </Column>
                        <Column widths={[6]} >
                            <IconCard data={{
                                title: 'Band-A and Premium healthcare facility at the heart of Muscat',
                                icon:icon1
                            }} />
                        </Column>
                        <Column widths={[6]} >
                            <IconCard data={{
                                title: 'Band-A and Premium healthcare facility at the heart of Muscat',
                                icon:icon1
                            }} />
                        </Column>
                        <Column widths={[6]} >
                            <IconCard data={{
                                title: 'Band-A and Premium healthcare facility at the heart of Muscat',
                                icon:icon1
                            }} />
                        </Column>
                    </Row>
                </div>
            </section>

            <section className='bg-primary pt-[80px] pb-[245px]'>
                <div className='pageWrapper'>
                    <TitleDescription
                        data={{
                            variant: 'details',
                            theme: 'white',
                            title:`Why <br/>
                            Badr Al Sama <br/>
                            Royal Hospital`,
                            description:'<p>With the need of making exceptional healthcare services meet unparalleled comfort and luxury, Badr Al Samaa Royal Hospital was born. We are here to set a benchmark for excellence in medical services, patient experience, and luxurious amenities. Our commitment to delivering world-class healthcare in a sophisticated and welcoming environment is what sets us apart.</p>'
                        }}
                    />
                </div>
            </section>
            <section className='mt-[-155px]'>
                <div className='pageWrapper'>
                    <Row breakpoints={[768, 990]} spacing={[16, 10]}>
                        <Column widths={[6, 4]} >
                            <ImageCard data={{
                                title: 'Unrivaled Patient Experience',
                                image:cardImage,
                                description:'Experience heart-touching empathy & personalized Care '
                            }} />
                        </Column>
                        <Column widths={[6, 4]} >
                            <ImageCard data={{
                                title: 'Unrivaled Patient Experience',
                                image:cardImage,
                                description:'Experience heart-touching empathy & personalized Care '
                            }} />
                        </Column>
                        <Column widths={[6, 4]} >
                            <ImageCard data={{
                                title: 'Unrivaled Patient Experience',
                                image:cardImage,
                                description:'Experience heart-touching empathy & personalized Care '
                            }} />
                        </Column>
                        <Column widths={[6, 4]} >
                            <ImageCard data={{
                                title: 'Unrivaled Patient Experience',
                                image:cardImage,
                                description:'Experience heart-touching empathy & personalized Care '
                            }} />
                        </Column>
                        <Column widths={[6, 4]} >
                            <ImageCard data={{
                                title: 'Unrivaled Patient Experience',
                                image:cardImage,
                                description:'Experience heart-touching empathy & personalized Care '
                            }} />
                        </Column>
                        <Column widths={[6, 4]} >
                            <ImageCard data={{
                                title: 'Unrivaled Patient Experience',
                                image:cardImage,
                                description:'Experience heart-touching empathy & personalized Care '
                            }} />
                        </Column>
                        <Column widths={[6, 4]} >
                            <ImageCard data={{
                                title: 'Unrivaled Patient Experience',
                                image:cardImage,
                                description:'Experience heart-touching empathy & personalized Care '
                            }} />
                        </Column>
                    </Row>
                </div>
            </section>
            
            
        </Layout>
    );
};

export default AnOverviewPage;
