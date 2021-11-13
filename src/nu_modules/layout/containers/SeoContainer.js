import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Seo from '../components/Seo'

function SeoContainer({ frontmatter = {}, description, lang, meta, title }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
						author {
							name
						}
						organization {
							name
							url
						}
						social {
							twitter
						}
					}
				}
			}
		`
	)

	const metaDescription = description || site.siteMetadata.description

	return (
		<Seo
			lang={lang}
			title={title}
			siteTitle={site.siteMetadata.title}
			url={site.siteMetadata.organization.url}
			metaDescription={metaDescription}
			description={description || site.siteMetadata.description}
			siteAuthor={site.siteMetadata.author}
			meta={meta}
			siteUrl={site.siteMetadata.siteUrl}
			// image={site.siteMetadata.image}
			author={site.siteMetadata.author}
			organization={site.siteMetadata.organization}
			social={site.siteMetadata.social}
			datePublished="0"
			isBlogPost="0"
		/>
	)
}

SeoContainer.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

SeoContainer.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default SeoContainer
