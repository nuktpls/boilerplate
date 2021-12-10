import React from 'react'
import { graphql } from 'gatsby'

// import Layout from 'gatsby-layout-builder'

const ErrorPage = ({ data }) => {
	return (
		<div>
			<h1>oi</h1>
		</div>
	)
}
export default ErrorPage

export const queryAtividade = graphql`
	query {
		site {
			siteMetadata {
				title
				description
				siteUrl
			}
		}
		logotipoImg: file(relativePath: { eq: "diabetes-brasil-logo.png" }) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 115
					placeholder: NONE
					quality: 100
				)
			}
		}
		logotipoJogoMemoria: file(
			relativePath: { eq: "logotipo-jogodamemoria.png" }
		) {
			childrenImageSharp {
				gatsbyImageData(
					layout: FIXED
					width: 224
					placeholder: NONE
					quality: 100
				)
			}
		}
	}
`
