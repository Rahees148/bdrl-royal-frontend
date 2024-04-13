import { useStaticQuery, graphql } from "gatsby";

export const Content = () => {
  return useStaticQuery(graphql`
    {
      allStrapiHome {
        nodes {
          title
          banner {
            Button_label
            Title
            button_link
            media_type
            mobile_media {
              url
            }
            desktop_media {
              url
            }
            Description {
              data {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
          centres_excellence {
            Title
            button_label
            button_link
            description
            card {
              Title
              button_label
              button_link
              image {
                url
              }
              media_type
              sub_title
              icon {
                url
              }
              description {
                data {
                  childMarkdownRemark {
                    html
                  }
                }
              }
            }
          }
          exceptional_care {
            Title
            description
            card {
              Title
              sub_title
              image {
                url
              }
            }
          }
          testimonials_title {
            button_label
            button_link
            description
            title
          }
          news_event_title {
            button_label
            button_link
            title
            description
          }
          image_text {
            Title
            button_label
            button_link
            description {
              data {
                childMarkdownRemark {
                  html
                }
              }
            }
            icon {
              url
            }
            image {
              url
            }
            media_type
            sub_title
          }
          sliding_card {
            Title
            button_label
            button_link
            sub_title
            image {
              url
            }
            description {
              data {
                childMarkdownRemark {
                  html
                }
              }
            }
            media_type
          }
          seo {
            meta_description
            meta_keyword
            meta_title
          }
        }
      }
    }
  `);
};
