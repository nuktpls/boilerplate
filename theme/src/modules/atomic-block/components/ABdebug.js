import { React } from '../dependencies'

const ABdebug = ({ blockInfo }) => {
	// 	alignTo,
	// alt,
	// backgroundColor,
	// blockTitle,
	// debug,
	// form,
	// formID,
	// gridType,
	// heading,
	// isCarousel,
	// link,
	// linkText,
	// numColumns,
	// paragraph,
	// sizes,
	// sliderClass,
	// src,
	// srcSet,
	if (!blockInfo) {
		return null
	}
	// const heading =
	// 	blockInfo && blockInfo.heading ? (
	// 		<p dangerouslySetInnerHTML={{ __html: blockInfo.heading }}></p>
	// 	) : null
	return (
		<>
			<div className="tooltip">
				AQUI
				<p className="some">blockHeight: {blockInfo.blockHeight}</p>
				{/* {heading} */}
				{/* <p dangerouslySetInnerHTML={{ __html: blockInfo.paragraph }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.alignTo }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.alt }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.backgroundColor }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.blockTitle }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.debug }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.form }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.formID }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.gridType }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.isCarousel }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.link }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.linkText }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.numColumns }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.sizes }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.sliderClass }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.src }}></p>
				<p dangerouslySetInnerHTML={{ __html: blockInfo.srcSet }}></p> */}
			</div>
		</>
	)
}

export default ABdebug
