import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../components/global/layout'

import LeaderShipDetails from '../../../components/leadership-details'
import { Fade } from 'react-awesome-reveal'
const Leader = ({ data }) => {
    const pageData = data.strapiLeadershipList;
    return (
            <Layout pageTitle={pageData.title} template="inner" breadcrumb={{
              links: [
                  {
                    title:'Home',
                    url:'/',
                  },
                  {
                      title:'About',
                      url:'',
                  },
                  {
                    title:'Leadership',
                    url:'/about/leadership',
                  }
              ],
              title: pageData.title
          }}>
            <Fade>
              <LeaderShipDetails pageData={pageData} />
           </Fade>
          </Layout>
    )
}

export const query = graphql`
query ($id: String) {
  strapiLeadershipList(id: {eq: $id}) {
    title
    slug
    locale
    description {
      data {
        description
      }
    }
    designation
    photo {
      url
    }
    keyposition_icons {
      icon {
        url
      }
      title
    }
    key_position_title_description {
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
    form_title_description {
      title {
        data {
          title
        }
      }
      tagline
    }
    awards_title {
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
    award_icons {
      icon {
        url
      }
      title
    }
  }
}
`

export const Head = ({ data }) => <title>{data.strapiLeadershipList.title}</title>

export default Leader