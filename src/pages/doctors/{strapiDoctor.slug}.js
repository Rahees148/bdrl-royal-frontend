import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/global/layout'
import DoctorDetails from '../../components/doctor-details';
import NewsEvents from '../../components/news-events';

const Leader = ({ data }) => {
  const pageData = data.strapiDoctor;
  console.log(pageData);
    return (
            <Layout pageTitle={pageData.Name} template="inner" breadcrumb={{
              links: [
                  {
                    title:'Home',
                    url:'/',
                  },
                  {
                    title:'Doctors',
                    url:'/doctors',
                  }
              ],
              title: pageData.Name
          }}>
            <DoctorDetails data={pageData} />
            <NewsEvents template={'inner'} titleDescription={{
                theme:"white",
                title:"Blogs & Vlogs By",
                button_label: "View All",
                button_link:"#"
            }} />
          </Layout>
    )
}

export const query = graphql`
query ($id: String) {
  strapiDoctor(id: {eq: $id}) {
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
    centers_of_excellence {
      title
      slug
    }
    speciality {
      title
      slug
    }
  }
}
`

export const Head = ({ data }) => <title>{data.strapiDoctor.Name}</title>

export default Leader