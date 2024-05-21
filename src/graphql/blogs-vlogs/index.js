import { useStaticQuery, graphql } from "gatsby";

export const Content = () => {
  return useStaticQuery(graphql`
    {
      allStrapiBlogAndVlog(sort: {publish_date: DESC}) {
        nodes {
          title
          id
          summary {
            data {
              summary
            }
          }
          slug
          publish_date
          media {
            url
          }
          category
          doctor {
            Name
            slug
          }
          specialities {
            title
            slug
          }
        }
      }
    }
  `);
};
