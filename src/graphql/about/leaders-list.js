import { useStaticQuery, graphql } from "gatsby";

export const LeadersList = () => {
  return useStaticQuery(graphql`
    {
      allStrapiLeadershipList {
        nodes {
          photo {
            url
          }
          designation
          title
          slug
          locale
          button_label
        }
      }
    }
  `);
};
