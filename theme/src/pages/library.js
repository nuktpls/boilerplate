import React from 'react'
import { graphql } from 'gatsby'
import PoupaLuz from '../modules/PoupaLuz'
// import GatsbyLoginForm from '../modules/gatsby-login-form'

// import Layout from 'gatsby-layout-builder'

const LibraryPage = ({ data }) => {
	return (
		<div>
			<h1>library</h1>
			{/* <GatsbyLoginForm /> */}
			<PoupaLuz
				nu_teias={{
					agent: 'subscribe',
					options: {
						link: false,
					},
				}}
			/>
		</div>
	)
}
export default LibraryPage
