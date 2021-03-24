// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "qblt",
  templates: {
    post: [
      {
        path: (node) => {
          return `/post/${node.slug}`;
        },
      },
    ],
    portfolio: [
      {
        path: (node) => {
          return `/portfolio/${node.slug}`;
        },
      },
    ],
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "posts/*.md",
        typeName: "post",
        remark: {
          plugins: [
            [
              "@gridsome/remark-prismjs",
              {
                customClassPrefix: "p-",
              },
            ],
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "portfolios/*.md",
        typeName: "portfolio",
      },
    },
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: `https://qblt-admin.herokuapp.com/`,
        queryLimit: 1000, // Defaults to 100
        contentTypes: [`portfolios`, `posts`],
      },
    },
  ],
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
};
