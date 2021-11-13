import React from 'react'

import BodyContainer from './BodyContainer'
import HeaderContainer from './HeaderContainer'
import FooterContainer from './FooterContainer'
import RowContainer from './RowContainer'

const AgentResolver = ({ type, opt, logo, subAgent }) => {
	function renderComponent(renderThis) {
		switch (renderThis) {
			case 'BODY':
				return <BodyContainer subAgent={subAgent} opt={opt} />
			case 'FOOTER':
				return <FooterContainer subAgent={subAgent} opt={opt} />
			case 'HEADER':
				return <HeaderContainer opt={opt} />
			case 'ROW':
				return <RowContainer opt={opt} subAgent={subAgent} />
			default:
				return console.log(renderThis)
		}
	}
	return <>{renderComponent(type)}</>
}
export default AgentResolver
