import { useStaticQuery, graphql } from "gatsby";

export const Banners = () => {
  return useStaticQuery(graphql`
    {
        strapiBannersForListingPage {
            banner {
              id
              Button_label
              Description {
                data {
                  Description
                }
              }
              Title
              button_link
              desktop_media {
                url
              }
              media_type
              mobile_media {
                url
              }
            }
            locale
          }
    }
  `);
};
