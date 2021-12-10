import React from 'react'

import slugify from '@tools/slugify'

import ABimg from '../components/ABimg'
import ABheading from '../components/ABheading'
import ABparagraph from '../components/ABparagraph'
import ABlink from '../components/ABlink'
import ABform from '../components/ABform'

const ABconstructor = ({ contents, params }) => {
	if (contents.srcSet && contents.sizes && contents.src) {
		const alt = contents.alt ? contents.alt : 'image desciption'
		img = {
			order: params.order.img || 1,
			element: (
				<ABimg
					elementClass={elementClass}
					srcSet={contents.srcSet}
					sizes={contents.sizes}
					src={contents.src}
					alt={alt}
				/>
			),
		}
	}

	if (contents.heading) {
		heading = {
			order: params.order.heading || 2,
			element: (
				<ABheading
					elementClass={elementClass}
					heading={contents.heading}
					fontSize={contents.fontSize}
					fontColor={contents.fontColor}
				/>
			),
		}
	}

	if (contents.paragraph) {
		paragraph = {
			order: params.order.paragraph || 3,
			element: (
				<ABparagraph
					elementClass={elementClass}
					paragraph={contents.paragraph}
				/>
			),
		}
	}

	if (contents.link && contents.linkText) {
		link = {
			order: params.order.link || 4,
			element: (
				<ABlink
					elementClass={elementClass}
					link={contents.link}
					linkText={contents.linkText}
				/>
			),
		}
	}

	const formName = contents.formID ? slugify(contents.formID) : null

	if (formName && contents.formID && contents.form) {
		form = {
			order: params.order.form || 5,
			element: (
				<ABform name={formName} formId={contents.formID} form={contents.form} />
			),
		}
	}

	function compare(a, b) {
		let comparison = 0

		if (a && b) {
			const elementA = a.order
			const elementB = b.order
			if (elementA > elementB) {
				comparison = -1
			} else if (elementA < elementB) {
				comparison = 1
			}
		} else if (a && !b) {
			comparison = -1
		} else if (b && !a) {
			comparison = 1
		}

		return comparison
	}

	const blockElements = [img, heading, paragraph, link, form]

	blockElements.sort(compare)
}

export default ABconstructor
