module.exports = {
  siteMetadata: {
    siteUrl: "https://iqbaltawakal.my.id",
    title: "Iqbal Tawakal",
    description:
      "Iqbal Tawakal is a UI/UX Designer and Front-End Developer from Indonesia. Currently working as Web Designer in YCP Solidiance IndonesiaIqbal Tawakal is a UI/UX Designer from Indonesia. Currently working as Web Designer in YCP Solidiance Indonesia",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Iqbal Tawakal`,
        short_name: `iqbaltawakal`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
