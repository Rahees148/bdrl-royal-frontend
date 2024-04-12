import { useStaticQuery, graphql } from "gatsby";

export const Content = () => {
  return useStaticQuery(graphql`
    {
        allStrapiPage(filter: {Title: {eq: "Home"}}) {
            nodes {
              Title
              locale
              banner {
                Title
                button_link
                Button_label
                Description {
                  data {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
                desktop_media {
                  url
                }
                media_type
                mobile_media {
                  url
                }
              }
              centres_of_excellence {
                Title
                button_label
                button_link
                description
                card {
                  Title
                  button_label
                  button_link
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
                  image {
                    url
                  }
                }
              }
              sliding_card {
                Title
                button_label
                button_link
                icon {
                  url
                }
                image {
                  url
                }
                media_type
                description {
                  data {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
                sub_title
              }
            }
          }
    }
  `);
};
