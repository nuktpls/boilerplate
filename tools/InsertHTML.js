import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import slugify from './slugify'

const InsertHTML = ({ type, params, opt, subAgent, bgOpt, bgImg }) => {
	let elementClass = opt ? opt.elementClass : type

	switch (type) {
		case 'img':
			if (params.srcSet && params.sizes && params.src) {
				const alt = params.alt ? params.alt : 'image desciption'
				return (
					<img
						className={elementClass}
						srcSet={params.srcSet}
						sizes={params.sizes}
						src={params.src}
						alt={alt}
					/>
				)
			} else {
				return null
			}
		case 'heading':
			if (params.heading) {
				return <h2 className={elementClass}>{params.heading}</h2>
			} else {
				return null
			}
		case 'paragraph':
			if (params.paragraph) {
				return (
					<div
						className={elementClass}
						dangerouslySetInnerHTML={{ __html: params.paragraph }}
					></div>
				)
			} else {
				return null
			}
		case 'link':
			if (params.link && params.linkText) {
				return (
					<a className={elementClass} href={params.link}>
						{params.linkText}
					</a>
				)
			} else {
				return null
			}
		case 'row':
			const SubRow = ({
				subAgent,
				element,
				numColumns,
				rowWidth,
				boxed,
				themeColor,
				bgImg,
			}) => {
				switch (element) {
					case 'list':
						return <li className={rowWidth + '-child'}>{subAgent}</li>
					default:
						return (
							<div
								className={rowWidth + '-child ' + opt.title}
								style={{
									backgroundColor:
										bgOpt.theme_color && opt.boxed === true
											? bgOpt.value_bgColor
											: null,
									backgroundImage: bgImg,
								}}
							>
								{subAgent}
							</div>
						)
				}
			}
			if (params.element && subAgent) {
				const rowWidth = opt.boxed ? 'boxed-column' : 'full-width-row'

				const heading = params.rowHeading ? (
					<h2 className="row-heading">{params.rowHeading} </h2>
				) : null
				elementClass = elementClass ? elementClass : ''
				switch (params.element) {
					case 'list':
						return (
							<ul
								className={
									rowWidth +
									' ' +
									elementClass +
									' align-to-' +
									opt.alignTo +
									' responsive-padding' +
									' ' +
									bgOpt.value_bgColor
										? bgOpt.theme_color
										: ''
								}
								style={{
									backgroundColor:
										bgOpt.theme_color && opt.boxed !== false
											? bgOpt.value_bgColor
											: 'transparent',
								}}
							>
								{heading}
								<SubRow
									subAgent={subAgent}
									element={params.element}
									numColumns={opt.numColumns}
									rowWidth={rowWidth}
								/>
							</ul>
						)
					case 'divisor':
						let refImage = null
						if (bgOpt.background) {
							refImage = getImage(bgOpt.background.datas)
						}
						elementClass = elementClass ? elementClass : ''
						return (
							<div
								className={`${rowWidth} ${elementClass} align-to-${
									opt.alignTo
								} responsive-padding ${
									bgOpt.value_bgColor ? bgOpt.theme_color : ''
								}`}
								style={{
									backgroundColor:
										bgOpt.theme_color && opt.boxed === false
											? bgOpt.value_bgColor
											: null,
									backgroundImage: bgImg,
								}}
							>
								{bgImg ? (
									<GatsbyImage
										image={refImage}
										src={refImage}
										srcSet={refImage}
										layout={'fullWidth'}
										formats={['auto']}
										alt="asd"
										// style={
										// 	!bgImg.alignTo
										// 		? { objectPosition: 'top' }
										// 		: { objectPosition: bgImg.alignTo }
										// }
										className="gatsbyImgHero"
										imgClassName="imgHero"
										objectPosition={!bgImg.alignTo ? 'top' : bgImg.alignTo}
									/>
								) : null}

								{heading}
								<SubRow
									subAgent={subAgent}
									element={params.element}
									numColumns={opt.numColumns}
									rowWidth={rowWidth}
									themeColor={bgOpt.theme_color}
									boxed={opt.boxed}
									bgImg={bgImg}
								/>
							</div>
						)
					default:
						return (
							<div
								className={
									elementClass +
										' responsive-padding' +
										' ' +
										bgOpt.theme_color || bgOpt.value_bgColor
								}
								style={{
									backgroundColor: bgOpt.theme_color
										? null
										: bgOpt.value_bgColor,
								}}
							>
								{subAgent}
							</div>
						)
				}
			} else {
				return null
			}
		case 'carousel':
			if (subAgent && params.wrapperRef) {
				return (
					<div className={'grid-' + params.gridType + ' ' + elementClass}>
						<ul
							ref={params.wrapperRef}
							className={
								'grid-' +
								params.gridType +
								'-list ' +
								elementClass +
								'-list no-pdd-mrg-first-last-child'
							}
						>
							{subAgent}
						</ul>
					</div>
				)
			} else {
				return null
			}
		case 'content-item':
			if (params.gridType && params.gridClass) {
				const basis = 100 / params.numColumns
				const elementTag =
					params.gridType === 'carousel' ? (
						<li
							className={params.gridClass}
							style={{ flexBasis: basis + '%', minWidth: basis + '%' }}
						>
							{subAgent}
						</li>
					) : (
						<div
							className={params.gridClass}
							// style={{ flexBasis: basis + '%' }}
						>
							{subAgent}
						</div>
					)
				return <>{elementTag}</>
			} else {
				return null
			}
		case 'columns':
			if (subAgent) {
				return (
					<div
						className={'grid-' + params.gridType + '-list'}
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: params.alignTo,
						}}
					>
						{subAgent}
					</div>
				)
			} else {
				return null
			}
		case 'form':
			if (
				params.form &&
				params.formID &&
				params.textButton &&
				params.heading &&
				params.buttonColor &&
				params.textButtonColor &&
				params.tksMsg
			) {
				const formId = slugify(params.formID)
				const visibleClassState = params.refState ? 'visible' : 'not-visible'

				return (
					<>
						<div className="modal-button-wrapper">
							<button
								onClick={params.handleRefState}
								className="modal-button button-black-gray"
							>
								Nué
							</button>
						</div>
						<div
							id="ref-overlay"
							ref={params.wrapperRef}
							className={'modal-wrapper modal-state-' + visibleClassState}
						>
							<div
								id="ref-inner"
								className="modal-inner black-row"
								style={{
									backgroundColor: params.modalBackgroundColor,
								}}
							>
								<button
									className="close-button"
									onClick={params.handleRefState}
								>
									X
								</button>
								<div className="modal-content">
									<h2 className="modal-heading">{params.heading}</h2>
									<div
										className="modal-text"
										dangerouslySetInnerHTML={{ __html: params.modalText }}
									></div>
									<div id="modal-code">
										<form
											name={params.formID}
											method="POST"
											data-netlify="true"
											netlify-honeypot="bot-field"
											className="modal-form align-center"
											id={formId}
										>
											<p className="bot-field-hide">
												<label>
													Don’t fill this out if you're human:
													<input name="bot-field" />
												</label>
											</p>
											<div
												className="modal-code-div"
												dangerouslySetInnerHTML={{ __html: params.form }}
											></div>
											<button
												type="submit"
												className="modal-submit button-black-gray"
												style={{
													backgroundColor: params.buttonColor,
													color: params.textButtonColor,
													borderColor: params.textButtonColor,
												}}
											>
												{params.textButton}
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</>
				)
			} else {
				return null
			}
		default:
			return null
	}
}

export default InsertHTML
