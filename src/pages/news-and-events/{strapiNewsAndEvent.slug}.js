import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/global/layout'

const NewsAndEvents = ({ data }) => {
    return (
            <Layout pageTitle={data.strapiNewsAndEvent.title}>
                <h1>{data.strapiNewsAndEvent.title}</h1>
            <img className="postcover" src={data.strapiNewsAndEvent.image?.url} alt={`Cover for ${data.strapiNewsAndEvent.title}`} />
           <div className="postcontent" dangerouslySetInnerHTML={{ __html: data.strapiNewsAndEvent.description.data.childMarkdownRemark.html }} />
            </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    strapiNewsAndEvent(id: {eq: $id}) {
      button_label
      category
      description {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      image {
        url
      }
      slug
      summary
      title
      locale
    }
  }
`

export const Head = ({ data }) => <title>test</title>

export default NewsAndEvents