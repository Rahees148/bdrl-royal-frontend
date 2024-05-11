//gatsby-config.js
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
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
          seo: "*",
        }
      },
      author_photo:"*",
      image:"*",
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
          seo: "*",
        }
      },
      author_photo:"*",
      image:"*",
      seo: "*",
    },
    pluginOptions: {
      i18n: {
        locale: "all", // Fetch all localizations
      },
    },
  } },
  { singularName: "leadership-list", queryParams:{
    populate:{
      localizations: {
        populate:{
          title:"*",
          button_label:"*",
          designation: "*",
          description: "*",
          photo: "*",
          awards_title:{
            populate:{
              description:"*",
            }
          },
          awards_icon:{
            populate:{
              icon:"*",
            }
          },
          key_position_title_description:{
            populate:{
              description:"*",
            }
          },
          keyposition_icons:{
            populate:{
              icon:"*",
            }
          },
          form_title_description:{
            populate:{
              description:"*",
            }
          }
        }
      },
      title:"*",
      button_label:"*",
      designation: "*",
      description: "*",
      photo: "*",
      awards_title:{
        populate:{
          title:"*",
          description:"*",
        }
      },
      award_icons:{
        populate:{
          icon:"*",
        }
      },
      key_position_title_description:{
        populate:{
          title:"*",
          description:"*",
        }
      },
      keyposition_icons:{
        populate:{
          icon:"*",
        }
      },
      form_title_description:{
        populate:{
          title:"*",
          description:"*",
        }
      }
    },
    pluginOptions: {
      i18n: {
        locale: "all", // Fetch all localizations
      },
    },
  } },
  { singularName: "doctor", queryParams:{
    populate:{
      localizations: {
        populate:{
          Name:"*",
          Image:"*",
          designation: "*",
          degrees: "*",
          experience: "*",
          description: "*",
          area_of_expertise:{
            populate:{
              list:{
                populate:{
                  title:"*",
                  image:"*",
                  description:"*",
                }
              }
            }
          },
          qualification:{
            populate:{
              title:"*",
              description:"*",
            }
          },
          awards:{
            populate:{
              title:"*",
              list:{
                populate:{
                  image:"*",
                  title:"*",
                  description:"*",
                }
              }
            }
          },
          work_experience:{
            populate:{
              title:"*",
              description:"*",
            }
          },
          opd_timings:{
            populate:{
              title:"*",
              description:"*",
            }
          },
          form_title:{
            populate:{
              description:"*",
            }
          },
          slug:"*",
          speciality:{
            populate:{
              title:"*",
              icon:"*",
              slug:"*"
            }
          },
          centers_of_excellence:{
            populate:{
              title:"*",
              icon:"*",
              slug:"*"
            }
          },
          top_procedures:"*",
          blogs_and_vlogs:{
            populate:{
              description:"*",
              media:"*",
              doctor:"*",
            }
          },
          testimonials:"*",
          doctor_email:"*"
        }
      },
      Name:"*",
      Image:"*",
      designation: "*",
      degrees: "*",
      experience: "*",
      description: "*",
      area_of_expertise:{
        populate:{
          list:{
            populate:{
              title:"*",
              image:"*",
              description:"*",
            }
          }
        }
      },
      qualification:{
        populate:{
          title:"*",
          description:"*",
        }
      },
      awards:{
        populate:{
          title:"*",
          list:{
            populate:{
              image:"*",
              title:"*",
              description:"*",
            }
          }
        }
      },
      work_experience:{
        populate:{
          title:"*",
          description:"*",
        }
      },
      opd_timings:{
        populate:{
          title:"*",
          description:"*",
        }
      },
      form_title:{
        populate:{
          description:"*",
        }
      },
      blogs_vlogs_title:{
        populate:{
          description:"*",
        }
      },
      slug:"*",
      speciality:{
        populate:{
          title:"*",
          icon:"*",
          slug:"*"
        }
      },
      centers_of_excellence:{
        populate:{
          title:"*",
          icon:"*",
          slug:"*"
        }
      },
      top_procedures:"*",
      blogs_and_vlogs:{
        populate:{
          description:"*",
          media:"*",
          doctor:"*",
        }
      },
      testimonials:"*",
      doctor_email:"*"
    },
    pluginOptions: {
      i18n: {
        locale: "all", // Fetch all localizations
      },
    },
  } },
  { singularName: "centers-of-excellence", queryParams:{
    populate:{
      localizations: {
        populate:{
          title:"*",
          slug:"*",
          icon: "*",
          doctors: "*",
          banner: {
            populate:{
              Title: "*",
              Description: "*",
              Button_label: "*",
              button_link: "*",
              desktop_media: "*",
              mobile_media: "*"
            }
          },
          introduction: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          key_highlights:{
            populate:{
              title:"*",
              list:{
                populate:{
                  title:"*",
                  image:"*",
                  description:"*",
                }
              }
            }
          },
          our_experts_title: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          our_treatments:{
            populate:{
              title:"*",
              list:{
                populate:{
                  title:"*",
                  image:"*",
                  description:"*",
                }
              }
            }
          },
          diseases_ailments:{
            populate:{
              title:"*",
              list:{
                populate:{
                  title:"*",
                  image:"*",
                  description:"*",
                }
              }
            }
          },
          technology_utilisation: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          patient_testimonials_title: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          testimonials:"*",
          technologies:"*",
          blogs_vlogs_title: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          blogs_and_vlogs:{
            populate:{
              media:"*",
              doctor:"*",
              description:"*"
            }
          },
          
        }
      },
      title:"*",
          slug:"*",
          icon: "*",
          doctors: "*",
          banner: {
            populate:{
              Title: "*",
              Description: "*",
              Button_label: "*",
              button_link: "*",
              desktop_media: "*",
              mobile_media: "*"
            }
          },
          introduction: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          key_highlights:{
            populate:{
              title:"*",
              list:{
                populate:{
                  title:"*",
                  image:"*",
                  description:"*",
                }
              }
            }
          },
          our_experts_title: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          our_treatments:{
            populate:{
              title:"*",
              list:{
                populate:{
                  title:"*",
                  image:"*",
                  description:"*",
                }
              }
            }
          },
          diseases_ailments:{
            populate:{
              title:"*",
              list:{
                populate:{
                  title:"*",
                  image:"*",
                  description:"*",
                }
              }
            }
          },
          technology_utilisation: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          patient_testimonials_title: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          testimonials:"*",
          technologies:"*",
          blogs_vlogs_title: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          blogs_and_vlogs:{
            populate:{
              media:"*",
              doctor:"*",
              description:"*"
            }
          },
    },
    pluginOptions: {
      i18n: {
        locale: "all", // Fetch all localizations
      },
    },
  } },
  { singularName: "speciality", queryParams:{
    populate:{
      localizations: {
        populate:{
          title:"*",
          slug:"*",
          icon: "*",
          doctors: "*",
          banner: {
            populate:{
              Title: "*",
              Description: "*",
              Button_label: "*",
              button_link: "*",
              desktop_media: "*",
              mobile_media: "*"
            }
          },
          introduction: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          our_experts: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          our_treatments:{
            populate:{
              title:"*",
              list:{
                populate:{
                  title:"*",
                  image:"*",
                  description:"*",
                }
              }
            }
          },
          technology_utilisation_title: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          patient_testimonials: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          testimonials:"*",
          technologies:"*",
          blogs_vlogs: {
            populate:{
              title:"*",
              button_label:"*",
              button_link:"*",
              tagline:"*",
              description:"*"
            }
          },
          blogs_and_vlogs:{
            populate:{
              media:"*",
              doctor:"*",
              description:"*"
            }
          },
          
        }
      },
      title:"*",
      slug:"*",
      icon: "*",
      doctors: "*",
      banner: {
        populate:{
          Title: "*",
          Description: "*",
          Button_label: "*",
          button_link: "*",
          desktop_media: "*",
          mobile_media: "*"
        }
      },
      introduction: {
        populate:{
          title:"*",
          button_label:"*",
          button_link:"*",
          tagline:"*",
          description:"*"
        }
      },
      our_experts: {
        populate:{
          title:"*",
          button_label:"*",
          button_link:"*",
          tagline:"*",
          description:"*"
        }
      },
      our_treatments:{
        populate:{
          title:"*",
          list:{
            populate:{
              title:"*",
              image:"*",
              description:"*",
            }
          }
        }
      },
      technology_utilisation_title: {
        populate:{
          title:"*",
          button_label:"*",
          button_link:"*",
          tagline:"*",
          description:"*"
        }
      },
      patient_testimonials: {
        populate:{
          title:"*",
          button_label:"*",
          button_link:"*",
          tagline:"*",
          description:"*"
        }
      },
      testimonials:"*",
      technologies:"*",
      blogs_vlogs: {
        populate:{
          title:"*",
          button_label:"*",
          button_link:"*",
          tagline:"*",
          description:"*"
        }
      },
      blogs_and_vlogs:{
        populate:{
          media:"*",
          doctor:"*",
          description:"*"
        }
      },
      
    },
    pluginOptions: {
      i18n: {
        locale: "all", // Fetch all localizations
      },
    },
  } },
 { singularName: "top-procedur", queryParams:{
    populate:{
      localizations: {
        populate:{
          title:"*",
          slug:"*",
          banner_details: {
            populate:{
              Title: "*",
              Description: "*",
              Button_label: "*",
              button_link: "*",
              desktop_media: "*",
              mobile_media: "*"
            }
          },
          about_procedure: {
            populate:{
              button_label: "*",
              button_link: "*",
              tagline: "*",
              description: "*",
              title: "*",
            }
          },
          procedure: {
            populate:{
              title: "*",
              description: "*",
             list:{
              populate:{
                title: "*",
                subtitle: "*",
                button_label: "*",
                image: "*",
                description: "*"
              }
             }
            }
          },
          benifits_risk: {
            populate:{
              title:"*",
              description:"*",
              list:{
                populate:{
                  title: "*",
                  subtitle: "*",
                  button_label: "*",
                  image: "*",
                  description: "*"
                }
              }
            }
          },
          doctors: "*",
          specialities: "*",
          centers_of_excellences: "*",
          form_title:{
            populate:{
              title:"*",
              description:"*",
            }
          },
        }
      },
      title:"*",
      slug:"*",
      banner_details: {
        populate:{
          Title: "*",
          Description: "*",
          Button_label: "*",
          button_link: "*",
          desktop_media: "*",
          mobile_media: "*"
        }
      },
      about_procedure: {
        populate:{
          button_label: "*",
          button_link: "*",
          tagline: "*",
          description: "*",
          title: "*",
        }
      },
      procedure: {
        populate:{
          title: "*",
          description: "*",
          list:{
          populate:{
            title: "*",
            subtitle: "*",
            button_label: "*",
            image: "*",
            description: "*"
          }
          }
        }
      },
      benifits_risk: {
        populate:{
          title:"*",
          description:"*",
          list:{
            populate:{
              title: "*",
              subtitle: "*",
              button_label: "*",
              image: "*",
              description: "*"
            }
          }
        }
      },
      doctors: "*",
      specialities: "*",
      centers_of_excellences: "*",
      form_title:{
        populate:{
          title:"*",
          description:"*",
        }
      },
    },
    pluginOptions: {
      i18n: {
        locale: "all", // Fetch all localizations
      },
    },
  } },
  { singularName: "technology", queryParams:{
    populate:{
      localizations: {
        populate:{
          title:"*",
          slug:"*",
          banner_details: {
            populate:{
              Title: "*",
              Description: "*",
              Button_label: "*",
              button_link: "*",
              desktop_media: "*",
              mobile_media: "*"
            }
          },
          about_technology: {
            populate:{
              button_label: "*",
              button_link: "*",
              tagline: "*",
              description: "*",
              title: "*",
            }
          },
          how_does_help: {
            populate:{
              title: "*",
              description: "*",
             list:{
              populate:{
                title: "*",
                subtitle: "*",
                button_label: "*",
                image: "*",
                description: "*"
              }
             }
            }
          },
          how_is_done: {
            populate:{
              title:"*",
              description:"*",
              list:{
                populate:{
                  title: "*",
                  subtitle: "*",
                  button_label: "*",
                  image: "*",
                  description: "*"
                }
              }
            }
          },
          listing_image: "*",
          doctors: "*",
          specialities: "*",
          centers_of_excellences: "*",
          top_procedures: "*",
        }
      },
      title:"*",
      slug:"*",
      banner_details: {
        populate:{
          Title: "*",
          Description: "*",
          Button_label: "*",
          button_link: "*",
          desktop_media: "*",
          mobile_media: "*"
        }
      },
      about_technology: {
        populate:{
          button_label: "*",
          button_link: "*",
          tagline: "*",
          description: "*",
          title: "*",
        }
      },
      how_does_help: {
        populate:{
          title: "*",
          description: "*",
         list:{
          populate:{
            title: "*",
            subtitle: "*",
            button_label: "*",
            image: "*",
            description: "*"
          }
         }
        }
      },
      how_is_done: {
        populate:{
          title:"*",
          description:"*",
          list:{
            populate:{
              title: "*",
              subtitle: "*",
              button_label: "*",
              image: "*",
              description: "*"
            }
          }
        }
      },
      doctors: "*",
      specialities: "*",
      centers_of_excellences: "*",
      top_procedures: "*",
      listing_image: "*",
    },
    pluginOptions: {
      i18n: {
        locale: "all", // Fetch all localizations
      },
    },
  } },
  { singularName: "banner-for-listing-page", queryParams:{
    populate:{
      localizations:{
        populate:{
          page_title:"*",
          banner:{
            populate:{
              Title:"*",
              Description:"*",
              Button_label:"*",
              button_link:"*",
              media_type:"*",
              desktop_media:"*",
              mobile_media:"*"
            }
          }
        },
      },
      page_title:"*",
      banner:{
        populate:{
          Title:"*",
          Description:"*",
          Button_label:"*",
          button_link:"*",
          media_type:"*",
          desktop_media:"*",
          mobile_media:"*"
        }
      }
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
              populate:{
                title:"*"
              }
            },
            news_event_title:{
              populate:{
                title:"*"
              }
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
          populate:{
            title:"*"
          }
        },
        news_event_title:{
          populate:{
            title:"*"
          }
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
            banner_details:{
              populate:{
                desktop_media:"*",
                mobile_media:"*"
              }
            },
            title_description:{
              populate:{
                title:"*"
              }
            },
            media:{
              populate:{
                desktop_media:"*",
                mobile_media:"*"
              }
            },
            highlights:{
              populate:{
                title:"*"
              }
            },
            highlight_card:{
              populate:{
                icon:"*",
              }
            },
            why_us_title_description:{
              populate:{
                title:"*"
              }
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
        banner_details:{
          populate:{
            desktop_media:"*",
            mobile_media:"*"
          }
        },
        title_description:{
          populate:{
            title:"*"
          }
        },
        media:{
          populate:{
            desktop_media:"*",
            mobile_media:"*"
          }
        },
        highlights:{
          populate:{
            title:"*"
          }
        },
        highlight_card:{
          populate:{
            icon:"*",
          }
        },
        why_us_title_description:{
          populate:{
            title:"*"
          }
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
  },
  { 
    singularName: "leadership", 
    queryParams:{
      populate:{
        localizations: {
          populate:{
            title_description:{
              populate:"*"
            },
            leaders:{
              populate:{
                image:"*",
                link_to: "*",
              }
            },
            // seo:{
            //   populate:"*"
            // }
          },
        },
        title_description:{
          populate:{
            title:"*"
          }
        },
        leaders:{
          populate:{
            image:"*",
            link_to: "*",
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