import { useStaticQuery, graphql } from "gatsby";

export const Content = (limit) => {
  return useStaticQuery(graphql`
    {
        allStrapiNewsAndEvent(sort: {updatedAt: DESC}) {
            nodes {
              button_label
              article_date(formatString: "MMM DD, YYYY")
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
              locale
            }
          }
    }
  `);
};
