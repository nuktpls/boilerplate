import React, { useRef } from 'react'
import useListenOutsideEvents from '../tools/useListenOutsideEvents'
import { mainMenuEventsSettings } from '../config/'

import FooterMainMenu from '../components/FooterMainMenu'

const FooterMainMenuContainer = (props) => {
	const { refState } = props
	const { handleRefState } = props
	const wrapperRef = useRef(null)
	const toggleConfig = mainMenuEventsSettings({
		wrapperRef,
		handleRefState,
		refState,
	})
	useListenOutsideEvents(toggleConfig)
	const isVisibleClass = refState ? 'visible' : 'not-visible'
	return (
		<FooterMainMenu wrapperRef={wrapperRef} isVisibleClass={isVisibleClass} />
	)
}

export default FooterMainMenuContainer
