import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import ServiceBanner from '../../components/service-banner';
import TitleDescription from '../../components/global/title-description';
import Tabs from '../../components/tabs';
import DoctorCard from '../../components/doctor-card';
import NewsEvents from '../../components/news-events';
import PatientTestimonials from '../../components/patient-testimonials';
import KeyHighlights from '../../components/key-highlights';
import DoctorDetailCard from '../../components/doctor-detail-card';

const SpecialtiesSingle = ({ data }) => {
    const pageData = data.strapiCentersOfExcellence;
    console.log('pageData', pageData)
    // pageData.blogs_and_vlogs = pageData.blogs_and_vlogs.map(blog => {
    //   return{
    //     ...blog,
    //     image: blog.media
    //   }
    // })
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
                        title: 'Centers of Excellence',
                        url: '/centers-of-excellence',
                    },
                ],
                title: pageData.title,
            }}
        >
            <Fade>
               <ServiceBanner 
                    data={
                        {
                            title:pageData.banner?.Title,
                            description:pageData.banner?.Description.data.Description,
                            desktopMedia: pageData.banner?.desktop_media.url,
                            mobileMedia: pageData.banner?.desktop_media.url,
                        }
                    }
                />
                <div className='pageWrapper'>
                    <div className='py-[32px]'>
                        <TitleDescription data={{
                            variant: 'details',
                            title: pageData.introduction?.title?.data?.title,
                            description: pageData.introduction?.description.data.description,
                        }} />
                    </div>
                </div>
                <div className='bg-bdrlGray py-[60px]'>
                    <div className='pageWrapper'>
                        <TitleDescription data={{title:pageData.key_highlights?.title, size:'small'}} />
                        <KeyHighlights data={pageData.key_highlights?.list}/>
                    </div>
                </div>
                <div className='bg-white py-[32px]'>
                    <div className='pageWrapper'>
                        <TitleDescription data={{
                            size:'small',
                            title: pageData.our_experts_title?.title?.data.title,
                            button_label:pageData.our_experts_title?.button_label,
                            button_link:pageData.our_experts_title?.button_link

                        }} />
                        <div className='py-[15px]'>
                            {pageData.doctors && pageData.doctors.map((doctor, index)=>(
                                <DoctorDetailCard variant='slider' data={doctor} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='bg-bdrlGray py-[32px]'>
                    <div className='pageWrapper'>
                        <TitleDescription data={{
                            size:'small',
                            title: pageData.our_treatments?.title,
                            className: 'pb-[18px]',
                        }} />
                        {pageData.our_treatments && 
                            <Tabs bg="gray" tabsContent={pageData.our_treatments?.list} />
                        }
                    </div>
                </div>
                <div className='py-[32px]'>
                    <div className='pageWrapper'>
                        <TitleDescription data={{
                            size:'small',
                            title: pageData.diseases_ailments?.title,
                            className: 'pb-[18px]',
                        }} />
                        {pageData.diseases_ailments && 
                            <Tabs bg="white" theme="dark" tabsContent={pageData.diseases_ailments?.list} />
                        }
                    </div>
                </div>
                <NewsEvents
                    template={'inner'}
                    theme={'gold'}
                    linkTo = {'blogs-and-vlogs'}
                    data={pageData.blogs_and_vlogs}
                    titleDescription={{
                        theme: 'white',
                        variant: 'details',
                        size:'small',
                        title: pageData.technology_utilisation?.title.data.title,
                        description: pageData.technology_utilisation?.description.data.description
                    }}
                />
                <PatientTestimonials titleDescription={pageData.patient_testimonials_title} overlap={false} />
                <NewsEvents
                    template={'inner'}
                    linkTo = {'/blogs-and-vlogs'}
                    data={pageData.blogs_and_vlogs}
                    titleDescription={{
                        theme: 'white',
                        variant: 'details',
                        size:'small',
                        title: pageData.blogs_vlogs_title?.title.data.title,
                        button_label: pageData.blogs_vlogs_title?.button_label,
                        button_link: pageData.blogs_vlogs_title?.button_link,
                    }}
                />
            </Fade>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        strapiCentersOfExcellence(id: { eq: $id }) {
            banner {
              Button_label
              Description {
                data {
                  id
                  Description
                }
              }
              desktop_media {
                url
              }
              button_link
              Title
            }
            blogs_and_vlogs {
              category
              title
              slug
              media {
                url
              }
              doctor {
                Name
                slug
              }
              description {
                data
              }
              publish_date(formatString: "DD MMM, YYYY")
            }
            blogs_vlogs_title {
              button_label
              button_link
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
            diseases_ailments {
              title
              id
              list {
                id
                description
                title
                image {
                  url
                }
              }
            }
            doctors {
              slug
              area_of_expertise {
                title
                id
                list {
                  title
                  id
                  image {
                    url
                  }
                }
              }
              Name
              Image {
                url
              }
              designation
              degrees
              experience
              description {
                data {
                  description
                }
              }
              list_button_label
            }
            our_treatments {
              title
              list {
                title
                id
                image {
                  url
                }
                description
              }
            }
            key_highlights {
              title
              list {
                title
              }
            }
            our_experts_title {
              title {
                data {
                  title
                }
              }
              button_label
              button_link
            }
            introduction {
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
            }
            technology_utilisation {
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
            }
            testimonials {
              title
              description {
                data {
                  description
                }
              }
              button_link
              button_label
              slug
              author_name
              author_description
            }
            title
            patient_testimonials_title {
              title {
                data {
                  title
                }
              }
              button_label
              button_link
            }
          }
    }
`;

export const Head = ({ data }) => <title>{data.strapiCentersOfExcellence.title}</title>;

export default SpecialtiesSingle;
