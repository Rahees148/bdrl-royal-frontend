import { useStaticQuery, graphql } from "gatsby";

export const AllDoctors = () => {
  return useStaticQuery(graphql`
    {
      allStrapiDoctor {
        nodes {
          Name
          slug
          Image {
            url
          }
          designation
          speciality {
            slug
            title
          }
          centers_of_excellence {
            slug
            title

          }
          degrees
          area_of_expertise {
            title
            list {
              title
              image {
                url
              }
            }
          }
        }
      }
    }
  `);
};
