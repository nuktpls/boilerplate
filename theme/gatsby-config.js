require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path')
const businessInfos = require('./package.json')

module.exports = {
	siteMetadata: {
		pathPrefix: businessInfos.urlPrefix,
		title: businessInfos.appName,
		description: businessInfos.description,
		author: businessInfos.author,
		siteUrl: businessInfos.siteUrl,
		image: `${__dirname}/static/images/diabetes-brasil-logo.png`,
		coauthor: {
			name: businessInfos.coauthor,
			minibio: businessInfos.coauthordesc,
		},
		organization: {
			name: businessInfos.clientOrg,
			url: businessInfos.clientSite,
			logo: `${__dirname}/static/images/diabetes-brasil-logo.png`,
		},
		social: {
			instagram: businessInfos.clientSocial.instagram,
			facebook: businessInfos.clientSocial.facebook,
			twitter: businessInfos.clientSocial.twitter,
			youtube: businessInfos.clientSocial.youtube,
		},
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		`gatsby-transformer-sharp`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: 'gatsby-plugin-page-creator',
			options: {
				path: path.join(__dirname, 'src/pages'),
			},
		},
		{
			resolve: `gatsby-business-in-build`,
			options: {
				name: 'Atomic Theme',
				version: '0.0.0',
				developer: 'Milton Bolonha',
				coauthorBusiness: 'Edu4Dev',
				project: 'Gatsby Business in Build',
				url: 'https://dominiofinal.com',
				message: 'Copie muito.',
			},
		},
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/static/images/`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@AtomicBlock': path.resolve(__dirname, 'src/modules/atomic-block'),
					'@BlockBuilder': path.resolve(__dirname, 'src/modules/block-builder'),
					'@Layout': path.resolve(__dirname, 'src/modules/layout'),
					'@tools': path.resolve(__dirname, 'src/tools'),
					'@styles': path.resolve(__dirname, 'src/styles'),
				},
				extensions: ['js', 'scss'],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: businessInfos.clientOrg,
				short_name: businessInfos.clientShortName,
				start_url: businessInfos.urlPrefix,
				background_color: businessInfos.backgroundColor,
				theme_color: businessInfos.theme_color,
				display: businessInfos.displayManifest,
				icon: `${__dirname}/static/images/${businessInfos.iconManifest}`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					businessInfos.importFont.font01,
					businessInfos.importFont.font02,
					businessInfos.importFont.font03,
				],
				display: 'swap',
			},
		},
	],
}
