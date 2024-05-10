import { useStaticQuery, graphql } from "gatsby";

export const AllProcedures = () => {
  return useStaticQuery(graphql`
    {
      allStrapiTopProcedur {
        nodes {
          slug
          title
          strapi_id
          locale
          about_procedure {
            description {
              data {
                description
              }
            }
            button_label
          }
        }
      }
    }
  `);
};
