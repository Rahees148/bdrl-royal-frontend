import { useStaticQuery, graphql } from "gatsby";

export const Content = () => {
  return useStaticQuery(graphql`
    {
        allStrapiNewsAndEvent(limit: 3, sort: {updatedAt: DESC}) {
            nodes {
              button_label
              category
              summary
              title
              slug
              locale
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
            }
          }
    }
  `);
};
