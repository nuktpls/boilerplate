import { React, useState, useRef } from '../dependencies'

// import { Page__Settings } from '../config/'

import slugify from '@tools/slugify'
import ABmodal from '../components/ABmodal'
import useListenOutsideEvents from '@tools/useListenOutsideEvents'

const ABmodalcontainer = ({ children, data, contents }) => {
	const [refState, setRefState] = useState(false)

	const handleRefState = () => {
		setRefState(!refState)
	}
	const wrapperRef = useRef(null)

	const theData = []
	theData.push(data)

	let configs = [
		{
			settings: {
				// implementation configs
				wrapperRef: wrapperRef,
				handleRefState: handleRefState,
				refState: refState,
				isCarousel: false,
				isModal: true,
				// application configs
				scroll: false,
				resize: false,
				outsideClick: true,
				hasOverlay: false,
				mouseDown: {
					on: false,
					clickElement: '.close-button',
				},
				sliderClass: 'quote',
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
				// heading: true || null,
				// paragraph: true || null,
				type: 'QUOTE',
				// form: 'theData.heading' || null,
				fontSize: 10 || null,
				backgroundColor: '#000' || null,
				fontColor: '#fff' || null,
				location: 'home-quote' || null,
				form: theData.form ? theData.form.childMarkdownRemark.html : null,
				formID: theData.formID || null,
				heading: theData.heading || null,
				modalText: theData.modalText
					? theData.modalText.childMarkdownRemark.html
					: null,
				textButton: theData.textButton || null,
				buttonColor: theData.buttonColor || null,
				textButtonColor: theData.textButtonColor || null,
				tksMsg: theData.tksMsg || null,
				modalBackgroundColor: theData.modalBackgroundColor || null,
			},
		},
	]

	// const modalSettings = Page__Settings(pageParams).settings
	useListenOutsideEvents(configs[0].settings)

	return (
		<>
			{theData.map((e, i) => {
				const { form } = contents
				const { formID } = contents
				const { textButton } = contents
				const { heading } = contents
				const { buttonColor } = contents
				const { modalText } = contents
				const { textButtonColor } = contents
				const { modalBackgroundColor } = contents
				// const { tksMsg } = e
				const formIdSlug = slugify(formID)
				const visibleClassState = refState ? 'visible' : 'not-visible'

				return (
					<ABmodal
						key={i}
						handleRefState={handleRefState}
						wrapperRef={wrapperRef}
						visibleClassState={visibleClassState}
						modalBackgroundColor={modalBackgroundColor}
						heading={heading}
						modalText={modalText}
						formID={formID}
						formIdSlug={formIdSlug}
						form={form}
						buttonColor={buttonColor}
						textButtonColor={textButtonColor}
						textButton={textButton}
						children={children}
					/>
				)
			})}
		</>
	)
}

export default ABmodalcontainer
