import { React } from '../dependencies'

// import { Page__Settings } from '../config/'
import ABmodalcontainer from './ABmodalcontainer'
import ABblockcontainer from './ABblockcontainer'

const ABcontainer = ({
	type,
	// querySelector,
	// blockOptions,
	contents,
	children,
}) => {
	let configs = {
		settings: {
			// implementation configs
			wrapperRef: null,
			handleRefState: null,
			refState: null,
			isCarousel: false,
			isModal: false,
			// application configs
			scroll: false,
			resize: false,
			outsideClick: false,
			hasOverlay: false,
			mouseDown: {
				on: false,
				clickElement: '.close-button',
			},
			sliderClass: contents.sliderClass,
			bgColor: '#ffffff',
			// isCarousel: false,
			columnWidth: 'full-width-row',
			order: {
				heading: 2,
				paragraph: 1,
				form: 3,
			},
		},
		data: {
			heading: 'dataObj.node.heading' || null,
			paragraph: 'dataObj.node.heading' || null,
			form: 'dataObj.node.heading' || null,
			fontSize: 10 || null,
			backgroundColor: '#000' || null,
			fontColor: '#fff' || null,
		},
		contents: contents,
	}

	const { settings } = configs
	const { data } = configs
	// console.log(configs)
	const newParams = {
		numColumns: contents ? contents.numColumns : 1,
		alignTo: contents ? contents.alignTo : 'left',
		type: type,
	}

	const params = Object.assign(newParams, settings)

	switch (type) {
		case 'MODAL':
			return (
				<ABmodalcontainer
					// querySelector={querySelector}
					data={data}
					children={children}
					contents={contents}
				/>
			)
		case 'BLOCK':
			return (
				<ABblockcontainer
					// data={data}
					children={children}
					params={params}
					// querySelector={querySelector}
					contents={contents}
					configs={configs}
				/>
			)
		default:
			return null
	}
}

export default ABcontainer
