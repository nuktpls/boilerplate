const path = require('path')
const rootDir = path.join(__dirname, '../')
const businessInfos = require('./package.json')

module.exports = {
  siteMetadata: {
    pathPrefix: businessInfos.urlPrefix,
    title: businessInfos.appName,
    description: businessInfos.description,
    author: businessInfos.author,
    siteUrl: 'http://localhost:8000',
    searchBaseUrl: businessInfos.searchBaseUrl,
    keywords: businessInfos.keywords,
    image: `${__dirname}/static/images/descola-logo.svg`,
    dateCreated: businessInfos.dateCreated,
    postsPerPage: businessInfos.postsPerPage,
    themeColor: businessInfos.themeColor,
    organization: {
      name: businessInfos.organization.name,
      email: businessInfos.organization.email,
      url: businessInfos.organization.url,
      logo: businessInfos.organization.logo,
      cardImage: businessInfos.organization.cardImage,
    },
    social: {
      instagram: businessInfos.clientSocial.instagram,
      facebook: businessInfos.clientSocial.facebook,
      linkedIn: businessInfos.clientSocial.linkedIn,
      youtube: businessInfos.clientSocial.youtube,
      twitter: businessInfos.clientSocial.twitter,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-layout-builder`,
    `gatsby-layout-builder-seo`,
    `gatsby-remark-relative-images`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-lazy-load`, `gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, 'static/images/'),
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Roboto Slab:100,300,400,500,600,700',
          'Montserrat:100,300,500,600',
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@BlockBuilder': path.resolve(__dirname, 'src/modules/block-builder'),
          '@Posts': path.resolve(rootDir, 'posts'),
          '@Content': path.resolve(rootDir, 'content'),
          '@Images': path.resolve(__dirname, 'static/images'),
        },
        extensions: ['js', 'scss'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static\/images/, // See below to configure properly
        },
      },
    },
  ],
}
