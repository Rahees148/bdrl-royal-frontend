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

const TechnologiesSingle = ({ data }) => {
    const pageData = data.strapiTechnology;
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
                        title: 'Technologies',
                        url: '/technologies',
                    },
                ],
                title: pageData.title,
            }}
        >
            <Fade>
                <InnerBanner data={
                    {
                        title:pageData.banner?.Title?.data.Title,
                        description:pageData.banner?.Description?.data?.childMarkdownRemark?.html,
                        desktopMedia: bannerImg,
                        mobileMedia: pageData.banner?.mobile_media?.url,
                    }
                } />
                <div className='pageWrapper'>
                    <div className='grid grid-cols-12 gap-8 py-[50px]'>
                        <div className=' col-span-6'>
                            <TitleDescription data={{
                                variant:'stack',
                                size:'small',
                                title: pageData.about_technology?.title?.data.title,
                                description: pageData.about_technology?.description.data.description

                            }} />
                        </div>
                        <div className='col-span-5 col-end-13'>
                            <LeadershipForm overlap={true} title={'TOP-Procedure |' + pageData.about_technology?.title?.data.title} formTitle={pageData.form_title?.title?.data.title} tagLine={pageData.form_title?.description?.data.description}  />
                        </div>
                    </div>
                </div>

                <div className='bg-bdrlGray dotted-pattern-bg pt-[45px] pb-[75px]'>
                    <div className='pageWrapper'>
                        <TitleDescription data={{
                            size:'small',
                            title: pageData.how_does_help?.title,
                            className: 'pb-[35px]',
                        }} /> 
                        {pageData.how_does_help.list && pageData.how_does_help.list.map((list, index) =>(
                           <AlternativeBox length={pageData.how_does_help.list.length} index={index+1} key={index} alter={index%2 ===0} data={
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

                <div className=' pt-[45px] pb-[85px]'>
                    <div className='pageWrapper'>
                        <TitleDescription data={{
                            variant: 'details',
                            size:'small',
                            title:pageData.how_is_done.title,
                            description:pageData.how_is_done.description?.data.description
                        }} />
                        <div className='h-[30px]'></div>
                        {pageData.how_is_done.list && pageData.how_is_done.list.length > 0 &&
                            <Tabs tabsContent={pageData.how_is_done.list}  />
                        }
                    </div>
                </div>

            </Fade>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        strapiTechnology(id: { eq: $id }) {
            slug
            title
            strapi_id
            banner {
                strapi_id
                mobile_media {
                  url
                }
                media_type
                desktop_media {
                  url
                }
                button_link
                Title {
                  data {
                    Title
                  }
                }
                Description {
                  data {
                    Description
                  }
                }
                Button_label
              }
            about_technology {
                title {
                  data {
                    title
                  }
                }
                description {
                  data {
                    description
                  }
                }
                button_label
                button_link
            }
            how_does_help {
                title
                strapi_id
                list {
                  title {
                    data {
                      title
                    }
                  }
                  image {
                    url
                  }
                  subtitle
                  strapi_id
                  description {
                    data {
                      description
                    }
                  }
                  button_label
                }
              }
              how_is_done {
                title
                description {
                  data {
                    description
                  }
                }
                strapi_id
                list {
                    id
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
        }

    }
        
`;

export const Head = ({ data }) => <title>{data.strapiTechnology.title}</title>;

export default TechnologiesSingle;
