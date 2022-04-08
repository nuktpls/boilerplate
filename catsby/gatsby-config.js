const path = require('path')
const rootDir = path.join(__dirname, '../')
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-descola',
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.resolve(rootDir, 'posts/'),
      },
    },
  ],
}
