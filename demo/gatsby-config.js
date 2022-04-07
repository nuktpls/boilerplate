module.exports = {
  plugins: [
    {
      resolve: 'gatsby-layout-builder',
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
      },
    },
  ],
}
