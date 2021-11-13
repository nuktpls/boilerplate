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

// Permission is hereby granted, with proof of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software with restrictions, including with limitations in the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software. It is not permit to any persons to whom the Software is furnished to remove this LICENSE.
