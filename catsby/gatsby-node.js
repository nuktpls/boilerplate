// const { createFilePath } = require('gatsby-source-filesystem')

// exports.onCreateNode = args => {
//   console.log(args)
//   const { actions, node } = args
//   if (node.internal.type === 'MarkdownRemark') {
//     const { createNodeField } = actions

//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
