// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require("fs");
const http = require("http");
const path = require("path");

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allStrapiPost {
          edges {
            node {
              id
              slug
            }
          }
        }
        allStrapiPortfolio {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `);

    const posts = data.allStrapiPost.edges;
    const portfolios = data.allStrapiPortfolio.edges;

    posts.forEach(({ node }) => {
      createPage({
        path: `/post/${node.slug}`,
        component: "./src/templates/Post.vue",
        context: {
          id: node.id,
          slug: node.slug,
        },
      });
    });

    portfolios.forEach(({ node }) => {
      createPage({
        path: `/portfolio/${node.slug}`,
        component: "./src/templates/Portfolio.vue",
        context: {
          id: node.id,
          slug: node.slug,
        },
      });
    });
  });
};
