/* eslint-disable prettier/prettier */
module.exports = {
  siteMetadata: {
    title: `teecodes`,
    description: `Frontend developer portfolio built with React and Gatsby`,
    author: `Onwunali Tochukwu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#0091AD`,
        showSpinner: true,
      },
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
         classNameDark: "dark-mode",
         classNameLight: "light-mode",
         storageKey: "darkMode",
         minify: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0091AD`,
        theme_color: `#0091AD`,
        display: `minimal-ui`
        // icon: `src/images/text.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


