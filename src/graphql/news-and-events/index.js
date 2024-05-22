import { useStaticQuery, graphql } from "gatsby";

export const Content = () => {
  return useStaticQuery(graphql`
    {
        allStrapiNewsAndEvent(sort: {article_date: ASC}) {
            nodes {
              button_label
              article_date(formatString: "MMM DD, YYYY")
              category
              id
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
