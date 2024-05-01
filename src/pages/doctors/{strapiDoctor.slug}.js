import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/global/layout';
import DoctorDetails from '../../components/doctor-details';
import NewsEvents from '../../components/news-events';
import { Fade } from 'react-awesome-reveal';

const Leader = ({ data }) => {
    const pageData = data.strapiDoctor;
    pageData.blogs_and_vlogs = pageData.blogs_and_vlogs.map(blog => {
      return{
        ...blog,
        image: blog.media
      }
    })
    return (
        <Layout
            pageTitle={pageData.Name}
            template="inner"
            breadcrumb={{
                links: [
                    {
                        title: 'Home',
                        url: '/',
                    },
                    {
                        title: 'Doctors',
                        url: '/doctors',
                    },
                ],
                title: pageData.Name,
            }}
        >
            <Fade>
                <DoctorDetails data={pageData} />
                <NewsEvents
                    template={'inner'}
                    data={pageData.blogs_and_vlogs}
                    linkTo = {'blogs-and-vlogs'}
                    titleDescription={{
                        theme: 'white',
                        title: pageData.blogs_vlogs_title.title.data.title,
                        button_label: pageData.blogs_vlogs_title.button_label,
                        button_link: pageData.blogs_vlogs_title.button_link,
                    }}
                />
            </Fade>
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        strapiDoctor(id: { eq: $id }) {
            Name
            designation
            degrees
            experience
            description {
                data {
                    description
                }
            }
            work_experience {
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
            slug
            qualification {
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
            }
            opd_timings {
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
            locale
            form_title {
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
            blogs_vlogs_title {
                title {
                    data {
                        title
                    }
                }
                button_label
                button_link
            }
            area_of_expertise {
                title
                list {
                    title
                    image {
                        url
                    }
                    description
                }
            }
            Image {
                url
            }
            awards {
                title
                list {
                    title
                    image {
                        url
                    }
                }
            }
            speciality {
                title
                slug
                icon {
                    url
                }
            }
            centers_of_excellence {
                title
                slug
            }
            top_procedure_title
            top_procedures {
                title
                slug
            }
            blogs_and_vlogs {
                title
                slug
                description {
                    data
                }
                category
                doctor {
                    Name
                    slug
                }
                publish_date(formatString: "MMM DD, YYYY")
                media {
                    url
                }
            }
        }
    }
`;

export const Head = ({ data }) => <title>{data.strapiDoctor.Name}</title>;

export default Leader;
