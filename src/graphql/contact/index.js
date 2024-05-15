import { useStaticQuery, graphql } from "gatsby";

export const Contact = () => {
  return useStaticQuery(graphql`
    {
      strapiContact {
        address {
          data {
            address
          }
        }
        address_title
        banner_title {
          data {
            banner_title
          }
        }
        email
        follow_us_description
        follow_us_label
        id
        locale
        location_map
        location_subtitle
        location_title
        number
        title
        social_media {
          title
          id
          icon {
            url
          }
        }
        form_title {
          title {
            data {
              title
            }
          }
          description {
            data {
              description
            }
          }
        }
      }
    }
  `);
};
