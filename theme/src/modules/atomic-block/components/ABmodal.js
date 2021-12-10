import { React } from '../dependencies'

const ABmodal = ({
	wrapperRef,
	visibleClassState,
	modalBackgroundColor,
	handleRefState,
	heading,
	modalText,
	formID,
	formIdSlug,
	form,
	buttonColor,
	textButtonColor,
	textButton,
	children,
}) => {
	return (
		<>
			<div className="modal-button-wrapper">
				<button
					onClick={handleRefState}
					className="modal-button button-black-gray"
				>
					Abrir MODAL
				</button>
			</div>
			<div
				id="ref-overlay"
				ref={wrapperRef}
				className={'modal-wrapper modal-state-' + visibleClassState}
			>
				<div
					id="ref-inner"
					className="modal-inner black-row"
					style={{
						backgroundColor: modalBackgroundColor,
					}}
				>
					<button className="close-button" onClick={handleRefState}>
						X
					</button>
					<div className="modal-content">
						<h2 className="modal-heading">{heading}</h2>
						<div
							className="modal-text"
							dangerouslySetInnerHTML={{ __html: modalText }}
						></div>
						<div id="modal-code">
							{children}
							<form
								action="thank-you"
								name={formID}
								method="POST"
								data-netlify="true"
								netlify-honeypot="bot-field"
								className="modal-form align-center"
								id={formIdSlug}
								encType="application/x-www-form-urlencoded"
							>
								<p className="bot-field-hide">
									<label>
										Don’t fill this out if you're human:
										<input name="bot-field" />
										<input type="hidden" name="form-name" value={formID} />
									</label>
								</p>
								<div
									className="modal-code-div"
									dangerouslySetInnerHTML={{ __html: form }}
								></div>
								<button
									type="submit"
									className="modal-submit button-black-gray"
									style={{
										backgroundColor: buttonColor,
										color: textButtonColor,
										borderColor: textButtonColor,
									}}
								>
									{textButton}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ABmodal
