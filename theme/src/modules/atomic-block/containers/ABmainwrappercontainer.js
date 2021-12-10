import React, { useEffect } from 'react'
import grabHorizontalScroll from '@tools/grabHorizontalScroll'
import ABwrapprecarousel from '../components/ABwrappercarousel'
import ABwrappercolumns from '../components/ABwrappercolumns'
import AtomicBlock from '../../atomic-block/'
const ABmainwrappercontainer = ({
	children,
	theRef,
	classWrapper,
	secondClass,
	gridClass,
	contents,
}) => {
	const {
		heading,
		paragraph,
		form,
		formID,
		link,
		linkText,
		src,
		alt,
		srcSet,
		sizes,
		alignTo,
		backgroundColor,
		blockTitle,
		gridType,
		sliderClass,
		numColumns,
		debug,
		fontSize,
		fontColor,
	} = contents
	const basis = 100 / numColumns

	function GridContentSlider(ref) {
		const value = ref.current ? ref.current.className : null
		useEffect(() => {
			grabHorizontalScroll(value || ref)
		})
	}
	{
		/* <AtomicBlock></AtomicBlock> */
	}
	if (gridType === 'carousel') {
		GridContentSlider(theRef)
		return (
			<ABwrapprecarousel
				classWrapper={classWrapper}
				secondClass={secondClass}
				gridClass={gridClass}
				basis={basis}
			>
				{children}
			</ABwrapprecarousel>
		)
	}

	if (gridType === 'columns') {
		if (!children) {
			return null
		} else {
			let childArr = []
			for (let index = 0; index < children.length; index++) {
				childArr.push(children[index])
			}
			return (
				<div
					className={classWrapper + ' column-flex-wrap'}
					style={{
						justifyContent: alignTo,
					}}
				>
					{childArr.map((elemento, chave) => {
						return (
							<ABwrappercolumns
								key={chave}
								classWrapper={classWrapper}
								alignTo={alignTo}
								gridClass={gridClass}
								basis={basis}
							>
								{elemento}
							</ABwrappercolumns>
						)
					})}
				</div>
			)
		}

		// return (

		// <>
		// 	{children.map((el, key) => {
		// 		if (!el) {
		// 			return null
		// 		}
		// 		if (!el.type && !el.props.children) {
		// 			return null
		// 		}
		// 		return (
		// 			<ABwrappercolumns
		// 				classWrapper={classWrapper}
		// 				alignTo={alignTo}
		// 				gridClass={gridClass}
		// 				basis={basis}
		// 				key={key}
		// 			>
		// 				<h2>zubga</h2>
		// 			</ABwrappercolumns>
		// 		)
		// 	})}
		// </>

		// )
		// if (children) {
		// 	return (
		// 		<ABwrappercolumns
		// 			classWrapper={classWrapper}
		// 			alignTo={alignTo}
		// 			gridClass={gridClass}
		// 			basis={basis}
		// 		>
		// 			{children.map((e, i) => {
		// 				{
		// 					return <>{e}</>
		// 				}
		// 			})}
		// 		</ABwrappercolumns>
		// 	)
		// }
		return <>here</>
	}
}

export default ABmainwrappercontainer
