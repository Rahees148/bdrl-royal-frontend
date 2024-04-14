//gatsby-config.js
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
console.log(process.env.STRAPI_API_URL);
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  collectionTypes: ["post", "category", "author", "news-and-events",
  { singularName: "testimonial", queryParams:{
    populate:{
      author_photo:"*",
      image:"*",
      treated_by:"*",
      seo: "*",
    }
  } },
],
singleTypes:[{ singularName: "home", queryParams:{
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
  }
} },]
};


module.exports = {
  plugins: [
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