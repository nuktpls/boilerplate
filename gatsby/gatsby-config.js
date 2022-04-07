module.exports = {
  plugins: [
    {
      resolve: 'nuktpls-boilerplate',
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: false,
      },
    },
  ],
}
