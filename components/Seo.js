import React from 'react'
import Helmet from 'react-helmet'
import SchemaOrg from './SchemaOrg'

const Seo = ({
	lang,
	title,
	siteTitle,
	metaDescription,
	siteAuthor,
	meta,
	siteUrl,
	image,
	author,
	organization,
	social,
	datePublished,
	description,
	url,
	isBlogPost,
}) => (
	<>
		<Helmet
			htmlAttributes={{
				lang,
			}}
			titleTemplate={`%s | ${siteTitle}`}
		>
			<title>{title}</title>
			<meta name="description" content={metaDescription} />
			<meta name="image" content={image} />
			<link rel="canonical" href={url} />

			{/* OpenGraph tags */}
			<meta property="og:url" content={url} />
			{isBlogPost ? <meta property="og:type" content="article" /> : null}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="fb:app_id" content={social.fbAppID} />

			{/* Twitter Card tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={social.twitter} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			{/*memory game*/}

			{/* <script src='../../libraries/jquery.js'></script>
      <script src='../../libraries/sweet-alert.js'></script>
      <script src='../../libraries/app.js'></script>
		*/}
			{/* <script src='../../libraries/test.js'></script> */}
		</Helmet>
		<SchemaOrg
			isBlogPost={isBlogPost}
			url={url}
			title={title}
			image={image}
			description={description}
			datePublished={datePublished}
			siteUrl={siteUrl}
			author={author}
			organization={organization}
			defaultTitle={title}
		/>
	</>
	// title={title}
	//   meta={[
	//     {
	//       name: `description`,
	//       content: metaDescription,
	//     },
	//     {
	//       property: `og:title`,
	//       content: title,
	//     },
	//     {
	//       property: `og:description`,
	//       content: metaDescription,
	//     },
	//     {
	//       property: `og:type`,
	//       content: `website`,
	//     },
	//     {
	//       name: `twitter:card`,
	//       content: `summary`,
	//     },
	//     {
	//       name: `twitter:creator`,
	//       content: siteAuthor,
	//     },
	//     {
	//       name: `twitter:title`,
	//       content: title,
	//     },
	//     {
	//       name: `twitter:description`,
	//       content: metaDescription,
	//     },
	//   ].concat(meta)}
	// />
)

export default Seo
