
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })

  const { data } = await graphql(` 
  {
    allShopifyProduct {
      edges {
        node {
          shopifyId
          handle
        }
      }
    }
  }
  `)

  data.allShopifyProduct.edges.forEach(({ node })=> {
    createPage({
      path: `/products/${node.handle}`,
      context: {
        shopifyId: node.shopifyId
      },
      component: path.resolve('./src/templates/ProductTemplate/index.js')
    })
  })
}
