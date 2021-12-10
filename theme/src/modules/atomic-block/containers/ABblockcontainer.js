import { React, useEffect, useRef, useState } from '../dependencies'

// import LayoutContext from '@Layout/services/LayoutContext'
import ABmainwrappercontainer from './ABmainwrappercontainer'
// import slugify from '@tools/slugify'
import abinfo from '@tools/abinfo'
import grabHorizontalScroll from '@tools/grabHorizontalScroll'
// import useAbinfo from '@tools/useAbinfo'
// import abinfo from '@tools/abinfo'
// import ABimg from '../components/ABimg'
// import ABheading from '../components/ABheading'
// import ABparagraph from '../components/ABparagraph'
// import ABlink from '../components/ABlink'
// import ABform from '../components/ABform'

const ABblockContainer = ({ configs, params, children, contents }) => {
	let wrapperRef = useRef(null)
	const [theWrapper, setWrapper] = useState(wrapperRef.current)
	function updateWrapper(wrapper) {
		setWrapper(wrapper)
	}
	console.log(configs)
	// grabHorizontalScroll(wrapperRef)
	useEffect(() => {
		document.addEventListener('onReady', (e) => {
			updateWrapper(abinfo(wrapperClass.split(' ')))
		})
	})

	const gridType = contents.isCarousel ? 'carousel' : 'columns'
	const elementClass = contents.sliderClass || null
	// const formName = contents.formID ? slugify(contents.formID) : null
	const gridClass = 'grid-' + gridType + '-item'
	const wrapperClass = 'grid-' + gridType + ' ' + elementClass
	const listClass =
		'grid-' +
		gridType +
		'-list ' +
		elementClass +
		'-list no-pdd-mrg-first-last-child'

	let MainWrapper = null
	let ItemWrapper = null
	let Column = null
	let Carousel = null

	// let img = null
	// let heading = null
	// let paragraph = null
	// let link = null
	// let form = null
	// console.log('params HERE: >>')
	// console.log(params)

	if (children) {
		return (
			<ABmainwrappercontainer
				classWrapper={wrapperClass}
				theRef={wrapperRef}
				secondClass={listClass}
				gridClass={gridClass}
				contents={contents}
				params={params}
			>
				{children}
			</ABmainwrappercontainer>
		)
	} else {
		return (
			<ABmainwrappercontainer
				classWrapper={wrapperClass}
				theRef={wrapperRef}
				secondClass={listClass}
				gridClass={gridClass}
				contents={contents}
				params={params}
			>
				<h2>zumba</h2>
			</ABmainwrappercontainer>
		)
	}

	// 				elementClass={elementClass}
	// 				srcSet={contents.srcSet}
	// 				sizes={contents.sizes}
	// 				src={contents.src}
	// 				alt={alt}
	// 				heading={contents.heading}
	// 				fontSize={e.fontSize}
	// 				fontColor={e.fontColor}
	// 				paragraph={contents.paragraph}
	// 				link={contents.link}
	// 				linkText={contents.linkText}
	// 				name={formName}
	// 				formId={contents.formID}
	// 				form={contents.form}

	// return (
	// 	<ABmainwrappercontainer
	// 		gridType={gridType}
	// 		classWrapper={wrapperClass}
	// 		theRef={wrapperRef}
	// 		secondClass={listClass}
	// 		gridClass={gridClass}
	// 		numColumns={contents.numColumns}
	// 		alignTo={contents.alignTo}

	// 	>
	// 		{children}

	// 	</ABmainwrappercontainer>
	// )
}

export default ABblockContainer

// if (contents.srcSet && contents.sizes && contents.src) {
// 	const alt = contents.alt ? contents.alt : 'image desciption'
// 	img = {
// 		order: params.order.img || 1,
// 		element: (
// 			<ABimg
// 				elementClass={elementClass}
// 				srcSet={contents.srcSet}
// 				sizes={contents.sizes}
// 				src={contents.src}
// 				alt={alt}
// 				// key={i}
// 			/>
// 		),
// 	}
// }

// if (contents.heading) {
// 	heading = {
// 		order: params.order.heading || 2,
// 		element: (
// 			<ABheading
// 				elementClass={elementClass}
// 				heading={contents.heading}
// 				fontSize={e.fontSize}
// 				fontColor={e.fontColor}
// 			/>
// 		),
// 	}
// }

// if (contents.paragraph) {
// 	paragraph = {
// 		order: params.order.paragraph || 3,
// 		element: (
// 			<ABparagraph
// 				elementClass={elementClass}
// 				paragraph={contents.paragraph}
// 			/>
// 		),
// 	}
// }

// if (contents.link && contents.linkText) {
// 	link = {
// 		order: params.order.link || 4,
// 		element: (
// 			<ABlink
// 				elementClass={elementClass}
// 				link={contents.link}
// 				linkText={contents.linkText}
// 			/>
// 		),
// 	}
// }

// if (formName && contents.formID && contents.form) {
// 	form = {
// 		order: params.order.form || 5,
// 		element: (
// 			<ABform
// 				name={formName}
// 				formId={contents.formID}
// 				form={contents.form}
// 			/>
// 		),
// 	}
// }

// function compare(a, b) {
// 	let comparison = 0

// 	if (a && b) {
// 		const elementA = a.order
// 		const elementB = b.order
// 		if (elementA > elementB) {
// 			comparison = -1
// 		} else if (elementA < elementB) {
// 			comparison = 1
// 		}
// 	} else if (a && !b) {
// 		comparison = -1
// 	} else if (b && !a) {
// 		comparison = 1
// 	}

// 	return comparison
// }

// const blockElements = [img, heading, paragraph, link, form]

// blockElements.sort(compare)

// // if (contents.backgroundColor) {
// // 	value.handleBgColor(contents.backgroundColor)
// // }
// // if (contents.debug) {
// // 	value.handleDebugInfo({
// // 		heading: contents.heading,
// // 	})
// // }
// const BlockElementsRender = () => {
// 	return (
// 		<>
// 			{blockElements.map((el, key) => {
// 				if (!el) {
// 					return null
// 				}
// 				if (!el.element) {
// 					return null
// 				}
// 				return (
// 					<ItemWrapper
// 						key={key}
// 						// key={}
// 						// ItemWrapper={ItemWrapper}
// 					>
// 						{el.element}
// 						{/* {children} */}
// 					</ItemWrapper>
// 				)
// 			})}
// 		</>
// 	)
// }

// if (children) {
// 	let childArr = []
// 	for (let index = 0; index < children.length; index++) {
// 		childArr.push(children[index])
// 	}
// 	const Tag = ({ children }) => {
// 		return <>{children}</>
// 	}
// 	return (
// 		<Tag key={i}>
// 			{childArr.map((elemento, chave) => {
// 				return (
// 					<ItemWrapper
// 						key={chave}
// 						// ItemWrapper={ItemWrapper}
// 					>
// 						{elemento}
// 					</ItemWrapper>
// 				)
// 			})}
// 			<BlockElementsRender />
// 		</Tag>
// 	)
// } else {
// 	return null
// }

// 				elementClass={elementClass}
// 				srcSet={contents.srcSet}
// 				sizes={contents.sizes}
// 				src={contents.src}
// 				alt={alt}
// 				elementClass={elementClass}
// 				heading={contents.heading}
// 				fontSize={e.fontSize}
// 				fontColor={e.fontColor}
// 				elementClass={elementClass}
// 				paragraph={contents.paragraph}
// 				elementClass={elementClass}
// 				link={contents.link}
// 				linkText={contents.linkText}
// 				name={formName}
// 				formId={contents.formID}
// 				form={contents.form}
