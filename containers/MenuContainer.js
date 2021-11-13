import { React, useRef } from '../dependencies'
import useListenOutsideEvents from '../../../tools/useListenOutsideEvents'

import MainMenu from '../components/MainMenu'
import arrayMenus from '../configs/main-menu-config.json'

const FooterMainMenuContainer = ({ refState, handleRefState }) => {
	const wrapperRef = useRef(null)

	const toggleConfig = {
		wrapperRef: wrapperRef,
		refState: refState,
		handleRefState: handleRefState,
		// application configs
		scroll: true,
		resize: true,
		outsideClick: true,
		hasOverlay: false,
		mouseDown: {
			on: true,
			clickElement: '.menu-wrapper',
		},
	}
	useListenOutsideEvents(toggleConfig)
	const isVisibleClass = toggleConfig.refState ? 'visible' : 'not-visible'
	return (
		<MainMenu
			wrapperRef={toggleConfig.wrapperRef}
			isVisibleClass={isVisibleClass}
			arrayMenus={arrayMenus}
		/>
	)
}

export default FooterMainMenuContainer
