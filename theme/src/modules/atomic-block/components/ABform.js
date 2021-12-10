import { React } from '../dependencies'

const ABform = (props) => (
	<form
		name={props.name}
		method="POST"
		data-netlify="true"
		netlify-honeypot="bot-field"
		className="modal-form align-center"
		id={props.formId}
	>
		<p className="bot-field-hide">
			<label>
				Don’t fill this out if you're human:
				<input name="bot-field" />
				<input type="hidden" name="form-name" value={props.name} />
			</label>
		</p>
		<div
			className="modal-code-div"
			dangerouslySetInnerHTML={{ __html: props.form }}
		></div>
		<button type="submit" className="modal-submit button-black-gray">
			Submit
		</button>
	</form>
)
export default ABform
