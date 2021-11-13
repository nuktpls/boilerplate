import React from 'react'

import SeoContainer from '../containers/SeoContainer'
import GlobalContext from '../services/context'
import Body from '../components/Body'

const BodyContainer = ({ subAgent, opt }) => {
	return (
		<GlobalContext.Consumer>
			{(value) => (
				<>
					<SeoContainer title={opt.titleSeo} />
					<Body opt={opt}>{subAgent}</Body>
				</>
			)}
		</GlobalContext.Consumer>
	)
}
export default BodyContainer
