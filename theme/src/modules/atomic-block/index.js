import { React } from './dependencies'
import ABcontainer from './containers/'

const AtomicBlock = ({
	type,
	blockOptions,
	// querySelector,
	children,
	link,
	linkText,
	heading,
	paragraph,
	srcSet,
	sizes,
	src,
	alt,
	formID,
	form,
	backgroundColor,
	isCarousel,
	sliderClass,
	// gridType,
	numColumns,
	alignTo,
	blockTitle,
	debug,
	fontColor,
	fontSize,
	// debugInfos,
}) => {
	const content = {
		heading: heading,
		paragraph: paragraph,
		link: link,
		linkText: linkText,
		srcSet: srcSet,
		sizes: sizes,
		src: src,
		alt: alt,
		formID: formID,
		form: form,
		backgroundColor: backgroundColor,
		isCarousel: isCarousel,
		sliderClass: sliderClass,
		gridType: isCarousel ? 'carousel' : 'columns',
		numColumns: numColumns,
		alignTo: alignTo,
		blockTitle: blockTitle,
		debug: debug,
		fontSize: fontSize,
		fontColor: fontColor,
		// debugInfos: debugInfos,
	}
	return (
		<ABcontainer
			type={type}
			blockOptions={blockOptions} // Remover e colocar no context
			// querySelector={querySelector}
			children={children}
			contents={content}
		/>
	)
}

export default AtomicBlock
