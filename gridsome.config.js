module.exports = {
  siteName: "qblt",
  siteDescription: "Blog+Portfolio Website of Muhamad Iqbal Tawakal",
  plugins: [
    {
      use: "@gridsome/source-strapi",
      options: {
        // apiURL: `https://qblt-strapi.herokuapp.com`,
        apiURL: `http://localhost:1337`,
        queryLimit: 100, // Defaults to 100
        contentTypes: [`post`, `portfolio`],
      },
    },
  ],
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
};
