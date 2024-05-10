import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/global/layout'

const BlogPost = ({ data }) => {
    return (
            <Layout pageTitle={data.strapiTestimonial.title}>
                <h1>{data.strapiTestimonial.title}</h1>
            <img className="postcover" src={data.strapiTestimonial.image.url} alt={`Cover for ${data.strapiTestimonial.title}`} />
           <div className="postcontent" dangerouslySetInnerHTML={{ __html: data.strapiTestimonial.description.data.childMarkdownRemark.html }} />
            </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    strapiTestimonial(id: {eq: $id}) {
        title
        testimonial_type
        slug
        image {
          url
        }
        description {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        button_link
        button_label
        author_name
        author_description
    }
  }
`

export const Head = ({ data }) => <title>test</title>

export default BlogPost