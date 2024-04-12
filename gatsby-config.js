//gatsby-config.js
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
console.log(process.env.STRAPI_API_URL);
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  collectionTypes: ["post", "category", "author", 
  { name: "page", endpoint: "pages?populate=*" },,
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
  ],
};