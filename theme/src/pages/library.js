import React from 'react'
import { graphql } from 'gatsby'
import GatsbyLoginForm from '../modules/gatsby-login-form'

// import Layout from 'gatsby-layout-builder'

const LibraryPage = ({ data }) => {
	return (
		<div>
			<h1>library</h1>
			<GatsbyLoginForm />
		</div>
	)
}
export default LibraryPage
