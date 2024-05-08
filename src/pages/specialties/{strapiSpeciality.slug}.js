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

const SpecialtiesSingle = ({ data }) => {
    const pageData = data.strapiSpeciality;
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
                        title: 'Specialties',
                        url: '/specialties',
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
                    <div className='py-[40px] sm:py-[45px]'>
                        <TitleDescription data={{
                            variant: 'details',
                            size:'small',
                            title: pageData.introduction?.title?.data?.title,
                            description: pageData.introduction?.description.data.description,
                        }} />
                    </div>
                </div>
                <div className='bg-bdrlGray pt-[40px] sm:pt-[38px] pb-[40px] sm:pb-[84px]'>
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
                <div className='bg-white py-[45px]'>
                    <div className='pageWrapper'>
                        <TitleDescription data={{
                            size:'small',
                            title: pageData.our_experts?.title?.data.title,
                            button_label:pageData.our_experts?.button_label,
                            button_link:pageData.our_experts?.button_link

                        }} />
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-[95px]'>
                            {pageData.doctors && pageData.doctors.map((doctor, index)=>(
                                <DoctorCard doctor={doctor} key={index} />
                            ))}
                        </div>
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
                        title: pageData.technology_utilisation_title?.title.data.title,
                        description: pageData.technology_utilisation_title?.description.data.description
                    }}
                />
                <PatientTestimonials overlap={false} titleDescription={pageData.patient_testimonials} titleVariant="small" />
                <NewsEvents
                    template={'inner'}
                    linkTo = {'/blogs-and-vlogs'}
                    data={pageData.blogs_and_vlogs}
                    titleDescription={{
                        theme: 'white',
                        variant: 'details',
                        size:'small',
                        title: pageData.blogs_vlogs?.title.data.title,
                        button_label: pageData.blogs_vlogs?.button_label,
                        button_link: pageData.blogs_vlogs?.button_link,
                    }}
                />
            </Fade>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        strapiSpeciality(id: { eq: $id }) {
            banner {
                Button_label
                Description {
                    data {
                        Description
                    }
                }
                Title
                button_link
                desktop_media {
                url
                }
            }
            icon {
                url
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
                id
                tagline
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
            our_experts {
                title {
                data {
                    title
                }
                }
                button_link
                button_label
            }
            doctors {
                Name
                slug
                Image {
                  url
                }
                designation
                centers_of_excellence {
                  title
                  slug
                }
                speciality {
                  slug
                  title
                }
                area_of_expertise {
                  title
                  list {
                    title
                    image {
                      url
                    }
                  }
                }
              }
            technology_utilisation_title {
                button_link
                button_label
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
                button_label
                button_link
            }
            title
            slug
            patient_testimonials {
                title {
                    data {
                        title
                    }
                }
                button_link
                button_label
            }

            blogs_vlogs {
                title {
                  data {
                    title
                  }
                }
                button_link
                button_label
            }
            blogs_and_vlogs {
                title
                slug
                id
                media {
                    url
                }
                doctor {
                    Name
                }
                category
                description {
                    data
                }
                publish_date(formatString: "DD MMM, YYYY")
            }

            }
    }
`;

export const Head = ({ data }) => <title>{data.strapiSpeciality.title}</title>;

export default SpecialtiesSingle;
