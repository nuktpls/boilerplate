// eslint-disable-next-line
import React from 'react'
import PropTypes from 'prop-types'

import GlobalContext from '../services/context'

import Body from '../components/Body'

export default LayoutResolver = ({ children, data }) => {
	return (
		<GlobalContext.Consumer>
			{(value) => <Body>{children}</Body>}
		</GlobalContext.Consumer>
	)
}

LayoutResolver.propTypes = {
	children: PropTypes.node.isRequired,
}
