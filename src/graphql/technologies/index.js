import { useStaticQuery, graphql } from "gatsby";

export const AllTechnologies = () => {
  return useStaticQuery(graphql`
    {
      allStrapiTechnology {
        nodes {
          title
          id
          listing_cta_label
          listing_image {
            url
          }
          slug
        }
      }
    }
  `);
};
