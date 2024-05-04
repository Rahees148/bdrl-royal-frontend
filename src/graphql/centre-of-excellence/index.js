import { useStaticQuery, graphql } from "gatsby";

export const AllCentersOfExcellence = () => {
  return useStaticQuery(graphql`
    {
      allStrapiCentersOfExcellence {
        nodes {
          title
          slug
          icon {
            url
          }
        }
      }
    }
  `);
};
