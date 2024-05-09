import { useStaticQuery, graphql } from "gatsby";

export const Banners = () => {
  return useStaticQuery(graphql`
    {
      allStrapiBannerForListingPage {
        nodes {
          page_title
          banner {
            Button_label
            Description {
              data {
                Description
              }
            }
            Title {
              data {
                Title
              }
            }
            button_link
            desktop_media {
              url
            }
            mobile_media {
              url
            }
          }
        }
      }
    }
  `);
};
