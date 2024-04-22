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
                title
              }
              leaders {
                title
                description
                button_label
                image {
                  url
                }
                link_to {
                  slug
                }
                id
              }
              id
            }
          }
    }
  `);
};
