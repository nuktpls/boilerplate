import React, { useState } from 'react'

import Footer from '../components/Footer'

const FooterContainer = ({ subAgent, opt }) => {
	const [refState, setRefState] = useState(false)
	function handleRefState() {
		setRefState(!refState)
	}
	return (
		<Footer
			refState={refState}
			handleRefState={handleRefState}
			subAgent={subAgent}
			opt={opt}
		/>
	)
}

export default FooterContainer
