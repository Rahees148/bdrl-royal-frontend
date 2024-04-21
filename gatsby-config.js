//gatsby-config.js
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
console.log(process.env.STRAPI_API_URL);
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  collectionTypes: ["post", "category", "author", 
  { singularName: "main-menu",queryParams:{
    populate:{
      localizations:{
        populate: {
          mainmenu:{
            populate:{
              title:"*",
              dropdown:{
                populate:{
                  icon: "*"
                }
              }
            }
          }
        }
      },
      mainmenu:{
        populate:{
          title:"*",
          dropdown:{
            populate:{
              icon: "*"
            }
          }
        }
      }
    },
    pluginOptions: {
      i18n: {
        locale: "all", // Fetch all localizations
      },
    },
  } },
  { singularName: "testimonial", queryParams:{
    populate:{
      localizations:{
        populate:{
          author_photo:"*",
          image:"*",
          treated_by:"*",
          seo: "*",
        }
      },
      author_photo:"*",
      image:"*",
      treated_by:"*",
      seo: "*",
    },
    pluginOptions: {
      i18n: {
        locale: "all", // Fetch all localizations
      },
    },
  } },
  { singularName: "news-and-event", queryParams:{
    populate:{
      localizations: {
        populate:{
          author_photo:"*",
          image:"*",
          treated_by:"*",
          seo: "*",
        }
      },
      author_photo:"*",
      image:"*",
      treated_by:"*",
      seo: "*",
    },
    pluginOptions: {
      i18n: {
        locale: "all", // Fetch all localizations
      },
    },
  } },
],
singleTypes:[
  { 
    singularName: "home", 
    queryParams:{
      populate:{
        localizations:{
          populate:{
            banner:{
              populate:{
                desktop_media:"*",
                mobile_media:"*"
              }
            },
            centres_excellence:{
              populate:{
                card:{
                  populate:{
                    icon:"*",
                    image:"*"
                  }
                }
              }
            },
            exceptional_care:{
              populate:{
                card:{
                  populate:{
                    icon:"*",
                    image:"*"
                  }
                }
              }
            },
            sliding_card:{
              populate:{
                icon:"*",
                image:"*"
              }
            },
            image_text:{
              populate:{
                icon:"*",
                image:"*"
              }
            },
            testimonials_title:{
              populate:"*"
            },
            news_event_title:{
              populate:"*"
            },
            seo:{
              populate:"*"
            }
          },
        },
        banner:{
          populate:{
            desktop_media:"*",
            mobile_media:"*"
          }
        },
        centres_excellence:{
          populate:{
            card:{
              populate:{
                icon:"*",
                image:"*"
              }
            }
          }
        },
        exceptional_care:{
          populate:{
            card:{
              populate:{
                icon:"*",
                image:"*"
              }
            }
          }
        },
        sliding_card:{
          populate:{
            icon:"*",
            image:"*"
          }
        },
        image_text:{
          populate:{
            icon:"*",
            image:"*"
          }
        },
        testimonials_title:{
          populate:"*"
        },
        news_event_title:{
          populate:"*"
        },
        seo:{
          populate:"*"
        }
      },
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    } 
  },
  { 
    singularName: "about-an-overview", 
    queryParams:{
      populate:{
        localizations: {
          populate:{
            banner:{
              populate:{
                desktop_media:"*",
                mobile_media:"*"
              }
            },
            title_description:{
              populate:"*"
            },
            media:{
              populate:{
                desktop_media:"*",
                mobile_media:"*"
              }
            },
            highlights:{
              populate:"*"
            },
            highlight_card:{
              populate:{
                icon:"*",
              }
            },
            why_us_title_description:{
              populate:"*"
            },
            why_us_cards:{
              populate:{
                image:"*",
              }
            },
            // seo:{
            //   populate:"*"
            // }
          },
        },
        banner:{
          populate:{
            desktop_media:"*",
            mobile_media:"*"
          }
        },
        title_description:{
          populate:"*"
        },
        media:{
          populate:{
            desktop_media:"*",
            mobile_media:"*"
          }
        },
        highlights:{
          populate:"*"
        },
        highlight_card:{
          populate:{
            icon:"*",
          }
        },
        why_us_title_description:{
          populate:"*"
        },
        why_us_cards:{
          populate:{
            image:"*",
          }
        },
        // seo:{
        //   populate:"*"
        // }
      },
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    } 
  }
]
};


module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `ar`,],
        defaultLanguage: `en`,
        siteUrl: `http://localhost:8000/`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        }
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};