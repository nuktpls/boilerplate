import React, { useState } from 'react'

import Header from '../components/Header'

const HeaderContainer = ({ opt }) => {
	const logoHeader = opt ? opt.logoHeader : null
	const [refState, setRefState] = useState(false)
	function handleRefState() {
		setRefState(!refState)
	}
	const menuActive = refState ? 'visible' : 'not-visible'
	return (
		<Header
			refState={refState}
			handleRefState={handleRefState}
			logoComponent={logoHeader}
			isRefVisible={menuActive}
		/>
	)
}

export default HeaderContainer
