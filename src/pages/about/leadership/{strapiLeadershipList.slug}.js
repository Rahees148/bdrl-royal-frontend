import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../components/global/layout'

import LeaderShipDetails from '../../../components/leadership-details'
const Leader = ({ data }) => {
    console.log(data);
    const pageData = data.strapiLeadershipList;
    return (
            <Layout pageTitle={pageData.title} location={location} template="inner" breadcrumb={{
              links: [
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
           <LeaderShipDetails pageData={pageData} />
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
    keyposition_icons {
      icon {
        url
      }
      title
    }
    key_position_title_description {
      title
      description {
        data {
          description
        }
      }
    }
    form_title_description {
      title
      description {
        data {
          description
        }
      }
    }
    awards_title {
      title
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