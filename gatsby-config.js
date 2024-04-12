//gatsby-config.js
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
console.log(process.env.STRAPI_API_URL);
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  collectionTypes: ["post", "category", "author", 
  { singularName: "page", queryParams:{
    populate:{
      banner:{
        populate:{
          desktop_media:"*",
          mobile_media:"*"
        }
      },
      centres_of_excellence:{
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
      }
    }
  } },
],
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