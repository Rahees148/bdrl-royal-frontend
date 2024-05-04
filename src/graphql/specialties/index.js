import { useStaticQuery, graphql } from "gatsby";

export const AllSpecialty = () => {
  return useStaticQuery(graphql`
    {
        allStrapiSpeciality {
            nodes {
                title
                slug
                icon {
                    url
                }
                id
            }
        }
    }
  `);
};
