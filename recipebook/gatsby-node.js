/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require('path');
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allContentfulRecipe {
          edges {
            node {
              name
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      result.data.allContentfulRecipe.edges.forEach((edge) => {
        createPage({
          path: edge.node.name,
          component: path.resolve('./src/templates/recipe.js'),
          context: {
            name: edge.node.name,
          },
        })
      })

      resolve()
    })
  })
}
