import { useStaticQuery, graphql } from "gatsby";

export const Leaders = () => {
  return useStaticQuery(graphql`
    {
        allStrapiLeadership {
            nodes {
              title
              title_description {
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
              
              id
            }
          }
    }
  `);
};
