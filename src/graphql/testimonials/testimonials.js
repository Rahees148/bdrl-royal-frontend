import { useStaticQuery, graphql } from "gatsby";

export const Content = () => {
  return useStaticQuery(graphql`
    {
        allStrapiTestimonial(limit: 10, sort: {updatedAt: DESC}) {
            nodes {
                author_description
                author_name
                button_label
                button_link
                slug
                title
                testimonial_type
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
                locale
              }
        }
    }
  `);
};
