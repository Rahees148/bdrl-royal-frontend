import { useStaticQuery, graphql } from "gatsby";

export const Content = () => {
  return useStaticQuery(graphql`
    {
        allStrapiAboutAnOverview {
            nodes {
                banner {
                Title
                Description {
                    data {
                    childMarkdownRemark {
                        html
                    }
                    }
                }
                mobile_media {
                    url
                }
                desktop_media {
                    url
                }
                }
                highlight_card {
                    title
                    icon {
                        url
                    }
                }
                locale
                title
                title_description {
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
                highlights {
                    title {
                        data {
                          title
                        }
                      }
                    tagline
                    }
                why_us_cards {
                description
                title
                image {
                    url
                }
                }
                why_us_title_description {
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
                media {
                desktop_media {
                    url
                }
                }
            }
            }
    }
  `);
};
