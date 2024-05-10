import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import bannerImg from '../../images/banner/doctor-banner.jpeg';
import InnerBanner from '../../components/inner-banner';
import TitleDescription from '../../components/global/title-description';
import LeadershipForm from '../../components/form/leadership-form';
import AlternativeBox from '../../components/alternative-box';
import Tabs from '../../components/tabs';
import useWindowSize from '../../libs/hooks/useWindowSize';

const SpecialtiesSingle = ({ data }) => {
    const pageData = data.strapiTopProcedur;
    const {isMobile} = useWindowSize();
    return (
        <Layout
            pageTitle={pageData.title}
            template="inner"
            breadcrumb={{
                links: [
                    {
                        title: 'Home',
                        url: '/',
                    },
                    {
                        title: 'TOP PROCEDURES',
                        url: '/top-procedures',
                    },
                ],
                title: pageData.title,
            }}
        >
            <Fade>
                <InnerBanner waterMark={false} data={
                    {
                        title:pageData.banner?.Title?.data.Title,
                        description:pageData.banner?.Description?.data?.childMarkdownRemark?.html,
                        desktopMedia: bannerImg,
                        mobileMedia: pageData.banner?.mobile_media?.url,
                    }
                } />
                 <div className='pageWrapper'>
                    <div className='grid grid-cols-12 gap-8 py-[50px]'>
                        <div className='col-span-12 sm:col-span-6'>
                            <TitleDescription data={{
                                variant:'stack',
                                size:'small',
                                title: pageData.about_procedure?.title?.data.title,
                                description: pageData.about_procedure?.description.data.description

                            }} />
                        </div>
                        {!isMobile &&
                            <div className='col-span-5 col-end-13'>
                                <LeadershipForm overlap={true} title={'TOP-Procedure |' + pageData.about_procedure?.title?.data.title} formTitle={pageData.form_title?.title?.data.title} tagLine={pageData.form_title?.description?.data.description}  />
                            </div>
                         }
                    </div>
                </div>
                <div className='bg-bdrlGray dotted-pattern-bg pt-[45px] pb-[13px] sm:pb-[75px]'>
                    <div className='pageWrapper'>
                    <TitleDescription data={{
                            size:'small',
                            title: pageData.procedure?.title,
                            className: 'pb-[35px]',
                        }} /> 
                        {pageData.procedure.list && pageData.procedure.list.map((list, index) =>(
                           <AlternativeBox length={pageData.procedure.list.length} index={index+1} key={index} alter={index%2 ===0} data={
                            {
                                title:list.title?.data.title,
                                description:list.description?.data.description,
                                subtitle:list.subtitle,
                                image: list.image.url
                            }
                           } />
                        ))}
                    </div>
                </div>
                <div className=' pt-[45px] pb-[45px] sm:pb-[85px]'>
                    <div className='pageWrapper'>
                        <TitleDescription data={{
                            variant: 'details',
                            size:'small',
                            title:pageData.benifits_risk.title,
                            description:pageData.benifits_risk.description?.data.description
                        }} />
                        <div className='h-[30px]'></div>
                        {pageData.benifits_risk.list && pageData.benifits_risk.list.length > 0 &&
                            <Tabs tabsContent={pageData.benifits_risk.list}  />
                        }
                    </div>
                </div>
                {isMobile &&
                 <div className='pb-[85px]'>
                    <div className='pageWrapper'>
                        <LeadershipForm overlap={false} title={'TOP-Procedure |' + pageData.about_procedure?.title?.data.title} formTitle={pageData.form_title?.title?.data.title} tagLine={pageData.form_title?.description?.data.description}  />
                    </div>
                </div>
                }
             
            </Fade>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        strapiTopProcedur(id: { eq: $id }) {
            about_procedure {
                button_label
                button_link
                description {
                data {
                    description
                }
                }
                title {
                data {
                    title
                }
                }
                tagline
            }
            banner {
                Button_label
                Description {
                data {
                    Description
                }
                }
                Title {
                data {
                    Title
                }
                }
                button_link
                desktop_media {
                    url
                }
                media_type
                mobile_media {
                    url
                }
            }
            benifits_risk {
                title
                description{
                    data {
                        description
                    }
                }
                list {
                    subtitle
                    button_label
                    id
                    description {
                        data {
                        description
                        }
                    }
                    image {
                        url
                    }
                    title {
                        data {
                        title
                        }
                    }
                }
            }
            procedure {
                title
                list {
                title {
                    data {
                    title
                    }
                }
                subtitle
                image {
                    url
                }
                description {
                    data {
                    description
                    }
                }
                button_label
                }
            }
            form_title {
                title {
                  data {
                    title
                  }
                }
                tagline
                description {
                  data {
                    description
                  }
                }
              }
            slug
            title
            strapi_id
        }

    }
        
`;

export const Head = ({ data }) => <title>{data.strapiTopProcedur.title}</title>;

export default SpecialtiesSingle;
